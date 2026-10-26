##
# Passo a passo chamar uber
abrir o aplicativo (entrada)
colocar o destino (entrada )
análise de preço (dinâmica) = 10 (processamento)
    1.selecionar um raio em volta do passageiro 
    2. verifica a quantidade de motoristas dentro do raio e passageiro
    3. calculo oferta e demanda motorista x passageiros  
escolher a categoria (entrada)
escolher método de pagamento (pix) (entrada)
confirmar partida(entrada)
 confirma endereço de embarque(entrada)
    1. calcula as informações da corrida(processamento)
    2. oferece aos motoristas em um sistema de leilão(entrada)
   aguardar o motorista aceitar a corrida
       1. o motorista aceita a corrida (entrada) abaixo (processamento)
       2. as informações do passageiro e corrida vai para o motorista
       3.  notifica ao passageiro e carrega o GPS
       4.  carrega informações de GPS e mostra destino do embarque ao motorista
       5.  mostra o destino embarque    
   motorista não aceita corrida  (entrada) abaixo (processamento)
           1. atualiza o preço da corrida
           2. oferece para outro motorista
   chega no local de embarque
   verificar a placa(entrada)
   verifica o motorista(entrada)
   embarca
  o passageiro passa o codigo de segurança do segurança
   o motorista digita o codigo de segurança(entrada)
inicia a corrida(entrada)
chega no destino
finaliza corrida(entrada)
exibide o preço(saida)
gera o qrcode automaticamente(processamento)
efetua o pagamento(processamento)
processa o pagamento(processamento)
tela de sucesso(saida)
fim da corrida


ATV- 
    1. valor fixo chamada de corrida r$5,00
    2. valor do km R$2,00
    3. valor por minuto R$0,50
    4.  duração da corrida - 20min
    5. km percorrido - 8km

calculo: 5 + (2 x 8) +(0,50 x 20) = 31

o valor que muda e que não muda:

    1. valor fixo chamada de corrida R$ 5,00 - NÃO MUDA
    2. valor do Km R$ 2,00 - NÃO MUDA
    3. valor por minuto - 20 minutos - MUDA
    4. duração da corrida - 20 minutos - MUDA
    5. km percorrido - 8km - MUDA
