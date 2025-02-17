 - iniciar o gerenciador de pacotes do go
''''
go mod init github.com/engendromestre/codecommerce/goapi
'''
  - pasta internal: todos os arquivos internos somente de goapi

Struct - Estrutura de dados (Equivalente a uma classe)

O GO não tem algo centralizado com o NPM, então os pacotes são oriundos de um repositório git

- remove as bibliotecas não usadas e instala as que estão sendo
''''
go mod tidy
'''
arquivo go.sum: garante a versão das dependências instaladas

 - pasta services: vão fazer o meio de campo entre os dados e o banco de dados
    - solid: a responsabilidade única significa que cada classe  só tem um único motivo para mudança

 - docker compose logs mysql
 - docker compose exec mysql bash

 - Testar o que foi criado
  - extensão: umao.rest-client
  - cmd: cd cmd/catalog
    - go  run main.go (subir o webserver)