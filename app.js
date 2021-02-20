// code
const pinResult = document.getElementById('pinResult');
const tryText = document.getElementById('tryLeft');
const tryValue = document.getElementById('tryNumber');
const errorMessage = document.getElementById('errorMessage');
const popup = document.getElementById('popup');
const generatePin = () => {
  const pin = Math.floor(Math.random() * 10000) + '';
  if (pin.length === 4) {
    return pin;
  } else {
    return generatePin();
  }
};

const pinInput = () => {
  pinResult.value = generatePin();
};

const buttonDiv = document.getElementById('calculator');
const inputDigit = document.getElementById('input-digit');
buttonDiv.addEventListener('click', (e) => {
  let digit = e.target.innerText;
  console.log(digit);
  if (isNaN(digit)) {
    if (digit === 'C') {
      inputDigit.value = '';
    }
    if (digit === 'B') {
      inputDigit.value = inputDigit.value.slice(0, -1);
    }
  } else {
    inputDigit.value = inputDigit.value + digit;
  }
});

const submit = () => {
  if (inputDigit.value === pinResult.value) {
    if (inputDigit.value == '') {
      inputDigit.style.borderColor = 'red';
    } else {
      inputDigit.style.borderColor = '#858299';
      popup.style.display = 'block';
      errorMessage.innerText =
        '✅ Pin Matched... Secret door is opening for you';
      inputDigit.value = '';
      pinResult.value = '';
    }
  } else {
    inputDigit.style.borderColor = '#858299';
    tryText.style.display = 'block';
    let tryNumber = parseInt(tryValue.innerText);
    if (tryNumber > 1) {
      tryValue.innerText = tryNumber - 1;
      popup.style.display = 'block';
      errorMessage.innerText = "❌ Pin Didn't Match, Please Try again";
    } else {
      alert('You already used 3 try. Please refresh page and try again');
      popup.style.display = 'none';
      tryText.style.display = 'none';
      inputDigit.value = '';
      pinResult.value = '';
    }
  }
};

document.getElementById('close').addEventListener('click', () => {
  popup.style.display = 'none';
});
