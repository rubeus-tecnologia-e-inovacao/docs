# Agendamento

## Cadastro/Edição de Atividades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Agendamento/cadastroApi


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `string` | Não | Código de identificação da atividade, se enviar em branco, será criado uma nova atividade |
| `contato` | `string` | Sim | Nome da Atividade |
| `vencimento` | `string` | Sim | Data de Vencimento da Atividade |
| `formaContato` | `string` | Sim | 1 - Ativo; 2 - Receptivo; 0 -Nenhum |
| `tipo` | `string` | Sim | 1 - Ligação; 2 - Email; 3 - Mensagem; 4 - Visita; 5 - Tarefa; |
| `duracao` | `string` | Não | Duração sempre colocado em minutos exemplo: 5 horas = 300 minutos, então o valor de duracao será 300 |
| `descricao` | `string` | Não | Descrição breve da ativadade, máximo de 2000 caracteres |
| `concluido` | `string` | Não | --- |
| `responsavel` | `integer` | Não | Código de identificação do responsável pela atividade |
| `agendamentoUnico` | `string` | Não | --- |
| `assinatura` | `string` | Não | --- |
| `registroVinculadosId` | `string` | Não | --- |
| `registroVinculados` | `string` | Não | --- |
| `dados` | `string` | Sim | --- |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |



??? Exemplos

    === "Envio"

         _JSON_:
        ``` JSON
        {
            "id": "18",
            "contato": "Nome da Atividade",
            "vencimento": "2025-03-17 18:00:00",
            "formaContato": "1",
            "tipo": "5",
            "razaoOportunidade": "",
            "duracao": "",
            "descricao": "",
            "concluido": "",
            "tempoNotificacao": "",
            "tipoTempo": "",
            "responsavel": "66",
            "agendamentoUnico": "",
            "assinatura": "",
            "registroVinculadosId": " ",
            "registroVinculados": " ",
            "dados": "{\r\n\"processo\": 1,\r\n        \"idPessoaCrm\": \"1\",\r\n        \"codPessoa\": \"2\"\r\n    }",
            "origem": "",
            "token": ""
        }
        ```

    === "Resposta"

    _JSON_:
    ``` JSON
            "dados": {
                "id": "18",
                "status": "1",
                "statusNome": "Planejada",
                "tipo": "5",
                "tipoNome": "Tarefa",
                "contato": "Atividade para testar AP2",
                "oportunidade": false,
                "pessoa": "1",
                "pessoaNome": "daniel marcos teste",
                "email": "danielm2204@gmail.com",
                "telefone": "+5519982107049",
                "vencimento": "2025-03-17 18:00:00",
                "responsavel": "66",
                "responsavelNome": "Daniel Marcos",
                "momentoConcluido": null
            }
    ```

## Listar Atividades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Agendamento/listarAgendamentos


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Não | Código da Atividade. |
| `pesquisa` | `string` | Não |  |
| `filtro` | `integer` | Não | --- |
| `status` | `string` | Não | --- |
| `atividade` | `string` | Não | --- |
| `razaoOportunidade` | `string` | Não | --- |
| `statusOportunidade` | `string` | Não | --- |
| `objecao` | `string` | Não | --- |
| `curso` | `integer` | Não | --- |
| `ofertaCurso` | `string` | Não | --- |
| `responsavel` | `integer` | Não | --- |
| `vencimento` | `date` | Não | --- |
| `conclusao` | `string`  | Não | --- |
| `criacao` | `date` | Não | --- |
| `formaContato` | `integer` | Não | --- |
| `tipo` | `integer` | Não | --- |
| `unidade` | `string` | Não | --- |
| `localOferta` | `string` | Não | --- |
| `processoSeletivo` | `string` | Não | --- |
| `processo` | `integer` | Não | --- |
| `etapa` | `string` | Não | --- |
| `tag` | `string` | Não | --- |
| `campoPersonalizado` | `integer` | Não | --- |
| `retornarDadosBasicos` | `string` | Não | --- |
| `limite` | `integer` | Não | Limite de resposta no retorno |
| `zerouFiltro` | `string` | Não | --- |
| `quantidade` | `integer` | Não | --- |
| `comunicacaoContato` | `integer` | Não | --- |
| `ordenacao` | `string` | Não | --- |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |
| `colunaPesquisa` | `string` | Sim | --- |



??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
            "dados": {
                "qtdTotal": 1,
                "dados":
                    {
                        "id": "1",
                        "vencimento": "2025-03-11 16:00:00",
                        "tipo": "5",
                        "contato": "",
                        "pessoa": "2",
                        "pessoaCodigo": null,
                        "pessoaNome": "Nome Completo",
                        "pessoaCpf": null,
                        "status": "2",
                        "statusNome": "Atrasada",
                        "processo": null,
                        "processoNome": null,
                        "descricao": "",
                        "tipoNome": "",
                        "duracao": "300",
                        "formaContato": "1",
                        "email": "email@rubeus.com",
                        "telefone": "1234",
                        "responsavel": "1234",
                        "responsavelNome": "Nome Completo",
                        "oportunidade": null,
                        "curso": null,
                        "contextoSubItem": null,
                        "cursoNome": null,
                        "momentoConcluido": null,
                        "momento": "2025-03-11 15:25:10",
                        "processoSeletivo": null,
                        "processoSeletivoNome": null,
                        "contextoProcesso": null,
                        "unidade": null,
                        "unidadeNome": null,
                        "razaoOportunidade": null,
                        "razaoOportunidadeNome": null,
                        "statusOportunidade": null,
                        "statusOportunidadeNome": null,
                        "localOferta": null,
                        "localOfertaNome": null,
                        "contextoLocal": null,
                        "etapa": null,
                        "etapaNome": null,
                        "objecao": null,
                        "objecaoNome": null,
                        "contatoVinculado": null,
                        "contatoVinculadoNome": null
                    }
            },
    ```

## Excluir Atividades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Agendamento/excluir


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Não | Código de identificação (ID)* da atividade. *Utilize o [método de listagem](/api_crm/agendamentos/#listar-atividades) para obter os códigos de identificação correspondentes. |
| `origem` | `integer` | Não | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Não | Chave de acesso única referente ao canal. |