command line nest

```bash
sudo npm install -g @nestjs/cli
```

criar projeto com o nome de nestjs-api

```bash
nest new nestjs-api`
```

rodar o projeto como dev

```bash
npm run start:dev
```

O nest trabalha com classes que são módulos. 
Um módulo organiza artefatos do projeto.
Se agrupa coisas dentro desse módulo para que o nest conheça 
e comece a trabalhar em cima, dando uma série de facilidades para o desenvolvimento.

Decorator, padrão que "decora" o que ele está por cima
Controller - Intermediário que recebe os dados da conexão via protocolo HTTP
Providers/Services - Onde vão ser escritas as regras de negócio
Trabalha com arquitetura modular

Com o comando nest generate pode gerar várias coisas
```bash
nest generate
```
Gerar um novo módulo
```bash
nest g moduleproducts
```

Banco de Dados
Libs - 
TypeORM - Mapeador de Objetos Relacionais mais maduro disponível no mudno Node.js. Como está escrito em typescript, funciona muito bem com o framework Nest.js
@nestjs/typeorm  - lib do nest.js que vai se integrar com o TypeORM
mysql2 - driver de comunicação com o banco de dados mysql
```bash
npm install typeorm @nestjs/typeorm mysql2
```

TypeORM - fazer uma modelagem objeto-relacional, transcrevendo com o  objeto vai se comportar para poder salvar e recuperar no banco de dados em product.entity
 - em app.module - importar o Modulo do TypeORM
 - levantar um container mysql com docker container com as informações de como o docker deve subir esse container
 ```bash
docker compose up
```
Em outro terminal
```bash
docker compose exec db bash
mysql -uroot -proot
show databases;
```
Em outro terminal
```bash
docker compose exec db bash
mysql -uroot -proot
show databases;
```
Em outro terminal
```bash
npm run start:dev
```
Neste ponto, nos logs do Nest você pode perceber a criação da table Products

Gerar dados falsos (fixture.ts)
- package.json -> scripts -> "fixture": "ts-node ./src/fixture.ts"
```bash
npm run fixture
```
Faz um insert em lote, sempre recriand (se rodar novamente ele mata tudo e sobe novamente)

consultar os produtos em api.http

Aqui temos as informações locais relevantes para este micro-serviço,
que toda vez que o micro-serviço de produtos do golang fizer algo,
é necessário sincronizar para ca via rabbitmq ou outra ferramenta
A ideia é evitar acessar a api do golang diretamente. Ela será acessada pelo frontend para que se tenha independência entre os micro-serviços, por isso eles tem 2 banco de dados separados.

# Ordem de Compra
```bash
npm install -g @nestjs/cli
nest g resource
```

# Validação
// class-valitor trabalha com decorators 
// class-transformer trabalha com serialização e deserialização de objetos
```bash
npm install class-validator class-transformer
```

# Auth com JWT token
```bash
nest g resource
```
```bash
npm install @nestjs/jwt
```

# Guardião para guardar as rotas
```bash
nest g guard auth
```

# Publicar os dados da ordem no RabbitMQ
- https://www.npmjs.com/package/@golevelup/nestjs-rabbitmq
```bash
npm i @golevelup/nestjs-rabbitmq
nest g module rabbitmq
```

localhost:15652
- Queue microservico-pagamentos
- Bindings: 
(quando alguém publicar uma mensagem na exchange amq.direct com a rota OrderCreated, vai acabar caindo na fila microservico-pagamentos)
(quando alguém quiser pegar a mensagem é só ligar com a exchange nessa rota  e dessa forma a gente roteia para várias filas)
    - From exchange: amq.direct
    - Routing key: OrderCreated (nome do evento)

A app nest-api pode estar ligada e a do Go-lang não, que as mensagens vão ser armazenadas até serem consumidas. Por isso é uma comunicação assíncrona, pois não preciso de uma devolutiva.