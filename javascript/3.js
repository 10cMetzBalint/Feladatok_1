function calc(){
    let tomeg = 81.2;
    let magassag = 1.78;
    let bmi = tomeg / (magassag * magassag);
    document.getElementById('bmi').textContent = `BMI: ${bmi}`;
}