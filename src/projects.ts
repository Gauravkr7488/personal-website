import { Data } from "./data";
import { utils } from "./utils";

export class Projects{
    private static projects = Object.values(Data.projects);

    static addProjects(projectContainer: HTMLDivElement){
        this.listProjects(projectContainer);
        // some functionality
    }

    private static listProjects(projectContainer: HTMLDivElement){
        this.projects.forEach(element =>{
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