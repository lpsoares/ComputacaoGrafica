# Anti-aliasing e Visibilidade

Nesta aula discutiremos técnicas de anti-aliasing, que buscam reduzir problemas como o serrilhamento de imagens, bem como algoritmos de visibilidade, com foco no Z-Buffer, e estratégias para tratar transparência em cenas 3D.

O anti-aliasing (ou suavização de serrilhado) trata do problema dos jaggies, que ocorrem ao representar formas contínuas em um dispositivo de amostragem discreta, como a tela. Esse efeito resulta de uma discretização periódica das funções que descrevem a cena. Reconstruções mais fiéis podem ser obtidas por meio de amostragens mais densas. Uma técnica fundamental é o supersampling, em que múltiplas amostras são coletadas para cada pixel e suas cores são combinadas por média, produzindo bordas mais suaves e realistas.

As técnicas de visibilidade abordam como determinar quais superfícies devem ser visíveis quando múltiplos polígonos competem pelo mesmo pixel. O Algoritmo do Pintor é uma abordagem conceitualmente simples, que desenha os polígonos de trás para frente, sobrescrevendo o framebuffer. No entanto, exige ordenação em profundidade e pode falhar em casos de interseção ou ciclos de sobreposição. A solução mais utilizada é o Z-Buffer, que mantém, além do framebuffer, um buffer de profundidade (depth buffer) armazenando o valor $z$ mais próximo para cada pixel. Isso permite decidir, de forma eficiente, se um novo fragmento deve sobrescrever o já armazenado.

Por fim, o tratamento da transparência permite que objetos translúcidos revelem o que está atrás deles. O cálculo da cor resultante envolve combinar a cor armazenada no framebuffer com a nova cor do fragmento, ponderadas pelo coeficiente de transparência ($\\alpha$). A prática comum é renderizar primeiro todos os objetos opacos com o Z-Buffer ativado e, em seguida, processar os objetos transparentes em ordem de profundidade (do mais distante para o mais próximo), garantindo uma composição correta.


<embed height="600" src="aula10_aliasing_e_visibilidade.pdf" type="application/pdf" width="100%">
[PDF](aula10_aliasing_e_visibilidade.pdf)
[PPT](aula10_aliasing_e_visibilidade.pptx)

# Atividades

[Atividade](atividade.ipynb)