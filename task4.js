const counterValue = document.getElementById('value');

let currentValue = 0;

document.getElementById('counter').addEventListener('click', event => {
  const action = event.target.dataset.action;

  if(action === 'increment') {
    currentValue +=1;
  } else {
    currentValue -=1;
  }
  counterValue.textContent = currentValue;
})




