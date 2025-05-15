const textoEntrada = document.getElementById("texto-entrada");
const textoResultado = document.getElementById("texto-resultado");

document
  .getElementById("converter-maiusculas")
  .addEventListener("click", () => {
    textoResultado.value = textoEntrada.value.toUpperCase();
  });

document
  .getElementById("converter-minusculas")
  .addEventListener("click", () => {
    textoResultado.value = textoEntrada.value.toLowerCase();
  });

document
  .getElementById("capitalizar-palavras")
  .addEventListener("click", () => {
    const texto = textoEntrada.value;
    const palavras = texto.split(" ");
    const palavrasCapitalizadas = palavras.map((palavra) => {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    });
    textoResultado.value = palavrasCapitalizadas.join(" ");
  });

document.getElementById("remover-espacos").addEventListener("click", () => {
  textoResultado.value = textoEntrada.value.replace(/\s/g, "");
});

document
  .getElementById("remover-espacos-extras")
  .addEventListener("click", () => {
    textoResultado.value = textoEntrada.value.trim().replace(/\s+/g, " ");
  });

document.getElementById("inverter-texto").addEventListener("click", () => {
  textoResultado.value = textoEntrada.value.split("").reverse().join("");
});

document
  .getElementById("converter-camel-case")
  .addEventListener("click", () => {
    const texto = textoEntrada.value.trim().replace(/[-_\s]+/g, " ");
    const palavras = texto.split(" ");
    let resultado = palavras[0].toLowerCase();
    for (let i = 1; i < palavras.length; i++) {
      resultado +=
        palavras[i].charAt(0).toUpperCase() +
        palavras[i].slice(1).toLowerCase();
    }
    textoResultado.value = resultado;
  });

document
  .getElementById("converter-pascal-case")
  .addEventListener("click", () => {
    const texto = textoEntrada.value.trim().replace(/[-_\s]+/g, " ");
    const palavras = texto.split(" ");
    let resultado = "";
    for (let i = 0; i < palavras.length; i++) {
      resultado +=
        palavras[i].charAt(0).toUpperCase() +
        palavras[i].slice(1).toLowerCase();
    }
    textoResultado.value = resultado;
  });

document
  .getElementById("converter-kebab-case")
  .addEventListener("click", () => {
    const texto = textoEntrada.value.trim().toLowerCase().replace(/\s+/g, "-");
    textoResultado.value = texto.replace(/[-_]+/g, "-");
  });

document
  .getElementById("converter-snake-case")
  .addEventListener("click", () => {
    const texto = textoEntrada.value.trim().toLowerCase().replace(/\s+/g, "_");
    textoResultado.value = texto.replace(/[-_]+/g, "_");
  });
