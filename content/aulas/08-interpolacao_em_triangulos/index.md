# Interpolação em Triângulos

Nesta aula, o foco é a interpolação de interiores de triângulos. O objetivo é encontrar valores que variam suavemente dentro de um triângulo, a partir dos valores definidos em seus vértices. Podemos interpolar diversas grandezas, como cores, coordenadas de textura e vetores normais.

A principal técnica para isso são as Coordenadas Baricêntricas, um sistema de coordenadas para triângulos que permite interpolar dados ou atributos dos vértices para o interior do triângulo. Elas podem ser calculadas a partir de um ponto de vista geométrico, utilizando distâncias proporcionais ou áreas proporcionais.

No processo de rasterização, após a projeção do triângulo na tela, se um pixel está dentro dele, suas coordenadas baricêntricas são calculadas para interpolar os valores dos vértices e determinar o valor final do pixel. Isso é crucial para o mapeamento de texturas, onde coordenadas de textura (u,v) são definidas nos vértices e usadas para identificar a cor na imagem da textura.

Um desafio importante surge com as projeções perspectivas, que criam não linearidades. Uma interpolação linear no espaço 2D da tela não corresponde a uma interpolação linear no espaço 3D da câmera, podendo causar distorções. Para corrigir isso, é necessário usar uma Média Harmônica Ponderada, utilizando o valor Z dos vértices no espaço da câmera para calcular o Z projetado do ponto amostrado.

<embed height="600" src="aula08_interpolacao_em_triangulos.pdf" type="application/pdf" width="100%">
[PDF](aula08_interpolacao_em_triangulos.pdf)
[PPT](aula08_interpolacao_em_triangulos.pptx)

# Atividades

[Atividade](atividade.ipynb)