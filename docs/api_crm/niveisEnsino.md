
# Níveis de ensino

## Cadastrar nível de ensino

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/NivelEnsino/cadastrar

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `integer` | Não | Código de identificação interna. |
| `codigo` | `string` | Não | Código de identificação externa. Caso seja enviado, se existir algum nível de ensino com este código e a mesma origem, o nível será atualizado | 
| `titulo` | `string` | Sim | Título para nível de ensino. Limite de caracteres: 255. | 
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

## Dados do nível de ensino

!!! done ""
    
    <strong class='REST GET'>GET</strong><strong class="MIME">application/json</strong> /api/NivelEnsino/dados

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Identificação retornada no cadastro de nível de ensino. | 
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
            "codigo": "nivel-1",
            "titulo": "Nível Exemplo",
            "padrao": "1"
        }
    }
    ```

## Excluir nível de ensino

!!! done ""
    
    <strong class='REST DELETE'>DELETE</strong><strong class="MIME">application/json</strong> /api/NivelEnsino/excluir

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Identificação retornada no cadastro do nível de ensino. | 
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