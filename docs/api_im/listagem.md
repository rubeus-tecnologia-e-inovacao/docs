
# Métodos de listagem

## Listar portais de inscrição

!!! done ""
    
    <strong class='REST GET'>GET</strong><strong class="MIME">application/json</strong> /api/v1/portals

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |


??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "data": [
            {
				"id": 12,
				"name": "Superior"
			}
        ]
    }
    ```

## Listar processos seletivos

!!! done ""
    
    <strong class='REST GET'>GET</strong><strong class="MIME">application/json</strong> /api/v1/selective-processes

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `portal` | `integer` | sim | Id do portal. |


??? Exemplos

    === "Envio"
         `https://admin.portal.apprbs.com.br/api/v1/stages?portal=12`

    === "Resposta"
        _JSON_:
        ``` JSON
        {
            "success": true,
            "data": [
                {
                    "id": 19,
                    "name": "Rubeus: ENEM",
                    "identifier": "1-22"
                },
                {
                    "id": 20,
                    "name": "Rubeus: Graduação",
                    "identifier": "1-28"
                },
                {
                    "id": 45,
                    "name": "Rubeus: Pós Graduação",
                    "identifier": "1-45"
                },
            ]
        }
        ```

## Listar etapas

!!! done ""
    
    <strong class='REST GET'>GET</strong><strong class="MIME">Query parameters</strong> /api/v1/stages

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `process` | `integer` | sim | Id do processo seletivo. |


??? Exemplos

    === "Envio"
         `https://admin.portal.apprbs.com.br/api/v1/stages?process=54`

    === "Resposta"
        _JSON_:
        ``` JSON
        {
            "success": true,
            "data": [
                {
                    "id": 68676,
                    "title": "Dados de inscrição"
                },
                {
                    "id": 68685,
                    "title": "Taxa de inscrição"
                },
                {
                    "id": 68678,
                    "title": "Documentos inscrição"
                },
                {
                    "id": 68677,
                    "title": "Avaliação online"
                },
                {
                    "id": 68679,
                    "title": "Pré-matrícula"
                },
                {
                    "id": 68683,
                    "title": "Documentos matrícula"
                },
                {
                    "id": 68684,
                    "title": "Matrícula"
                }
            ]
        }
        ```
## Listar passos

!!! done ""
    
    <strong class='REST GET'>GET</strong><strong class="MIME">Query parameters</strong> /api/v1/steps

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `stage` | `integer` | sim | Id da etapa. |


??? Exemplos

    === "Envio"
         `https://admin.portal.apprbs.com.br/api/v1/stages?stage=54`

    === "Resposta"
        _JSON_:
        ``` JSON
        {
            "success": true,
            "data": [
                {
                    "id": 13,
                    "name": "Dados básicos"
                },
                {
                    "id": 14,
                    "name": "Curso de interessse"
                },
                {
                    "id": 15,
                    "name": "Concluindo a inscrição"
                }
            ]
        }
        ```