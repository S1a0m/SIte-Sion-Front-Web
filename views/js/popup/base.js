class PopUpBase extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      })
    }
  
    connectedCallback() {
      this.html();
      this.style();
      this.script();
    }
  

    html() {
      this.shadowRoot.innerHTML = `
      <div class="container">
        <div class="close">×</div>
        <div class="menu">
          <span><a href="" class="not-active"><span class="first-letter">H</span>ome</a></span>
          <span><a href="" class="not-active"><span class="first-letter">M</span>y Quotes</a></span>
          <span><a href="" class="not-active"><span class="first-letter">S</span>ettings</a></span>
          <span><a href="" class="not-active"><span class="first-letter">P</span>rofil</a></span>
        </div>
      </div>
      `;
    }

    style() {
      var style = document.createElement("style");
      style.textContent = `
      .container {
        background: #1c1a1a;
        height: 80vh;
        width: 18vw;
        padding-left: 3em;
        padding-top: 0.1em;
      }

      a::after {
        content: "|";
        margin-left: 4em;
      }

      .menu {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
        padding-top: 7em;
      }

      .close {
        padding-top: 0.1em;
        margin-left: 6em;
        cursor: pointer;
        color: #d9d9d9ff;
        font-size: 3em;
        width: 1em;
        font-weight: bold;
      }

      .close:hover {
        color: #829e92ff;
      }

      .first-letter {
        text-decoration: underline;
      }
      
      a {
        color: #829e92ff;
        font-family: sans-serif;
        font-size: 1.8em;
        text-decoration: none;
      }

      .not-active:hover {
        background: #d9d9d9ff;
      }

      `;
      this.shadowRoot.appendChild(style);
    }

    script() {
      this.shadowRoot.querySelector(".close").addEventListener("click", ()=> {
        var menu = this.shadowRoot.querySelector(".container");
        menu.style = "display: none;"
      });

      this
    }
  }
  
  customElements.define('popup-base', PopUpBase);
  