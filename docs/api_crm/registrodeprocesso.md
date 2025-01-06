# Registro de processo

## Alterar contato

Este método tem a função de vincular ou remover contatos relacionados de um registro de processo.

!!! done ""
    
    <strong class='REST PUT'>PUT</strong><strong class="MIME">application/json</strong> /api/Registro/alterarPessoasOportunidade

!!! warning "Obrigatoriedade condicional"

    Neste caso, se for passado o `codRegistro`, não serão necessário os outros parâmetros condicionais, caso contrário os demais deverão ser passados.

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `codRegistro` | `string` | Condicional | Código da oportunidade. | 
| `codPessoa` | `string` | Condicional | Código do contato principal | 
| `codCurso` | `string` | Condicional | Código do curso principal | 
| `codOferta` | `string` | Condicional | Código da oferta do curso principal. | 
| `processo` | `integer` | Sim | Processo no qual o registro é pertencente. | 
| `pessoas` | `array[]` | Sim | Neste modelo com os contatos relacionados que vão ser vinculadas a um registro de processo. | 
| **↳** `codigo` | `string` |  <rb-tooltip text="Torna-se obrigatório caso não seja informado um `id`">Condicional </rb-tooltip> | Código de identificação externa do contato. | 
| **↳** `id` | `integer` |  <rb-tooltip text="Torna-se obrigatório caso não seja informado um `codigo`">Condicional </rb-tooltip> | Código de identificação do contato no CRM. | 
| **↳** `tipo` | `integer` | Não | Código de identificação do tipo do contato. <br><br>[Listar tipos do contato](/api_crm/metodosdelistagem/#listar-tipos-do-contato)<br>**Enviar o campo** `id` | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true
    }
    ```

## Alterar código de registro

Este método tem a função de alterar o código de um registro de processo passando o código novo e o antigo para referência.

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Registro/alterarCodigo

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `codigoAntigo` | `string` | Sim | Código atual do registro de processo. | 
| `codigoNovo` | `string` | Sim | Código novo para o registro de processo. | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true
    }
    ```

## Dados do registro

Este método retorna os dados de um registro de processo passando a referência do id.

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Registro/dados

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `string` | Sim | ID do registro de processo. |  
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true
    }
    ```