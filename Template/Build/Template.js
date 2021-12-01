"use strict";
var Template;
(function (Template) {
    async function Introduction() {
        console.log("Intro");
        let slideIn = {
            start: { translation: Template.fs.positions.bottomright },
            end: { translation: Template.fs.positions.bottomleft },
            duration: 1,
            playmode: Template.fs.ANIMATION_PLAYMODE.PLAYONCE
        };
        let dialogues = {
            narrator: {
                t00: '08:30 - 2 Minuten vor dem Programmier Unterricht.',
                t01: 'Heute ist der letzte Unterricht vor der Prüfung nächste Woche',
                t02: 'Eine halbe Stunde später'
            },
            badProf: {
                t00: 'Sooooo meine Damen und Herren, denken Sie dran nächste Woche ist die Prüfung. Wir haben alles ausführlich behandelt und ich hab Sie in meinen Augen excellent auf die Prüfung vorbereitet',
                t01: 'Ein Thema ist allerdings noch besonders wichtig. Es geht um @!daw33132ada@111111!!!@@@sDadad!!!@@@@@@@@@@@@@@#################......',
                t02: 'Haben Sie dazu noch Fragen? Unklarheiten? Generelle Fragen zur Prüfung?',
                t03: 'Das gibts ja garnicht!',
                t04: 'Wunderbar'
            },
            mainChar: {
                t00: 'Ich habe leider nichts verstanden. Gibt es eine Möglichkeit wo ich das nachlesen kann?',
                t01: '...',
            }
        };
        getUserName();
        //get UserName
        async function getUserName() {
            await Template.fs.Speech.tell(null, "Bitte gib deinen Namen hier ein: ", true, 'start--screen');
            Template.userData.Protagonist.name = await Template.fs.Speech.getInput();
            //const playerName = userData.Protagonist.name.toString();
            sequenzOne();
        }
        //actual Scene.
        async function sequenzOne() {
            await Template.fs.Location.show(Template.locations.outSideSchool);
            await Template.fs.update(1);
            await Template.fs.Speech.tell(Template.character.narrator, dialogues.narrator.t00);
            await Template.fs.Location.show(Template.locations.inSideSchool);
            await Template.fs.update(1);
            await Template.fs.Location.show(Template.locations.insideClassroom);
            await Template.fs.Speech.tell(Template.character.narrator, dialogues.narrator.t01);
            await Template.fs.Character.animate(Template.character.stupidProf, Template.character.stupidProf.pose.normal, slideIn);
            await Template.fs.update(1);
            await Template.fs.Speech.tell(Template.character.stupidProf, dialogues.badProf.t00);
            await Template.fs.Speech.tell(Template.character.stupidProf, dialogues.badProf.t01);
            await Template.fs.Speech.tell(Template.character.narrator, dialogues.narrator.t02);
            await Template.fs.Character.hide(Template.character.stupidProf);
            await Template.fs.Character.show(Template.character.stupidProf, Template.character.stupidProf.pose.happy, Template.fs.positionPercent(0, 100));
            await Template.fs.Speech.tell(Template.character.stupidProf, dialogues.badProf.t02);
            await Template.fs.update(0);
            await Template.fs.Speech.clear();
            await Template.fs.Location.show(Template.locations.classMates);
            await Template.fs.Character.hideAll();
            await Template.fs.update(1);
            await Template.fs.Location.show(Template.locations.classMatesQuestions);
            await Template.fs.Character.animate(Template.character.mainCharacter, Template.character.mainCharacter.pose.normal, slideIn);
            await Template.fs.update(1);
            playerChoice();
        }
        async function playerChoice() {
            let playerChoices = {
                C0001: "Sagen das niemand was verstanden hat",
                C0002: "Nichts sagen"
            };
            let userInput = await Template.fs.Menu.getInput(playerChoices, "player--select");
            switch (userInput) {
                case playerChoices.C0001:
                    await Template.fs.Speech.tell(Template.userData.Protagonist, dialogues.mainChar.t00);
                    await Template.fs.update(1);
                    await Template.fs.Character.hide(Template.character.mainCharacter);
                    await Template.fs.Location.show(Template.locations.insideClassroom);
                    await Template.fs.Character.show(Template.character.stupidProf, Template.character.stupidProf.pose.angry, Template.fs.positionPercent(0, 100));
                    await Template.fs.Speech.tell(Template.character.stupidProf, dialogues.badProf.t03);
                    await Template.fs.update(1);
                    break;
                case playerChoices.C0002:
                    await Template.fs.Speech.tell(Template.userData.Protagonist, dialogues.mainChar.t01);
                    await Template.fs.update(1);
                    await Template.fs.Character.hide(Template.character.mainCharacter);
                    await Template.fs.Location.show(Template.locations.insideClassroom);
                    await Template.fs.Character.show(Template.character.stupidProf, Template.character.stupidProf.pose.happy, Template.fs.positionPercent(0, 100));
                    await Template.fs.update(0);
                    await Template.fs.Speech.tell(Template.character.stupidProf, dialogues.badProf.t04);
                    await Template.fs.update(0);
                    break;
            }
            ;
        }
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fs = FudgeStory;
    Template.userData = {
        Protagonist: {
            name: 'Default',
        },
    };
    Template.transition = {
        clock: {
            duration: 1,
            alpha: "./Images/bsp-trans-one.png",
            edge: 1
        },
    };
    Template.locations = {
        classMates: {
            name: "classroom",
            background: "./Images/rooms/vn-class.jpg"
        },
        classMatesQuestions: {
            name: "classroomquestion",
            background: "./Images/rooms/vn-class-questions.jpg"
        },
        outSideSchool: {
            name: "outsideschool",
            background: "./Images/rooms/vn-school-outside.jpg"
        },
        inSideSchool: {
            name: "insideschool",
            background: "./Images/rooms/vn-school-inside.jpg"
        },
        insideClassroom: {
            name: "insideclassroom",
            background: "./Images/rooms/vn-classroom.jpg"
        },
    };
    Template.character = {
        narrator: {
            name: 'Narrator',
        },
        stupidProf: {
            name: 'Prof. Dr. Harabashi Tadinpachi',
            origin: Template.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/prof/uni-prof-normal.png",
                happy: "./Images/prof/uni-prof-happy.png",
                angry: "./Images/prof/uni-prof-angry.png",
                laugh: "./Images/prof/uni-prof-laugh.png"
            }
        },
        goodProf: {
            name: 'Dr JavaScript',
            origin: Template.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/main-character/main-char-mid-scaled.png",
                angry: "./Images/main-character/main-char-mid-angry.png",
            }
        },
        mainCharacter: {
            name: '',
            origin: Template.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/main-character/mc-normal.png",
            }
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Introduction, name: "Introduction" }
        ];
        const uiElement = document.querySelector("[type=interface]");
        Template.userData = Template.fs.Progress.setData(Template.userData, uiElement);
        // start the sequence
        Template.fs.Progress.go(scenes);
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map