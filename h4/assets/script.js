let inputNumber = document.getElementById('inputNumber');
let outputNumber = document.getElementById('outputNumber');

function generateEven() {
    outputNumber.innerHTML = '';
    for (let i = 1; i <= inputNumber.value; i++) {
        if (i % 2 === 0) {
            outputNumber.innerHTML += `<span> ${i} </span>`;
        }
    }
}

function generateOdd() {
    outputNumber.innerHTML = '';
    for (let i = 1; i <= inputNumber.value; i++) {
        if (i % 2 === 1) {
            outputNumber.innerHTML += `<span> ${i} </span>`;
        }
    }
}

function generatePrime() {
    outputNumber.innerHTML = '';
    for (let i = 2; i <= inputNumber.value; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (j !== i && i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            outputNumber.innerHTML += `<span> ${i} </span>`;
        }
    }
}

