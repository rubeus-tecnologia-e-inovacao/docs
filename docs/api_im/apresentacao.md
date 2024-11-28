# Integrar a ficha de Inscrições e Matrículas integrada ao TOTVS (API)

## Apresentação

Esta API permite usar os portais de inscrição por meio de um endpoint, recebendo dados de etapas e passos para preencher os formulários e enviar os dados para executar as ações do botão

## Autenticação

A autenticação de cada método é realizada com a passagem da API KEY no parametro Authorization do header, que é gerada dentro do aplicativo do IM, dentro das configurações gerais na aba de segurança

## Envio

A URl das APIs será o mesmo domínio do CRM da instituição.
Exemplo: *https://admin.portal.apprbs.com.br/api/v1/portals*