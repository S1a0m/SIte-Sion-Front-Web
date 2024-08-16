import { PopUpBase } from "./base.js";

class RecovPass extends PopUpBase {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.render();
    }

    render() {
        let content = `
            <form action="" method="post">
                <div id="content">
                    <input type="email" placeholder="Enter your mail here" class="email">
                    <input type="submit" value="Submit">
                <div>
                <p>
                    If this email exists, you'll get a recorvery link soon. 
                    Check it on your box.
                <p>
            </form>
        `
        this.setAttribute("type", "Forgotten Password");
        this.setAttribute("content", content);
        super.html();
        super.closePopup();
        this.updateStyle();
    }

    updateStyle() {
        let style = document.createElement("style");
        style.innerHTML = `
            [type='submit'] {
                background-color: #829e92ff;
                color: #faffe6;
                font-family: sans-serif;
                font-size: 1.5em;
                border-radius: 2em;
                border-style: none;
                height: 1.8em;
                width: 5.2em;
                text-align: center;
                display: block;
                margin-left: 18.12em;
                cursor: pointer;
            }

            #content {
                display: flex;
                justify-content: center;
                align-item: center;
                flex-direction: column;
                height: 40em;
                gap: 1em;
                padding: 0em 6em 0em 6em;
            }

            p {
                color: #991D1D;
            }

            .email {
                font-size: 2em;
                width: 17.3em;
            }
        `;
        this.shadowRoot.appendChild(style);
        super.style();
    }
}

customElements.define('recov-pass', RecovPass);
