let cisla = [32, 14, 63, 9]
let prumer = 0;

for (let i = 0; i < cisla.length; i++) {
    prumer += cisla[i];
}

let min = cisla[0]
for (let j = 0; j < cisla.length; j++) {
    if (cisla[j] < min) {
        min = cisla[j]
    }
}

let max = cisla[0]
for (let j = 0; j < cisla.length; j++) {
    if (cisla[j] > max) {
        max = cisla[j]
    }
}

let jo = "dNeS jE hEzKÝ Den";


console.log("Průměr: ", prumer / cisla.length);
console.log("Nejmenší: ", min, "a největší: ", max);
console.log("Malý:    ", jo.toLowerCase(), "     Velký:    ", jo.toUpperCase())
