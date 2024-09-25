
**Projeto 1 – Rasterização : 4ª parte**

**Data de entrega:** 4/10/2024, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual ou duplas.

Nesse projeto, você continuará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa quarta parte você deverá implementar um sistema de anti-aliasing com supersampling, implementar os recursos de interpolação de cores em geometrias, implementar um sistema de z-buffer (depth buffer) e finalmente composição para transparências. No final, você terá um renderizador funcional que rodará por software.


## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório, pois atualizações serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo. Caso o professor oriente, faça a atualização do seu fork durante o curso.


## Estrutura do Projeto

O projeto tem 4 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

* **Tarefa 1:** suavização dos triângulos por superamostragem
* **Tarefa 2:** rasterizar interpolando as cores por vértices dos polígonos
    - Somente realizando o cálculo por mapeamento de coordenadas afim
    - Realizando o cálculo levando em conta a deformação de perspectiva, ou seja, levar em consideração o Z no cálculo
* **Tarefa 3**: implementar algoritmo de visibilidade (Z-buffer)
* **Tarefa 4**: implementar algoritmo de transparência
* **Tarefa 5**: rasterizar aplicando a textura definida
    - Aplicando as textura por amostragem simples
    - Ajustando as texturas por cálculo do Mipmap

Implemente ou atualize as funções `GL.triangleSet()`, `GL.indexedFaceSet()` para conseguir usar os valores de interpolação usando o Z. Também precisará acessar as funções `Renderizador.setup()`, `Renderizador.pos()` (e eventualmente `Renderizador.pre()`) para configurar o sistema para o anti-aliasing e configurar o z-buffer.

Teste os exemplos correspondentes. Conforme o exemplo for similar ao resultado esperado você obterá as notas 

| Exemplo          | Pontos |
|------------------|--------|
| triangulos.x3d   | 1      |
| quadrado.x3d     | 2      |
| flechas.x3d      | 2      |
| retangulos.x3d   | 1      |
| transparente.x3d | 1      |
| textura.x3d      | 1      |
| texturas.x3d     | 2      |

## Instruções

Para os triângulos uma superamostragem de 2x2 já basta. Deixa a superamostragem ligada por padrão.

Suponha que os objetos já estão na ordem para a transparência, não há necessidade de ordenar isso.

Você precisará usar o Z para fazer a interpolação de forma correta.

Já disponibilizamos a função de leitura de textura: `GPU.load_texture()`, use ela. Verifique se a variável current_texture está alocada, e realize a leitura com uma instrução como: `image_texture = gpu.GPU.load_texture(current_texture[0])`

As texturas precisam de Mipmap para ficarem adequadas, senão ficarão visíveis artefatos.

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html


## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
