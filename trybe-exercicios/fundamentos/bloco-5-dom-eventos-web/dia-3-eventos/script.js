function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
function adicionaDias(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let dias = document.querySelector('#days');
    for (let i in dezDaysList) {
        let numeros = document.createElement('li');
        dias.appendChild(numeros).innerHTML = dezDaysList[i];
        numeros.className = 'day';
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            numeros.className = 'day holiday';
        };
        if (dezDaysList[i] === 25) {
            numeros.className = 'day holiday friday'
        };
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
            numeros.className = 'day friday'
        }
    }
  };
adicionaDias();

function feriado(feriados) {
    let botao = document.createElement('button');
    let container = document.querySelector('.buttons-container');
    container.appendChild(botao).id = 'buttons-container';
    botao.innerHTML = feriados;
};
feriado('Feriados');

function holidays() {
    let botaoClick = document.querySelector('#buttons-container');
    let todosHoliday = document.querySelectorAll('.holiday');
    let corFundo = 'rgb(238,238,238)';
    let novaCor = 'white';
    todosHoliday.
    botaoClick.addEventListener('click', function() {
        if ()        
    }
    
    );
}