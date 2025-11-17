---
title: Aula 4 — Coordenadas Homogêneas e Quatérnios
---

# Coordenadas Homogêneas e Quatérnios

Esta aula de Computação Gráfica foca em duas ferramentas matemáticas essenciais para manipulação e transformação de objetos no espaço 2D e 3D: **Coordenadas Homogêneas** e **Quatérnios**.

A primeira parte da aula retoma as **Coordenadas Homogêneas** (CH). Em 2D (2D-H), estas coordenadas adicionam um valor $w$ extra, transformando um **Ponto** $(x, y)$ em $(x, y, 1)$ e um **Vetor** $(x, y)$ em $(x, y, 0)$. O objetivo principal das Coordenadas Homogêneas é permitir que as **transformações afins** (que são a composição de uma transformação linear, como: Escala, Rotação, Reflexão e Cisalhamento, com uma translação, que é não linear) sejam executadas através de uma única multiplicação de matriz.

O uso de matrizes homogêneas facilita a Composição de Transformações, onde transformações mais básicas podem ser combinadas para criar sequências complexas. É vital lembrar que a **ordem em que as transformações são aplicadas importa**. Em 3D (3D-H), a lógica se estende, transformando um **Ponto 3D** $(x, y, z)$ em $(x, y, z, 1)$ e um **Vetor 3D** em $(x, y, z, 0)$. As transformações afins em 3D são representadas por matrizes $4 \times 4$. Caso o valor $w$ de um ponto mude após uma transformação, a **Normalização Homogênea** requer a divisão das coordenadas $x, y,$ e $z$ por $w$ para recuperar as coordenadas 'reais'. Também é discutido que as **Isometrias** (Translação, Rotação e Reflexão) são transformações que preservam a distância entre os pontos (comprimento).

A segunda parte da aula aborda as **Rotações em 3D**, começando pela representação usando **ângulos de Euler** (rotações aplicadas em torno dos três eixos X, Y, Z). Enquanto em 2D a ordem da rotação não importa (é comutativa), em 3D a rotação não é comutativa, a ordem em que as rotações são aplicadas muda o resultado final. Esta dependência da ordem leva a vários problemas. Para resolver essas questões, a aula introduz os **Quatérnios** ($\mathbb{H}$) como uma Representação Alternativa de Rotações 3D. Quatérnios são uma extensão dimensional dos números Reais ($\mathbb{R}$). Eles são compostos por quatro valores reais, consistindo em uma parte escalar ($q_r$) e uma parte vetorial ($q$) com as unidades imaginárias $i, j, k$. A multiplicação de quatérnios, assim como a rotação 3D, **não é comutativa** ($q_1q_2 \neq q_2q_1$).

Para representar rotações, utilizam-se os **quatérnios unitários** (cujo módulo é 1). Um quatérnio unitário vive numa superfície esférica unitária no $\mathbb{R}^4$, e seu inverso é igual ao seu conjugado. Uma rotação é definida por um **eixo** $u$ e um **ângulo** $\theta$. O uso de quatérnios resolve os problemas de ordenação e *gimbal lock* associados aos ângulos de Euler. A representação do quatérnio pode ser mapeada para uma matriz de rotação em Coordenadas Homogêneas.

=== "Slides"

<embed height="600" src="aula4_coordenadas_homogeneas_e_quaternios.pdf" type="application/pdf" width="100%">
[:material-file-pdf-box: PDF](aula4_coordenadas_homogeneas_e_quaternios.pdf){ .md-button target="_blank" }
[:material-file-powerpoint-box: PPT](aula4_coordenadas_homogeneas_e_quaternios.pptx){ .md-button download }

=== "Atividades"

- Notebook: [Atividade - Transformações Homogêneas](atividade_transformacoes_homogeneas.ipynb)

- Notebook: [Atividade - Números Compelxos](atividade_numeros_complexos.ipynb) [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/lpsoares/ComputacaoGrafica/blob/main/content/aulas/04-coordenadas_homogeneas_e_quaternios/atividade_numeros_complexos.ipynb)

- Notebook: [Atividade - Rotações por Quaternions](atividade_quaternios.ipynb) [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/lpsoares/ComputacaoGrafica/blob/main/content/aulas/04-coordenadas_homogeneas_e_quaternios/atividade_quaternios.ipynb)

