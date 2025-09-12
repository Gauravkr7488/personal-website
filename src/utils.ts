export class utils {
    static createDiv(text: string = "something"): HTMLDivElement {
        const div = document.createElement("div");
        div.textContent = text;
        return div;
    }
    static addId(name: string, div: HTMLDivElement){
        return div.id = name;;
    }
    static addClass(name: string, div: HTMLDivElement){
        return div.classList.add(name);
    }
}