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
      this.renderPopup();
    }

    static get observedAttributes() {
      return ["type", "content", "show"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if(name === "type") {
        this.html();
      }
      if(name === "show") {
        this.renderPopup();
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
            background-color: #faffe6;
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
          margin: 2em 0em 0em 32.9em;
          z-index: 4;
          border-style: solid;
          border-color: #faffe6;
          border-width: 0.64em;
          /*transition: all 300ms ease-in-out;*/
        }

        .container:hover {
          border-color: #829e92ff;
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

    showPopup(param) {
      var menu = this.shadowRoot.querySelector(".container");
      if(param === "no") {
        menu.style = "display: none;";
        this.setAttribute("show", param);
        document.querySelector("#body").setAttribute("style", "filter: blur(0px);");
      }
      else if(param === "yes") {
        menu.style = "display: block;";
        this.setAttribute("show", param);
        document.querySelector("#body").setAttribute("style", "filter: blur(3px); pointer-events: none;");
      }
    }

    renderPopup() {
      let show = this.getAttribute("show");
      if(show === "no") {
        this.showPopup(show);
      }
      else if(show === "yes") {
        this.showPopup(show);
      }
    }

    closePopup() {
      this.shadowRoot.querySelector(".close").addEventListener("click", ()=> {
        this.showPopup("no");
      });
    }
  }
  
  customElements.define('popup-base', PopUpBase);
  