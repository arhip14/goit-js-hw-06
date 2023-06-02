const getEl = document.querySelector('#validation-input');
getEl.addEventListener('blur' , onInputBlur);
function onInputBlur(event) {
const inputValue = event.target.value;
const staticLength = getEl.dataset.length;
if(inputValue.length === Number(staticLength)) {
  getEl.classList.add("valid")
  getEl.classList.remove("invalid")
} else {
  getEl.classList.remove("valid")
  getEl.classList.add("invalid")
}
};

 
