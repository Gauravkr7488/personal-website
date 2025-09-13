export class utils {
    static isArrayASubsetOfB(b: string[], a: string[]) {
        return a.every(val => b.includes(val));
    }
    static createDiv(text: string = ""): HTMLDivElement {
        const div = document.createElement("div");
        div.textContent = text;
        return div;
    }
    static addId(name: string, div: Element) {
        return div.id = name;;
    }
    static addClass(name: string, div: Element) {
        return div.classList.add(name);
    }
}