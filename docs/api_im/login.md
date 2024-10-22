## Informações de login

Lista campos nescessarios para executar o login no devido portal e o tipo do dado que o campo suporta

!!! done ""
    
    <strong class='REST GET'>GET</strong><strong class="MIME">Query parameters</strong> /api/v1/login/info

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `portal` | `integer` | sim | Id do portal. |


??? Exemplos

    === "Envio"
         `https://admin.portal.apprbs.com.br/api/v1/stages?portal=54`

    === "Resposta"
        _JSON_:
        ``` JSON
        {
            "success": true,
            "data": [
                {
                    "key": "LOGIN",
                    "label": "CPF ou EMAIL",
                    "type": "text"
                },
                {
                    "key": "DATANASCIMENTO",
                    "label": "Data de Nascimento",
                    "type": "date"
                }
            ]
        }
        ```

## login

Executa o login no portal do inscrito retornando o id da sessão do candidato para uso em outros metodos

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/v1/login

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `portal` | `integer` | sim | Id do portal. |
| `user_data` | `Array` | sim | Deve ser informado um objeto com os dados nescessários de login que podem ser obtidos com o método de [informações de login](/api_im/login/#informacoes-de-login) |
| **↳** `key` | `string` | sim | Nome do campo login |
| **↳** `value` | `string` | sim | valor do campo login |


??? Exemplos

    === "Envio"
        _JSON_:
        ``` JSON
            {
                "portal": 12,
                "user_data": [
                    {
                        "key": "LOGIN",
                        "value": "48555762049"
                    },
                    {
                        "key": "DATANASCIMENTO",
                        "value": "18/01/2000"
                    }
                ]
            }
        ```
    === "Resposta"
        _JSON_:
        ``` JSON
            {
                "success": true,
                "data": [
                    {
                        "key": "LOGIN",
                        "label": "CPF ou EMAIL",
                        "type": "text"
                    },
                    {
                        "key": "DATANASCIMENTO",
                        "label": "Data de Nascimento",
                        "type": "date"
                    }
                ]
            }
        ```