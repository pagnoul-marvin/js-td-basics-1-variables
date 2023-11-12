/*****************************
* 10 - Opérateurs de base
*/

// 1. Déclarer les variables now, ageJohn, ageMark, yearJohn et yearMark
// puis affecter aux trois premières les valeurs 2019, 28 et 33


// Opérateurs mathématiques

// 2. Affecter à yearJohn sa date de naissance
// (en la calculant à partir de l'année courante et de son âge)
// idem pour yearMark
// puis afficher la date de naissance de John 
// et "Mark est né en …"


// 3. Afficher l'année à laquelle nous serons dans deux ans
// le double de l'année
// le dixième de l'année



// Opérateurs logiques

// 4. …



// Opérateur typeof


const now = 2019;
const ageJohn = 28;
const ageMark = 33;
const yearJohn = now - ageJohn;
const yearMark = now - ageMark;

console.log(`John est né en ${yearJohn}`);
console.log(`Mark est né en ${yearMark}`);

const now2 = now + 2;
const now3 = now * 2;
const now4 = now / 10;

console.log(`${now2}`);
console.log(`${now3}`);
console.log(`${now4}`);

