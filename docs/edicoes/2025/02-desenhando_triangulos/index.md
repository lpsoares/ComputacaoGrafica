---
title: Aula 2 - Desenhando Triângulos
---

# Desenhando Triângulos

Nesta aula, começamos compreendendo a base do hardware gráfico: as telas (ou displays), formadas por pixels, que podem ser entendidos como pequenos quadrados, cada um com uma cor específica. Toda imagem exibida é produzida a partir de uma memória localizada na placa gráfica, chamada Framebuffer.

O objetivo central da aula é apresentar a técnica de desenhar triângulos, trabalhando no espaço bidimensional (2D). O foco nos triângulos se deve ao fato de serem o polígono mais simples possível, e porque qualquer outro polígono pode ser subdividido em triângulos. Isso permite otimizar os cálculos e concentrar as operações em uma única forma geométrica. Além disso, os triângulos possuem propriedades ideais: são sempre planos, têm um interior bem definido e permitem interpolação simples de valores em seu interior. Por essas razões, o triângulo é considerado a primitiva fundamental na construção de formas e superfícies geométricas complexas.

O processo de desenhar um triângulo no Framebuffer é chamado de Rasterização (triangle rasterization). A entrada desse processo são as posições projetadas dos vértices do triângulo, e a saída é o conjunto de pixels coloridos que o representam. Para determinar quais pixels serão preenchidos, é necessário identificar quais estão cobertos pelo triângulo, o que é feito por meio da técnica de amostragem 2D.

=== "Slides"

<embed height="600" src="aula2_triangulos.pdf" type="application/pdf" width="100%">
[:material-file-pdf-box: PDF](aula2_triangulos.pdf){ .md-button target="_blank" }
[:material-file-powerpoint-box: PPT](aula2_triangulos.pptx){ .md-button download }

=== "Atividades"

- Notebook: [Atividade - renderizando triângulos](atividade_renderizando_triangulos.ipynb)
<!-- [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/lpsoares/ComputacaoGrafica/blob/main/content/aulas/01-introducao/atividade_desenho_de_uma_linha.ipynb) -->
