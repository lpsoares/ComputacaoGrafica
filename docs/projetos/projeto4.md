
**Projeto 4 – Apresentações sobre Técnica de Computação Gráfica**

**Data da apresentação/entrega:** 25/11/2026, via Blackboard.

**Link do Github:** enviar via Blackboard o material (slides) da apresentação.

**Entrega:** duplas.

## Instruções

Nesse projeto, você irá estudar e apresentar uma técnica avançada de computação gráfica. Escolha uma técnica e prepare uma apresentação de 7 minutos.

### Sugestões de técnicas de Computação Gráfica

#### Modelagem e geometria

- Superfícies de subdivisão: como uma malha simples se transforma em uma superfície suave.
- Curvas e superfícies NURBS: representação e edição de formas suaves usada em CAD e modelagem.
- Modelagem procedural com sistemas-L: gerar plantas, estruturas ou padrões por regras.
- Deformação livre de forma (FFD): editar um objeto deformando uma grade que o envolve.
- Geometria sólida construtiva (CSG): criar objetos combinando sólidos por união, interseção e diferença.
- Gaussian Splatting (GS): criar objetos com Gaussian Splatting.

#### Animação e simulação

- Animação esquelética e skinning: deformar um personagem com base em um esqueleto.
- Cinemática inversa: calcular a posição das articulações para atingir uma pose ou um alvo.
- Animação facial com blend shapes: combinar formas para produzir expressões.
- Simulação de tecidos: modelar roupas e tecidos com massas, molas ou métodos de dinâmica posicional.
- Sistemas de partículas: criar fumaça estilizada, fogo, chuva, explosões ou multidões simples.

#### Simulação e efeitos visuais

- Simulação de cabelo e pelos: modelar fios, volume e interação com movimento.
- Multidões: gerar movimentos coordenados para muitos agentes, evitando colisões e mantendo variação.

#### Imagem, textura e composição

- Texturas sem emendas (seamless textures): criar padrões que se repetem sem bordas visíveis.
- Texturização por projeção: aplicar imagens sobre modelos 3D a partir de câmeras ou projetores.

#### Organização e desempenho de cenas

- Culling de oclusão: deixar de processar objetos que estão escondidos atrás de outros.
- Níveis de detalhe (LOD): usar modelos de complexidade diferente conforme a distância da câmera.

#### Geometria computacional e processamento de malhas

- Remalhamento adaptativo: redistribuir polígonos conforme curvatura, detalhe ou erro geométrico. (Gustavo e Lucas)
- Análise espectral de malhas: usar autovetores do Laplaciano para estudar formas e realizar operações geométricas.
- Superfícies implícitas neurais: representar geometria por funções contínuas e investigar reconstrução, edição e extração de malhas.

#### Simulação física avançada

- Método dos elementos finitos (FEM) em deformáveis: modelar elasticidade, plasticidade e materiais com diferentes propriedades.
- Material Point Method (MPM): simular materiais que mudam de forma, como neve, areia e lama.
- Métodos FLIP e APIC para fluidos: comparar formas de transferir velocidade entre partículas e grades.
- Fratura e fragmentação: gerar rachaduras e separação de peças em objetos rígidos ou deformáveis.
- Dinâmica de fios por hastes de Cosserat: modelar cabelo, cabos e cordas com flexão e torção.

#### Animação e movimento de personagens

- Animação muscular: gerar movimento a partir de músculos e tecidos simulados, em vez de controlar apenas o esqueleto.

#### Computação gráfica em GPU

- Texturização virtual: carregar partes de texturas muito grandes sob demanda, conforme a câmera se move.
- Instanciamento de GPU: reaproveitar uma geometria e criar várias instâncias direto na GPU para otimizar a renderização.


## Entrega

Para entregar a atividade, envie seus slides (PPT, PDF, etc) pelo link do Blackboard.

## Honestidade acadêmica

As tarefas devem ser concluídas em dupla ou individualmente. Você está convidado a discutir as várias partes das tarefas com seus colegas, mas você deve preparar o material você mesmo.
