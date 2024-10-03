function szokoev() {

    let ev = document.getElementById('ev').value;
    let szev;
    if ((ev % 4 === 0 && ev % 100 !== 0) || (ev % 400 === 0)) {
        szev = true;
    } else {
        szev = false;
    }
    document.getElementById('eredmeny').textContent = szev ? `${ev} szökőév.` : `${ev} nem szökőév.`;
}