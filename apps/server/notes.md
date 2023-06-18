# server/notes.md

### snippets

1. ir no frontend, clicar em crie sua conta para obter o código para o teste abaixo

2. realizar teste para obter access_token do github

```bash

# usage: get_access_token 9q87w6e987f86
get_access_token(){
    GITHUB_CODE="$1"
    http POST http://localhost:3333/register code=$GITHUB_CODE --json
}

```

### testando nem sei

```bash
test_auth() {
    TOKEN=$1 # variavel
    AUTH_HEADER="Authorization: Bearer $TOKEN"
    http localhost:3333/memories "$AUTH_HEADER"
}
```
