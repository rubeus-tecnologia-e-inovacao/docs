
# Modalidades

## Cadastrar modalidade

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Modalidade/cadastroModalidade

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `integer` | Não | Código de identificação interna. |
| `codigo` | `string` | Não | Código de identificação externa. Caso seja enviado, se existir alguma modalidade com este código e a mesma origem, a modalidade será atualizada| 
| `titulo` | `string` | Sim | Título para a modalidade. Limite de caracteres: 255. | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": {
            "id": 1
        }
    }
    ```

## Dados da modalidade

!!! done ""
    
    <strong class='REST GET'>GET</strong><strong class="MIME">application/json</strong> /api/Modalidade/dadosModalidade

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Identificação retornada no cadastro da modalidade. | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": {
            "id": "1",
            "codigo": "modalidade-1",
            "titulo": "Modalidade Exemplo"
        }
    }
    ```

## Excluir modalidade

!!! done ""
    
    <strong class='REST DELETE'>DELETE</strong><strong class="MIME">application/json</strong> /api/Modalidade/excluir

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Identificação retornada no cadastro da modalidade. | 
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