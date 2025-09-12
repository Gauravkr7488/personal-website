export class utils {
    static createDiv(): HTMLDivElement {
        const div = document.createElement("div");
        div.textContent = "I’m reusable!";
        return div;
    }
    static addId(name: string, div: HTMLDivElement){
        return div.id = name;;
    }
    static addClass(name: string, div: HTMLDivElement){
        return div.classList.add(name);
    }
}