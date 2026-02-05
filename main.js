
class TotoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'toto-generator');

    const title = document.createElement('h1');
    title.textContent = 'Toto Number Generator';

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers());

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers-container');

    const style = document.createElement('style');
    style.textContent = `
      .toto-generator {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        font-family: sans-serif;
      }
      .numbers-container {
        display: flex;
        margin-top: 20px;
      }
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f0f0f0;
        margin: 0 5px;
        font-size: 24px;
        font-weight: bold;
      }
      button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
      }
      button:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(button);
    wrapper.appendChild(numbersContainer);
  }

  generateNumbers() {
    const numbersContainer = this.shadowRoot.querySelector('.numbers-container');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    for (const number of numbers) {
      const numberElement = document.createElement('div');
      numberElement.setAttribute('class', 'number');
      numberElement.textContent = number;
      numbersContainer.appendChild(numberElement);
    }
  }
}

customElements.define('toto-generator', TotoGenerator);
