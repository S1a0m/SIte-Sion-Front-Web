class PopUpBase extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<h1>Mon élément personnalisé !</h1>`;
    }

    popupstyle() {
      return `
      :host {
        background: red;
      }`
    }
  }
  
  customElements.define('popup-base', PopUpBase);
  