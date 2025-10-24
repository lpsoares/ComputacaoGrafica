# Ray Marching 2

Nesta aula, daremos continuidade ao estudo de Ray Marching com SDFs (Signed Distance Functions), explorando a criação de estruturas 3D complexas a partir de fórmulas matemáticas. Iniciaremos abordando o uso de cores em SDFs, utilizando uma estrutura vec4 para armazenar simultaneamente as componentes de cor (RGB) e a distância (alpha/w). Em seguida, estudaremos as operações booleanas: União, Interseção e Diferença, fundamentais para a composição de formas. Também introduziremos o conceito de Smooth Minimum (ou Smooth Union): uma versão suavizada da função min(), que permite combinar e fundir formas de maneira gradual, criando transições mais naturais entre superfícies próximas. Na sequência, discutiremos sombras e visibilidade, cobrindo desde técnicas de Shadow Mapping até recursos baseados em lançamento de raios (ray tracing). Por fim, apresentaremos a técnica de Ambient Occlusion (AO), detalhando seu papel na simulação realista de iluminação indireta e profundidade visual.

<embed height="600" src="ray_marching_2.pdf" type="application/pdf" width="100%">
[PDF](ray_marching_2.pdf)
[PPT](ray_marching_2.pptx)
