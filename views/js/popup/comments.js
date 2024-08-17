import { PopUpBase } from "./base.js";

class ComMents extends PopUpBase {
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
                    <textarea class="quote" placeholder="Commentez..."></textarea>
                    <input type="submit" value="Submit">
                    <div class="comments">
                        <div class="details">
                            <div class="author">
                                <span><b>Tony</b> <img src="../icons/favorite-c.svg" alt=""> 25k</span>
                                <p>
                                    I’m so happy about this citation.
                                    It ’s so, very great.Es un hecho establecido hace demasiado
                                    Commentez
                                    tiempo que un lector se distraerá con el
                                    No stories about this
                                </p>
                            </div>
                            <div class="author">
                                <span><b>Sonia</b> <img src="../icons/favorite-c.svg" alt=""> 25k</span>
                                <p>
                                    I’m so happy about this citation.
                                    It ’s so, very great .
                                </p>
                            </div>
                            <div class="author">
                                <span><b>Tima</b> <img src="../icons/favorite-c.svg" alt=""> 25k</span>
                                <p>
                                    I’m so happy about this citation.
                                    It ’s so, very great .
                                </p>
                            </div>
                        </div>
                        <hr>
                    </div>
                <div>
            </form>
        `
        this.setAttribute("type", "Commentaires (25)");
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
                margin-left: 19.3em;
                cursor: pointer;
            }

            img {
                width: 1em;
                cursor: pointer;
            }

            #content {
                display: flex;
                justify-content: center;
                align-item: center;
                flex-direction: column;
                /*height: 40em;*/
                gap: 1em;
                padding: 0em 4em 0em 4em;
            }

            textarea {
                font-size: 2em;
                width: 22em;
                height: 5em;
                resize: none;
                margin-left: 1.4em;
            }

            .comments hr {
                height: 28em;
                width: 0.2em;
            }
            
            textarea:placeholder-shown {
                padding: 0.5em 0em 0em 1em;
                color: #1c1a1a;
            }

            .comments {
                display: flex;
                justify-content: space-between;
                margin-left: 1em;
                /*flex-direction: column;*/
            }

            .details {
                width: 40em;
                height: 28em;
                /*background: red;*/
                overflow: auto;
            }

            .author {
                padding: 1em;
                height: 8em;
                width: 35em;
                border-radius: 2em;
                background: #161616;
                margin-bottom: 1em;
            }

            span, p {
                font-family: sans-serif;
            }

            p {
                margin-left: 1.5em;
            }
        `;
        this.shadowRoot.appendChild(style);
        super.style();
    }
}

customElements.define('com-ments', ComMents);
