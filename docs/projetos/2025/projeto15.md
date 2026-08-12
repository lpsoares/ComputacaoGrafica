
**Projeto 1 – Rasterização : 5ª parte**

**Data de entrega:** 22/09/2025, via Blackboard.

**Link do Github:** enviar via Blackboard (se ainda não enviou).

**Entrega:** individual ou duplas.

Nesse projeto, você finalizará a implementação do rasterizador para arquivos X3D (limitado a poucos nós e atributos), nessa quinta e última parte você deverá deverá renderizar bem como tratar iluminação e animações, para isso deverá calcular os efeitos de iluminação usando os valores de `diffuseColor`, `specularColor` e `shininess` além de implementar os nós `DirectionalLight`, `NavigationInfo`, `TimeSensor`, `SplinePositionInterpolator` e `OrientationInterpolator`, perceba que também terá de fazer ajustes nas suas rotinas de desenho de triângulos para que as informações de iluminação sejam adequadamente processadas. Como opção extra você também poderá implementar as primitivas geométricas pela implementação dos nós `Box`, `Sphere`, `Cone` e `Cylinder`. No final, você terá um renderizador funcional que rodará por software. 

## Código Base

O código base para o projeto pode ser encontrado em: [https://github.com/lpsoares/Renderizador](https://github.com/lpsoares/Renderizador), você deverá fazer um Fork do repositório, pois atualizações serão feitas e você deverá atualizar seu projeto. Junto com o código virão uma série de exemplos que você poderá usar para testar seu código, contudo idealmente seu código deve funcionar para outras entradas além das do exemplo. Caso o professor oriente, faça a atualização do seu fork durante o curso.

## Estrutura do Projeto

O projeto tem 3 partes principais, e cada tarefa concluída leva a um número de pontos possíveis a adicionar na nota final. Algumas tarefas requerem apenas algumas linhas de código, enquanto outras são mais elaboradas. Você vai usar um código base em Python para a implementação do seu código.

* **Tarefa 1:** cálculo de iluminação
    - Usando as propriedades dos materiais
    - Interpretando as luzes presente na cena
* **Tarefa 2:** animação
    - Interpolação suave de posição
    - Interpolação de rotação
* **Tarefa Extra**: implementar as primitivas geométricas 3D
    - Cubo
    - Esfera
    - Cone
    - Cylindro



Implemente as funções `GL.directionalLight()`, `GL.navigationInfo()`, `GL.timeSensor()`, `GL.splinePositionInterpolator()`, `GL.orientationInterpolator()` e atualize suas rotinas de desenho de poligonos para realizar o cálculo de iluminação de forma completa.

Teste os exemplos correspondentes. Conforme o exemplo for similar ao resultado esperado você obterá as notas 

| Exemplo               | Pontos |
|-----------------------|--------|
| difusos.x3d           | 1      |
| mineiro.x3d           | 1      |
| senoide_difusa.x3d    | 2      |
| senoide_especular.x3d | 2      |
| onda.x3d              | 1      |
| piramide.x3d          | 1      |
| avatar_animado.x3d    | 2      |



Como opção extra, implemente as funções `GL.box()`, `GL.sphere()`, `GL.cone()` e `GL.cylinder()` para desenhar as primitivas.


| Exemplo Extra    | Pontos |
|------------------|--------|
| duas.x3d         | 0      |
| outras_duas.x3d  | 0      |
| caixas.x3d       | 0      |
| esferas.x3d      | 0      |
| voltas.x3d       | 0      |
| danca.x3d        | 0      |

## Instruções

Perceba que agora deverá tratar vários tipos propriedades e cores dos materiais: diffuseColor, ambientIntensity, shininess, specularColor.

Os métodos splinePositionInterpolator e orientationInterpolator devem retornar o parâmetro value_changed. Assim no final do método terá algo como: "return value_changed".

Nesse projeto não precisamos implementar todas as funcionalidades de double buffer para animação pois o código e display são realizados de forma sequencial, porém alguns cuidados como: limpar o buffer serão necessários.

Como recomendação, você pode ver como deveria ser a saída em: https://lpsoares.github.io/Renderizador/index.html

## Entrega

Para entregar o projeto use o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
