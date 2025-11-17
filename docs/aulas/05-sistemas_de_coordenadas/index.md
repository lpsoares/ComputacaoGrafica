---
title: Aula 5 — Sistema de Coordenadas
---

# Sistema de Coordenadas

Nesta aula, é explorado em profundidade como a **Computação Gráfica** utiliza conceitos matemáticos fundamentais para posicionar e visualizar objetos no espaço. Inicialmente, revisam-se dois conceitos essenciais: a **matriz inversa** e a **mudança de base** (ou de sistema de coordenadas). A inversa de uma transformação geométrica é representada pela matriz inversa $( M^{-1} )$.

Em seguida, discute-se o conceito de **sistema de coordenadas** e **mudança de base**, entendido como a redefinição de um ponto de origem e de eixos vetoriais independentes. A transformação entre sistemas de coordenadas é representada por uma **matriz de mudança de base**.

O conteúdo então avança para as **transformações de visualização e perspectiva**, que levam uma cena do **espaço do mundo (World Space)** até o **espaço da tela (Screen Space)**, passando pelo **espaço da câmera (View Space)**. Nessa etapa, um mesmo ponto assume coordenadas diferentes conforme o sistema de referência.

Para definir a posição e a orientação da câmera, é introduzida a **função LookAt**, que gera a **matriz de visualização (LookAt Matrix)** responsável por converter os vértices do espaço do mundo para o espaço da câmera. Essa função utiliza três vetores: **eye** (posição do observador), **at** (ponto para onde se olha) e **up** (direção para cima). A construção da **matriz LookAt** também pode ser visualizada como uma combinação de **matrizes de rotação e translação**, representando uma mudança de sistema de coordenadas para o espaço $((u, v, -w, e))$. A matriz final $(4 \times 4)$ é obtida a partir do produto dessas transformações, incorporando os produtos escalares que definem a posição da câmera no espaço.

=== "Slides"

<embed height="600" src="aula5_sistema_de_coordenadas.pdf" type="application/pdf" width="100%">
[:material-file-pdf-box: PDF](aula5_sistema_de_coordenadas.pdf){ .md-button target="_blank" }
[:material-file-powerpoint-box: PPT](aula5_sistema_de_coordenadas.pptx){ .md-button download }

=== "Atividades"

- Notebook: [Atividade - sistema de coordenadas](atividade_sistema_de_coordenadas.ipynb)