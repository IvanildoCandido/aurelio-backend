# aurelio-backend
Repositório de teste técnico de backend.

## Desafio:

Create a server node that exposes 3 api:
1. Accept up to 2 input parameters, name and surname. The API returns up to 2 parameters with
the
uppercase first letter;
2. Received an array as input, the API returns the sum of all the numbers that compose it.
3. Received an array as input, the API returns the array received as input without duplicates
Examples:
1. I: marco rossi O: Marco rossi;
2. I: [1, 2, 3, 4] O: 10;
3. I: [1,2,3,1,3, "marco", 2, "marco"] O: [1,2,3, "marco"]

## Como usar a API:

**Passo 1:** Fazer o clone desse repositório.<br>
**Passo 2:** No diretório raiz executar o comando `npm install`.<br>
**Passo 3:** Para rodar o servidor executar o comando `npm start`.

# ENDPOINTS:

### Para a primeira API:

> **/api/one**

**Obs:** Deve ser enviado no corpo da requisição um objeto no seguinte formato:
```json
{
    name: "fulano,
    surname: "silva"
}
```
O Resultado será: 
```json
{
  "result": "Fulano silva"
}
```

### Para a segunda API:

> **/api/two**

**Obs:** Deve ser enviado no corpo da requisição um objeto no seguinte formato:
```json
{
    numbers:  [1, 2, 3, 4, 6, 12] 
}
```
O Resultado será: 
```json
{
  "sum": "28"
}
```

### Para a terceira API:

> **/api/three**

**Obs:** Deve ser enviado no corpo da requisição um objeto no seguinte formato:
```json
{
    values:  [ "jose", 1, 2, 3, 4, 3, 6, 2, 1, "jose", 12 ] 
}
```
O Resultado será: 
```json
{
  "uniqueValues": [ "jose",  1,  2,  3,  4,  6, 12  ]
}
```