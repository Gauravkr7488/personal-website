export class Data{
    public static readonly skills = {
        js: "javaScript",
        c: "C", 
        cpp: "C++", 
        cSharp: "C#",
        kotlin: "kotlin", 
        Cooking: "Cooking"
    }

    public static readonly projects = {
        Tetris: {
            name: "Tetris in C",
            description: "this is tetris",
            link: ["http://jsjjsjs.com", "http://github.com"], 
            skills: [Data.skills.c]
        },

        Portfolio: {
            name: "Personal Portfolio Website",
            description: "A responsive website to showcase my skills and projects.",
            link: ["https://myportfolio.com"],
            skills: [Data.skills.js]
        },

        GameEngine: {
            name: "2D Game Engine",
            description: "Custom-built 2D game engine supporting physics and rendering.",
            link: ["https://github.com/example/game-engine"],
            skills: [Data.skills.cpp, Data.skills.cSharp]
        },

        MobileApp: {
            name: "Task Manager App",
            description: "A cross-platform mobile app for managing daily tasks.",
            link: ["https://play.google.com/store/apps/details?id=taskmanager"],
            skills: [Data.skills.kotlin, Data.skills.js]
        },

        RecipeBook: {
            name: "Cooking Recipe Book",
            description: "A fun project combining coding and cooking: digital recipe manager.",
            link: ["https://github.com/example/recipe-book"],
            skills: [Data.skills.Cooking, Data.skills.js]
        }
    }
}