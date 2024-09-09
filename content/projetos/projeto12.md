
**Projeto 1 – Rasterização : 2ª parte**

**Data de entrega:** 4/9/2024, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou, senão suporemos mesmo link e grupo da entrega anteriore).

**Entrega:** individual ou duplas.

Nesse projeto, você continuará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa segunda parte você deverá tratar objetos 3D, pela implementação dos nós `TriangleSet`, . Além disso, você deverá usar os dados (posição, fov, orientação) da câmera na implementação do nó `viewpoint`. Já para posicionar os objetos no espaço do mundo você deverá implementar o nó `Transform_in`. No final, você terá um renderizador funcional que rodará por software.

## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório, pois atualizações serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo. Caso o professor oriente, faça a atualização do seu fork durante o curso.


## Estrutura do Projeto

O projeto tem 4 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

* **Tarefa 1:** fazer as transformadas no modelo (2,5 pontos)

* **Tarefa 2:** fazer as transformadas de câmera (2,5 pontos)

* **Tarefa 3:** fazer as transformadas de projeção perspectiva (2,5 pontos)

* **Tarefa 4:** fazer as transformações para coordenadas da tela (2,5 ponto)


Implemente as funções `GL.triangleSet()`, `GL.viewpoint()`, `GL.transform_in()`.

Teste os exemplos correspondentes. Conforme o exemplo for similar ao resultado esperado você obterá as notas 

| Exemplo         | Pontos |
|-----------------|--------|
| um_tri.x3d      | 3      |
| var_tri.x3d     | 4      |
| zoom.x3d        | 3      |

## Instruções

Como recomendação: comece verificando se as operações de transformações geométricas de escala, rotação e translação funcionam monitorando se os pontos do triângulo estão indo para onde deveriam ir. Depois monte a matriz de visualização (câmera), e veja se estão coerentes as posições dos vértices. Aplique a projeção perspectiva até chegar nos vértices em coordenadas normalizadas e finalmente desenhe os polígonos nos pixels. 

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html

(o X_ITE não está fazendo a rotação da câmera em Z corretamente, assim cuidado quando comparar o resultado)


## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
