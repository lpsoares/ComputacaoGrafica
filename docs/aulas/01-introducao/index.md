---
title: Aula 1 — Introdução à Computação Gráfica
---

# Introdução a computação gráfica

Nesta aula é apresentada uma visão ampla dos principais tópicos e técnicas da área de Computação Gráfica, como geometria, renderização, cores, texturas, iluminação, animação e imagens. A metodologia do curso combina aulas expositivas, atividades práticas e o desenvolvimento de projetos, seguindo uma abordagem de aprendizado progressivo. O conteúdo evolui gradualmente, partindo da geração de figuras simples, como triângulos e esferas, até o uso de recursos mais avançados, como shaders, sem foco específico em APIs gráficas.

A aula destaca que a Computação Gráfica é a área responsável por utilizar computadores para criar e manipular informações visuais, com aplicações em filmes, jogos, interfaces gráficas, CAD, design, visualização científica e simulações. A disciplina integra fundamentos das ciências exatas, como física da luz, óptica e cálculo, com aspectos artísticos e perceptivos, relacionados à cor, iluminação e composição. O cronograma do curso abrange temas como desenho de triângulos, transformações geométricas, coordenadas homogêneas, iluminação, texturas, pipeline gráfico, ray casting e ray tracing.

Na parte de representação de cenas, é introduzido o padrão X3D (Extensible 3D), um formato aberto e multiplataforma para armazenamento e transferência de dados tridimensionais. O X3D organiza as cenas por meio de um Grafo de Cena (Scene Graph), uma estrutura hierárquica que representa objetos e suas propriedades, como geometria, materiais e câmeras.

Por fim, a aula aborda o processo de rasterização de linhas, explicando como as imagens são formadas em um grid 2D de pixels, cada um armazenando valores de cor e brilho no frame buffer da placa gráfica. A rasterização, responsável por converter objetos contínuos em representações discretas de pixels, é a base do Algoritmo de Bresenham, utilizado para determinar de forma eficiente quais pixels devem ser ativados para desenhar uma linha.

=== "Slides"

<embed height="600" src="aula1_introducao.pdf" type="application/pdf" width="100%">
[:material-file-pdf-box: PDF](aula1_introducao.pdf){ .md-button target="_blank" }
[:material-file-powerpoint-box: PPT](aula1_introducao.pptx){ .md-button download }

=== "Atividades"

- X3D: [Desenhe um boneco palito](https://create3000.github.io/x_ite/playground/?url=https://lpsoares.github.io/Renderizador/exemplos/base/boneco.x3d){ target=_blank }
- Notebook: [Desenho de uma linha manualmente](atividade_desenho_de_uma_linha.ipynb)  
  <!-- [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/lpsoares/ComputacaoGrafica/blob/main/content/aulas/01-introducao/atividade_desenho_de_uma_linha.ipynb) -->
- Notebook: [Desenhe uma linha em um Frame Buffer (Bresenham)](atividade_bresenham.ipynb) [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/lpsoares/ComputacaoGrafica/blob/main/content/aulas/01-introducao/atividade_bresenham.ipynb)
