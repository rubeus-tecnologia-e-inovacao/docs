# CustomDOM - Documentação da Classe

A classe `CustomDOM` é projetada para interagir com elementos dentro do ShadowDOM do modelo de formulário anexado em uma página da web. Ela oferece métodos convenientes para acessar e manipular elementos baseados no canal, versão e tipo especificados.

## Construtor

Cria uma instância da classe `CustomDOM`.

- `channel`: O código do modelo de formulário.
- `version`: A versão do modelo de formulário (padrão: 3).
- `type`: O tipo do modelo de formulário (padrão: 'page').

## Métodos

### `customCallback(callback)`

Define um callback personalizado que será executado na ultima etapa do modelo de formulário (Préviamente `ActionsForm.customCallback`).

- `callback`: A função de callback a ser chamada.

### `getElementById(id)`

Retorna o primeiro elemento do modelo de formulário com o ID especificado.

- `id`: O ID do elemento.

### `getElementByName(name)`

Retorna o primeiro elemento do modelo de formulário com o atributo `name` especificado.

- `name`: O nome do elemento.

### `getElementsByName(name)`

Retorna uma lista de todos os elementos do modelo de formulário com o atributo `name` especificado.

- `name`: O nome do elemento.

### `getElementsByClassName(className)`

Retorna uma lista de todos os elementos do modelo de formulário com a classe especificada.

- `className`: A classe do elemento.

### `querySelector()`

Retorna o primeiro elemento do modelo de formulário que corresponde ao seletor especificado.

### `querySelectorAll()`

Retorna uma lista de todos os elementos do modelo de formulário que correspondem ao seletor especificado.
