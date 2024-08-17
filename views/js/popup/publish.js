import { PopUpBase } from "./base.js";

class AddNew extends PopUpBase {
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
                    <div id="inputs">
                        <textarea class="quote" placeholder="Quote*"></textarea>
                        <textarea class="about" placeholder="About"></textarea>
                        <input type="text" placeholder="Author*" class="author">
                    </div>
                    <input type="submit" value="Submit">
                <div>
            </form>
        `
        this.setAttribute("type", "Add New");
        this.setAttribute("content", content);
        super.html();
        super.closePopup();
        super.renderPopup();
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
                margin: 0.7em 0em 0em 18.12em;
                cursor: pointer;
            }

            #content {
                display: flex;
                justify-content: center;
                align-item: center;
                flex-direction: column;
                height: 40em;
                padding: 0em 6em 0em 6em;
            }

            #inputs {
                display: flex;
                justify-content: center;
                align-item: center;
                flex-direction: column;
                height: 32em;
                gap: 4em;
            }

            textarea {
                font-size: x-large;
                resize: none;
            }

            textarea:placeholder-shown {
                padding: 0.5em 0em 0em 1em;
                color: #1c1a1a;
            }

            .quote {
                height: 12em;
            }

            .about {
                height: 22em;
            }

            .author {
                height: 6em;
                font-size: 1.5em;
            }
        `;
        this.shadowRoot.appendChild(style);
        super.style();
    }
}

customElements.define('add-new', AddNew);
