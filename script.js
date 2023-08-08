let check=document.querySelector(".check");
check.addEventListener('click', idioma);
let slider = document.getElementById("myRange");
let output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = 'linear-gradient(90deg, rgb(22,240,171) ' + x + '%, rgb(255,255,255) ' + x + '%)';
    slider.style.background = color;
})

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
