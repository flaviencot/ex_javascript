const x = prompt("Combien d'étages veux-tu ?");

for (let y = 1; y <= Number(x); y++) {
  console.log(" ".repeat(x - y) + "#".repeat(y));
}