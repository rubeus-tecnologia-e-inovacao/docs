## Buscar opções da fonte de dados

Busca opções que retornaram de uma consulta executada na fonte de dados

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/v1/start

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `datasource` | `string` | sim | Código da execução da consulta |
| `target` | `integer` | sim | Campo para o qual está buscando as opções |
| `filter` | `array` | não | Valores dos campos já preenchidos |
| **↳** `field` | `array` | sim | Id do campo do filtro |
| **↳** `values` | `array` | sim | Valores do campo do filtro |
| `nextFields` | `array` | não | Id dos campos que ainda não foram preenchidos |
| `token` | `array` | sim | Token do candidato |

??? Exemplos

    === "Envio"
        _JSON_:
        ``` JSON
            {
                "datasource":"884264764e0e234f1f8c68c24333103019b3a07943f5bc7093495f6f4bf6a3d7",
                "target":113575,
                "filter":[
                    {
                        "field":3123213,
                        "values":"19"
                    }
                ],
                "nextFields":[321321,321312,112331,3312321,312423545,4321321,2132132],
                "token":"gRo3gESlgT0uUPJ2t7e4NsYv4ajZk3UfYUmg1tHb"
            }
        ```
    === "Resposta"
        _JSON_:
        ``` JSON
            {
                "success": true,
                "data": [
                    {
                        "value": "1-22",
                        "label": "CAMPUS - MURIAÉ"
                    },
                    {
                        "value": "1-33",
                        "label": "CAMPUS - RIO DE JANEIRO"
                    },
                    {
                        "value": "1-44",
                        "label": "CAMPUS - SÃO JOSÉ DOS CAMPOS"
                    }
                ]
            }
        ```