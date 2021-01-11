# cache-memory
A cache memory implementation in javascript.

Jozias Martini 1621100004
Linka Sofia 1911100048

## Work

Mapeamento associativo por conjuntos
Escrita no retorno
LRU
Jozias e Linka

- Número de células na MP: 128;
- Tamanho do bloco: 4 células;
- Número de linhas na cache: 8;
- Tamanho da célula: 8 bits;
- Tamanho do conjunto: 2 ou 4 linhas (definida pelo número entre parênteses ao lado da política de cada grupo);

Cada dupla deve implementar a política de mapeamento, substituição e escrita conforme especificado na folha a seguir.

Na tela do programa deve ser apresentado todo o conteúdo da memória principal, da memória cache, da próxima localização que será substituída (de acordo com a política definida), além de um menu que de acesso às seguintes operações:

- ler o conteúdo de um endereço da memória;

- escrever em um determinado endereço da memória;

- apresentar as estatísticas de acertos e faltas (absolutos e percentuais) para as três situações: leitura, escrita e geral;

- encerrar o programa.

OBS1: Os valores e endereços devem ser apresentados em hexadecimal ou binário.

OBS2: Ao ler um endereço deve informar se encontrou na cache ou não. Qual o número do bloco a que se refere o endereço, qual o quadro na cache que está mapeado e o deslocamento do mesmo.

OBS3: A memória principal deve ser preenchida com valores aleatórios (entre 0x00 e 0xFF) no início da execução.

OBS4: Os contadores da política de substituição possuem 3 bits.

## Links

### Repository
https://github.com/joziasmartini/cache-memory 

### Document
https://docs.google.com/document/d/1Xa8CFcdYLHQmfhuf6LGqg8ZDIGyKXaxsV0DuTNBWPYM/edit#

### Class 21
https://uffs.webex.com/recordingservice/sites/uffs/recording/d39525e845204ba0ac5f7e68e64b31bc/playback 

### Class 22
https://uffs.webex.com/recordingservice/sites/uffs/recording/2e2d57e462a24962953b5f44a36147f4/playback

### Least Recently Used (LRU) Explanation
https://www.youtube.com/watch?v=4wVp97-uqr0 

### LRU Algorithm
https://www.geeksforgeeks.org/program-for-least-recently-used-lru-page-replacement-algorithm/ 

### LRU
https://pt.wikipedia.org/wiki/Algoritmo_de_troca_de_p%C3%A1gina 

### Cash Replacement Policies
https://en.wikipedia.org/wiki/Cache_replacement_policies 

### Set Associative Cache
https://en.wikipedia.org/wiki/Cache_placement_policies#:~:text=Set%2Dassociative%20cache%20is%20a,cache%20line%20of%20the%20set. 