"use strict";
var Template;
(function (Template) {
    async function Introduction() {
        await Template.fs.Location.show(Template.locations.classRoom);
        await Template.fs.Speech.tell(Template.character.narrator, "<em>“Hello wanderer, thank you for your time. This is of utmost importance, you have to bring this medicine to the black forest in the south immediately! Head there as fast as your feet will carry you, your troubles shall not be in vein. Travel safely, friend...”</em>");
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fs = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        clock: {
            duration: 1,
            alpha: "../Images/bsp-transition-one.jpg",
            edge: 1
        },
    };
    Template.locations = {
        classRoom: {
            name: "classroom",
            background: "Images/visual-novel-classroom.jpg"
        },
    };
    Template.character = {
        narrator: {
            name: '',
        },
        stupidProf: {
            name: 'Max Mustermann',
            origin: Template.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "../Images/bsp-img-prof.jpg",
            }
        },
        goodProf: {
            name: 'Dr JavaScript',
            origin: Template.fs.ORIGIN.BOTTOMRIGHT,
        },
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Introduction, name: "Introduction" }
        ];
        //const uiElement: HTMLELement = document.querySelector("[type=interface]");
        //dataForSave = fs.Progress.setData(DataForSave, uiElement);
        // start the sequence
        Template.fs.Progress.go(scenes);
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map