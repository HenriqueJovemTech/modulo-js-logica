#O projeto será um RPG de texto e vai crescer um pouco a cada aula. Aqui está o roteiro de como ele funciona e como vamos nos organizar:  
1. A Lógica do Jogo (O Motor)
O Mapa: O jogo funciona como um mapa de lugares. O herói está sempre em um lugar específico.  
A Estrutura: O jogo inteiro roda dentro de um laço de repetição while (jogando), onde cada volta representa um passo do herói.  
Movimentação: Usamos uma variável chamada local para registrar onde o personagem está. Através de blocos de if / else if, o jogo verifica o local, mostra os textos e oferece as escolhas. Quando o jogador escolhe ir para outro canto, o código simplesmente muda o valor da variável local, fazendo o herói "andar" no mapa.  
Itens: Haverá um vetor chamado inventario para guardar as coisas que o jogador encontra.  

2. A Divisão do Trabalho no Squad
Cada squad vai criar um único mundo, com sua própria história, mapa e herói.  
Cada integrante do grupo será "dono" de uma região desse mundo. Isso significa que você ficará responsável por criar os lugares, os textos, as escolhas, os itens e os inimigos da sua parte do mapa.  
Vocês usarão um código base chamado jogo-demo para começar, que depois virará o arquivo principal jogo.js da equipe.  

3. Roteiro e Organização
Escopo e Ideias: A equipe precisa combinar os números do jogo (quantos lugares, finais, inimigos) e registrar isso em um arquivo chamado rpg.md. Todas as ideias de mecânicas e história devem virar cartões no Trello (na lista "Backlog do jogo") para organizar o que será feito.

Uso do Git/GitHub: Um membro cria o repositório no GitHub e convida os outros. Existe uma regra de ouro: ninguém envia código direto para a main.  
Branches e PR: Para ninguém bagunçar o código do colega, cada um vai trabalhar na sua própria branch (uma linha do tempo isolada, ex: regiao-seunome). Quando sua região estiver pronta, você faz um Pull Request (PR), que é um pedido para que o seu código seja juntado ao jogo oficial na branch principal (main).  
Próximas Aulas: A cada dia adicionaremos algo novo. Vamos aprender a usar objetos para heróis e inimigos (E16), criar funções para combate em turnos (E17) e adicionar comandos de texto (E18). No dia 04/11, um squad vai testar e jogar o mundo do outro.