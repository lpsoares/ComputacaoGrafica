---
title: Aula 3 — Renderização e Transformações Geométricas
---

# Renderização e Transformações Geométricas

A primeira parte dessa aula foca na Renderização, processo essencial que converte dados de modelos tridimensionais em imagens visíveis. Existem diversas estratégias e técnicas de renderização, como Scanline (Rasterização), Ray Tracing, Photon Mapping, Radiosity, Monte Carlo e Caustics. Um dos principais desafios da renderização está no tempo de processamento e no poder computacional necessário. Para mitigar esses desafios, é comum empregar o Batch Rendering e o Rendering Farm, que distribuem a tarefa entre vários computadores em um cluster. O ganho de desempenho tende a ser linear, com cada máquina responsável por gerar um quadro completo. A performance de uma animação é medida em FPS (frames per second), e para que o movimento pareça natural, o ideal é alcançar 60 FPS ou mais, o que implica produzir cada quadro em cerca de 0,016 segundos.

A segunda parte da aula aborda as Transformações Geométricas, fundamentais tanto para a Modelagem (definir formas, criar cópias e estabelecer hierarquias entre objetos) quanto para a Visualização (converter coordenadas do mundo para o espaço da câmera e realizar projeções). Os objetos são definidos e manipulados a partir de seus vértices, e as transformações descrevem a posição e a orientação de cada instância de um objeto.

As transformações estudadas incluem Rotação, Translação, Reflexão, Escala (uniforme e assimétrica) e Cisalhamento. Para compreendê-las, é feita uma revisão de Álgebra Linear, com ênfase em espaços vetoriais e transformações lineares. A Escala, Rotação, Reflexão e o Cisalhamento são classificadas como transformações lineares e podem ser representadas de forma eficiente por multiplicação de matrizes. Já a Translação requer atenção especial, pois não é uma transformação linear; trata-se de uma transformação afim, resultante da composição de uma transformação linear com um deslocamento.

Para resolver esse problema e permitir que todas as transformações afins sejam representadas por multiplicação de matrizes, a aula introduz o conceito de Coordenadas Homogêneas, obtidas pela adição da coordenada w.

=== "Slides"

<embed height="600" src="aula3_renderizacao_e_transformacoes_geometricas.pdf" type="application/pdf" width="100%">
[:material-file-pdf-box: PDF](aula3_renderizacao_e_transformacoes_geometricas.pdf){ .md-button target="_blank" }
[:material-file-powerpoint-box: PPT](aula3_renderizacao_e_transformacoes_geometricas.pptx){ .md-button download }

=== "Atividades"

- Notebook: [Atividade 1 - Transformações Geométricas - Parte 1](atividade_transformacoes_geometricas_Parte1.ipynb)

- Notebook: [Atividade 2 - Transformações Geométricas - Parte 2](atividade_transformacoes_geometricas_Parte2.ipynb)
