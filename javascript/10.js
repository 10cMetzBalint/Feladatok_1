function betuk() {
    let szoveg = document.getElementById("szoveg").value;
    let b = "";
    for (let i = 0; i < szoveg.length; i++) {
        let betu = szoveg[i]; 

        if (betu.match(/[a-zA-Z]/)) {
            b += betu;
        } else {
            break;
        }
    }

    document.getElementById("eredmeny").innerText = `Betűk: ${b}`; }