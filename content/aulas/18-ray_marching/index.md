# Ray Marching

Nesta aula exploraremos uma técnica de renderização baseada em SDFs chamada Ray Marching, que permite criar estruturas 3D complexas a partir de fórmulas matemáticas. Assim como o Ray Tracing, ela lança raios de uma câmera virtual em direção à cena, mas difere por não calcular interseções diretas: o Ray Marching aproxima-se das superfícies passo a passo ao longo do raio. Essa característica o torna ideal para representar formas suaves, fractais e volumes (como nuvens), difíceis de modelar com malhas poligonais.

O método depende da Signed Distance Function (SDF), que fornece a menor distância entre um ponto e a superfície do objeto. Os raios partem da câmera (origem) com direção normalizada e “marcham” até se aproximarem da geometria. Por ser uma aproximação, o Ray Marching não atinge a precisão do Ray Tracing, mas permite criar efeitos visuais únicos.

A iluminação é obtida a partir das normais da superfície, calculadas pelo gradiente da SDF, avaliando pequenas variações (ϵ) em x, y e z. A normal é o gradiente normalizado. A cor final resulta do produto escalar entre a normal e a direção da luz, geralmente com controle de saturação para limitar os valores entre 0 e 1.

Por fim, a aula também aborda como aplicar transformações em objetos definidos por SDFs.

<embed height="600" src="ray_marching_1.pdf" type="application/pdf" width="100%">
[PDF](ray_marching_1.pdf)
[PPT](ray_marching_1.pptx)
