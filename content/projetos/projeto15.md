
**Projeto 1 – Rasterização : 5ª parte**

**Data de entrega:** 27/3/2023, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual.

Nesse projeto, você continuará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa terceira parte você deverá tratar objetos 3D, pela implementação dos nós `TriangleStripSet`, `IndexedTriangleStripSet`, `Box`. No final, você terá um renderizador funcional que rodará por software.

## Estrutura do Projeto

O projeto tem 4 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.


* **Tarefa 1:** suavização dos triângulos por superamostragem (2 pontos)

* **Tarefa 1:** Cálculo de Iluminação (5 pontos)
* **Tarefa 2:** animação/double buffer (5 pontos)
    - Interpolação suave de posição (3 pontos)
    - Interpolação de rotação (2 pontos)


Essas tarefas devem ser aplicadas nos exemplos: `9 - tira_tri`; `10 - um_tri`;


## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório pois novas atualização serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo.

Para esse fase do projeto teste os exemplos 3D,   os testes de 0 até 5.

Implemente as funções `GL.triangleStripSet()`, `GL.indexedTriangleStripSet()`, `GL.box()`

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

Para os triângulos uma superamostragem de 2x2 já basta.

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html



## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
