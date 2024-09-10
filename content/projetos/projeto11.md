
**Projeto 1 – Rasterização : 1ª parte**

**Data de entrega:** 14/8/2024, via Blackboard.

**Link do Github:** enviar via Blackboard.

**Entrega:** individual ou duplas.

Nesse projeto, você implementará um rasterizador para arquivos X3D muito simples, que irá possuir recursos de desenho de: pontos, linhas e triângulos 2D nessa primeira fase. No final, você terá um renderizador funcional que rodará por software, que permite que novos recursos sejam incorporados.

## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório, pois atualizações serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo. Caso o professor oriente, faça a atualização do seu fork durante o curso.


## Estrutura do Projeto

O projeto tem 3 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

* **Tarefa 1:** desenho de pontos coloridos no framebuffer (1 pontos ANTIGO)

* **Tarefa 2:** desenho de linhas coloridas no framebuffer (4 pontos ANTIGO)

* **Tarefa 3:** desenho de triângulos coloridos no framebuffer (5 pontos ANTIGO)

Implemente as funções `GL.polypoint2D()`, `GL.polyline2D()` e `GL.triangleSet2D()`

Teste os exemplos correspondentes. Conforme o exemplo for similar ao resultado esperado você obterá as notas 

| Exemplo         | Pontos |
|-----------------|--------|
| pontos.x3d      | 1      |
| linhas.x3d      | 1      |
| octogono.x3d    | 1      |
| linhas_fora.x3d | 2      |
| var_lin.x3d     | 1      |
| circulo.x3d     | 1      |
| tri_2D.x3d      | 1      |
| helice.x3d      | 1      |
| tri_alta.x3d    | 1      |


## Instruções

Para essa primeira fase 2D, você não deve se preocupar com os nós do X3D como Transform por exemplo, você pode usar diretamente os valores fornecidos dos pontos, esse não é o funcionamento em cenas 3D, mas serve para você testar o processo de renderização. Depois mais a frente você poderá fazer o funcionamento completo dos nós 2D para funcionar em uma cena 3D.

Não há necessidade de tratar o serrilhamento (aliasing) agora, não estaremos também analisando o desempenho do seu programa (contudo você pode implementar as otimizações que deseja, a médio prazo códigos sem nenhum otimização tendem a ficar muito lentos).

Como recomendação, você pode ver como deveria ser a saída em: [https://lpsoares.github.io/Renderizador/index.html](https://lpsoares.github.io/Renderizador/index.html)

(fizemos alguns truques com o X_ITE para ele mostrar os pontos nas posições desejadas, em uma cena 3D o resultado será outro)


## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.


## Extra
Como desafio existe a função para desenhar Círculos 2D, para isso implemente a função GL.circle2D().