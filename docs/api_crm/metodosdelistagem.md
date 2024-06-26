# Métodos de listagem

Assim como descrito na seção de [autenticação](/api_crm/apresentacao/#autenticacao), os métodos de listagem também utilizam os atributos `origem` e `token` para a autenticação do usuário no sistema.

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

## Listar níveis de ensino

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Registro/listarNiveisEnsino

Método utilizado para listar os níveis de ensino para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "1",
                "codigo": "1",
                "titulo": "Graduação"
            }
        ]
    }
    ```

---

## Listar modalidades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Modalidade/listarModalidades

Método utilizado para listar as modalidades para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "1",
                "padrao": "1",
                "titulo": "Presencial"
            }
        ]
    }
    ```

---

## Listar tipos do contato

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Registro/listarTiposPessoa

Método utilizado para listar os tipos de contatos para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "1",
                "titulo": "Aluno"
            }
        ]
    }
    ```

---

## Listar deficiências

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Contato/listarDeficiencias

Método utilizado para listar os tipos de deficiências para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "1",
                "nome": "Deficiente F\u00edsico",
                "tipos": [
                    {
                        "id": "1",
                        "nome": "Paraplegia"
                    },
                    {
                        "id": "2",
                        "nome": "Tetraplegia"
                    },
                    {
                        "id": "3",
                        "nome": "Hemiplegia"
                    },
                    {
                        "id": "4",
                        "nome": "Paralisia Cerebral"
                    },
                    {
                        "id": "5",
                        "nome": "Amputa\u00e7\u00e3o"
                    },
                    {
                        "id": "6",
                        "nome": "Defici\u00eancia F\u00edsica"
                    },
                    {
                        "id": "7",
                        "nome": "Defici\u00eancia M\u00faltipla"
                    }
                ]
            }
        ]
    }
    ```

---

## Listar perfis de usuários

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/PerfilUsuario/listar

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `retornarUsuarios` | `integer` | Não | Retorna os usuários que contêm o perfil perfil. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "1",
                "nome": "Administrador",
                "cor": "#808080",
                "permissoes": "198",
                "ultimaAlteracao": {
                    "momento": null,
                    "usuario": null,
                    "usuarioNome": null
                }
            },
            {
                "id": "2",
                "nome": "Líder de equipe",
                "cor": "#FFB946",
                "permissoes": "110",
                "ultimaAlteracao": {
                    "momento": null,
                    "usuario": null,
                    "usuarioNome": null
                }
            },
            {
                "id": "3",
                "nome": "Consultor",
                "cor": "#F7685B",
                "permissoes": "44",
                "ultimaAlteracao": {
                    "momento": null,
                    "usuario": null,
                    "usuarioNome": null
                }
            }
        ]
    }
    ```

---

## Listar logs da API

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Log/listarLogs

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `metodo` | `string` | Não | Retornar os logs somente do método enviado, caso não seja enviado nenhum, todos serão considerados.<hr>**Exemplo:** "Contato/cadastro" | 
| `de` | `date` | Condicional | Data inicial de retorno, deve ser enviado caso seja enviado o campo "ate" | 
| `ate` | `date` | Condicional | Data final de retorno, deve ser enviado caso seja enviado o campo "de" | 
| `origemFiltro` | `integer` | Não | Retornar os logs somente da origem enviada, caso não seja enviado nenhuma, todas serão consideradas | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "dados": "JSON com os dados enviados",
                "resposta": "{\"success\":true,\"dados\":1}",
                "metodo": "Pessoa/cadastro",
                "sucesso": "1",
                "origem": "3",
                "origemNome": "Ficha de inscrição",
                "momento": "2018-12-04 15:14:14"
            }
        ]
    }
    ```

## Listar cidades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Contato/listarCidade

Método utilizado para listar as cidades para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "resultado": {
            "success": true,
            "dados": [
                {
                    "id": "79",
                    "titulo": "Acrelândia - AC"
                }
            ]
        }
    }
    ```

## Listar Países

!!! done ""

    <strong class='REST GET'>GET</strong><strong class="MIME">application/json</strong> /api/Paises/consultarPaises

Método utilizado para listar os países para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
    "success": true,
        "dados": [
        {
            "sigla": "AF",
            "id": "1",
            "nome": "Afeganistão"
        },
        {
            "sigla": "ZA",
            "id": "2",
            "nome": "África do Sul"
        }
        ]
    }
    ```

## Listar bases legais

!!! done ""

    <strong class='REST GET'>GET</strong><strong class="MIME">application/json</strong> /api/Lgpd/listarBasesLegais

Método utilizado para listar as bases legais disponíveis no Rubeus para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "3",
                "base": "Execução de contrato"
            },
            {
                "id": "4",
                "base": "Consentimento do titular"
            },
            {
                "id": "5",
                "base": "Não aplicável"
            },
            {
                "id": "6",
                "base": "Legítimo interesse"
            },
            {
                "id": "7",
                "base": "Obrigação legal"
            },
            {
                "id": "8",
                "base": "Estudos e pesquisa"
            },
            {
                "id": "9",
                "base": "Exercício de direitos "
            },
            {
                "id": "10",
                "base": "Tutela da saúde"
            },
            {
                "id": "11",
                "base": "Proteção da vida"
            },
            {
                "id": "12",
                "base": "Proteção ao crédito"
            }
        ]
    }
    ```

## Listar assinaturas ativas

!!! done ""

    <strong class='REST GET'>GET</strong><strong class="MIME">application/json</strong> /api/Lgpd/listarAssinaturasAtivas

Método utilizado para listar as assinaturas disponíveis no Rubeus para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "1",
                "nome": "Comunicação de atendimento ao cliente",
                "descricao": "Receba solicitações de feedback e informações de atendimento ao cliente.",
                "assinatura": "Serviço E-mail | Comunicação de atendimento ao cliente"
            }
        ]
    }
    ```