
// Tipos de Materias implementados
#define lambertian 0
#define metal 1

// Definições de material dos objetos
struct Material {
  vec3 albedo; // na prática a cor do objeto
  int type; // tipo (lambertiam ou metal)
};

// Raio lançado diretamente ou refletido
struct Ray {
  vec3 origin, direction;
};

// Estrutura para controle de colisões de raios
struct hit_record {
  float t;
  vec3 p, normal;
  Material mat;
};

// Definições para esferas
struct Sphere {
  vec3 center;
  float radius;
  Material mat;
};


// Rotinas para números aleatórios
vec3 frand;
vec3 rand = vec3(0.5, 0.5, 0.5);
vec2 rand2(){ 
  vec3 rand = vec3(
    mod(rand.y*(195.1*frand.z+371.2*frand.x+508.3*frand.y), 1.0),
    mod(rand.x*(573.9*frand.z+736.4*frand.y+914.5*frand.x), 1.0),
    rand.z
  );
  return fract(rand).xy-0.5;
}

vec3 random_in_unit_sphere(){ 
  rand = vec3(
    mod(rand.z*((57.1*frand.z)+(57.1*frand.x)+(759.7*frand.y))*3.83,2.0),
    mod(rand.x*((41.1*frand.z)+(65.7*frand.x)+(621.9*frand.y))*1.57,2.0),
    mod(rand.y*((33.1*frand.z)+(45.3*frand.x)+(557.2*frand.y))*2.34,2.0)
  );
  return (rand-vec3(1.0));
}

vec3 random_unit_vector() {
    return (normalize(random_in_unit_sphere()));
}

vec3 random_in_hemisphere(vec3 normal) {
    vec3 in_unit_sphere = random_in_unit_sphere();
    if (dot(in_unit_sphere, normal) > 0.0) // In the same hemisphere as the normal
        return in_unit_sphere;
    else
        return -in_unit_sphere;
}


// Verifica se um vetor ter todas suas coordenadas muito pequenas
bool near_zero(vec3 e) {
  float s = 1e-8;
  return (abs(e[0]) < s) && (abs(e[1]) < s) && (abs(e[2]) < s);
}


// Retornando o ponto em um t de raio
vec3 point_at_parameter(Ray r, float t) {
  return(r.origin + t*r.direction);
}

// Verificando o lado da face correto
vec3 set_face_normal(Ray r, vec3 outward_normal) {
    bool front_face = dot(r.direction, outward_normal) < 0.0;
    return front_face ? outward_normal :-outward_normal;
}


// Cria o raio para o pixel da tela
Ray get_ray(vec2 uv) {
  float aspect = iResolution.x/iResolution.y;
  vec3 lower_left_corner = vec3(-1.0*aspect,-1.0, -1.0);
  vec3 horizontal = vec3(2.0*aspect, 0.0, 0.0);
  vec3 vertical = vec3(0.0,2.0, 0.0);
  
  Ray r = Ray(vec3(0,0,0), lower_left_corner+uv.x*horizontal+uv.y*vertical); 
  return r;
}

// Verifica e atualiza dados no caso da intersecção de um raio
bool hit_sphere(Sphere s, Ray r, float t_min, float t_max, out hit_record rec){
  vec3 oc = r.origin - s.center;
  float a = dot(r.direction,r.direction);
  float half_b = dot(oc, r.direction);
  float c = dot(oc,oc) - s.radius*s.radius;
  float discriminat = half_b*half_b - a*c;
  if (discriminat < 0.0) return(false);
  float sqrtd = sqrt(discriminat);
  
  float root = (-half_b - sqrtd) / a;
  if (root < t_min || t_max < root) {
    root = (-half_b + sqrtd) / a;
    if (root < t_min || t_max < root)
      return false;
  }
      
  rec.t = root;
  rec.p = point_at_parameter(r,rec.t);
  
  vec3 outward_normal = (rec.p - s.center) / s.radius;
  rec.normal = normalize(set_face_normal(r, outward_normal));
  rec.mat = s.mat;
    
  return(true);
}

// Cálculo para os raios refletidos de alguma forma
bool scatter(Material mat, Ray r_in, hit_record rec, out vec3 attenuation, out Ray scattered) {
  
  vec3 scatter_direction = rec.normal + random_unit_vector();
  
  if (near_zero(scatter_direction))
    scatter_direction = rec.normal;

  if(mat.type == 0) {
    scattered = Ray(rec.p, scatter_direction);
    attenuation = mat.albedo;
    return true;
  }

  if(mat.type == 1) {
    vec3 reflected = reflect(normalize(r_in.direction), rec.normal);
    scattered = Ray(rec.p, reflected);
    attenuation = mat.albedo;
    return(dot(scattered.direction, rec.normal) > 0.0);
  }
  
  return false;
  
}



// ---------------------------------------------------------------------- //
// Definição da cena
Sphere world[] = Sphere[4](
  Sphere(vec3( 0.0, -100.5, -1.0), 100.0, Material(vec3(0.8, 0.8, 0.0),0)),
  Sphere(vec3( 0.0, 0.0, -1.0), 0.5, Material(vec3(0.7, 0.3, 0.3),0)),
  Sphere(vec3(-1.0, 0.0, -1.0), 0.5, Material(vec3(0.8, 0.8, 0.8),1)),
  Sphere(vec3( 1.0, 0.0, -1.0), 0.5, Material(vec3(0.8, 0.6, 0.2),1))
);
// ---------------------------------------------------------------------- //


// Trata lista de todos os objetos da cena
bool hitable_list(Ray r, float t_min, float t_max, inout hit_record rec) {
  hit_record temp_rec;
  bool hit_anything = false;
  float closest_so_far = t_max;
  for(int i=0; i<world.length(); i++) {
    if(hit_sphere(world[i], r, t_min, closest_so_far, temp_rec)) {
      hit_anything = true;
      closest_so_far = temp_rec.t;
      rec = temp_rec;
    }
  }
  return hit_anything;
}


// Rotina que calcula a cor final do pixel
const int max_depth = 10;
vec3 color(Ray r){
  hit_record rec;
  vec3 col = vec3(1.0);
  Ray raio = r;
  for(int i=0; i < max_depth; i++){
    if(hitable_list(raio, 0.0001, 100.0, rec)) {
    
      Ray scattered;
      vec3 attenuation = vec3(0.0);
      
      if (scatter(rec.mat, r, rec, attenuation, scattered))
        raio = scattered;
      else break;
      
      col *= attenuation;      

    } else {
      vec3 unit_direction = normalize(r.direction);
      float t = 0.5 * (unit_direction.y + 1.0);
      col *= mix(vec3(1.0), vec3(0.5,0.7,1.0), t);
      return col;
    }
  }
  return col;
}


const float samples_per_pixel = 100.0;
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
  vec2 uv = fragCoord/iResolution.xy;
  vec3 col = vec3(0.0);
  for(float s=0.0; s<samples_per_pixel; ++s) {
      frand = vec3(fragCoord.xy, s);
      vec2 delta;
      delta = rand2() / iResolution.xy;
      Ray r = get_ray(uv+delta);
      col += color(r);
  }
  col /= samples_per_pixel;
  float gamma = 2.0;
  col = pow(col, vec3(1.0/gamma));
  fragColor = vec4(col, 1.0);
}
