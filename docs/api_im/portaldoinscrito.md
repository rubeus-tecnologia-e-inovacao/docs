## Dados do portal do inscrito

Lista informações do portal do inscrito e a inscrição atual, passando o applyment_id do candidato pode listar o processo em especifico

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">Application/JSON</strong> /api/v1/login/portal

| header | | 
| --- | --- |
| `Authorization` | Bearer <strong> API_KEY </strong>  |

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `portal` | `integer` | sim | Id do portal. |
| `applyment_id` | `integer` | nao | Id da inscrição, caso esteja presente será trocado a inscrição atual do candidato |
| `token` | `integer` | sim | Token de sessão do candidato. |


??? Exemplos

    === "Envio"
         _JSON_:
        ``` JSON
        {
            "portal": 12,
            "token": "nh6dJ4xvSTDiswWeNlu5TGl3toiDHiV1YOEujsOT"
        }
        ```

    === "Resposta"
        _JSON_:
        ``` JSON
        {
            "success": true,
            "data": {
                "current_process": {
                    "applyment_information": {
                        "course": "DIREITO",
                        "campus": "Campus - São Caetano do Sul",
                        "modality": "Presencial",
                        "form_of_ingress": "Rubeus: Prova online",
                        "applyment_edit_page_id": 1434,
                        "selective_process_id": 6190
                    },
                    "stages": [
                        {
                            "id": 68676,
                            "process": 6190,
                            "title": "Dados de inscrição",
                            "status": 1,
                            "position": 0,
                            "cta_link": "demonstracao\/passo\/80803",
                            "feedback": {
                                "conclusive": 1,
                                "cta_text": "null",
                                "complementary_text": "Concluída"
                            }
                        },
                        {
                            "id": 68678,
                            "process": 6190,
                            "title": "Documentos inscrição",
                            "status": 1,
                            "position": 2,
                            "cta_link": null,
                            "feedback": {
                                "conclusive": 0,
                                "cta_text": null,
                                "complementary_text": "Não possui documentos"
                            }
                        },
                        {
                            "id": 68677,
                            "process": 6190,
                            "title": "Avaliação online",
                            "status": 1,
                            "position": 3,
                            "cta_link": null,
                            "feedback": {
                                "conclusive": 1,
                                "cta_text": null,
                                "complementary_text": "Aprovado"
                            }
                        },
                        {
                            "id": 68679,
                            "process": 6190,
                            "title": "Pré-matrícula",
                            "status": 1,
                            "position": 6,
                            "cta_link": "demonstracao\/passo\/80809",
                            "feedback": {
                                "conclusive": 0,
                                "cta_text": "Realizar",
                                "complementary_text": "Pendente"
                            }
                        }
                    ]
                },
                "process_list": [
                    {
                        "id": 6190,
                        "portal": 1266,
                        "name": "Rubeus: Prova online",
                        "indentifier": null,
                        "unit": "Matriz",
                        "unit_indentifier": null,
                        "status": 1,
                        "applyment_id": 2827344,
                        "course": "DIREITO - Noite",
                        "current_process": 1
                    },
                    {
                        "id": 6191,
                        "portal": 1266,
                        "name": "Rubeus: ENEM",
                        "indentifier": null,
                        "unit": "Matriz",
                        "unit_indentifier": null,
                        "status": 1,
                        "applyment_id": 2827327,
                        "course": "DIREITO - Noite",
                        "current_process": 0
                    },
                    {
                        "id": 6194,
                        "portal": 1266,
                        "name": "Rubeus: Pós Graduação",
                        "indentifier": null,
                        "unit": "Matriz",
                        "unit_indentifier": null,
                        "status": 1,
                        "applyment_id": 2827336,
                        "course": "Gestão Empresarial - NOITE",
                        "current_process": 0
                    }
                ],
                "extra_settings": {
                    "name": "Superior - Demonstração",
                    "page_to_edit_applyment": {
                        "local": "page",
                        "id": 1434
                    },
                    "page_to_edit_user_details": {
                        "local": "page",
                        "id": 1433
                    },
                    "lgpd_popup_id": {
                        "local": "popup",
                        "id": 2748
                    },
                    "log_off_link": false
                }
            }
        }
        ```