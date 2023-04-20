function Change_paragraph_color() {
    var redBorder = document.getElementById("redBorder").value;
    var greenBorder = document.getElementById("greenBorder").value;
    var blueBorder = document.getElementById("blueBorder").value;
    var border_width = document.getElementById("border_width").value;
    var redBack = document.getElementById("redBack").value;
    var greenBack = document.getElementById("greenBack").value;
    var blueBack = document.getElementById("blueBack").value;

    var para = document.getElementById("paragraph");
    para.style.borderColor = `rgb(${redBorder},${greenBorder},${blueBorder})`;
    para.style.borderWidth = border_width
    para.style.backgroundColor = `rgb(${redBack},${greenBack},${blueBack})`;
}

function validate() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1.length < 8) {
        alert("Password 1 must be atleast 8 letters")
    } else if (password2.length < 8) {
        alert("Password 2 must be atleast 8 letters")
    } else if (password1 != password2) {
        alert("Passwords don't match")
    } else {
        alert("Passwords match")
    }
}

