
**Projeto 2 – Shaders : 3ª parte**

**Data de entrega:** 25/5/2023, via Blackboard.

**Link do Github:** enviar via Blackboard o link do Shadertoy ou do github.

**Entrega:** individual.

Nesse projeto, você irá implementar rotinas de Ray Tracing com recursos do Fragment Shader em GLSL. Você deverá implementar uma nova primitiva gráfica para o Ray Tracer desenvolvido em aula. Na aula será sorteada uma primitva para você. Na prática você deverá se focar em adaptar a rotina `hit_sphere` para o seu caso. Depois deverá também calcular a normal para o ponto, perceba que para isso poderá ser necessário usar alguma estratégia de derivas no ponto.


## Estrutura do Projeto

O projeto tem somente uma parte. Você poderá desenvolver seu código diretamente na ferramenta do Shadertoy ([https://www.shadertoy.com/](https://www.shadertoy.com/)) para isso confirme que você conseguiu salvar seu projeto e que outros possam ver, outra opção é criar direto uma aplicação em OpenGL e chamar o Fragmente Shader, para isso você poderá usar o código de referência em OpenGl da disciplina para acesso a Shaders em: [https://github.com/lpsoares/RenderizadorOpenGL](https://github.com/lpsoares/RenderizadorOpenGL).

* **Tarefa 1:** Desenhar a primitiva gráfica (8 pontos)
* **Tarefa 2:** Calcular corretamente as normais na superfície (2 pontos)


## Código Base

Para o RayTracer, você poderá usar o código: [https://www.shadertoy.com/view/DtV3Rc](https://www.shadertoy.com/view/DtV3Rc).

Você poderar desenvolver no [ShaderToy](https://www.shadertoy.com/), contudo se desejar pode usar um código base para o projeto em: [https://github.com/lpsoares/RenderizadorOpenGL](https://github.com/lpsoares/RenderizadorOpenGL). Junto com o código existem uma série de exemplos que você poderá usar para montar o seu código.

O código original desse Ray Tracer desenvolvido em aula se baseado no livro do Peter Shirley (https://raytracing.github.io/). Contudo diversas adaptações foram realizadas para rodar em GPU em GLSL.


Esse código está em desenvolvimento, assim, caso o professor oriente atualizar o seu fork, faça os seguintes passos:

```
git remote add upstream https://github.com/lpsoares/RenderizadorOpenGL
git pull upstream master
```

Cuidado para não comprometer seus dados, para atualizar seus dados vocês pode precisar de algo como:

```
git push origin master --force
```

## Instruções

Desenvolva em GLSL as novas rotinas para a primitiva geométrica que você irá fazer. Você pode utilizar bibliotecas fora das bibliotecas padrão de GLSL.

## Entrega

Para entregar o projeto use o Shadetoy ou o Github. Deixe seu código minimamente documentado e garanta que ele está rodando corretamente. Se quiser deixar o código fechado, não esqueça de dar acesso para o professor ao repositório.


## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve implementar os algoritmos. Você não deve ficar olhando o código de seus colegas.
