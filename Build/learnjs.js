"use strict";
var learnjs;
(function (learnjs) {
    learnjs.f = FudgeCore;
    learnjs.fs = FudgeStory;
    window.addEventListener("load", start);
    function start(_event) {
        const uiElement = document.querySelector("[type=interface]");
        learnjs.userData = learnjs.fs.Progress.setData(learnjs.userData, uiElement);
        const helpButton = document.querySelector('.help');
        helpButton.addEventListener('click', helpOptions);
        async function helpOptions() {
            learnjs.fs.Text.print("<p>Tastaturbelegung:</p> <p>Menü aufrufen: ESC</p>");
        }
        let scenes = [
            //{ id: "intro", scene: Introduction, name: "Introduction" },
            { id: "Home", scene: learnjs.Home, name: "Home" },
        ];
        // start the sequence
        learnjs.fs.Progress.go(scenes);
    }
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.transitions = {
        clock: {
            duration: 1,
            alpha: "./Images/transitions/020.jpg",
            edge: 1
        },
        long: {
            duration: 5,
            alpha: "./Images/transitions/code.jpg",
            edge: 1
        }
    };
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.items = {
        exampleItem: {
            name: 'bspItem',
            desc: 'Ein Beispielitem',
            img: './Images/items/bspitem.png',
        }
    };
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Home() {
        let slideOut = {
            start: { translation: learnjs.fs.positions.bottomleft },
            end: { translation: learnjs.fs.positions.bottomright },
            duration: 1,
            playmode: learnjs.fs.ANIMATION_PLAYMODE.PLAYONCE
        };
        await learnjs.fs.Location.show(learnjs.locations.outSideSchool);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `<span class="color-red">${learnjs.userData.Protagonist.name}</span> ist auf dem Weg nachhause`);
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, slideOut);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, 'Etwas später');
    }
    learnjs.Home = Home;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Introduction() {
        let slideIn = {
            start: { translation: learnjs.fs.positions.bottomright },
            end: { translation: learnjs.fs.positions.bottomleft },
            duration: 1,
            playmode: learnjs.fs.ANIMATION_PLAYMODE.PLAYONCE
        };
        //let signalDelay: fs.Signal = fs.Progress.defineSignal([ () => {
        //fs.Progress.delay(1);
        //}]);
        let dialogues = {
            narrator: {
                t00: '08:30 - 2 Minuten vor dem Programmier Unterricht.',
                t01: 'Heute ist der letzte Unterricht vor der Progammier - Prüfung nächste Woche',
                t02: 'Eine halbe Stunde später',
            },
            badProf: {
                t00: 'Guuuuuuten Morgen meine Damen und Herren. Wie sie alle wissen sollten, schreiben wir nächste Woche die berühmt berüchtigte Prüfung wo die durchfallquote letztes Semester nur bei 90% lag. Wir haben alles ausführlich behandelt und ich habe Sie natürlich excellent auf die Prüfung vorbereitet',
                t01: 'Es geht um die gesamten Grundlagen die wir in diesem Semester behandelt haben. Ein Thema ist allerdings noch besonders wichtig. Es geht um @!daw33132ada@111111!!!@@@sDadad!!!@@@@@@@@@@@@@@#################......',
                t02: 'Haben Sie dazu noch Fragen? Unklarheiten? Generelle Fragen zur Prüfung?',
                t04: 'Wunderbar',
            },
            mainChar: {
                t00: 'Ich glaube Ich spreche für alle wenn ich sage wir haben nichts verstanden! Können wir das irgendwo nachlesen?',
                t01: '...',
            }
        };
        getUserName();
        async function getUserName() {
            await learnjs.fs.Speech.tell(null, "<p>Bevor es losgeht, am unterem rechtem Rand deines Bildschirms findest du einen Hilfe Button wo alle Tastaturbefehle zu finden sind:</p><p>Im Menü kannst du Speichern, ein Spielstand laden und das Intro überspringen</p><p>Wenn du mir jetzt noch verrätst wie du heißt geht es direkt los</p>", true, 'introduction-text');
            learnjs.userData.Protagonist.name = await learnjs.fs.Speech.getInput();
            learnjs.fs.Speech.hide();
            sequenzOne();
        }
        //actual Scene.
        async function sequenzOne() {
            await learnjs.fs.Location.show(learnjs.locations.outSideSchool);
            await learnjs.fs.update(learnjs.transitions.long.duration, learnjs.transitions.long.alpha, learnjs.transitions.long.edge);
            await learnjs.fs.update(1);
            await learnjs.fs.Speech.tell(learnjs.character.narrator, dialogues.narrator.t00);
            await learnjs.fs.Location.show(learnjs.locations.inSideSchool);
            await learnjs.fs.update(1);
            await learnjs.fs.Speech.tell(learnjs.character.narrator, dialogues.narrator.t01);
            await learnjs.fs.Location.show(learnjs.locations.insideClassroom);
            await learnjs.fs.Character.animate(learnjs.character.stupidProf, learnjs.character.stupidProf.pose.normal, slideIn);
            await learnjs.fs.update(1);
            await learnjs.fs.Speech.tell(learnjs.character.stupidProf, dialogues.badProf.t00);
            await learnjs.fs.Speech.tell(learnjs.character.stupidProf, dialogues.badProf.t01);
            await learnjs.fs.Speech.tell(learnjs.character.narrator, dialogues.narrator.t02);
            await learnjs.fs.Character.hide(learnjs.character.stupidProf);
            await learnjs.fs.Character.show(learnjs.character.stupidProf, learnjs.character.stupidProf.pose.happy, learnjs.fs.positionPercent(0, 100));
            await learnjs.fs.Speech.tell(learnjs.character.stupidProf, dialogues.badProf.t02);
            await learnjs.fs.update(0);
            await learnjs.fs.Speech.clear();
            await learnjs.fs.Location.show(learnjs.locations.classMates);
            await learnjs.fs.Character.hideAll();
            await learnjs.fs.update(1);
            await learnjs.fs.Location.show(learnjs.locations.classMatesQuestions);
            await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, slideIn);
            await learnjs.fs.update(1);
            saySomethingOrNot();
        }
        async function saySomethingOrNot() {
            let playerChoices = {
                C0001: "Sagen das niemand was verstanden hat",
                C0002: "Nichts sagen"
            };
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "player--select");
            switch (userInput) {
                case playerChoices.C0001:
                    await learnjs.fs.update(1);
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, dialogues.mainChar.t00);
                    await learnjs.fs.update(1);
                    await learnjs.fs.Character.hide(learnjs.character.mainCharacter);
                    await learnjs.fs.Location.show(learnjs.locations.insideClassroom);
                    await learnjs.fs.Character.show(learnjs.character.stupidProf, learnjs.character.stupidProf.pose.angry, learnjs.fs.positionPercent(0, 100));
                    await learnjs.fs.update(1);
                    await learnjs.fs.Speech.tell(learnjs.character.stupidProf, `<p>Das ist ja unerhört <span class="color-red">${learnjs.userData.Protagonist.name}!!!!!</span> Ich habe meine Pflicht erfüllt, von mir müssen Sie und die gesamte Klasse nichtsmehr erwarten. Wir sehen uns zur Prüfung. Und jetzt verschwinden Sie aus meinem Klassenzimmer und zwar ALLEEEE!!!!!!!!!!!</p>`);
                    learnjs.fs.Speech.clear();
                    learnjs.fs.Speech.hide();
                    learnjs.fs.Character.hideAll();
                    goToNextScene();
                    await learnjs.fs.update(1);
                    break;
                case playerChoices.C0002:
                    await learnjs.fs.update(1);
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, dialogues.mainChar.t01);
                    await learnjs.fs.update(1);
                    await learnjs.fs.Character.hide(learnjs.character.mainCharacter);
                    await learnjs.fs.Location.show(learnjs.locations.insideClassroom);
                    await learnjs.fs.Character.show(learnjs.character.stupidProf, learnjs.character.stupidProf.pose.angry, learnjs.fs.positionPercent(0, 100));
                    await learnjs.fs.update(1);
                    await learnjs.fs.Speech.tell(learnjs.character.stupidProf, `<p>Das dachte ich mir bereits. Wer hier nichts versteht hat sowieso keine Zukunft!!!!!</span>Wir sehen uns zur Prüfung. Und jetzt verschwinden Sie aus meinem Klassenzimmer und zwar ALLEEEE!!!!!!!!!!!</p>`);
                    learnjs.fs.Speech.clear();
                    learnjs.fs.Speech.hide();
                    learnjs.fs.Character.hideAll();
                    goToNextScene();
                    await learnjs.fs.update(1);
                    break;
            }
            ;
        }
        function goToNextScene() {
            return learnjs.Home();
        }
    }
    learnjs.Introduction = Introduction;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.character = {
        narrator: {
            name: 'Narrator',
        },
        stupidProf: {
            name: 'Prof. Dr. Harabashi Tadinpachi',
            origin: learnjs.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/prof/uni-prof-normal.png",
                happy: "./Images/prof/uni-prof-happy.png",
                angry: "./Images/prof/uni-prof-angry.png",
                laugh: "./Images/prof/uni-prof-laugh.png"
            }
        },
        goodProf: {
            name: 'Dr JavaScript',
            origin: learnjs.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/main-character/main-char-mid-scaled.png",
                angry: "./Images/main-character/main-char-mid-angry.png",
            }
        },
        mainCharacter: {
            name: '',
            origin: learnjs.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/main-character/mc-normal.png",
            }
        }
    };
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    let menueObj = {
        safe: 'safe',
        load: 'load',
        close: 'close',
    };
    let gameMenue;
    let isMenueOpen = true;
    async function menueButtonPressed(action) {
        switch (action) {
            case menueObj.safe:
                await learnjs.fs.Progress.save();
                break;
            case menueObj.load:
                await learnjs.fs.Progress.load();
                break;
            case menueObj.close:
                gameMenue.close();
                isMenueOpen = false;
                break;
        }
    }
    document.addEventListener("keydown", handleKeyPressed);
    async function handleKeyPressed(_event) {
        switch (_event.code) {
            case learnjs.f.KEYBOARD_CODE.F8:
                await learnjs.fs.Progress.save();
                break;
            case learnjs.f.KEYBOARD_CODE.F9:
                await learnjs.fs.Progress.load();
                break;
            case learnjs.f.KEYBOARD_CODE.ESC:
                if (!isMenueOpen) {
                    gameMenue = learnjs.fs.Menu.create(menueObj, menueButtonPressed, 'ingame--menue');
                    isMenueOpen = true;
                    gameMenue.open();
                }
                else {
                    isMenueOpen = false;
                    gameMenue.close();
                }
                break;
        }
    }
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.locations = {
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
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.userData = {
        Protagonist: {
            name: 'Default',
        },
    };
})(learnjs || (learnjs = {}));
//# sourceMappingURL=learnjs.js.map