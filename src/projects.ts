import { Data } from "./data";
import { utils } from "./utils";

export class Projects {
    static filterProjects() {
        let selectedSkillsList: string[] = [];
        const projectCards = document.querySelectorAll(".projectCard");

        projectCards.forEach(projectCard => {
            projectCard.classList.remove("hide");
        });

        const selectedSkills = document.querySelectorAll(".selectedSkill");
        selectedSkills.forEach(selectedSkill => {
            selectedSkillsList.push(selectedSkill.textContent);

        });

        let skillTagsList: string[] = [];
        projectCards.forEach(projectCard => {
            const skillTags = projectCard.querySelectorAll(".skillTag");
            skillTags.forEach(skillTag => {
                skillTagsList.push(skillTag.textContent);
            });
            if(!utils.isArrayASubsetOfB(skillTagsList, selectedSkillsList)) projectCard.classList.add("hide");
            skillTagsList = [];
        });
    }

    private static projects = Object.values(Data.projects);

    static addProjects(projectContainer: HTMLDivElement) {
        this.listProjects(projectContainer);
        this.addClickingOnSkills()
        // some functionality
    }
    static addClickingOnSkills() {
        const projectCard = document.querySelectorAll(".projectCard");
        projectCard.forEach((card) => {
            card.addEventListener("click", () => {
                projectCard.forEach(c => c.classList.remove("selectedCard"));
                card.classList.add("selectedCard");
            });
        });
    }

    private static listProjects(projectContainer: HTMLDivElement) {
        this.projects.forEach(element => {
            const projectCard = utils.createDiv();
            utils.addClass("projectCard", projectCard);
            projectContainer.appendChild(projectCard);

            const projectName = utils.createDiv(element.name);
            utils.addClass("projectName", projectName);
            projectCard.appendChild(projectName);

            const skillSection = utils.createDiv();
            utils.addClass("skillSection", skillSection);
            projectCard.appendChild(skillSection);

            element.skills.forEach(skill => {
                const skillTag = utils.createDiv(skill);
                utils.addClass("skillTag", skillTag);
                skillSection.appendChild(skillTag);
            })
        })
    }
}