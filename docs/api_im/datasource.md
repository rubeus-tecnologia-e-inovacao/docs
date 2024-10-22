## Opções

Busca opções que retornaram de uma consulta executada no passo

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/v1/start

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `data` | `integer` | sim | Id do processo seletivo. |


??? Exemplos

    === "Envio"
        _JSON_:
        ``` JSON
            {
	            "process": 6190
            }
        ```
    === "Resposta"
        _JSON_:
        ``` JSON
            {
                "success": true,
                "data": {
                    "next": 80803,
                    "name": "Dados básicos",
                    "stage": 68676,
                    "local": "step"
                },
                "token": "bsCSE9oCeDZpbHGB4Gc2tfe80GZ2ID6ZtdjCeZj4"
            }
        ```