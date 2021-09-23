const getId = (id) => document.getElementById(id);
const outputFunc = (idTarget, idElement) => getId(idTarget).innerHTML = getId(idElement).value;

let form = getId('form');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getId('hobbyEl').innerHTML = '';

  outputFunc('nameEl', 'name');
  outputFunc('dateEl', 'birth');
  outputFunc('summaryEl', 'summary');
  outputFunc('phoneEl', 'phone');
  outputFunc('emailEl', 'email');
  outputFunc('addressEl', 'address');
  if (getId('male').checked) {
    getId('genderEl').innerHTML = getId('labelMale').textContent;
  } else if (getId('female').checked) {
    getId('genderEl').innerHTML = getId('labelFemale').textContent;
  }

  if (getId('design').checked) getId('hobbyEl').innerHTML += `<li>${getId('labelDesign').textContent}</li>`;
  if (getId('coding').checked) getId('hobbyEl').innerHTML += `<li>${getId('labelCoding').textContent}</li>`;
})

getId('btnToggleCard').addEventListener('click', () => {
  getId('cardData').classList.toggle('active');
})