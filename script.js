console.log("coucou depuis la console");
console.log("Ceci n'est pas un commentaire");

let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"

let a = 1;
let b = 1;
a++
console.log(a);
console.log(b += 2);

let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
    };

console.log(THPSessionNum2);
console.log(THPSessionNum2.cities);
THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

const multiply = function(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  
  const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
  console.log(otherMultiply(2, 3));



