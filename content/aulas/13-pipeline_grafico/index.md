# Pipeline Gráfico

Nesta aula será abordado o Pipeline Gráfico padrão de Rasterização, elemento fundamental utilizado para renderizar cenas 3D complexas em tempo real. Esse processo envolve o processamento de milhões de triângulos em alta resolução, mantendo taxas de 60 quadros por segundo ou mais.

Para paralelizar as operações do pipeline, utilizam-se os recursos da GPU (Graphics Processing Unit), que possui um número de processadores lógicos muito superior ao da CPU. A CPU continua desempenhando funções essenciais, como o envio de dados, o gerenciamento do pipeline, da memória principal, o controle de movimentos de objetos e jogadores, a detecção de colisões e o gerenciamento de áudio, dentre outros. No entanto, o trabalho pesado de gerar as imagens em tempo real é realizado principalmente pela GPU.

O processamento gráfico moderno é conduzido por meio de Shaders, que são códigos executados em cada núcleo (core) da GPU. As linguagens mais utilizadas incluem GLSL, HLSL e WGSL. Há diferentes tipos de shaders, como o Vertex Shader (responsável pela manipulação dos vértices) e o Fragment/Pixel Shader (responsável por determinar a cor de cada pixel). Nesta aula, utilizaremos principalmente Fragment/Pixel Shaders. Esses programas são executados em núcleos da GPU otimizados para computação paralela de dados, explorando a arquitetura SIMD (Single Instruction, Multiple Data).

Para a parte prática, será utilizada a ferramenta Shadertoy, que permite escrever e executar Fragment Shaders diretamente no navegador.

<embed height="600" src="pipeline_grafico.pdf" type="application/pdf" width="100%">
[PDF](pipeline_grafico.pdf)
[PPT](pipeline_grafico.pptx)
