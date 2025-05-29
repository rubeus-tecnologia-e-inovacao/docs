
# Tracking multidomínio

Utilizando a função `getHash()` é possível obter o `hash` armazenado no dispositivo, e posteriormente, usar para identificar o usuário em outro domínio, passando o hash obtido pela a URL que irá para a próxima página e nela é necessário também ter instalado o script de monitoramento para se obter os dados passados da página anterior.

## Estrutura

### Parâmetros

| Parâmetros | Tipo | Obrigatoriedade | Descrição | 
| --- | --- | --- | --- |
| `link` | `string` | Não | Passa o `hash` por GET utilizando o `link` e redirecionando logo em seguida. | 

### Retorno

| Caso | Tipo de retorno | Descrição | 
| --- | --- | --- |
| `Sucesso` | `string` | Retorna uma string contendo o hash do usuário caso a operação seja efetuada com sucesso. | 
| `Falha` | `string` | Retorna uma string vazia. | 

## Aplicação no uso
Tendo como exemplo a situação de ter uma página para a captação de alunos, chamado de *https://captacao.exemplounivesidade.com.br*, e outra para a inscrição *https://inscricao.uniexemplo.edu.br* em domínios diferentes.

Com o nosso Monitoramento de Páginas instalado em ambas as páginas, o aluno pode preencher seus dados básicos como: Nome, e-mail e telefone na primeira página. Logo após, ao clicar em um botão que o direcionará à página de inscrição, podemos enviar os dados pelo Monitoramento de Páginas utilizando o método [sendData()](http://enviando-data.md), que deve receber dois parâmetros: o primeiro é um objeto com os dados adquiridos no formulário e o segundo é um callback de resposta para vermos a resposta da API. Nesse redirecionamento, o hash atual da primeira página será carregado para a segunda, identificando que é o mesmo usuário.

## Primeira página

###### Formulário exemplo

??? Exemplos

    _HTML_:
    ```html
    <h2>Formulário de Contato</h2>
        <form id="meuFormulario">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
            </div>
            <div class="form-group">
                <label for="emailPrincipal">Email:</label>
                <input type="email" id="emailPrincipal" name="emailPrincipal" required>
            </div>
            <div class="form-group">
                <label for="telefonePrincipal">Telefone:</label>
                <input type="tel" id="telefonePrincipal" name="telefonePrincipal" required>
            </div>
            <button type="button" onclick="enviarFicha()">Enviar</button>
        </form>
    ```

###### Função para capturar os dados e enviar para a próxima página

??? Exemplos

    _JavaScript_:
    ```javascript
    function enviarFicha() {
        // 1. Pegar os dados dos inputs
        const nome = document.getElementById('nome').value;
        const emailPrincipal = document.getElementById('emailPrincipal').value;
        const telefonePrincipal = document.getElementById('telefonePrincipal').value;

        // 2. Criar o objeto de dados a ser enviado
        const userData = {
            nome: nome,
            telefonePrincipal: telefonePrincipal,
            emailPrincipal: emailPrincipal,
            idSession: session
        };
        // 3. Enviar os dados usando RBTracking.sendData()
        RBTracking.sendData(userData, function(response) {
        // 4. Abrir a página de inscrição APÓS o envio dos dados
        window.open(RBTracking.getHash('https://inscricao.uniexemplo.edu.br'));
        return 'success!';
        });
    }
    ```

## Próxima página

Já na página seguinte, com o serviço de monitoramento já instalado e a comunicação efetuada com sucesso, o algoritmo será iniciado com o hash que foi passado pela URL, identificando que é o mesmo usuário.  Para capturar os dados que foram enviados anteriormente, é necessário utilizar o método [getData()](recuperando-informacoes.md), com um parâmetro de callback de resposta, para verificar o sucesso da requisição de recuperação dos dados.

#### Segunda página

###### Script para recuperar os dados e inseri-los nos inputs corretos

??? Exemplos

    _JavaScript_:
    ```javascript

    RBTracking.getData((r) => {

    if (r.success && r.data) { //Verifica se a response da API deu sucess e se existe dados enviados
      const nome = r.data.nome;
      const email = r.data.emailPrincipal;
      const telefone = r.data.telefonePrincipal;

      // Preenche os inputs com os dados recuperados
      document.querySelector('Identificador do input Nome').value = nome;
      document.querySelector('Identificador do input E-mail').value = email;
      document.querySelector('Identificador do input Telefone').value = telefone;
    } else {
      console.log("Dados não retornaram com sucesso.");
    }
    });
    
    ```

## Utilização prática

Você conseguirá utilizar o script de recuperação de dados tanto para a Ficha de Inscrição e Matrícula Integrado, aplicando o script de recuperação em um componente HTML/Script na primeira etapa da Ficha onde aparecem as informações que você recuperou, quanto para a Ficha de Inscrição dos Modelos de Formulários, atentando-se a detalhes como: a identificação correta dos inputs, o link de redirecionamento correto e entre outros detalhes.