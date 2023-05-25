const n = prompt("De quel nombre veux-tu calculer la factorielle ?");
let f = 1;
count = 0
for(let count = 1; count <= Number(n); count++){
  f *= count;
};
console.log(f);
