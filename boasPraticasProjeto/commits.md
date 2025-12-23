Os commits para este projeto deverão seguir um modelo pré-definido para melhor comunicação.
A seguir o modelo escolhido:

<tipo>(<escopo>): <descrição curta>

[linha em branco]

<corpo da mensagem>

[TIPOS] -> Tipos de commit:

ADD -> Para a adição de arquivos novos
UPDATE -> Para atualização ou implementação de arquivos já existentes
FIX -> Para a correção de bugs ou erros 

[ESCOPO] -> Arquivos Alterados

-EXEMPLO-

FIX|UPDATE(Tracker.ts|Profile.tsx): Corrigido bug que impedia a vizualização do local atual | Adicionada função de recuperação de senha

O bug na linha 142 do arquivo Tracker.ts que impedia a vizualização do local atual foi corrigido e agora funciona corretamente

O arquivo Profile.stx foi implementado assim trazendo a função de recuperação de senha