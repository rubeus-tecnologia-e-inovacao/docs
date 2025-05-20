# Evento

Os eventos são exibidos na linha do tempo do contato (*imagem abaixo*) e também podem ser utilizados como gatilhos no fluxo de automação.

<div id="modalImage" class="modal">
    <span class="close">
    <img src="/assets/images/baseline_clear_white_48dp.png" style="width: 32px">
    </span>
    <img class="modal-content" id="image">
    <div id="caption"></div>
</div>
<img class="image" 
     id="tela-eventos" 
     alt="Tela da Plataforma Rubeus para acessar o canal e token da API" 
     title="Tela da Plataforma Rubeus para acessar o canal e token da API" 
     src="/assets/images/api_crm/tela-eventos.png" 
     onclick="modalImg('tela-eventos')">

Cada evento deve possuir um [tipo de evento](#listar-tipos-de-eventos) e um [contato](/api_crm/contato/#cadastro-de-contato) para serem enviados ao Rubeus, e caso o tipo de evento esteja devidamente configurado ou utilizado em um fluxo de automação, como gatilho, este evento irá criar um registro de processo.

## Cadastro de eventos

Método para cadastro de eventos na Plataforma Rubeus.

!!! done ""

	<strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Evento/cadastro

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `codigo` | `string` | Não | Chave única de identificação do evento enviado. <br>**Caso queira editar um evento criado basta informar o código do evento criado.** | 
| `tipo` | `integer` | <rb-tooltip text="Torna-se obrigatório caso não seja informado um `codTipo`">Condicional </rb-tooltip> | Código de identificação do tipo do evento. <br><br>[Listar Tipos de Eventos](#listar-tipos-de-eventos)<br>*Enviar o campo* `id`<br><br>[Cadastrar Tipos de Eventos](#cadastro-de-tipos-de-evento) | 
| `codTipo` | `string` | <rb-tooltip text="Torna-se obrigatório caso não seja informado um `tipo`">Condicional </rb-tooltip> | Código externo enviado no cadastro do tipo de evento.<br><br>[Listar Tipos de Eventos](#listar-tipos-de-eventos)<br>*Enviar o campo* `codigo`<br><br>[Cadastrar Tipos de Eventos](#cadastro-de-tipos-de-evento) | 
| `descricao` | `string` | Não | A Descrição pode ser enviada no formato HTML para deixar a apresentação dos dados do evento na linha do tempo mais organizados.<br><i>**É opcional o envio com as tags HTML.**</i> | 
| `pessoa` | `object` | Sim | Vincule o contato ao evento. <hr>*Veja abaixo um exemplo do formato para envio.*<br>`#!json { "codigo": "1" }` (O mesmo código enviado no cadastro do contato, é necessário que a origem do contato na base e a origem do evento sejam o mesmo) ou `#!json { "id": 1 }` (O id retornado no cadastro do contato.) | 
| `pessoasSecundarias` | `array` | Não | Vincule um ou mais contatos relacionados à um registro de processo, utilizando o atributo `tipo` para informar o [tipo do contato](/api_crm/metodosdelistagem/#listar-tipos-do-contato). <hr>*Veja abaixo um exemplo do formato para envio.*<br>`#!json [{ "codigo": "1", "tipo": "1" }]` (O mesmo código enviado no cadastro do contato). | 
| `codOferta` | `string` | Não | Código de identificação externa da oferta do curso.<br>**O código da oferta do curso é obrigatório caso se deseje vincular um curso em um registro na Plataforma Rubeus, caso o `oferta` não seja enviado.<br>O canal (origem) do evento deve ser o mesmo da oferta e do curso enviado.** | 
| `codCurso` | `string` | Não | Código de identificação externo do curso. |
| `curso` | `string` | Não | Identificação da oferta do curso.<br>**O id da oferta do curso é obrigatório caso se deseje vincular um curso em um registro na Plataforma Rubeus, caso o `codOferta` não seja enviado.<br>No cenário onde é enviado o id da oferta, o canal (origem) do evento, não precisa ser necessariamente o mesmo da oferta e do curso.** |
| `codRegistro` | `string` | Não | Habilita a criação de mais registros por oferta, sempre criando um **novo registro** independente dos dados, desde que, o código passado seja único. | 
| `novoCodRegistro` | `string` | Não | O código passado neste campo atualizará o registro na próxima passagem pelo fluxo de automação | 
| `cursosSecundarios` | `array[] of objects` | Não | O campo serve para definir os cursos secundários do registro de processo. | 
| **↳** `cursosSecundarios.codOferta` | `string` | <rb-tooltip text="Torna-se obrigatório caso não seja informado o atributo `codCurso` no objeto">Condicional </rb-tooltip> | Informação obrigatória caso seja enviado o cursosSecundarios<br>`#!json [{"codOferta": "oferta-1"}]` | 
| **↳** `cursosSecundarios.codCurso` | `string` | <rb-tooltip text="Torna-se obrigatório caso não seja informado o atributo `codOferta` no objeto">Condicional </rb-tooltip> | Informação obrigatória caso seja enviado o cursosSecundarios<br>`#!json [{"codCurso": "curso-1"}]` | 
| `codLocalOferta` | `string` | Não | Código de identificação do local da oferta. | 
| `data` | `dateTime` | Não | A data do evento é utilizada para configurar gatilhos de fluxo que são disparados X (tempo) antes da data enviada.<br>Essa data é muito utilizada para atividades como data da prova, entrevista e visitas dos candidatos.<br>**Padrão: YYYY-MM-DD hh:mm:ss** | 
| `tipoData` | `string` | <rb-tooltip text="Torna-se obrigatório caso seja informado a `data` no campo acima">Condicional </rb-tooltip> | O tipo da data tem o propósito de diferenciar os eventos com datas um do outro caso seja usado mais de uma atividade. Para a data da atividade funcionar corretamente este campo é necessário. | 
| `momento` | `dateTime` | Não | Momento no qual o evento ocorreu. Caso não seja informado o sistema irá informar a data e hora atual.<br>**Padrão: YYYY-MM-DD hh:mm:ss** | 
| `notaEnem` | `float` | Não | A nota do enem é usada para ser vinculada a um registro de processo caso o evento esteja vinculado a um curso. | 
| `compareceuAtividade` | `integer` | Não | Campo para informar se o contato compareceu à atividade<br>**Padrão: 1 para** `sim` **ou 0 para** `não` | 
| `formaIngresso` | `string` | Não | Forma de ingresso do registro de processo. | 
| `dataVencimento` | `dateTime` | Não | Data de vencimento da atividade que será criada caso seja configurado no fluxo de automação. | 
| `camposPersonalizados` | `object` | Não | Usado para atribuir algum campo específico que não está presente no escopo da API.<hr>**Os campos devem ser informados como no exemplo abaixo**:<br><br>`#!json camposPersonalizados : { coluna: "valor" }`<hr>Os nomes das colunas dos campos personalizados são informados no método [cadastro de campo personalizado](/api_crm/campopersonalizados/#listar-campos-personalizados), o valor poderá ser uma string normal ou um array de strings caso o campo seja multi valorado. | 
| `dadosOportunidade` | `object` | Não | Serve para poder enviar os dados do registro de processo caso queira alterá-la. | 
| **↳** `dadosOportunidade.codOferta` | `string` | Condicional | Informação obrigatória caso seja enviado o dadosOportunidade | 
| **↳** `dadosOportunidade.codCurso` | `string` | Condicional | Informação obrigatória caso seja enviado o dadosOportunidade | 
| **↳** `dadosOportunidade.codPessoa` | `string` | Condicional | Informação obrigatória caso não tenha `idPessoa` e seja enviado o dadosOportunidade | 
| **↳** `dadosOportunidade.idPessoa` | `string` | Condicional | Informação obrigatória caso não tenha `codPessoa` e seja enviado o dadosOportunidade | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Envio"

        _JSON_:
        ``` JSON
        {
            "codigo": "evento-1",
            "tipo": "5",
            "codTipo": "primeira-etapa",
            "descricao": "Primeira etapa do processo seletivo",
            "pessoa": {
                "codigo": "contato-1",
                "id": "1"
            },
            "pessoasSecundarias": [
                {
                    "codigo": "contato-2",
                    "id": "2",
                    "tipo": "1"
                }
            ],
            "codOferta": "oferta-1",
            "codCurso": "curso-1",
            "oferta": 1,
            "curso": 1,
            "codRegistro": "registro-1",
            "cursosSecundarios": [
                {
                    "codOferta": "oferta-2"
                },
                {
                    "codCurso": "curso-3"
                }
            ],
            "codLocalOferta": "local-oferta-1",
            "data": "2021-10-18 18:30:00",
            "tipoData": "prova",
            "momento": "2021-09-18 10:45:13",
            "notaEnem": "706.78",
            "compareceuAtividade": "0",
            "formaIngresso": "",
            "dataVencimento": "2021-10-19 18:30:00",
            "camposPersonalizados": {
                "exemplo_compl_proc": "teste",
                "exemplo-multi_compl_proc": [
                    "teste",
                    "exemplo"
                ]
            },
            "dadosOportunidade": {
                "codOferta": "oferta-1",
                "codCurso": "curso-1",
                "codPessoa": "pessoa-1"
            },
            "origem": "1",
            "token": "token"
        }
        ```

    === "Resposta"

        _JSON_:
        ``` JSON
        {
            "success": true,
            "dados": {
                "id": "14",
                "descricao": "<p><b style=\"padding-top:10px\">Descri\u00e7\u00e3o: <\/b>EXEMPLO<br><b style=\"padding-top:10px\">Respons\u00e1vel: <\/b>Matheus Amaral<\/p>",
                "momento": "2019-02-22 11:12:28",
                "pessoa": "9",
                "tipo": "1",
                "tipoNome": "Foi cadastrado",
                "imagem": null,
                "origem": "1",
                "origemNome": "CRM"
            }
        }
        ```

## Cadastro de tipos de evento

Os tipos de eventos são utilizados para categorizar os eventos externos enviados por cada canal de captação.

!!! done ""

	<strong  class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Evento/cadastroTipoEvento

| Atributos               | Tipo    | Obrigatoriedade | Descrição                                                                                   |
| ------------------------| ------- | ---------------- | ------------------------------------------------------------------------------------------- |
| `codigo`                | `string`| Não              | Código de identificação externa.                                                            |
| `titulo`                | `string`| Sim              | Título para o tipo do evento. Limite de caracteres: 255.                                    |
| `fluxo`                 | `integer`| Não             | Campo que identifica se o evento faz parte do fluxo de compra do cliente ou não. Caso faça, ele será respeitado na condição do fluxo que verifica a quanto tempo ele não avança no fluxo.<br><br>**1 para _Sim_**, **0 para Não**. <br><br> Padrão: 0. |
| `formaCriacaoOportunidade` | `integer` | Sim          | Campo que identifica a forma de criação da registro quando o evento chegar em fluxo de automação.<br><br>**_1 para_** O evento sempre criará um registro no processo,<br><br> **_2 para_** O evento criará um registro no processo somente se alguma ação for realizada no fluxo de automação,<br><br> **_3 para_** O evento nunca criará um registro no processo.|
| `origem`                | `integer`| Sim              | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao).                     |
| `token`                 | `string` | Sim              | Chave de acesso única referente ao canal.                                                    |


??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "id": 57
    }
    ```

## Verificar se o evento já foi cadastrado

!!! done ""

	<strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Evento/verificarCadastro

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `codPessoa` | `string` | Sim | Código de identificação externa do contato | 
| `codOferta` | `string` | <rb-tooltip text="Torna-se obrigatório caso seja informado a oferta de curso e curso no cadastro do evento">Condicional </rb-tooltip>| Código de identificação externa da oferta de curso | 
| `codCurso` | `string` | <rb-tooltip text="Torna-se obrigatório caso seja informado a oferta de curso e curso no cadastro do evento">Condicional </rb-tooltip>| Código de identificação externa do curso | 
| `dataVerificacao` | `dateTime` | Não | Data enviada no cadastro de evento | 
| `tipoData` | `string` | Não | Tipo da data enviada no cadastro de evento | 
| `tipoEvento` | `integer` | Condicional | Identificação do tipo de evento<br><br>[Listar Tipos de Eventos](#listar-tipos-de-eventos)<br>*Enviar o campo* `id` | 
| `codTipoEvento` | `string` | Condicional | Código de identificação externa do tipo de evento<br><br>[Listar Tipos de Eventos](#listar-tipos-de-eventos)<br>*Enviar o campo* `codigo` | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": 11
    }
    ```

## Listar tipos de eventos

!!! done ""

	<strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Evento/listarTipoEvento

Método utilizado para listar os tipos de evento para posteriormente utilizar como parâmetro em outro método.

??? Exemplos

    === "Resposta"

    _JSON_:
    ``` JSON
    {
        "success": true,
        "dados": [
            {
                "id": "1",
                "titulo": "Cadastrou-se",
                "codigo": "CADASTRO",
                "origem": "1",
                "origemNome": "CRM"
            }
        ]
    }
    ```