const root = document.querySelector('#root');
const textTitle = 'Dificuldade';

/*
Tagged Template String
  É uma forma avançada de template string. São template string com marcações ou tags.
  Possibilita modificar a saída dos template strings usando uma função.
*/
const title = Title`
  color: #82589F;
  font-size: 2.5rem;
  letter-spacing: 1.2px;
  margin-bottom: 4rem;
  ${textTitle}
`;

root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wrapperCharacters);
