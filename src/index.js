const keyboardSymbolsRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const keyboardSymbols = ['Dead', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.appendChild(wrapper);

const textArea = document.createElement('textarea');
textArea.classList.add('textarea');
wrapper.appendChild(textArea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

function initEn() {
  let output = '';
  for (let i = 0; i < keyboardSymbols.length; i += 1) {
    if (keyboardSymbols[i] === 'Backspace') {
      output = `${output}<div class="k-button button-backspace" data="${keyboardSymbols[i]}" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Tab') {
      output = `${output}<div class="k-button button-tab" data="${keyboardSymbols[i]}" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Delete') {
      output = `${output}<div class="k-button button-del" data="${keyboardSymbols[i]}" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'CapsLock') {
      output = `${output}<div class="k-button button-capslk"  data="${keyboardSymbols[i]}" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Enter') {
      output = `${output}<div class="k-button button-enter"  data="${keyboardSymbols[i]}" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'ArrowUp') {
      output = `${output}<div class="k-button"  data="${keyboardSymbols[i]}" >▲</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Shift') {
      output = `${output}<div class="k-button button-shift" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === ' ') {
      output = `${output}<div class="k-button button-space" data="${keyboardSymbols[i]}" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'ArrowLeft') {
      output = `${output}<div class="k-button"  data="${keyboardSymbols[i]}" >◄</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'ArrowDown') {
      output = `${output}<div class="k-button"  data="${keyboardSymbols[i]}" >▼</div>`;
      i += 1;
    }

    if (keyboardSymbols[i] === 'ArrowRight') {
      output = `${output}<div class="k-button"  data="${keyboardSymbols[i]}" >►</div>`;
      i += 1;
    }
    output = `${output}<div class="k-button" data="${keyboardSymbols[i]}" >${keyboardSymbols[i]}</div>`;
  }
  keyboard.innerHTML = output;
}
initEn();

function initRu() {
  let output = '';
  for (let i = 0; i < keyboardSymbolsRu.length; i += 1) {
    if (keyboardSymbolsRu[i] === 'Backspace') {
      output = `${output}<div class="k-button button-backspace" data="${keyboardSymbolsRu[i]}" >${keyboardSymbolsRu[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'Tab') {
      output = `${output}<div class="k-button button-tab" data="${keyboardSymbolsRu[i]}" >${keyboardSymbolsRu[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'Delete') {
      output = `${output}<div class="k-button button-del" data="${keyboardSymbolsRu[i]}" >${keyboardSymbolsRu[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'CapsLock') {
      output = `${output}<div class="k-button button-capslk"  data="${keyboardSymbolsRu[i]}" >${keyboardSymbolsRu[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'Enter') {
      output = `${output}<div class="k-button button-enter"  data="${keyboardSymbolsRu[i]}" >${keyboardSymbolsRu[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'ArrowUp') {
      output = `${output}<div class="k-button"  data="${keyboardSymbolsRu[i]}" >▲</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'Shift') {
      output = `${output}<div class="k-button button-shift" >${keyboardSymbolsRu[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === ' ') {
      output = `${output}<div class="k-button button-space" data="${keyboardSymbolsRu[i]}" >${keyboardSymbolsRu[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'ArrowLeft') {
      output = `${output}<div class="k-button"  data="${keyboardSymbolsRu[i]}" >◄</div>`;
      i += 1;
    }
    if (keyboardSymbolsRu[i] === 'ArrowDown') {
      output = `${output}<div class="k-button"  data="${keyboardSymbolsRu[i]}" >▼</div>`;
      i += 1;
    }

    if (keyboardSymbolsRu[i] === 'ArrowRight') {
      output = `${output}<div class="k-button"  data="${keyboardSymbolsRu[i]}" >►</div>`;
      i += 1;
    }
    output = `${output}<div class="k-button" data="${keyboardSymbolsRu[i]}" >${keyboardSymbolsRu[i]}</div>`;
  }
  keyboard.innerHTML = output;
}



//Translate

  


// Button selected onkeydown

document.onkeydown = function (event) {
  document.querySelectorAll('.keyboard .k-button').forEach((el) => el.classList.remove('active-button'));
  document.querySelector(`.keyboard .k-button[data="${event.key}"]`).classList.add('active-button');
};

// Button selected onkeyup
document.onkeyup = function (event) {
  document.querySelectorAll('.keyboard .k-button').forEach((el) => el.classList.remove('active-button'));
};

// Button selected onclick

document.querySelectorAll('.keyboard .k-button').forEach((el) => el.onclick = function (event) {
  document.querySelectorAll('.keyboard .k-button').forEach((elem) => elem.classList.remove('active-button'));
  const code = this.getAttribute('data');
  this.classList.add('active-button');
});

// Backspace
function backspace() {
  const textAreaValue = document.querySelector('.textarea').value;
  const inputLength = textAreaValue.length;
  const step = 1;
  const final = inputLength - step;
  document.querySelector('.textarea').value = textAreaValue.slice(0, final);
}

const BackspaceButton = document.querySelector('.button-backspace');
BackspaceButton.addEventListener('click', backspace);

//Delete
function deleteF() {
  const textAreaValue = document.querySelector('.textarea').value;
  const inputLength = textAreaValue.length;
  const step = 1;
  const final = 0 + step;
  document.querySelector('.textarea').value = textAreaValue.slice(final, inputLength);

}
const DeleteButton = document.querySelector('.button-del');
DeleteButton.addEventListener('click', deleteF);

// Capslock
let flag = false;
function capsLockup() {
  const allButtons = document.querySelectorAll('.k-button');
  allButtons.forEach((el) => {
    if (el.textContent === 'Backspace' || el.textContent === 'Control' || el.textContent === 'Shift' || el.textContent === 'Tab' || el.textContent === 'CapsLock' || el.textContent === 'Delete' || el.textContent === 'Enter' || el.textContent === 'Alt' || el.textContent === 'Win') {
      return;
    }
    el.textContent = el.textContent.toUpperCase();
  });
}

function capsLocklow() {
  const allButtons = document.querySelectorAll('.k-button');
  allButtons.forEach((el) => {
    if (el.textContent === 'Backspace' || el.textContent === 'Control' || el.textContent === 'Shift' || el.textContent === 'Tab' || el.textContent === 'CapsLock' || el.textContent === 'Delete' || el.textContent === 'Enter' || el.textContent === 'Alt' || el.textContent === 'Win') {
      return;
    }
    el.textContent = el.textContent.toLowerCase();
  });
}

const CapsLockButton = document.querySelector('.button-capslk');
CapsLockButton.addEventListener('click', () => {
  if (flag) {
    flag = false;
    capsLocklow();
  } else {
    flag = true;
    capsLockup();
  }
});

document.onkeydown = function (event) {
  if (event.code === 'CapsLock' && flag) {
    flag = false;
    capsLocklow();
  } else if(event.code === 'CapsLock' && !flag) {
    flag = true;
    capsLockup();
  }
};

// Enter
function enter() {
  const textAreaValue = document.querySelector('.textarea').value;
}

// Tab
function tab() {
  // const textAreaValue = document.querySelector('.textarea').value;
  // document.querySelector('.textarea').value = `${textAreaValue}  `;
}

const TabButton = document.querySelector('.button-tab');
TabButton.addEventListener('click', tab);
// ClickButton
function addLetter(el) {
  const tg = el.target;
  if (el.target.textContent === 'Backspace' || el.target.textContent === 'Control' || el.target.textContent === 'Shift' || el.target.textContent === 'Tab' || el.target.textContent === 'CapsLock' || el.target.textContent === 'Delete' || el.target.textContent === 'Enter' || el.target.textContent === 'Alt' || el.target.textContent === 'Win') {
    return;
  }
  textArea.textContent += tg.textContent;
}

keyboard.addEventListener('click', addLetter);

const allButtons = document.querySelectorAll('.k-button');
allButtons[0].innerHTML = '`';
