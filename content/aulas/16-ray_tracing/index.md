# Ray Tracing 1

Nesta aula, iniciaremos o desenvolvimento com Ray Tracing, uma técnica de renderização que permite criar imagens realistas ao simular diversos comportamentos da luz, como reflexão, refração e sombreamento.

Será apresentado o WGSL (WebGPU Shading Language), uma linguagem moderna de shaders projetada para a Web. O WGSL oferece acesso direto ao hardware gráfico e é fortemente tipado. Seu design, inspirado em Rust, busca segurança e estruturação, aproveitando as vantagens do WebGPU para melhor desempenho em computação paralela. O WGSL suporta Compute Shaders, usados em operações computacionais de propósito geral, como simulações físicas, inteligência artificial ou cálculos de iluminação, diretamente na GPU, de forma independente do pipeline gráfico tradicional. A carga de trabalho é distribuída eficientemente por meio de Grupos de Trabalho (Workgroups).

O Ray Tracing funciona simulando o trajeto inverso dos raios de luz, partindo da câmera e verificando suas interações com a cena. Apesar de computacionalmente custoso, tornou-se viável mesmo em aplicações em tempo real graças ao avanço das GPUs modernas. A técnica apresentada nesta aula é o Path Tracing, um método de renderização baseado em Monte Carlo. O algoritmo básico envolve:

1. Lançar múltiplos raios que partem da câmera virtual.
2. Verificar interseções dos raios com objetos da cena (frequentemente esferas, pela simplicidade matemática).
3. Calcular a cor e a nova direção do raio após cada reflexão, multiplicando a cor acumulada do pixel pela cor do material.
4. Acumular as cores obtidas por múltiplas amostras (raios por pixel), formando a imagem final.

Para reduzir artefatos (antialiasing), são lançadas várias amostras por pixel. Como o WGSL não possui geração de números aleatórios nativa, é necessário implementar uma rotina customizada. Em materiais difusos, a luz é dispersa de forma aleatória em torno da normal da superfície, aplicando o modelo de Reflexão Lambertiana, que distribui os raios preferencialmente em direções próximas à normal.

<embed height="600" src="ray_tracing1.pdf" type="application/pdf" width="100%">
[PDF](ray_tracing1.pdf)
[PPT](ray_tracing1.pptx)
