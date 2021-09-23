const getId = (id) => document.getElementById(id);
const getClass = (className) => document.getElementsByClassName(className);
const outputFunc = (idTarget, idElement) => getId(idTarget).innerHTML = getId(idElement).value;
let inputHobby = getClass('inputHobby');
let labelHobby = getClass('labelHobby');

const form = getId('form');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getId('hobbyEl').innerHTML = '';

  outputFunc('nameEl', 'name');
  getId('dateEl').innerHTML = getId('birth').value.split('-').reverse().join('/');
  outputFunc('summaryEl', 'summary');
  outputFunc('phoneEl', 'phone');
  outputFunc('emailEl', 'email');
  outputFunc('addressEl', 'address');
  if (getId('male').checked) {
    getId('genderEl').innerHTML = getId('labelMale').textContent;
  } else if (getId('female').checked) {
    getId('genderEl').innerHTML = getId('labelFemale').textContent;
  }

  for (let i = 0; i < inputHobby.length; i++) {
    if (inputHobby[i].checked) getId('hobbyEl').innerHTML += `<li>${labelHobby[i].textContent}</li>`;
  }
})

getId('btnToggleCard').addEventListener('click', () => {
  getId('cardData').classList.toggle('active');
})