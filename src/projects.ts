import { Data } from "./data";
import { utils } from "./utils";

export class Projects {
    static showProject() {
        const selectedCard = document.querySelector(".selectedCard");
        const nameInSelectedCard = selectedCard?.querySelector(".projectName")?.textContent;
        const projectBoxContainer = document.querySelector("#projectBox");
        (projectBoxContainer as Element).innerHTML = "";
        const projectShown = utils.createDiv();
        projectShown.classList.add("projectShown");

        const projectName = utils.createDiv();
        projectName.classList.add("projectName")
        projectShown.appendChild(projectName);
        const projectDisc = utils.createDiv()
        projectShown.appendChild(projectDisc);
        const projectLinkList = utils.createDiv();
        projectLinkList.classList.add("linkList");
        projectShown.appendChild(projectLinkList);
        const projectSkillList = utils.createDiv();
        projectShown.appendChild(projectSkillList);


        this.projects.forEach(project => {
            if (project.name == nameInSelectedCard) {
                projectName.textContent = project.name;
                projectDisc.textContent = project.description;

                project.link.forEach(url => {
                    const a = document.createElement("a");
                    a.href = url;
                    a.textContent = url; // or something nicer like "GitHub"
                    a.target = "_blank"; // open in new tab
                    a.rel = "noopener noreferrer"; // security best practice
                    projectLinkList.appendChild(a);

                    // optional: add spacing between multiple links
                    projectLinkList.appendChild(document.createTextNode(" "));
                });
                
                project.skills.forEach(skill => {
                    const a = document.createElement("a");
                    a.textContent = skill;
                    a.classList.add("skillTag")
                    projectSkillList.appendChild(a);
                    projectSkillList.appendChild(document.createTextNode(" "));
                });
            }
        });
        projectBoxContainer?.appendChild(projectShown);


    }
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
            if (!utils.isArrayASubsetOfB(skillTagsList, selectedSkillsList)) projectCard.classList.add("hide");
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
                Projects.showProject();
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