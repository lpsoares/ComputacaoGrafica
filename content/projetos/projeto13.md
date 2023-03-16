
**Projeto 1 – Rasterização : 3ª parte**

**Data de entrega:** 20/3/2023, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual.

Nesse projeto, você continuará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa terceira parte você deverá tratar objetos 3D, pela implementação dos nós `TriangleStripSet`, `IndexedTriangleStripSet`, `IndexedFaceSet` bem como tratar os grafos de cena, o que envolve maior suport para o `Transform`. No final, você terá um renderizador funcional que rodará por software.


## Estrutura do Projeto

O projeto tem 2 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

* **Tarefa 1:** implementar as rotinas para desenhar malhas de triângulos (6 pontos)
    - Fazer o desenho de TriangleStripSet (2 pontos)
    - Fazer o desenho de IndexedTriangleStripSet (2 pontos)
    - Fazer o desenho de IndexedFaceSet (2 pontos)

* **Tarefa 2:** implementar os recursos para o grafo de cena, para transforms dentro de transforms (4 pontos)

Essas tarefas devem ser aplicadas nos exemplos: `11 - tira_tri`; `12 - letras`; `13 - avatar`;


## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório pois novas atualização serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo.

Para esse fase do projeto teste os exemplos 3D, os testes de 11 até 13.

Implemente as funções `GL.triangleStripSet()`, `GL.indexedTriangleStripSet()`, `GL.indexedFaceSet()`, `GL.trasnform_in()`, `GL.transform_out()`

Caso o professor oriente atualizar o seu fork, faça os seguintes passos:

```
git remote add upstream https://github.com/lpsoares/Renderizador
git pull upstream master
```

Cuidado para não comprometer seus dados, para atualizar seus dados vocês pode precisar de algo como:

```
git push origin master --force
```

## Instruções

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html


## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
