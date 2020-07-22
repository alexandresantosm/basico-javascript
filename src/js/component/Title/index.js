/*
  Template String
    São strings que permitem expressões embutidas.
    Permite utilizar multi-linhas e interpolação de string
    Ex.: `<h1 style="${css[0]}${css[1]}">${textContent}</h1>`
*/
function Title(css, textContent) {
  return `<h1 style="${css[0]}${css[1]}">${textContent}</h1>`;
}