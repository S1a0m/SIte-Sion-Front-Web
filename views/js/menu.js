class MeNu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    })
  }

  connectedCallback() {
    this.html();
    this.style();
    this.showMenu("no");
    this.onPage();
    this.menuClosed();
  }

  static get observedAttributes() {
    return ["active", "show"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === "active") {
      this.onPage();
    }
    if(name === "show") {
      var show = this.getAttribute("show");
      if(show === "no") {
        this.showMenu(show);
      }
      else if(show === "yes") {
        this.showMenu(show);
      }
    }
  }

  onPage() {
    let onpage = this.getAttribute("active");
    let pagelist = ["home", "my-quotes", "settings", "profil"];
    for(let i = 0; i < pagelist.length; i++) {
      if(onpage === pagelist[i]) {
        var page = this.shadowRoot.querySelector(`[href="${pagelist[i]}.html"]`);
        page.setAttribute("class", "");
        page.setAttribute("style", "cursor: default");
        page.setAttribute("href", "");
      }
    }
  }

  html() {
    this.shadowRoot.innerHTML = `
    <div class="container">
      <div class="close">×</div>
      <div class="menu">
        <span><a href="home.html" class="not-active"><span class="first-letter">H</span>ome</a></span>
        <span><a href="my-quotes.html" class="not-active"><span class="first-letter">M</span>y Quotes</a></span>
        <span><a href="settings.html" class="not-active"><span class="first-letter">S</span>ettings</a></span>
        <span><a href="profil.html" class="not-active"><span class="first-letter">P</span>rofil</a></span>
      </div>
    </div>
    `;
  }

  style() {
    var style = document.createElement("style");
    style.textContent = `
    @font-face {
      font-family: "RobotoCondensed-Regular";
      src: url("./polices/RobotoCondensed-Regular.ttf");
    }

    .container:hover {
      border-color: #829e92ff;
    }

    .container {
      background: #1c1a1a;
      height: 99vh;
      width: 18vw;
      padding-left: 3em;
      padding-top: 0.1em;
      position: fixed;
      z-index: 2;
      border-style: solid;
      border-color: #d9d9d9ff;
    }

    a::after {
      content: "|";
      margin-left: 4em;
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 2em;
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
      font-family: "RobotoCondensed-Regular";
      font-size: 1.8em;
      text-decoration: none;
    }

    .not-active {
      transition: all 250ms ease-in-out;
    }

    .not-active:hover {
      background: #d9d9d9ff;
    }
    `;
    this.shadowRoot.appendChild(style);
  }

  showMenu(param) {
    var menu = this.shadowRoot.querySelector(".container");
    if(param === "no") {
      menu.style = "display: none;";
    }
    else if(param === "yes") {
      menu.style = "display: block;";
    }
  }

  menuClosed() {
    this.shadowRoot.querySelector(".close").addEventListener("click", ()=> {
      this.showMenu("no");
    });
  }
}

customElements.define('me-nu', MeNu);
