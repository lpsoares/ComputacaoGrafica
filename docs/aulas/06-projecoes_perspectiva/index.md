---
title: Aula 6 — Projeções Perspectiva
---

# Projeções Perspectiva

Nesta aula, o foco é o estudo das Projeções, processo fundamental da Computação Gráfica que transforma objetos tridimensionais em imagens bidimensionais. Será discutido como converter o espaço 3D da câmera em um plano 2D de imagem, abordando dois tipos principais de projeção: a ortográfica, utilizada em desenhos técnicos, e a perspectiva, que imita a forma como o olho humano percebe a profundidade, fazendo com que objetos mais distantes pareçam menores. O conceito é formalizado pelo modelo de câmera pinhole, derivado da camera obscura, no qual um pequeno orifício projeta uma imagem invertida do ambiente. A partir da semelhança de triângulos, demonstra-se matematicamente como um ponto tridimensional P(x, y, z) é projetado no plano da imagem como P'(u, v), mostrando que a projeção depende da divisão por $z$, responsável pelo efeito de profundidade.

A aula também revisa a cadeia completa de transformações gráficas, que passa pelas coordenadas do objeto, do mundo, da câmera, normalizadas (NDC) e da tela, culminando na rasterização. A transformação para tela converte os pontos normalizados, que variam de (-1, -1) a (1, 1), para as coordenadas de pixels (W x H), preservando o valor de profundidade $z$ para o processo de renderização. Por fim, são apresentados os nós Transform, SFRotation, Viewpoint, Coordinate e TriangleSet, do X3D, que definem, respectivamente, as transformações, rotações, câmeras, pontos e triângulos da cena.

=== "Slides"

<embed height="600" src="aula6_projecoes_perspectiva.pdf" type="application/pdf" width="100%">
[:material-file-pdf-box: PDF](aula6_projecoes_perspectiva.pdf){ .md-button target="_blank" }
[:material-file-powerpoint-box: PPT](aula6_projecoes_perspectiva.pptx){ .md-button download }

=== "Atividades"

- Doc: [Atividade — desenho de um cubo](atividade_desenho_de_um_cubo.pdf)

- Notebook: [Atividade - projeções](atividade_projecoes.ipynb)
