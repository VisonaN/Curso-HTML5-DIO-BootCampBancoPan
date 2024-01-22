class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // Base componente
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo");
        // Estilizar componente
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color: red;
            }
        `
        // Enviar pra shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}
// Sempre que criar um custom element usar o '-' no nome, se não ele não vai funcionar
customElements.define('titulo-dinamico', TituloDinamico);