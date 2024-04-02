# CustomDOM - Documentação da Classe

A classe `CustomDOM` é projetada para interagir com elementos dentro do ShadowDOM do modelo de formulário anexado em uma página da web. Ela oferece métodos convenientes para acessar e manipular elementos baseados no canal, versão e tipo especificados.

Um objeto com essa classe já instanciada é disponibilizado no editor de código avançado nos modelos de formulários pela variável `RBChannel`.

## Construtor

Cria uma instância da classe `CustomDOM`.

- `channel`: O código do modelo de formulário.
- `version`: A versão do modelo de formulário (padrão: 3).
- `type`: O tipo do modelo de formulário (padrão: 'page').

## Métodos específicos

### customCallback

```js
const callback = (res) => {console.log(res);}
RBChannel.customCallback(callback)
```

Define um callback personalizado que será executado na ultima etapa do modelo de formulário (Préviamente `ActionsForm.customCallback`).

| Atributos | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `callback` | `function` | Sim | A função de callback a ser executada. | 


## Métodos de manipulação do DOM

Para a manipulação do ShadowDOM, disponibilizamos as funções básicas de busca dos elementos e que estão escopadas apenas para o canal no qual o código foi adicionado.

Os métodos abaixo támbem serão acessíveis pela váriavel `RBChannel`, exemplo:
```js
RBChannel.getElementById('foo');
RBChannel.getElementByName('bar');
```

!!! warning "Migração de versão"

    Para o funcionamento correto ao realizar a migração de versão, será necessária a substituição da váriavel `document` por `RBChannel` nos casos de manipulação do DOM dos modelos de formulário.


* *`getElementById`*: Retorna o primeiro elemento do modelo de formulário com o `ID` especificado.
    
    | Atributos | Tipo | Obrigatoriedade | Descrição | 
    | --- | --- | --- | --- |
    | `id` | `string` | Sim | O ID do elemento a ser buscado | 
    

* *`getElementByName`*: Retorna o primeiro elemento do modelo de formulário com o atributo `name` especificado.
    
    | Atributos | Tipo | Obrigatoriedade | Descrição | 
    | --- | --- | --- | --- |
    | `name` | `string` | Sim | O nome do elemento a ser buscado | 

* *`getElementsByName`*: Retorna uma lista de todos os elementos do modelo de formulário com o atributo `name` especificado.

    | Atributos | Tipo | Obrigatoriedade | Descrição | 
    | --- | --- | --- | --- |
    | `name` | `string` | Sim | O nome dos elementos a serem buscados |

* *`getElementsByClassName`*: Retorna uma lista de todos os elementos do modelo de formulário com a classe especificada.

    | Atributos | Tipo | Obrigatoriedade | Descrição | 
    | --- | --- | --- | --- |
    | `className` | `string` | Sim | A classe dos elementos a serem buscados |

* *`querySelector`*: Retorna o primeiro elemento do modelo de formulário que corresponde ao seletor especificado.

    | Atributos | Tipo | Obrigatoriedade | Descrição | 
    | --- | --- | --- | --- |
    | `query` | `string` | Sim | O seletor de CSS a ser utilizado como chave. |

* *`querySelectorAll`*: Retorna uma lista de todos os elementos do modelo de formulário que correspondem ao seletor especificado.

    | Atributos | Tipo | Obrigatoriedade | Descrição | 
    | --- | --- | --- | --- |
    | `query` | `string` | Sim | O seletor de CSS a ser utilizado como chave. |