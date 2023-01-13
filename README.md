# deno-graphql

Este repositorio contiene un ejemplo de Graphql con Deno.
https://ricardo-graphql.deno.dev/

# Interface

```
type Dinosaur {
  _id: String
  name: String
  description: String
}
```

# Consultas

```
type Query {
  allDinosaurs: [Dinosaur]
  oneDinosaurById(_id: String): Dinosaur
  oneDinosaurByName(name: String): Dinosaur
}

type Mutation {
  addDinosaur(name: String, description: String): Dinosaur
  removeDinosaur(_id: String): Dinosaur
}
```
