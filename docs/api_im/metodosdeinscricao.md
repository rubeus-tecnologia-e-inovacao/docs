## Iniciar inscrição

Inicia uma inscrição retornando o token do candidato para ser utilizado nos metodos subsequentes, e as informações para avançar nas etapas de inscrições

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/v1/start

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `process` | `integer` | sim | Id do processo seletivo. |


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
## Informações do formulário

Retorna os dados nescessários para montar um formulário

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/v1/form

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `target` | `integer` | sim | Id do local que está o formulário esse dado é retornado como next em outros métodos. |
| `local` | `string` | sim | Tipo do local que está o formulário esse dado é retornado como local em outros métodos. |
| `token` | `string` | sim | Token de sessão do candidato. |


??? Exemplos

    === "Envio"
        _JSON_:
        ``` JSON
            {
                "target": 80803,
                "local": "step",
                "token" : "hQj3XSfSpdj6nW8fWhuXBpzBOkckli52NQg6EziP"
            }
        ```
    === "Resposta"
        _JSON_:
        ``` JSON
            {
                "success": true,
                "data": {
                    "form": {
                        "id": 80803,
                        "local": "step",
                        "stage_id": 68676,
                        "content": {
                            "inputs": [
                                {
                                    "field_id": 113571,
                                    "field_settings": 757229,
                                    "label": "Nome completo",
                                    "type": "text",
                                    "multivalued": 0,
                                    "max_multivalued_options": null,
                                    "min_multivalued_options": null,
                                    "read_only": 0,
                                    "description": null,
                                    "ps_table": 0,
                                    "totvs": {
                                        "totvs_table": "SPSUSUARIO",
                                        "totvs_field": "NOME",
                                        "totvs_alternative_name": null
                                    },
                                    "rubeus": {
                                        "rubeus_table": 0,
                                        "rubeus_field": "pessoa.nome"
                                    },
                                    "data_type": 2,
                                    "value": "nomeCandidato",
                                    "mask": "",
                                    "case": null,
                                    "validators": {
                                        "message": "",
                                        "rules": [
                                            {
                                                "key": "required",
                                                "name": "Obrigatório",
                                                "value": true,
                                                "type": "boolean",
                                                "message": "Campo obrigatório."
                                            },
                                            {
                                                "key": "minWords",
                                                "name": "Mínimo de palavras",
                                                "value": 2,
                                                "type": "number",
                                                "message": "Nome e sobrenome é obrigatório."
                                            },
                                            {
                                                "key": "maxLength",
                                                "name": "Máximo de caracteres",
                                                "value": 120,
                                                "type": "number",
                                                "message": "Ultrapassou o limite máximo de 120 caracteres."
                                            },
                                            {
                                                "key": "pattern",
                                                "name": "Expressão regular",
                                                "value": "\/[0-9]\/",
                                                "type": "string",
                                                "message": "Não é permitido inserir números!"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "field_id": 113632,
                                    "field_settings": 756606,
                                    "label": "Possuo nome social",
                                    "type": "checkbox",
                                    "multivalued": 0,
                                    "max_multivalued_options": null,
                                    "min_multivalued_options": null,
                                    "read_only": 0,
                                    "description": null,
                                    "ps_table": 0,
                                    "totvs": {
                                        "totvs_table": "SPSUSUARIO",
                                        "totvs_field": "POSSUINOMESOCIAL",
                                        "totvs_alternative_name": null
                                    },
                                    "rubeus": {
                                        "rubeus_table": null,
                                        "rubeus_field": null
                                    },
                                    "mask": null,
                                    "case": null
                                },
                                {
                                    "field_id": 113633,
                                    "field_settings": 756607,
                                    "label": "Nome social",
                                    "type": "text",
                                    "multivalued": 0,
                                    "max_multivalued_options": null,
                                    "min_multivalued_options": null,
                                    "read_only": 0,
                                    "description": null,
                                    "ps_table": 0,
                                    "totvs": {
                                        "totvs_table": "SPSUSUARIO",
                                        "totvs_field": "NOMESOCIAL",
                                        "totvs_alternative_name": null
                                    },
                                    "rubeus": {
                                        "rubeus_table": 0,
                                        "rubeus_field": "pessoa.nomeSocial"
                                    },
                                    "logics": [
                                        {
                                            "id": 2743393,
                                            "field_settings_id": 756607,
                                            "rule_logic_id": 1,
                                            "field_compare_id": 113632,
                                            "report_id": null,
                                            "stage_id": null,
                                            "component_id": null,
                                            "feedback_id": null,
                                            "field_id": null,
                                            "action_id": null,
                                            "redirect_id": null,
                                            "rubeus_action_events_id": null,
                                            "integration_external_system_id": null,
                                            "integration_cielo_transparent_id": null,
                                            "totvs_instant_payment_id": null,
                                            "integration_edu_connect_pay_id": null,
                                            "fixed_value": "true",
                                            "data_layer_id": null,
                                            "rubeus_pay_id": null
                                        }
                                    ],
                                    "action_logic_id": 1,
                                    "condition_logic_id": 2,
                                    "mask": "",
                                    "case": null,
                                    "validators": {
                                        "message": "",
                                        "rules": [
                                            {
                                                "key": "maxLength",
                                                "name": "Máximo de caracteres",
                                                "value": 120,
                                                "type": "number",
                                                "message": "Ultrapassou o limite máximo de 120 caracteres."
                                            }
                                        ]
                                    }
                                },
                                {
                                    "field_id": 113892,
                                    "field_settings": 756608,
                                    "label": "E-mail",
                                    "type": "email",
                                    "multivalued": 0,
                                    "max_multivalued_options": null,
                                    "min_multivalued_options": null,
                                    "read_only": 0,
                                    "description": null,
                                    "ps_table": 0,
                                    "totvs": {
                                        "totvs_table": "SPSUSUARIO",
                                        "totvs_field": "EMAIL",
                                        "totvs_alternative_name": null
                                    },
                                    "rubeus": {
                                        "rubeus_table": 0,
                                        "rubeus_field": "pessoa.emailPrincipal"
                                    },
                                    "data_type": 2,
                                    "value": "emailCandidato",
                                    "mask": "",
                                    "case": null,
                                    "validators": {
                                        "message": "",
                                        "rules": [
                                            {
                                                "key": "required",
                                                "name": "Obrigatório",
                                                "value": true,
                                                "type": "boolean",
                                                "message": "Campo obrigatório."
                                            },
                                            {
                                                "key": "maxLength",
                                                "name": "Máximo de caracteres",
                                                "value": 60,
                                                "type": "number",
                                                "message": "Ultrapassou o limite máximo de 60 caracteres."
                                            }
                                        ]
                                    }
                                },
                                {
                                    "field_id": 113572,
                                    "field_settings": 756609,
                                    "label": "Celular",
                                    "type": "text",
                                    "multivalued": 0,
                                    "max_multivalued_options": null,
                                    "min_multivalued_options": null,
                                    "read_only": 0,
                                    "description": "De preferência, informe o seu WhatsApp.",
                                    "ps_table": 0,
                                    "totvs": {
                                        "totvs_table": "SPSUSUARIO",
                                        "totvs_field": "TELEFONE2",
                                        "totvs_alternative_name": null
                                    },
                                    "rubeus": {
                                        "rubeus_table": 0,
                                        "rubeus_field": "pessoa.telefonePrincipal"
                                    },
                                    "data_type": 2,
                                    "value": "celular",
                                    "mask": "(99) 99999-9999",
                                    "case": null,
                                    "validators": {
                                        "message": "",
                                        "rules": [
                                            {
                                                "key": "required",
                                                "name": "Obrigatório",
                                                "value": true,
                                                "type": "boolean",
                                                "message": "Campo obrigatório."
                                            },
                                            {
                                                "key": "maxLength",
                                                "name": "Máximo de caracteres",
                                                "value": 15,
                                                "type": "number",
                                                "message": "Ultrapassou o limite máximo de 15 caracteres."
                                            }
                                        ]
                                    }
                                }
                            ],
                            "buttons": [
                                {
                                    "button": 124245,
                                    "label": "Voltar",
                                    "name": "Voltar para forma de ingresso",
                                    "type": "button"
                                },
                                {
                                    "button": 242428,
                                    "label": "Avançar",
                                    "name": "Primeiro passo da Inscrição",
                                    "type": "button"
                                }
                            ]
                        },
                        "querys": []
                    },
                    "stage": {
                        "id": 68676,
                        "title": "Dados de inscrição",
                        "steps": [
                            {
                                "id": 80803,
                                "stage_id": 68676,
                                "position": 0,
                                "name": "Dados básicos",
                                "background": null
                            },
                            {
                                "id": 80804,
                                "stage_id": 68676,
                                "position": 1,
                                "name": "Curso de interessse",
                                "background": null
                            },
                            {
                                "id": 80805,
                                "stage_id": 68676,
                                "position": 2,
                                "name": "Concluindo a inscrição",
                                "background": null
                            }
                        ]
                    }
                },
                "token": "hQj3XSfSpdj6nW8fWhuXBpzBOkckli52NQg6EziP"
            }
        ```

## Enviar dados do formulário

Envia os dados preeenchidos no formulário e executa uma ação de botão

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/v1/submit

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `button` | `integer` | sim | Id do botão o qual quer que execute as ações. |
| `validate_on_server` | `boolean` | não | Ignorar validações. |
| `data` | `array` | sim | Array de dados dos campos ou dos componentes. |
| **↳** `field_id` | `integer` | condicional | Id do campo. |
| **↳** `component_id` | `integer` | condicional | Id do componente. |
| **↳** `value` | `any` | sim | valor do campo ou do componente. |
| `token` | `string` | sim | Token de sessão do candidato. |


??? Exemplos

    === "Envio"
        _JSON_:
        ``` JSON
        "data": [
            {
                "field_id": 445511,
                "value": "Aluno exemplo"
            },
            {
                "field_id": 111447,
                "value": "9999999999999"
            },
            {
                "field_id": 111144,
                "value": "exemplo@gmail.com"
            }
        ]
        ```
    === "Resposta"
        _JSON_:
        ``` JSON
            {
                "success": true,
                "data": {
                    "next": 80804,
                    "local": "step",
                    "token": "bsCSE9oCeDZpbHGB4Gc2tfe80GZ2ID6ZtdjCeZj4",
                    "redirect": {
                        "link": "",
                        "place_id": 80804,
                        "place_type_id": 1,
                        "same_place": false,
                        "stage_id": 68676,
                        "new_tab": 0,
                        "selective_process_id": 6190,
                        "redirect_id": 460873,
                        "person_id": 41141145,
                        "applyment_id": 2616515156,
                        "close_popup": 0
                    }
                }
            }
        ```     