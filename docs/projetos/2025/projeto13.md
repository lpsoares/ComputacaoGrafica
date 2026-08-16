
**Projeto 1 – Rasterização : 3ª parte**

**Data de entrega:** 14/9/2025, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual ou duplas.

Nesse projeto, você continuará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa terceira parte você deverá tratar objetos 3D, pela implementação dos nós `TriangleStripSet`, `IndexedTriangleStripSet`, `IndexedFaceSet` bem como tratar os grafos de cena, o que envolve maior suport para o `Transform`. No final, você terá um renderizador funcional que rodará por software.


## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório, pois atualizações serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo. Caso o professor oriente, faça a atualização do seu fork durante o curso.


## Estrutura do Projeto

O projeto tem 2 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

* **Tarefa 1:** implementar as rotinas para desenhar malhas de triângulos
    - Fazer o desenho de TriangleStripSet
    - Fazer o desenho de IndexedTriangleStripSet
    - Fazer o desenho de IndexedFaceSet

* **Tarefa 2:** implementar os recursos para o grafo de cena, para transforms dentro de transforms

Implemente as funções `GL.triangleStripSet()`, `GL.indexedTriangleStripSet()`, `GL.indexedFaceSet()`, `GL.trasnform_in()`, `GL.transform_out()`

Teste os exemplos correspondentes. Conforme o exemplo for similar ao resultado esperado você obterá as notas 

| Exemplo         | Pontos |
|-----------------|--------|
| tiras.x3d       | 1      |
| letras.x3d      | 1      |
| leques.x3d      | 2      |
| vertices10.x3d  | 1      |
| bound500.x3d    | 1      |
| avatar.x3d      | 2      |
| girando.x3d     | 2      |


## Instruções

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html


## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
