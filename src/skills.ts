import { Data } from "./data";
import { utils } from "./utils";
export class Skills {
    private static skills: string[] = Object.values(Data.skills);
    static addSkils(skillContainer: HTMLDivElement) {
        this.listSkills(skillContainer);
        this.addClickingOnButtons();
    }

    private static listSkills(skillContainer: HTMLDivElement) {
        this.skills.forEach(element => {
            const div = utils.createDiv(element);
            utils.addClass("skillButton", div);
            skillContainer.appendChild(div);
        });
    }

    private static addClickingOnButtons() {
        const skillButtons = document.querySelectorAll<HTMLSpanElement>(".skillButton");
        skillButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                btn.classList.toggle("selectedSkill");
            });
        });
    }
}