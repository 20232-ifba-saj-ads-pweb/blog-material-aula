---
icon: edit
date: 2023-09-22 18:30:00.00 -3
category:
  - exercicio
  - entrega
tag:
  - jamstack
order: 2
---

# Trabalho

Será desenvolvido durante o semestre um projeto tendo fontend e backend sendo produzidos em tecnologias diferentes.

O sistema irá disponibilizar ao cliente do estabelecimento o acesso à sua comanda e possibilitará fazer pedidos diretamente pelo aplicativo, sem a necessidade de um atendente.

Um sistema para os estabelecimentos se cadastrarem, cadastrarem seus cardápios, suas comandas e os clientes logarem (criando uma nova comanda ou entrando em uma para rateio)  e realizar os pedidos;

## Perfis de acesso

O sistema deverá ter 3 perfis:

- Cliente
- Dono do estabelecimento
- Cozinha

## Cadastros

Alguns dos cadastros previstos em uma analise prelimiar:

- Estabelecimento
- Cardápio (produtos, preços, combos)
- Comanda
- Cliente
- Pedido (pagamento, rateio, combos, descontos, histórico de situação, fila)

## Funcionalidades

Alguns das funcionalidades previstas em uma analise prelimiar:

- cliente adicionar pedido pela leitura de QRCode/Código de Barras
- cliente abrir uma comanda pela leitura de QRCode, poder acessar o cardápio do estabelecimento e fazer pedidos direto do cardápio eletrônico
- estabelecimento poder cadastrar produtos específicos do estabelecimento ou produtos gerais (com código de barras)
- estabelecimento ter um dashboard para acompanhamento de pedidos (podendo filtrar por fila), recebimento de pagamentos ...
- cliente pagar conta parcialmente
- Estabelecido poder criar filas de atendimentos diferentes por tipo de produto
- O cliente poder ver a fila de atendimento dos seus pedidos
- O dono do estabelecimento abrir/criar comandas e lançar produtos/pedidos para clientes
- rateio da comanda com possibilidade de divisões de produtos (fator de rateio)
