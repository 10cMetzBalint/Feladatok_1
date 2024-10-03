
function calc(){
    let a = 10.4;
    let b = 13.5;
    let m = 8.2;
    let A = 2 * (a * b + b * m + m * a);
    let V = a * b * m;
    document.getElementById('A').textContent = `Felszín: ${A}`;
    document.getElementById('V').textContent = `Térfogat: ${V}`;
}
