# Agendamento

## Cadastro/Edição de atividades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Agendamento/cadastroApi


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Não | Código de identificação (ID)\* da atividade. Caso este campo seja deixado em branco, uma nova atividade será criada automaticamente. \*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `contato` | `string` | Sim | Nome da atividade. |
| `vencimento` | `date` | Sim | Data de vencimento da atividade. <br>**Padrão: YYYY-MM-DD HH-MM-SS**|
| `formaContato` | `integer` | Sim | Envie a opção correspondente à forma de contato desejada: <br>Nenhum = 0. <br>Ativo = 1. <br> Receptivo = 2. |
| `tipo` | `integer` | Sim | Envie a opção correspondente ao tipo de atividade desejado:<br>Ligação = 1. <br>E-mail = 2. <br>Mensagem = 3.  <br>Visita = 4  <br>Tarefa = 5 |
| `duracao` | `integer` | Não | A duração da atividade deve ser informada sempre em minutos. Por exemplo, para uma duração de 5 horas, o valor a ser inserido será 300. |
| `descricao` | `string` | Não | Descrição breve da ativadade, máximo de 2000 caracteres |
| `concluido` | `integer` | Não | Envie a opção correspondente ao status da atividade: <br>Atividade concluída = 1. <br>Atividade planejada = 0. |
| `responsavel` | `integer` | Não | Código de identificação (ID)\* do responsável pela atividade. \*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `assinatura` | `integer` | Não | Código de identificação (ID)\* da assinatura associada à atividade. Este atributo deve ser utilizado caso a LGPD esteja ativada na Plataforma Rubeus. \*Utilize o [método de listagem](https://docs.rubeus.com.br/api_crm/metodosdelistagem/#listar-assinaturas-ativas) para obter os códigos de identificação correspondentes. |
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

## Listar atividades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Agendamento/listarAgendamentos


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Não | Código de identificação (ID) da atividade. |
| `pesquisa` | `string` | Não | Trecho a ser pesquisado de acordo com o valor do atributo “colunaPesquisa”. |
| `colunaPesquisa` | `enum` | Não | Nome referente à informação a ser pesquisada no campo de pesquisa. <br><br>** Atributos <br><br> 'nomePessoa', 'pessoaEmail', 'pessoaTelefone', 'processo', 'nomeOferta', 'tituloAtividade', 'responsavelAtividade', 'vencimentoAtividade', 'momentoConclusaoAtividade', 'momentoCriacaoAtividade', 'idRegistro' ** |
| `filtro` | `integer` | Não | Código de identificação (ID)\* do filtro a ser aplicado. O retorno será feito de acordo com as condições do filtro escolhido.<br> \*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `status` | `integer` | Não | Envie a opção correspondente ao status da atividade: <br>Atividade planejada = 1  <br>Atividade atrasada = 2  <br>Atividade concluída = 3 |
| `atividade` | `string` | Não | Título da atividade |
| `razaoOportunidade` | `integer` | Não | Código de identificação (ID)\* do resumo atual dos registros do processo (oportunidades). <br> Serão listadas as atividades que tiverem registros associados a elas, com o respectivo resumo.<br>\*Utilize o método de listagem para obter os códigos de identificação correspondentes. <br><br> O termo ***Razão oportunidade*** é identificado como ***Resumo atual*** na Plataforma Rubeus. |
| `statusOportunidade` | `integer` | Não | Envie a opção correspondente ao status do registro do processo (oportunidade): <br>Em andamento = 1<br>Ganho = 2<br>Perdido = 3 <br><br>Serão listadas as atividades que tiverem registros associados a elas, com o respectivo status. |
| `objecao` | `integer` | Não | Código de identificação (ID)\* da objeção dos registros do processo (oportunidades). Serão listadas as atividades que tiverem registros associados a elas, com o respectivo resumo. <br><br>\*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `curso` | `integer` | Não | Código de identificação (ID)\* do curso associado aos registros do processo (oportunidades).<br><br>\*Utilize o [método de listagem](https://docs.rubeus.com.br/api_crm/curso/#listar-cursos) para obter os códigos de identificação correspondentes. |
| `ofertaCurso` | `integer` | Não | Código de identificação (ID)\* da oferta de curso associada aos registros do processo (oportunidades).<br><br>\*Utilize o [método de listagem](https://docs.rubeus.com.br/api_crm/curso/#listar-ofertas) para obter os códigos de identificação correspondentes. |
| `responsavel` | `integer` | Não | Código de identificação (ID)\* do usuário que é responsável pela atividade. <br> <br> \*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `vencimento` | `date` | Não | Data de vencimento da atividade. Serão listadas apenas as atividades com data de vencimento correspondente à data informada. |
| `conclusao` | `date`  | Não | Data de conclusão da atividade. Serão listadas apenas as atividades com data de conclusão correspondente à data informada. |
| `criacao` | `date` | Não | Data de criação da atividade. Serão listadas apenas as atividades com data de criação correspondente à data informada. |
| `formaContato` | `integer` | Não | Envie a opção correspondente à forma de contato da atividade: <br>Nenhum = 0 <br> Ativo = 1 <br>Receptivo = 2 |
| `tipo` | `integer` | Não | Envie a opção correspondente ao tipo de atividade desejado: <br>Ligação = 1.  <br>E-mail = 2.  <br>Mensagem = 3.   <br>Visita = 4   <br>Tarefa = 5  
 |
| `unidade` | `integer` | Não | Código de identificação (ID)\* da unidade associada aos registros do processo (oportunidades).<br><br> \*Utilize o [método de listagem](https://docs.rubeus.com.br/api_crm/unidade/#listar-unidades) para obter os códigos de identificação correspondentes. |
| `localOferta` | `integer` | Não | Código de identificação (ID)\* do local de oferta associado aos registros do processo (oportunidades). <br><br> \*Utilize o [método de listagem](https://docs.rubeus.com.br/api_crm/locaisdeoferta/) para obter os códigos de identificação correspondentes. |
| `processoSeletivo` | `integer` | Não | Código de identificação (ID)\* do processo seletivo associado aos registros do processo (oportunidades). <br><br> \*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `processo` | `integer` | Não | Código de identificação (ID)\* do processo que os registros estão vinculados. <br><br>\*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `etapa` | `integer` | Não | Código de identificação (ID)\* da etapa que os registros estão atualmente.<br><br>\*Utilize o método de listagem para obter os códigos de identificação correspondentes. |
| `tag` | `string` | Não | Texto a ser pesquisado conforme o valor da tag atribuída ao contato. |
| `campoPersonalizado` | `object` | Não | Usado para atribuir algum campo específico que não está presente no escopo da API.<br>**Os campos devem ser informados como no exemplo abaixo:** <br>`#!json camposPersonalizados : { coluna: "valor" }` <br>Os nomes das colunas dos campos personalizados são informados no método "Listar campos personalizados". O valor poderá ser uma string ou um array de strings, caso o campo seja multi valorado. |
| `retornarDadosBasicos` | `string` | Não | --- |
| `limite` | `integer` | Não | Limite de resposta dos dados retornados. Por padrão o limite adotado é de 10000 linhas.|
| `zerouFiltro` | `string` | Não | --- |
| `quantidade` | `integer` | Não | Divide o retorno de acordo com o valor inserido na quantidade. |
| `comunicacaoContato` | `integer` | Não | --- |
| `ordenacao` | `string` | Não | --- |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Sim | Chave de acesso única referente ao canal. |

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

## Excluir atividades

!!! done ""

    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Agendamento/excluir


| Atributos | Tipo | Obrigatoriedade | Descrição |
| --- | --- | --- | --- |
| `id` | `integer` | Não | Código de identificação (ID)* da atividade. *Utilize o [método de listagem](/api_crm/agendamentos/#listar-atividades) para obter os códigos de identificação correspondentes. |
| `origem` | `integer` | Não | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). |
| `token` | `string` | Não | Chave de acesso única referente ao canal. |