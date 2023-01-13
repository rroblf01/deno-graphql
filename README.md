# deno-graphql

Este repositorio contiene un ejemplo de Graphql con Deno.
https://ricardo-graphql.deno.dev/

# Interface

```
type Dinosaur {
  id: Int
  name: String
  description: String
}
```

# Consultas

```
type Query {
  allDinosaurs: [Dinosaur]
  oneDinosaurById(id: Int): Dinosaur
  oneDinosaurByName(name: String): Dinosaur
}

type Mutation {
  addDinosaur(name: String, description: String): Dinosaur
  removeDinosaur(id: Int): Dinosaur
}
```
