
# Campos personalizados
Os campos personalizados tem o objetivo de auxiliar a armazenar dados não presentes no escopo atual da api de forma organizada.

## Cadastro de campos personalizados

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Instituicao/adicionarCampo

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `nome` | `string` | Sim | Nome do campo personalizado. Limite de caracteres: 75. | 
| `tipo` | `integer` | Não | Informa o tipo do campo que você está criando.<hr>1 para `string`.<br>2 para `longtext`.<br>3 para `integer`.<br>4 para `date`.<br>5 para `boolean`. | 
| `tipoLocal` | `integer` | Sim | Informa o tipo do local<hr>1 para contato<br>2 para registro de processo.<br>3 para curso | 
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 

??? Exemplos

    === "Resposta"

    _JSON_:
	``` JSON
	{
		"success":true
	}
	```

## Listar campos personalizados

!!! done ""
    
    <strong class='REST POST'>POST</strong><strong class="MIME">application/json</strong> /api/Instituicao/campoPersonalizado

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `origem` | `integer` | Sim | Código de identificação do [canal](/api_crm/apresentacao/#autenticacao). | 
| `token` | `string` | Sim | Chave de acesso única referente ao canal. | 
| `contexto` | `string` | Não | Listar por contexto do campo personalizado |
| `apenasHabilitados` | `string` | Não | Listar apenas campos ativos |
| `tipoLocal` | `integer` | Não | Lista pelo tipo do local<hr>1 para contato<br>2 para registro de processo.<br>3 para curso | 
| `tipoCampo` | `integer` | Não | Lista pelo tipo do campo que você está criando.<hr>1 para `string`.<br>2 para `longtext`.<br>3 para `integer`.<br>4 para `date`.<br>5 para `boolean`. |
| `nome` | `string` | Não | Listar por nome do campo |




??? Exemplos

    === "Resposta"

    _JSON_:
	``` JSON
	{
		"success": true,
		"dados": [{
			"id": "1",
			"nome": "Lista de origem",
			"coluna": "listadeorigem",
			"tipo": "1",
			"tipoNome": "Texto",
			"tipoLocal": "1",
			"tipoLocalNome": "Contato"
		}]
	}
	```

