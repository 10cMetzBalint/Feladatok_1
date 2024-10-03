function calc(){
    let currentHours = 14;
    let currentMinutes = 34;
    let currentSeconds = 42;
    let osszMp = 24 * 60 * 60;
    let eltelt = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;
    let marad = osszMp - eltelt;
    document.getElementById('marad').textContent = `Hátralevő másodpercek: ${marad}`;    
}

         