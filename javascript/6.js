function gyoztes() {
    let jatekos1 = parseInt(document.getElementById('jatekos1').value);
    let jatekos2 = parseInt(document.getElementById('jatekos2').value);
    let eredmeny;

    if (jatekos1 === jatekos2) {
        eredmeny = "Döntetlen.";
    } else if ((jatekos1 === 1 && jatekos2 === 3) || (jatekos1 === 2 && jatekos2 === 1) || (jatekos1 === 3 && jatekos2 === 2)) {
        eredmeny = "Az egyes játékos nyert.";
    } else {
        eredmeny = "A kettes játékos nyert.";
    }
    document.getElementById('nyertes').textContent = eredmeny; 
}
