# Documentação
## 🖥️ Requisitos:
* Nativo
    * Python 3.11
    * Pip 
* Docker
    * Linux ou Docker Descktop
    * Docker
    * Docker-Compose

---

## Instalação nativa
### Instalação dos requisitos
```bash
pip install -r requirements.txt
```
### Execução do servidor
```bash
mkdocs serve
```

### Deploy da documentação
```bash
mkdocs gh-deploy
```
---
## Instalação do Docker e Docker-compose
Caso não tenha o docker instalado, siga estes comandos para instala-lo, estes comandos são para distribuições Debian e Ubuntu.

### Instalação do Docker

```bash
sudo apt update
```

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

```bash
sudo apt install docker-ce
```

#### Verificação se o serviço foi instalado e está funcionando.

```bash
sudo service docker status
```
#### Adicionando seu usuario ao grupo docker.

```bash
sudo usermod -aG docker ${USER}
```
#### Aqui ele irá pedir a senha do seu usuario.

```bash
su - ${USER}
```

### Instalação do Docker-compose

```bash
wget https://github.com/docker/compose/releases/download/v2.11.2/docker-compose-linux-x86_64
```

```bash
mv docker-compose-linux-x86_64 docker-compose
```

```bash
chmod +x docker-compose
```

```bash
sudo mv docker-compose /usr/local/bin/
```
#### Para verificar se o docker-compose foi instalado, execute o comando, se estiver tudo certo, irá apresentar a versão do aplicativo.

```bash
docker-compose --version
```

---

## 🛠️ Configuração

#### 1.1 Começaremos clonando o repositorio do projeto:

```bash
git clone git@github.com:rubeus-tecnologia-e-inovacao/docs.git
```

#### 1.2 Logo após terminar os passos anteriores, devemos criar a imagem do docker para a documentação, nesta imagem contém todas a dependencias necessarias para rodar o projeto.

*(Deve demorar alguns minutos para a conclusão da montagem da imagem.)*

```bash
docker build -t mkdocs-material .
```
### Para rodar o servidor do mkdocs
```bash
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs mkdocs-material
```
*Para verificar se realmente o serviço está funcionando, no navegador, abra: http://localhost:8000*

### Para rodar o gh-deploy e fazer o deploy da documentação
```bash
docker run --rm -it -v ~/.ssh:/root/.ssh -v ${PWD}:/docs mkdocs-material gh-deploy
```