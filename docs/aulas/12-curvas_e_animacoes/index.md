---
title: Aula 12 — Curvas e Animações
---

# Curvas e Animações

Nesta aula veremos como podemos usar equações matemáticas para criar curvas que poderão ser usadas posteriormente para fazer animações. A aula trata da importância das curvas suaves e de sua aplicação em animações. Elas são usadas em trajetórias de câmera, fontes vetoriais e modelagem CAD, exigindo continuidade e derivabilidade para garantir suavidade.

ntre os métodos de interpolação, destacam-se a Cúbica de Hermite, que utiliza pontos e tangentes explícitas, e a Catmull-Rom, mais prática por calcular automaticamente as tangentes a partir da sequência de pontos.

Na parte de animação, é abordada a técnica de double buffering, que evita flickering trocando buffers durante a renderização, e o sistema de nós do X3D, como o TimeSensor controla o tempo, enquanto interpoladores, como o SplinePositionInterpolator e o OrientationInterpolator, geram valores intermediários de posição e rotação, fechando em como fazer as conexões entre nós por meio da instrução ROUTE, que viabiliza a execução da animação.

=== "Slides"

<embed height="600" src="aula12_curvas_e_animacoes.pdf" type="application/pdf" width="100%">
[:material-file-pdf-box: PDF](aula12_curvas_e_animacoes.pdf){ .md-button target="_blank" }
[:material-file-powerpoint-box: PPT](aula12_curvas_e_animacoes.pptx){ .md-button download }
