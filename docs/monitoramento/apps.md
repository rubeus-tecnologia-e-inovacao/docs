## getLoginVersion
Método para verificar a versão do login utilizado no cliente.

=== "Envio"

    _Chamada_:
    ``` JavaScript
    Apps.getLoginVersion();
    
    ```

=== "Resposta"
    
    _Promisse_:
    ``` JavaScript
    {
        version: '1.0.0'
    }
    ```

## login
Método utilizado para se fazer login na plataforma Rubeus.

=== "Envio"

    _Chamada_:
    ``` JavaScript
    Apps.login({
        email: 'usuario@rubeus.com.br',
        senha: '123',
        callback: (resp) => { console.log(resp); }
    });
    
    ```

=== "Resposta"
    
    !!!warning "Callback obrigatório"
        Apenas 1.0.0, versões posteriores passará esses dados para o callback

    _Promisse_:
    ``` JavaScript
    {
        success:true,
        data: {
            nome: 'Usuário',
            email: 'usuario@rubeus.com.br',
            imagem: 'https://example.com/avatar.jpg',
            nomeInstituicao: 'Instituição Rubeus'
        }
    }
    ```

| Parametro | obrigatório              | tipo     |
| --------- | ------------------------ | -------- |
| `email`     | Sim para versão 1.0.0    | `string`   |
| `senha`     | Sim para versão 1.0.0    | `string`   |
| `callback`  | Sim para versões > 2.0.0 | `function` |

Para o login na versão 1.0.0, segue no mesmo padrão de login do CRM (email+senha).

Para o login nas versões superiores a 2.0.0, será aberto um popup/guia com a URL do account e o login será realizado por essa tela, após a conclusão do login, o callback será executado.

Após o login ser realizado com sucesso, será criado uma sessão na página e a partir desse ponto, todas as requisições e redirecionamentos que dependam de da sessão do usuário, deverão utilizar os métodos de `callMethod` e `redirect` respectivamente.

## getUsuario
Retorna dados do usuário logado.

=== "Envio"

    _Chamada_:
    ``` JavaScript
    Apps.getUsuario();
    ```
=== "Resposta"

    _Promisse_:
    ``` JavaScript
    {
        nome: 'Usuário',
        email: 'usuario@rubeus.com.br',
        imagem: 'https://example.com/avatar.jpg',
        nomeInstituicao: 'Instituição Rubeus'
    }
    ```

## callMethod
Chama um endpoint do CRM passando autenticação de usuário.

=== "Envio"

    _Chamada_:
    ``` JavaScript
    Apps.callMethod(api, parameters);
    ```
=== "Resposta"

    Retorna uma promisse com o retorno do CRM.

## redirect
Faz o redirect/abre numa nova guia a url solicitada.

=== "Envio"

    _Chamada_:
    ``` JavaScript
    Apps.redirect(link, action = '_blank');
    ```