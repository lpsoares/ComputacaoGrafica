
**Projeto 1 – Rasterização : 1ª parte**

**Data de entrega:** 22/2/2023, via Blackboard.

**Link do Github:** enviar via Blackboard.

**Entrega:** dupla ou individual.

Nesse projeto, você implementará um rasterizador para arquivos X3D muito simples, que irá possuir recursos de desenho de: pontos, linhas e triângulos 2D nessa primeira fase. No final, você terá um renderizador funcional que rodará por software, que permite que novos recursos sejam incorporados.


## Estrutura do Projeto

O projeto tem 3 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

**Tarefa 1:** desenho de pontos coloridos no framebuffer (1 pontos)

**Tarefa 2:** desenho de linhas coloridas no framebuffer (4 pontos)

**Tarefa 3:** desenho de triângulos coloridos no framebuffer (5 pontos)


## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório pois novas atualização serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo.

Obs: Para esse fase do projeto teste todos os exemplos 2D fornecidos.

## Instruções

Para essa primeira fase 2D, você não deve se preocupar com os nós do X3D como Transform por exemplo, você pode usar diretamente os valores fornecidos dos pontos, esse não é o funcionamento em cenas 3D, mas serve para você testar o processo de renderização. Depois mais a frente você poderá fazer o funcionamento completo dos nós 2D para funcionar em uma cena 3D.

Não há necessidade de tratar o serrilhamento (aliasing) agora, não estaremos também analisando o desempenho do seu programa (contudo você pode implementar as otimizações que deseja, a médio prazo códigos sem nenhum otimização tendem a ficar muito lentos).

Como recomendação, você pode ver como deveria ser a saída em: [https://lpsoares.github.io/Renderizador/index.html](https://lpsoares.github.io/Renderizador/index.html)

(fizemos alguns truques com o X_ITE para ele mostrar os pontos nas posições desejada, em uma cena 3D o resultado será outro)


## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
