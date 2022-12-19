//! Iteración #1: Interacción con el DOM

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const claseShow$$ = document.querySelector(".showme");
console.log(claseShow$$);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const idPillado$$ = document.querySelector("#pillado");
console.log(idPillado$$);

// 1.3 Usa querySelector para mostrar por consola todos los p

const allP$$ = document.querySelectorAll("p");
console.log(allP$$);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const clasePokemon$$ = document.querySelectorAll(".pokemon");
console.log(clasePokemon$$);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe"

const atributos$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(atributos$$);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe"

// const atributos$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(atributos$$[3]);