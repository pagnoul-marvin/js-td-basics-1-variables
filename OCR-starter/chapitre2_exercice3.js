// Permutation de variables

// Solution classique utilisant une variable temporaire
let a = 1;
let b= 2;
let c;
c = a;
a = b;
b = c;

// ou plus simple [a, b] = [b, a]; donc pas besoin d'une troisième variable c

let d = 1;
let e = 2;

[d, e] = [e, d];






// Solution alternative valable uniquement pour des nombres
/* nombre1 += nombre2;
nombre2 = nombre1 - nombre2;
nombre1 -= nombre2; */




