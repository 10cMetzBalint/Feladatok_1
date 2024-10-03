function faktorialis() {
let szam = parseInt(document.getElementById("szam").value);
let faktorialis = 1;
for (let i = 1; i <= szam; i++) {
    faktorialis *= i;
}
document.getElementById("eredmeny").innerText = `${szam} faktoriálisa ${faktorialis}.`;
}