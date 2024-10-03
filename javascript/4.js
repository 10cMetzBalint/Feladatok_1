function calc() {
    let eredmeny = document.getElementById('eredmeny').value;
    let jegy;
    if (eredmeny >= 90) {
        jegy = 'A';
    } else if (eredmeny >= 80) {
        jegy = 'B';
    } else if (eredmeny >= 70) {
        jegy = 'C';
    } else if (eredmeny >= 60) {
        jegy = 'D';
    } else {
        jegy = 'F';
    }
    document.getElementById('jegy').textContent = `AZ ön jegye: ${jegy}`;
}