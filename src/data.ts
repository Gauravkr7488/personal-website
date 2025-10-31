export class Data{
    public static readonly skills = {
        js: "javaScript",
        c: "C", 
        cpp: "C++", 
        cSharp: "C#",
        kotlin: "kotlin", 
        Cooking: "Cooking",
        ts: "typeScript",
    }

    public static readonly projects = {
        Tetris: {
            name: "Tetris in C",
            description: "I made this as the final project after completing one month course on C",
            link: ["https://github.com/Gauravkr7488/Tetris"], 
            skills: [Data.skills.c]
        },

        F2Tools: {
            name: "F2Tools",
            description: "Started as time-tracking and administration, its a vscode exitension as the name suggest it helps in administration in TF2P environment, later it was renamed F2Tools",
            link: ["https://github.com/Gauravkr7488/time-tracking-and-administration", "https://github.com/TheForty2Project/F2Tools"],
            skills: [Data.skills.ts],
        }

        // Portfolio: {
        //     name: "Personal Portfolio Website",
        //     description: "A responsive website to showcase my skills and projects.",
        //     link: ["https://myportfolio.com"],
        //     skills: [Data.skills.js]
        // },

        // GameEngine: {
        //     name: "2D Game Engine",
        //     description: "Custom-built 2D game engine supporting physics and rendering.",
        //     link: ["https://github.com/example/game-engine"],
        //     skills: [Data.skills.cpp, Data.skills.cSharp]
        // },

        // MobileApp: {
        //     name: "Task Manager App",
        //     description: "A cross-platform mobile app for managing daily tasks.",
        //     link: ["https://play.google.com/store/apps/details?id=taskmanager"],
        //     skills: [Data.skills.kotlin, Data.skills.js]
        // },

        // RecipeBook: {
        //     name: "Cooking Recipe Book",
        //     description: "A fun project combining coding and cooking: digital recipe manager.",
        //     link: ["https://github.com/example/recipe-book"],
        //     skills: [Data.skills.Cooking, Data.skills.js]
        // }
    }
}