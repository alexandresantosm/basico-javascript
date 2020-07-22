const root = document.querySelector('#root');
const textTitle = 'Dificuldade';

/*
Tagged Template String
  É uma forma avançada de template string. São template string com marcações ou tags.
  Possibilita modificar a saída dos template strings usando uma função.
*/
const title = Title`
  color: red;
  font-size: 20px;
  ${textTitle}
`;

root.insertAdjacentHTML('beforeend', title);