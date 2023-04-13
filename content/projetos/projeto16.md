
**Projeto 1 – Rasterização : 6ª parte**

**Data de entrega:** 26/4/2023, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual.

Nesse projeto, você finalizará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa sexta e última parte você deverá tratar iluminação e animações, para isso deverá implementar os nós `DirectionalLight`, `NavigationInfo`, `TimeSensor`, `SplinePositionInterpolator` e `OrientationInterpolator`, perceba que também terá de fazer ajustes nas suas rotinas de desenho de triângulos para que as informações de iluminação sejam adequadamente processadas. No final, você terá um renderizador funcional que rodará por software.

## Estrutura do Projeto

O projeto tem 2 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

* **Tarefa 1:** cálculo de iluminação (5 pontos)
* **Tarefa 2:** animação (5 pontos)
    - Interpolação suave de posição (3 pontos)
    - Interpolação de rotação (2 pontos)


Essas tarefas devem ser aplicadas nos exemplos: `20 - tri_3D`; `21 - caixa`; `22 - esferas`;
`23 - onda`; `24 - piramide`; 

## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório pois novas atualização serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo.

Implemente as funções `GL.directionalLight()`, `GL.navigationInfo()`, `GL.timeSensor()`, `GL.splinePositionInterpolator()`, `GL.orientationInterpolator()` e atualize suas rotinas de desenho de poligonos para realizar o cálculo de iluminação de forma completa.

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

Perceba que agora deverá tratar vários tipos propriedades e cores dos materiais: diffuseColor, ambientIntensity, shininess, specularColor.

Os métodos splinePositionInterpolator e orientationInterpolator devem retornar o parâmetro value_changed. Assim no final do método terá algo como: "return value_changed".

Nesse projeto não precisamos implementar todas as funcionalidades de double buffer pois o código e display são realizados de forma sequencial, porém alguns cuidados como: limpar o buffer serão necessários.

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html

## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
