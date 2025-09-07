# Mapeamento de Texturas

O mapeamento de texturas consiste em aplicar imagens sobre superfícies geométricas, utilizando um sistema de coordenadas próprio para esse fim. A unidade básica da textura é o texel, que durante a renderização é associado aos pixels da tela. Os vértices da geometria armazenam coordenadas de textura (geralmente normalizadas no intervalo [0,1], chamadas $(u, v)$).

No processo de rasterização, as coordenadas $(u, v)$ são interpoladas para cada pixel, permitindo amostrar a cor correspondente na textura. Em X3D, os nós TextureCoordinate e ImageTexture são usados, respectivamente, para definir essas coordenadas e carregar a imagem da textura.

Para preservar a qualidade visual, é necessário considerar as não linearidades introduzidas pela projeção em perspectiva, que exigem uma interpolação diferenciada das coordenadas de textura. Um erro comum é assumir que o triângulo projetado na tela seja paralelo ao plano da imagem, o que levaria a distorções. Para uma interpolação correta, especialmente da profundidade $(Z)$, utiliza-se a interpolação perspectivamente correta, baseada em uma média harmônica ponderada que considera os valores de $Z$ dos vértices no espaço da câmera e as coordenadas baricêntricas. Assim, o parâmetro a ser interpolado deve ser primeiro dividido por $Z$, interpolado no espaço da tela, e em seguida multiplicado pelo valor de $Z$ do ponto amostrado.

<embed height="600" src="aula09_mapeamento_de_texturas.pdf" type="application/pdf" width="100%">
[PDF](aula09_mapeamento_de_texturas.pdf)
[PPT](aula09_mapeamento_de_texturas.pptx)
