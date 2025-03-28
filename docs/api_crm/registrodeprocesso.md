# Registro de processo

## Alterar contato

Este método tem a função de vincular ou remover contatos relacionados de um registro de processo.

!!! done ""
    
    <strong class='REST PUT'>PUT</strong><strong class="MIME">application/json</strong> /api/Registro/alterarPessoasOportunidade

!!! warning "Obrigatoriedade condicional"

    Neste caso, se for passado o `codRegistro`, não serão necessários os outros parâmetros condicionais, caso contrário os demais deverão ser passados.

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
    
## Listar Etapas

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Processo/listarEtapas


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Código de identificação (ID)* do tipo processo ao qual você deseja listar as etapas. *Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": {
            "id": "0",
            "indice": "0",
            "titulo": "Sem etapa"
        }
    }
    ```


## Listar Processos

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Processo/listarProcessos


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `todosDados` | `boolean` | Não | --- |
| `etapas` | `boolean` | Não | 1 - msotra etapas e 0 - nao mostra etapas |
| `origem` | `integer` | Não | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Não | Chave de acesso única referente ao canal. |
| `app` | `boolean` | Não | enviar como 1 |


??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": {
            "id": "0",
            "indice": "0",
            "titulo": "Sem etapa"
        }
    }
    ```

## Listar Oportunidades por Processo

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Oportunidade/listarOportunidades


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `processo` | `integer` | Não | Id do Processo |
| `status` | `string` | Não | Id do status |
| `colunaPesquisa` | `string` | Não | Nome referente a coluna a ser pesquisada |
| `pesquisa` | `string` | Não | Trecho a ser pesquisado de acordo com o valor da colunaPesquisa |
| `origem` | `integer` | Não | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Não | Chave de acesso única referente ao canal. |


??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": {
            "origem": "",
            "token": "",
            "processo": ,
            "status" : [],
            "colunaPesquisa": "",
            "pesquisa": ""
        }
    }
    ```


## Alterar Cursos

!!! done ""

    <strong  class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Oportunidade/alterarCursos


| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Código de identificação (ID)* do registro do processo (Oportunidade) ao qual você deseja listar as etapas. 
**Utilize o método de listagem para obter os códigos de identificação correspondentes. | 
| `cursos` | `string` | Sim | Código do contato | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Envio"

         _JSON_:
        ``` JSON
        {
            "id": 1,
            "origem": "1",
            "token": "token",
            "cursos":
                {
                    "id": "1"
                }
        }
        ```

    === "Resposta"

        _JSON_:
        ``` JSON
        {
            "success": true,
            "dados": [
                {
                    "id": "1",
                    "nome": "Nome do curto",
                    "valor": "1.23",
                    "unidade": "1",
                    "nivelEnsino": "4",
                    "processoSeletivo": null,
                    "processoSeletivoNome": null,
                    "contextoSubItem": "1",
                    "contextoProcesso": null,
                    "imagem": "img/1.svg",
                    "principal": "1"
                }
            ],
        }
        ```

## Alterar Etapa

!!! done ""

    <strong  class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Oportunidade/alterarEtapa


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Id da Oportunidade. |
| `etapa` | `string` | Sim | Código da Etapa |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |

??? Exemplos

    === "Envio"

         _JSON_:
        ``` JSON
        {
            "id": 1,
            "etapa": "1",
            "origem": "1",
            "token": "token",
        }
        ```

    === "Resposta"

        _JSON_:
        ``` JSON
        {
            "success": true
        }
        ```

## Alterar Pessoas

!!! done ""

    <strong  class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Oportunidade/alterarPessoas


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Id da Oportunidade. |
| `pessoas` | `string` | Sim | --- |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |

??? Exemplos

    === "Envio"

         _JSON_:
        ``` JSON
        {
            "id": "1",
            "pessoas": [
                {
                    "id": "4",
                    "tipo": "1",
                    "principal": "1",
                    "tipoNome": "Aluno",
                    "nome":"Nome do Aluno"
                }
            ],
            "origem": "5",
            "token": "046cf582e8ae77132a307b86d407ccaf"
        }
        ```

    === "Resposta"

        _JSON_:
        ``` JSON
        {
            "success": true
        }
        ```

## Alterar responsável

!!! done ""

    <strong  class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Oportunidade/alterarResponsavel


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Id da Oportunidade. |
| `responsavel` | `integer` | Sim | Id do Responsável |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |

??? Exemplos

    === "Envio"

         _JSON_:
        ``` JSON
        {
            "id": "16",
            "responsavel": "",
            "origem": "5",
            "token": "SEuToken"
        }
        ```

    === "Resposta"

        _JSON_:
        ``` JSON
        {
            "success": true
        }
        ```

## Alterar Dados

!!! done ""

    <strong  class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Oportunidade/alterarDados


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Sim | Id da Oportunidade. |
| `notaEnem` | `string` | Não | Nota do candidato no Enem |
| `dataAtividade` | `string` | Não | Data da atividade |
| `localOferta` | `integer` | Não | Id do local da oferta |
| `responsavel` | `integer` | Sim | Id do Responsável |
| `razaoOportunidade` | `integer` | Não | --- |
| `formaIngresso` | `string` | Não | Descrição da forma de ingresso |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |

??? Exemplos

    === "Envio"

         _JSON_:
        ``` JSON
        {
            "id": "1",
            "notaEnem": "100",
            "dataAtividade": "2025-03-21 12:00",
            "localOferta": "1",
            "responsavel": "00", 
            "razaoOportunidade": "2",
            "formaIngresso": "vestibular",
            "origem": "1",
            "token": "SeuToken"
        }
        ```

    === "Resposta"

        _JSON_:
        ``` JSON
        {
            "success": true
        }
        ```