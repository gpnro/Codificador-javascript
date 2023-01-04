const input = document.querySelector("#text-input");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#btn-copiar");
const btnLimpar = document.querySelector("#btn-limpar");

document.getElementById("div-aparece").style.display = 'none';
inputverificar();

document.getElementById('btn-criptografar').onclick = (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    const textoEncriptado = encriptar(input.value.toLowerCase());
    mensagem.value = textoEncriptado;
    input.value = "";
    aparece()
  }
}

document.getElementById('btn-descriptografar').onclick = (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    const textoDecriptado = decodificar(input.value);
    mensagem.value = textoDecriptado;
    input.value = "";
    aparece()
  }
}

document.getElementById('btn-copiar').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
  home();
}

document.getElementById('btn-limpar').onclick = (e) => {
  e.preventDefault();
  mensagem.value = "";
  home();
}

function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}

function decodificar(stringDecriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDecriptada = stringDecriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDecriptada.includes(matrixCode[i][1])) {
      stringDecriptada = stringDecriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDecriptada
}

function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}


function inputverificar() {
  var inputPalavra = document.querySelector("#text-input");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if ((keyCode > 47 && keyCode < 65) || (keyCode > 122 && keyCode < 231)
  || (keyCode > 231)){
      e.preventDefault();
    }
  });
}