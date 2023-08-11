let slider = document.getElementById("myRange");
let output = document.getElementById("value");

output.innerHTML = slider.value;

// Función para actualizar el valor y estilo de la barra en respuesta al movimiento táctil
function updateSlider(x) {
    output.innerHTML = x;
    let color = 'linear-gradient(90deg, rgb(22,240,171) ' + x + '%, rgb(255,255,255) ' + x + '%)';
    slider.style.background = color;
}

slider.addEventListener("input", function() {
    updateSlider(this.value);
});

slider.addEventListener("touchmove", function(event) {
    // Obtener posición táctil relativa al elemento
    let touch = event.touches[0];
    let x = touch.clientX - slider.getBoundingClientRect().left;
    
    // Calcular porcentaje y actualizar
    let percent = (x / slider.offsetWidth) * 100;
    updateSlider(percent);
});

const passwordLengthElement = document.getElementById("myRange");
const generatedPasswordElement = document.getElementById("generated");
const copyButton = document.querySelector(".fa-copy");

let passwordLength = passwordLengthElement.value;

passwordLengthElement.addEventListener("input", function() {
  passwordLength = this.value;
  document.getElementById("value").innerHTML = passwordLength;
});

function generatePassword(length) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~";

  let password = "";
  let charSet = "";

  charSet += uppercase;
  charSet += lowercase;
  charSet += numbers;
  charSet += symbols;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

document.querySelector("button").addEventListener("click", function() {
  const password = generatePassword(passwordLength);
  generatedPasswordElement.value = password;
});

copyButton.addEventListener("click", function() {
  const password = generatedPasswordElement;
  password.select();
  document.execCommand("copy");
});
