export class PopUpBase extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
  
    connectedCallback() {
      this.html();
      this.style();
      this.closePopup();
    }

    static get observedAttributes() {
      return ["type"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if(name === "type") {
        this.html();
      }
    }

    html() {
      let popupType = this.getAttribute("type");
      let content = this.getAttribute("content");
      this.shadowRoot.innerHTML = `
      <div class="container">
        <div class="head">
        <span class="popup-title">${popupType}</span><span class="close">×</span>
        </div>
        <div class="content">
        <hr>
          <div class="main">
          ${content}
          </div>
        </div>
      </div>
      `;
    }

    style() {
      var style = document.createElement("style");
      style.textContent = `
        .popup-title {
          color: #829e92ff;
          font-family: sans-serif;
          font-size: 1.8em;
          text-decoration: none;
        }

        hr {
            width: 53em;
            height: 3px;
            background-color: #d9d9d9ff;
            border-style: none;
            position: relative;
        }

        .main {
          color: white;
          padding: 4em 3em 0em 3em;
        }

        .container {
          background: #1c1a1a;
          height: 53em;
          width: 53em;
          padding-top: 0.1em;
          position: fixed;
          z-index: 2;
          border-style: solid;
          border-color: #d9d9d9ff;
          border-width: 0.64em;
        }

        .head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8em;
        }

        .head span {
          display: block;
        }

        .popup-title {
          margin-left: 0.5em;
        }

        .close {
          cursor: pointer;
          color: #d9d9d9ff;
          font-size: 3em;
          width: 1em;
          font-weight: bold;
        }

        .close:hover {
          color: #829e92ff;
        }
      `;
      this.shadowRoot.appendChild(style);
    }

    closePopup() {
      this.shadowRoot.querySelector(".close").addEventListener("click", ()=> {
        var menu = this.shadowRoot.querySelector(".container");
        menu.style = "display: none;"
      });
    }
  }
  
  customElements.define('popup-base', PopUpBase);
  