/* const keyboardSymbolsCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'NumpadDecimal', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ControlLeft', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']; */
const keyboardSymbolsRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLk', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
const keyboardSymbols = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

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
      output = `${output}<div class="k-button button-backspace" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Tab') {
      output = `${output}<div class="k-button button-tab" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Del') {
      output = `${output}<div class="k-button button-del" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'CapsLk') {
      output = `${output}<div class="k-button button-capslk" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Enter') {
      output = `${output}<div class="k-button button-enter" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'ArrowUp') {
      output = `${output}<div class="k-button" >▲</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'Shift') {
      output = `${output}<div class="k-button button-shift" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === ' ') {
      output = `${output}<div class="k-button button-space" >${keyboardSymbols[i]}</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'ArrowLeft') {
      output = `${output}<div class="k-button" >◄</div>`;
      i += 1;
    }
    if (keyboardSymbols[i] === 'ArrowDown') {
      output = `${output}<div class="k-button" >▼</div>`;
      i += 1;
    }

    if (keyboardSymbols[i] === 'ArrowRight') {
      output = `${output}<div class="k-button" >►</div>`;
      i += 1;
    }
    output = `${output}<div class="k-button" >${keyboardSymbols[i]}</div>`;
  }
  keyboard.innerHTML = output;
}
initEn();

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

// Enter
function enter() {

}

// Tab
function tab() {
  const textAreaValue = document.querySelector('.textarea').value;
  document.querySelector('.textarea').value = textAreaValue + '  ' ;

}

const TabButton = document.querySelector('.button-tab');
TabButton.addEventListener('click', tab);
