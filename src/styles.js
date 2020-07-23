const head = document.querySelector('head');

const style = `<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #2C3A47;
}

#root {
  font-family: 'Press Start 2P';
  
  background-color: #3B3B98;
  
  width: 40vw;
  min-width: 768px;
  height: 65vh;

  text-align: center;
  padding-top: 4rem;
}
</style>`;

head.insertAdjacentHTML('beforeend', style);