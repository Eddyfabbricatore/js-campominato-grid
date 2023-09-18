/*
  1. Salvare il container in una variabile
  2. Eseguire un ciclo che arrivi fino a 100 e stampare un quadrato ad ogni ciclo
  3. Aggiungere un listener al 'click' ad ogni quadrato
  4. Al 'click' fare un toggle della classe 'clicked'
  5. Fare un append del quadrato al container
  6. Salvare il bottone
  7. Aggiungere al listener la function init()
*/


// 1. Salvo il container in una variabile
const container = document.querySelector('.container-custom');
// 6. Salvo il btn
const btn = document.querySelector('#btn-1');

reset();

container.innerHTML = 'Clicca il bottone Play per iniziare a giocare';

// 7. Listener btn
btn.addEventListener('click', function(){
  reset();

  init();
});


/* function */
function reset(){
  container.innerHTML = '';
}

function init(){
  // 2. Ciclo che arriva fino a 100 e stampa un quadrato ad ogni ciclo
  for(let i = 1; i <= 100; i++){
    const square = createSquare(i);

    console.log(square);

    // 3. Listener
    square.addEventListener('click', function(){
      // 4. Al 'click' faccio il toggle della classe 'clicked'
      this.classList.toggle('clicked');

      console.log(this.innerText);
    });

    // 5. Faccio l'append al container
    container.append(square);
  }
}

function createSquare(index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.innerHTML = `<span>${index}</span>`;

  return newSquare;
}