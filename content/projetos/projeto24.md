
**Projeto 2 – Shaders : 4ª parte**

**Data de entrega:** 2/6/2023, via Blackboard.

**Link do Github:** enviar via Blackboard o link do Shadertoy ou do github.

**Entrega:** individual.

Nesta última parte do projeto você deverá desenvolver uma nova textura usando perlin Noise (ou alguma variante) para o Ray Tracer desenvolido no Fragment Shader em GLSL. Essa é um avaliação mais artística, assim capriche em criar uma textura mais organica.

## Estrutura do Projeto

Você poderá desenvolver seu código diretamente na ferramenta do Shadertoy ([https://www.shadertoy.com/](https://www.shadertoy.com/)) para isso confirme que você conseguiu salvar seu projeto e que outros possam ver, outra opção é criar direto uma aplicação em OpenGL e chamar o Fragmente Shader, para isso você poderá usar o código de referência em OpenGl da disciplina para acesso a Shaders em: [https://github.com/lpsoares/RenderizadorOpenGL](https://github.com/lpsoares/RenderizadorOpenGL).

* **Tarefa 1:** Criar uma textura em Perlin Noise usando algo como Turbulência (8 pontos)
* **Tarefa 2:** Aplicar a textura em um espaço 3D em qualquer primitiva geométrica (2 pontos)

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
