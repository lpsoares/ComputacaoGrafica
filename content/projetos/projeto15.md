
**Projeto 1 – Rasterização : 5ª parte**

**Data de entrega:** 14/4/2023, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual.

Nesse projeto, você continuará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa terceira parte você deverá tratar primitivas geométricas (Cubos e Esferas) pela implementação dos nós `Box`, `Sphere` e texturas, que devem ser realizadas quando da leitura do parâmetro `current_texture` do nó IndexedFaceSet. No final, você terá um renderizador funcional que rodará por software.

## Estrutura do Projeto

O projeto tem 4 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.


* **Tarefa 1**: implementar as primitivas geométricas 3D (4 pontos no total)
    - Cubo (2 pontos)
    - Esfera (2 pontos)

* **Tarefa 2**: rasterizar aplicando a textura definida (6 pontos no total)
    - Aplicando as textura por amostragem simples (4 pontos)
    - Ajustando as texturas por cálculo do Mipmap (2 pontos)

Essas tarefas devem ser aplicadas nos exemplos: `17 - textura`; `18 - texturas`; `19 - primitivas`


## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório pois novas atualização serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo.

Para esse fase do projeto teste os exemplos 3D, os testes de 17 até 19.

Implemente as funções `GL.box()`, `GL.sphere()` e faça os ajustes necessários na `GL.indexedFaceSet()`

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

Já disponibilizamos a função de leitura de textura: `GPU.load_texture()`, use ela. Verifique se a variável current_texture está alocada, e realize a leitura com uma instrução como: `image_texture = gpu.GPU.load_texture(current_texture[0])`

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html


## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
