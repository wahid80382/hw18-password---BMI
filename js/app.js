// password js start
let my_pass = document.getElementById(`password`)
let my_passShow = document.getElementById(`visible`)

function show(){
    if(my_pass.type ==`password`){
        my_pass.type = `text`;
        my_passShow.style.color = `red`;
    } else {
        my_pass.type = `password`;
        my_passShow.style.color = `black`;
    }
}

// password js end

// bmi js start
function bmi(){
    let fullHeight = document.getElementById(`height`).value;
    let fullWeight = document.getElementById(`weight`).value;
    let result = fullWeight / ((fullHeight / 0.0328084) / 100 * (fullHeight / 0.0328084) / 100);
    let total = result.toFixed(2);
    document.getElementById(`result`).innerHTML = result;

    if(result <= 18.5){
        document.getElementById(`tips`).innerHTML = `Underweight plz improve Ur Weight `
    }else if(result <= 25){
        document.getElementById(`tips`).innerHTML = `Your Weight Perfect `
    }else{
        document.getElementById(`tips`).innerHTML = `Overweight Plz Decrease Ur Weight `}
}

