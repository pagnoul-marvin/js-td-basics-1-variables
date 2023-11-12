/*****************************
* CODING CHALLENGE 1
*/

/*

Mark et John veulent comparer leur BMI (Indice de masse corporelle),
qui est calculé en utilisant la formule :
BMI = poids / taille^2 = poids / (taille * taille).
N.B. Le poids est en kg et la taille est en mètres.

1. Stockez le poids et la taille de  Mark et de John dans des variables
2. Calculez le BMI de chacun
3. Créez une variable booléenne qui contient l'information de savoir
   si Mark a un BMI plus élevé que John.
4. Imprimez une chaîne de caractères dans la console contenant la
variable de l'étape 3. (Quelque chose du genre "Est-ce que le BMI de
Mark est plus élevé que celui de John ? true").

BONNE CHANCE 😀
*/

const weightJohn = 72;
const heightJohn = 1.77;
const weightMark = 60;
const heightMark = 1.70;

const bmiJohn = 14;
const bmiMark = 10;

const isbmiMarkLessbmiJohn = bmiMark < bmiJohn;

if(isbmiMarkLessbmiJohn) { //structure de controle (if et else) donc pas de ";" après eux
    console.log(`Le BMI de Mark est inférieur à celui de John`);
}
else {
    console.log(`Le BMI de Mark est supérieur à celui de John`);
    if(bmiMark === bmiJohn) {
    console.log(`Le BMI de Mark ${bmiMark} est égale à celui de John ${bmiJohn}`);
    } else {
        console.log(`Le BMI de Mark ${bmiMark} est supérieur à celui de John ${bmiJohn}`);
    }
}
