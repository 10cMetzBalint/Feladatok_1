function atlag() {
let szam = document.getElementById("szam").value;
let ossz = 0;
let db = 0;
for (let i = 0; i < szam.length; i++){
    ossz += parseInt(szam[i]);
    db++;
}
let atl = ossz / db;
document.getElementById("eredmeny").innerText = `A számok átlaga ${atl}.`;
}