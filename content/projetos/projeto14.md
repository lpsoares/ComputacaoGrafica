
**Projeto 1 – Rasterização : 4ª parte**

**Data de entrega:** 27/3/2023, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual.

Nesse projeto, você continuará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa terceira parte você deverá tratar objetos 3D, pela implementação dos nós `TriangleStripSet`, `IndexedTriangleStripSet`, `Box`. No final, você terá um renderizador funcional que rodará por software.

## Estrutura do Projeto

O projeto tem 4 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.


* **Tarefa 1:** rasterizar interpolando as cores por vértices dos polígonos (3 pontos no total)
    - Somente realizando o cálculo por mapeamento de coordenadas afim (2 pontos)
    - Realizando o cálculo levando em conta a deformação de perspectiva (+1 pontos)
* **Tarefa 2**: rasterizar aplicando a textura definida (3 pontos no total)
    - Aplicando as textura por amostragem simples (2 pontos)
    - Ajustando as texturas por cálculo do Mipmap (+1 pontos)
* **Tarefa 3**: implementar algoritmo de visibilidade (Z-buffer) (2 pontos no total)


Essas tarefas devem ser aplicadas nos exemplos: `9 - tira_tri`; `10 - um_tri`;


## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório pois novas atualização serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo.

Para esse fase do projeto teste os exemplos 3D,   os testes de 0 até 5.

Implemente as funções `GL.triangleStripSet()`, `GL.indexedTriangleStripSet()`, `GL.box()`

Caso o professor oriente atualizar o seu fork, faça os seguintes passos:

```
git remote add upstream https://github.com/lpsoares/Renderizador
git fetch upstream
git rebase upstream/master
```

Cuidado para não comprometer seus dados, para atualizar seus dados vocês pode precisar de algo como:

```
git push origin master --force
```

## Instruções

Para os triângulos uma superamostragem de 2x2 já basta.

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html



## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.