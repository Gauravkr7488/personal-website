import { Projects } from "./projects";
import { Skills } from "./skills";
import { utils } from "./utils";

const root = utils.createDiv();
utils.addId("root", root);
document.body.appendChild(root);

const skillContainer = utils.createDiv();
utils.addId("skillContainer", skillContainer);
utils.addClass("container", skillContainer);
root.appendChild(skillContainer);
Skills.addSkils(skillContainer);

const projectContainer = utils.createDiv();
utils.addId("projectContainer", projectContainer);
utils.addClass("container", projectContainer);
root.appendChild(projectContainer);
Projects.addProjects(projectContainer);

const projectBoxContainer = utils.createDiv();
utils.addId("projectBox", projectBoxContainer);
utils.addClass("container", projectBoxContainer);
root.appendChild(projectBoxContainer);

const textBox = utils.createDiv("Select a Project to view more");
utils.addClass("textBox", textBox); // in style.css
projectBoxContainer.appendChild(textBox)
