"use strict";
var learnjs;
(function (learnjs) {
    learnjs.f = FudgeCore;
    learnjs.fs = FudgeStory;
    window.addEventListener("load", start);
    function start(_event) {
        const uiElement = document.querySelector("[type=interface]");
        learnjs.fs.Progress.setData(learnjs.dataForSave, uiElement);
        let scenes = [
            { id: "start", scene: learnjs.Startscreen, name: "Startscreen" },
            //{ id: "intro", scene: Introduction, name: "Introduction" },
            //{ id: "Home", scene: Home, name: "Home" },
            //{ id: "Room", scene: Room, name: "Room" },
            //{ id: "Heaven", scene: Heaven, name: "Heaven" },
            //{ id: "Topics", scene: Topics, name: "Topics" },
            //{id: "roomSecond", scene: RoomSecond, name: "RoomSecond"},
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
        variables: {
            name: `Variablen`,
            description: 'const deklariert eine konstante. Heißt der Wert der Variablen ist fix und kann nichtmehr geändert werden! Let ist das Gegenteil - sprich die Werte der Variablen können verändert werden.',
            image: '',
        },
        operators: {
            name: `Operatoren`,
            description: 'Rechenoperatoren: + - x /; Zeichenkettenverknüpfung: +; Zuweisungoperatoren: =; Vergleichsoperatoren: === !== < > <= >=; Logische Operatoren: && || !',
            image: '',
        },
        datatypes: {
            name: `Datentypen`,
            description: 'Number:Für Zahlen jeder Art ; String: Zeichenketten bzw Texte und Worte.; Boolean: Wahrheitswerte, True oder False; Undefined:Nicht definiert, kein Wert zugewiesen; Null: Wert wurde explizit entfernt.',
            image: '',
        }
    };
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function BadEnd() {
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `10 Jahre später....`);
        await learnjs.fs.Location.show(learnjs.locations.poorcity);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `<span class="color-red">${learnjs.userData.Protagonist.name}</span> wurde von zuhause rausgeworfen und hat alles in Ihrem Leben verloren. Sie ist arbeitslos und lebt auf der Straße. Es gibt kaum noch Hoffnung. Hätte <span class="color-red">${learnjs.userData.Protagonist.name}</span> doch damals mehr Zeit fürs Lernen investiert.`);
        learnjs.fs.Speech.hide();
        learnjs.fs.Character.hideAll();
        return learnjs.Endscreen();
    }
    learnjs.BadEnd = BadEnd;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function BestEnd() {
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `10 Jahre später....`);
        await learnjs.fs.Location.show(learnjs.locations.office);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `<span class="color-red">${learnjs.userData.Protagonist.name}</span> ist mittlerweile Software Entwicklerin bei ,,FIRMA'' und lebt ein Traumleben. Sie hat ein sehr gutes Verhältnis mit Ihrer Familie und hat finanziell keine Sorgen mehr.`);
        learnjs.fs.Speech.hide();
        learnjs.fs.Character.hideAll();
        await learnjs.fs.Location.show(learnjs.locations.heaven);
        learnjs.fs.update(1);
        return learnjs.Endscreen();
    }
    learnjs.BestEnd = BestEnd;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Challenge() {
        learnjs.fs.Sound.fade(learnjs.sound.heavenMusic, 0, 0);
        learnjs.fs.Sound.play(learnjs.sound.challengeMusic, 0.15, true);
        learnjs.fs.Speech.clear();
        learnjs.fs.Speech.hide();
        learnjs.fs.Character.hideAll();
        await learnjs.fs.Location.show(learnjs.locations.outSideSchool);
        //await fs.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
        await learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, '8:30 Uhr - Tag der Programmier Prüfung');
        await learnjs.fs.update(1);
        await learnjs.fs.Location.show(learnjs.locations.insideClassroom);
        await learnjs.fs.Character.animate(learnjs.character.stupidProf, learnjs.character.stupidProf.pose.normal, learnjs.slideInAnimation());
        await learnjs.fs.Speech.tell(learnjs.character.stupidProf, 'Guten Morgen. Alles klar - seid ihr bereit für euren Untergang? Hahahaha gut! Ihr kennt die Regeln, wer Spickzettel nutzt fliegt von der Uni also hütet euch und beantwortet die Fragen. Wer in meinem Unterricht aufgepasst hat sollte keine Probleme haben. Viel Erfolg.');
        learnjs.fs.Speech.clear();
        learnjs.fs.Speech.hide();
        await learnjs.fs.Character.hideAll();
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.slideInAnimation());
        await learnjs.fs.update(1);
        const meterBarVal = document.getElementById('progressMeter');
        const inputBarVal = document.getElementById('progressChallenge');
        const meterBar = document.querySelector('.meterbar');
        meterBar.classList.add('meterbar-visible');
        learnjs.fs.Speech.hide();
        const qAndA = [
            {
                q: `<strong>Frage eins:</strong><br> Dem Datentyp Number können nur Zeichenketten zugewiesen werden. Richtig oder Falsch?`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei:</strong><br> Dem Datentyp String können nur Zeichenketten zugewiesen werden. Richtig oder Falsch?`,
                a: "richtig",
            },
            {
                q: `<strong>Frage drei:</strong><br> Es gibt in Javascript Rechenoperatoren. Richtig oder Falsch?`,
                a: "richtig",
            },
            {
                q: `<strong>Frage vier:</strong><br> Um zwei Strings miteinander zu kombinieren nutzt man zwischen den strings ein +. Richtig oder Falsch?`,
                a: "richtig",
            },
            {
                q: `<strong>Frage fünf:</strong><br> Ein ! vor einer Variable heißt soviel wie ,,nicht''. Richtig oder Falsch?`,
                a: "richtig",
            },
            {
                q: `<strong>Frage sechs:</strong><br>Null und undefined ist das selbe. Richtig oder Falsch?`,
                a: "falsch",
            },
            {
                q: `<strong>Frage sieben:</strong><br>In Javascript nutzt man ein Komma um Dezimalzahlen voneinander zu trennen bsp. 2,45. Richtig oder Falsch?`,
                a: "falsch",
            },
            {
                q: `<strong>Frage acht:</strong><br> Der Wert eines Booleans liefert immer die Antwort auf eine Ja oder Nein Frage. Richtig oder Falsch?`,
                a: "richtig",
            },
            {
                q: `<strong>Frage neun:</strong><br> Einer Variable die mit const gekennzeichnet ist kann man einen neuen Wert zuweisen. Richtig oder Falsch?`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zehn:</strong><br> Einer Variable die mit let gekennzeichnet ist kann man einen neuen Wert zuweisen. Richtig oder Falsch?`,
                a: "richtig",
            }
        ];
        let current = 0;
        let flip = { right: "Richtig", wrong: "Falsch" };
        let choice;
        learnjs.fs.Text.addClass("flip-question");
        do {
            learnjs.fs.Text.print(qAndA[current].q);
            choice = await learnjs.fs.Menu.getInput(flip, "flip");
            switch (choice) {
                case flip.right:
                    if (qAndA[current].a === "richtig") {
                        learnjs.userData.Protagonist.pointsCollected = learnjs.userData.Protagonist.pointsCollected + 1;
                    }
                    ;
                    current = current + 1;
                    inputBarVal.value = current.toString() + "/10";
                    meterBarVal.value = current.toString();
                    break;
                case flip.wrong:
                    if (qAndA[current].a === "falsch") {
                        learnjs.userData.Protagonist.pointsCollected = learnjs.userData.Protagonist.pointsCollected + 1;
                    }
                    ;
                    current = current + 1;
                    inputBarVal.value = current.toString() + "/10";
                    meterBarVal.value = current.toString();
                    break;
            }
        } while (meterBarVal.value != "10");
        learnjs.fs.Text.close();
        meterBar.classList.remove('meterbar-visible');
        await learnjs.fs.Character.hideAll();
        await learnjs.fs.Character.animate(learnjs.character.stupidProf, learnjs.character.stupidProf.pose.normal, learnjs.slideInAnimation());
        await learnjs.fs.Speech.tell(learnjs.character.stupidProf, 'Meine Damen und Herren, Füller aus der Hand. Abgabe!!! JETZT!!!. Danke. Sie kriegen die Ergebnisse binnen einer Woche auf Ihre E-Mail geschickt. Keine Sorge, wer hier gescheitert ist wird so oder so auf der Straße landen.');
        await learnjs.fs.Character.hideAll();
        await learnjs.fs.Location.show(learnjs.locations.outSideSchool);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `Die Prüfung ist zuende und <span class="color-red">${learnjs.userData.Protagonist.name}</span> ist auf dem Weg nachhause.`);
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.slideOutAnimation());
        return learnjs.homeSecond();
    }
    learnjs.Challenge = Challenge;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Credits() {
        let credits = `
         <div class="credits">
         <h1>CREDITS</h1>\
          <table>\
            <tr>\
              <td>Story</td>\
              <td>Kevin Attinger</td>\
            </tr>\
            <tr>\
              <td>Programming</td>\
              <td>Kevin Attinger</td>\
            </tr>\
          </table>\
          <h2>Music and Sound</h2>\
          <table>\
            <tr>\
              <td>All Soundeffects are provided by <a href="https://pixabay.com/sound-effects/" target="blank">pixabay</a></td>\
            </tr>\
          </table>\
          <h2> Characters </h2>
          <table>\
            <tr>\
              <td>Main Character: <a href="https://noranekogames.itch.io/hana?download" target="blank">found here</a></td>\
            </tr>\
            <tr>\
              <td>Mom Character: <a href="https://st-chem-atelier.itch.io/free-vnsprite-kaede" target="blank">found here</a></td>\
            </tr>\
            <tr>\
              <td>Prof. Dr. Harabashi Tadinpachi: <a href="https://charactercreator.org/" target="blank">created here</a></td>\
            </tr>\
            <tr>\
              <td>Dr Javascript: <a href="https://charactercreator.org/" target="blank">created here</a></td>\
            </tr>\
          </table>\
          <h2> Locations </h2>
          <table>\
          <tr>\
            <td>Home Backgrounds: <a href="https://potat0master.itch.io/free-visual-novel-backgrounds-starter-pack-2" target="blank">found here</a></td>\
          </tr>\
          <tr>\
            <td>Poor City in the Bad end: <a href="https://unsplash.com/photos/Lr49v_a5WOw" target="blank">found here</a></td>\
          </tr>\
          <tr>\
            <td>Office for good end: <a href="https://unsplash.com/photos/lDlU1zbjGQA" target="blank">found here</a></td>\
          </tr>\
        </table>\
          <h2>Special Thanks</h2>\
          <p> to Riem Yasin & Jirka Dell'Oro</p>
          <em> This Story is made with <a href="https://github.com/JirkaDellOro/FUDGE_Story" target="_blank">FUDGE STORY</a></em>
          <div class="close-button-wrapper">
            <div class="close-button">X</div>
          </div>
          </div>
          `;
        learnjs.fs.Text.print(credits);
        const closeButtonInteraction = document.querySelector('.close-button');
        closeButtonInteraction.addEventListener('click', returnHome);
        function returnHome() {
            learnjs.fs.Text.close();
            return learnjs.Startscreen();
        }
    }
    learnjs.Credits = Credits;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Datatypes() {
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Dieser Themenblock beschäftigt sich mit Datentypen', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Warum gibt es denn verschiedene Datentypen überhaupt in JavaScript?<br> Naja, der Hauptzweck der meisten Programme ist es Daten auf irgendeine Weise einlesen, verarbeiten und wieder auslesen zu können.<br> Damit das funktionieren kann, muss der Computer wissen um welche Daten es sich hierbei handelt. Schließlich wollen wir beispielweise bei einer Rechnung wie <br><br>2 + 4 = 6<br><br> das die 2 und 4 miteinander addiert werden wenn zwischen diesen beiden Zahlen ein + steht.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Um das realisieren zu können unterscheidet man beim Programmieren zwischen verschiedenen Datentypen.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Es gibt folgende wichtige Datentypen in JavaScript:<br><br><span class="arrow color-green">Number</span>, <span class="arrow color-green">String</span>, <span class="arrow color-green">Boolean</span>, <span class="arrow color-green">Undefined</span>, <span class="arrow color-green">Null</span>.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Datentyp Number<br> Ist für Zahlen beinaher jeder Art bestimmt. Sie können im Code einfach als Zahl aufgeschrieben werden wie z.B die 10 oder die -3. <span class="color-red">Achtung!</span> aber bei Dezimalzahlen. Es wird ein Punkt als Trenner und nicht wie im Deutschen ein Komma verwendet also 2.45 und nicht 2,45.', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Datentyp String<br> Ist für Zeichenketten bzw. Texte oder Worte. Um Sie als solche zu Kennzeichnen benutzt man typischerweise "Hallo" -> Anführungszeichen.', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Datentyp Boolean<br> Sind Wahrheitswerte, die ausschließlich zwei Zustände annehmen können True(wahr) oder False(falsch). Der Wert eines Booleans liefert also immer die Antwort auf eine Ja/Nein Frage.', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Datentyp Undefined<br> Ist das englische Wort für nicht definiert. Und so ist es auch, es entsteht immer dann wenn einer Variable bzw. Eigenschaft noch kein Wert zugewiesen wurde.', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Datentyp Null<br> Ist sehr ähnliche zu Undefined, während Undefined wie eben erwähnt aussagt das ein Wert noch nicht gesetzt wurde sagt Null jedoch aus das der Wert explizit geleert also auf sozusagen Nichts festgelegt wurde.', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Mehr müsst ihr über Datentypen in der Prüfung nicht wissen. Du entscheidest wie es weiter geht.`, true, 'editor--speech');
        learnjs.dataForSave.datatypesDone = true;
        learnjs.fs.Inventory.add(learnjs.items.datatypes);
        await itemAdded();
        async function itemAdded() {
            setTimeout(() => {
                learnjs.fs.Text.print('Ein Item wurde deinem Inventar hinzugefügt.');
                learnjs.fs.Text.addClass('item-added');
            }, 1000);
            learnjs.fs.Text.close();
        }
        return learnjs.Topics();
    }
    learnjs.Datatypes = Datatypes;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Endscreen() {
        let playerChoices = {
            C0001: "Play again",
            C0002: "Credits"
        };
        learnjs.fs.Sound.play(learnjs.sound.menuMusic, 0.15, true);
        chooseTopic();
        async function chooseTopic() {
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "startscreen--select");
            switch (userInput) {
                case playerChoices.C0001:
                    await closeScreen();
                    return learnjs.Introduction();
                    break;
                case playerChoices.C0002:
                    await closeScreen();
                    return learnjs.Credits();
                    break;
            }
            ;
        }
        async function closeScreen() {
            learnjs.fs.Sound.fade(learnjs.sound.menuMusic, 0, 0);
            await learnjs.fs.Sound.play(learnjs.sound.menuOption, 0.4, false);
            let startScreen = document.querySelector('.startscreen--select');
            startScreen.classList.remove('startscreen--select');
            return;
        }
        const allButtons = document.querySelectorAll('button');
        let number = 0;
        allButtons.forEach(button => {
            button.classList.add(`startscreen-button-${number}`);
            let buttonClass = document.querySelector(`.startscreen-button-${number}`);
            buttonClass.addEventListener('mouseover', test);
            buttonClass.addEventListener('click', playSound);
            number++;
        });
        function test() {
            learnjs.fs.Sound.play(learnjs.sound.menuClick, 0.15, false);
        }
        function playSound() {
        }
    }
    learnjs.Endscreen = Endscreen;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function HappyEnd() {
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `10 Jahre später....`);
        await learnjs.fs.Location.show(learnjs.locations.homeFloor);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `<span class="color-red">${learnjs.userData.Protagonist.name}</span> hat zwar mit dem Programmieren nichtsmehr am Hut. Lebt aber ein erfülltes und glückliches Leben. Sie versteht sich mit Ihrer Familie gut und Sie ist überaus glücklich.`);
    }
    learnjs.HappyEnd = HappyEnd;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Heaven() {
        await learnjs.fs.update(learnjs.transitions.long.duration, learnjs.transitions.long.alpha, learnjs.transitions.long.edge);
        learnjs.fs.Sound.fade(learnjs.sound.introMusic, 0, 0);
        learnjs.fs.Sound.play(learnjs.sound.heavenMusic, 0.15, true);
        learnjs.fs.update(1);
        await learnjs.fs.Location.show(learnjs.locations.heaven);
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.slideInAnimation());
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, 'Was zum....?');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, 'Wo bin ich?');
        await learnjs.fs.Character.animate(learnjs.character.goodProf, learnjs.character.goodProf.pose.normal, learnjs.fromOutofCanvasToRight());
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Ahhhhh, endlich bist du hier... Man man man brauchst du lange um in den Tiefschlaf zu kommen');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, '?????');
        learnjs.fs.Character.hide(learnjs.character.goodProf);
        learnjs.fs.Character.show(learnjs.character.goodProf, learnjs.character.goodProf.pose.stunned, learnjs.fs.positionPercent(70, 100));
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Du verstehst nicht? Na gut, ich erkläre es dir');
        learnjs.fs.Character.hide(learnjs.character.goodProf);
        learnjs.fs.Character.show(learnjs.character.goodProf, learnjs.character.goodProf.pose.normal, learnjs.fs.positionPercent(70, 100));
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Du träumst gerade und da du mir so hilflos vorkamst dachte ich helfe dir bei deinem...naja nennen wir es mal Prüfungsproblem');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, 'Werrrr, wer bist du?');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'haha, das spielt keine Rolle, sagen wir so... Ich kenne mich ziemlich gut in dem Gebiet aus wo du Hilfe brauchst.');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, 'Bin ich im Himmel? Bin ich Tot?');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Schluss mit den vielen Fragen! Wollen wir beginnen?');
        sayYes();
        async function sayYes() {
            let playerChoices = {
                C0001: "Okay",
                C0002: "Okay"
            };
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "player--select");
            switch (userInput) {
                case playerChoices.C0001:
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, 'Okay');
                    await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Perfekt, Ich habe mir mal angeschaut was ihr so alles für die Prüfung wissen müsst');
                    await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Also, es gibt 4 Zentrale Themengebiete die ihr verstehen müsst');
                    learnjs.fs.Character.hide(learnjs.character.mainCharacter);
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                    break;
                case playerChoices.C0002:
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, 'Okay');
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist.name, 'Perfekt, Ich habe mir mal angeschaut was ihr so alles für die Prüfung wissen müsst');
                    await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Also, es gibt 4 Zentrale Themengebiete die ihr verstehen müsst');
                    learnjs.fs.Character.hide(learnjs.character.mainCharacter);
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                    break;
            }
            ;
        }
        function goToNextScene() {
            return learnjs.Topics();
        }
    }
    learnjs.Heaven = Heaven;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Home() {
        await learnjs.fs.Location.show(learnjs.locations.outSideSchool);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `<span class="color-red">${learnjs.userData.Protagonist.name}</span> ist auf dem Weg nachhause`);
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.slideOutAnimation());
        await learnjs.fs.Speech.tell(learnjs.character.narrator, 'Etwas später');
        await learnjs.fs.Location.show(learnjs.locations.homeFloor);
        await learnjs.fs.Character.show(learnjs.character.mcMom, learnjs.character.mcMom.pose.happy, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.Speech.tell(learnjs.character.mcMom, `Hey mein Schatz! Wie war dein Tag <span class="color-red">${learnjs.userData.Protagonist.name}</span>? Wie war die Uni?`);
        await learnjs.fs.update(1);
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fromOutofCanvasToRight());
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Frag nicht.....');
        await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Ach komm schon, als ob es so schlimm war?');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Mama ich schaff die Uni nicht, Programmieren bricht mir das Genick... Niemand versteht es, keiner kann mir helfen');
        await learnjs.fs.Character.hide(learnjs.character.mcMom);
        await learnjs.fs.Character.show(learnjs.character.mcMom, learnjs.character.mcMom.pose.angry, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Sollen wir das nun wirklich wieder ausdisktuieren? Du weißt genau, von nichts kommt nichts. Wir kommen von ganz unten, dein Vater und ich mussten hart für unseren Erfolg arbeiten');
        await learnjs.fs.update(1).then(() => {
            argueOrNot();
        });
        async function argueOrNot() {
            let playerChoices = {
                C0001: "Ausdiskutieren",
                C0002: "Müssen wir nicht. Irgendwie schaff ich das schon"
            };
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "player--select");
            switch (userInput) {
                case playerChoices.C0001:
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Du verstehst es nicht Mama, ich gebe alles aber unser Professor erklärt uns einfach nichts. Ich weiß nichts über das Thema.......');
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Stop! Für deinen Misserfolg ist niemand anderes verantwortlich als du selbst. Dein Professor kann auch nichts dafür das du nicht hart genug für deine Ziele arbeitest.');
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Aber ich will doch garnicht programmieren');
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Es gibt Dinge im Leben da muss man durch, ganz egal wie irrelevant diese für dich wirken');
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Niemand versteht mich');
                    await learnjs.fs.Character.hide(learnjs.character.mcMom);
                    await learnjs.fs.Character.show(learnjs.character.mcMom, learnjs.character.mcMom.pose.happy, learnjs.fs.positionPercent(0, 100));
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, `Ach <span class="color-red">${learnjs.userData.Protagonist.name}</span>.. Du weißt genau wir glauben an dich, du schaffst das schon. Mach das nicht nur für dich sondern auch für die Familie`);
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Ich geb mein bestes. Ich geh schlafen Mama, morgen ist ein neuer Tag');
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Gute Nacht');
                    learnjs.fs.Speech.clear();
                    learnjs.fs.Speech.hide();
                    learnjs.fs.Character.hideAll();
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                    break;
                case playerChoices.C0002:
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Müssen wir nicht. Irgendwie schaff ich das schon. Ich geh jetzt schlafen und ab morgen lerne ich auf diese Prüfung.');
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Gute Nacht');
                    learnjs.fs.Speech.clear();
                    learnjs.fs.Speech.hide();
                    learnjs.fs.Character.hideAll();
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                    break;
            }
        }
        function goToNextScene() {
            return learnjs.Room();
        }
    }
    learnjs.Home = Home;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Introduction() {
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
        document.addEventListener('keyup', (event) => {
            let keypressed = event.key;
            if (keypressed === 'Backspace') {
                learnjs.fs.Sound.play(learnjs.sound.delete, 0.15, false);
            }
            if (keypressed !== 'Backspace') {
                learnjs.fs.Sound.play(learnjs.sound.type, 0.15, false);
            }
        });
        getUserName();
        async function getUserName() {
            await learnjs.fs.Sound.play(learnjs.sound.introMusic, 0.15, true);
            await learnjs.fs.Speech.tell(null, `<p>Bevor es losgeht,mit dem Tastenkürzel <span class="color-red"> M </span> öffnest und schließt du das Menü. Dort findest du alle wichtigen Informationen. Wenn du keine weiteren Fragen hast und mir verrätst wie Du heißt beginnt die Visual Novel direkt.<br> PS: Der Hauptcharakter der Visual Novel ist weiblich - sei also kreativ bei deiner Namensgebung :p</p>`, true, 'introduction-text');
            learnjs.userData.Protagonist.name = await learnjs.fs.Speech.getInput();
            learnjs.dataForSave.nameProtagonist = learnjs.userData.Protagonist.name;
            await learnjs.fs.Speech.hide();
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
            await learnjs.fs.Character.animate(learnjs.character.stupidProf, learnjs.character.stupidProf.pose.normal, learnjs.slideInAnimation());
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
            await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.slideInAnimation());
            await learnjs.fs.update(1).then(() => {
                saySomethingOrNot();
            });
        }
        async function saySomethingOrNot() {
            let playerChoices = {
                C0001: "Sagen das niemand was verstanden hat",
                C0002: "Nichts sagen"
            };
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "player--select");
            switch (userInput) {
                case playerChoices.C0001:
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
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                    break;
                case playerChoices.C0002:
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
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
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
    async function Operators() {
        const getNumberOne = `<span class="color-grey">1</span>`;
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Dieser Themenblock beschäftigt sich mit Operatoren', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `In eigentlich jeder Programmiersprache gibt es Operatoren. Mit diesen kann man bestimmte Aufgaben erledigen. Es gibt zum Beispiel die Rechenoperatoren <br><br><span class="color-red">+   -   x   /</span><br<br>Diese sind dir bestimmt schon aus der Mathematik bekannt. Damit kann man in JavaScript ganz normal Rechenoperationen durchführen. Was man im Leben eines Entwicklers ziemlich oft benötigt.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Dann gibt es noch Operatoren für die Zeichenkettenverknüfung. Und zwar ist das ein einfaches <span class="color-red">+</span>. Was kann man damit machen?`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Man kann damit unter anderem Strings kombinieren, was Strings in der Programmiersprache sind findest du im Kapitel Datentypen. Aber um dir mal ein Beispiel zu zeigen könnte das ganze so aussehn.<br><br>${getNumberOne} let string = 'Hello' + 'World'<br><br> Wird durch das <span class="color-red">+</span> dann als ein Satz Interpretiert -> Hello World`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Ebenfalls gibt es noch den sogenannten Zuweisungsoperator dieser ist immer als <span class="color-red> = </span> gekennzeichnet. Diesen haben wir bereits kennengelernt, er dient ganz simpel dazu Variablen Werte zuzuweisen.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Auch sehr sehr wichtig sind die Vergleichsoperatoren.<br><br> <span class="color-red">===   !==  <  >  <=   >=</span>.<br><br> Du kennst hier bestimmt auch wieder einigen Zeichen aus der Mathematik. Zur Erklärung: <br><br> <span class="color-red">===</span> heißt soviel wie Datentyp und Wert ist gleich.<br><span class="color-red">!==</span> heißt soviel wie ist nicht gleich wie. <br><span class="color-red">></span> heißt soviel wie größer als, somit ist <span class="color-red"><</span> das Gegenteil davon.<br><span class="color-red">>=</span> heißt soviel wie größer oder gleich.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Zuletzt sind auch sogenannte Logische Operatoren wichtig.<br><br> <span class="color-red">&&  || !</span>.<br><br> Diese Logischen Operatoren benötigt man meist dann wenn man gewissen Bedingungen aufstellen möchte. <br>Was heißen diese Zeichen?<br><br><span class="color-red"> && </span> heißt soviel wie "und"<br><span class="color-red"> || </span> bedeutet "oder"<br><span class="color-red"> ! </span>heißt "nicht".<br> Das mag dir alles aktuell sehr trocken vorkommen, aber wenn man komplexere Programme erstellen möchte benötigt man mit relativer Sicherheit aller dieser Operatorentypen dementsprechend ist es wichtig mal von diesen gehört zu haben.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Mehr müsst ihr über Operatoren in der Prüfung nicht wissen. Du entscheidest wie es weiter geht.`, true, 'editor--speech');
        learnjs.dataForSave.operatorsDone = true;
        learnjs.fs.Inventory.add(learnjs.items.operators);
        await itemAdded();
        async function itemAdded() {
            setTimeout(() => {
                learnjs.fs.Text.print('Ein Item wurde deinem Inventar hinzugefügt.');
                learnjs.fs.Text.addClass('item-added');
            }, 1000);
            learnjs.fs.Text.close();
        }
        return learnjs.Topics();
    }
    learnjs.Operators = Operators;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Room() {
        await learnjs.fs.Location.show(learnjs.locations.homeRoom);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Ich hab keine Ahnung wie ich das alles schaffen soll');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Wenn ich doch nur jemanden hätte der mir das alles angenehm erklärt, wäre mein Leben so viel leichter');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Ich muss morgen unbedingt anfangen, sonst hab ich es verkackt');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Alexa');
        await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Licht aus!');
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.slideOutAnimation());
        learnjs.fs.Speech.clear();
        learnjs.fs.Speech.hide();
        learnjs.fs.update(1);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `4:20Uhr.... Mitten in der Nacht..<span class="color-red">${learnjs.userData.Protagonist.name}</span> schläft bereits tief und fest`);
        await learnjs.fs.Speech.tell(learnjs.character.narrator, 'Als plötzlich....');
        goToNextScene();
        function goToNextScene() {
            return learnjs.Heaven();
        }
        ;
    }
    learnjs.Room = Room;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function RoomSecond() {
        await learnjs.fs.Location.show(learnjs.locations.homeRoom);
        await learnjs.fs.Character.show(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.Speech.tell(learnjs.character.narrator, `Mittlerweile ist eine Woche vergangen und <span class="color-red">${learnjs.userData.Protagonist.name}</span> prüft Ihre Emails.`);
        let finalResult = learnjs.userData.Protagonist.pointsCollected;
        checkResult(finalResult);
        async function checkResult(result) {
            if (result < 5) {
                await learnjs.fs.Speech.tell(learnjs.character.narrator, `Sehr geehrte Frau/Herr ${learnjs.userData.Protagonist.name}, in Ihrer Programmier - Prüfung im Sommersemester haben Sie <span class="color-red">${learnjs.userData.Protagonist.pointsCollected}</span> von 10 Fragen richtig beantwortet. Sie haben diese Prüfung somit nicht bestanden! Das bedeutet Sie haben somit das Anrecht auf unser Studium leider verloren. Bei Fragen stehen wir Ihnen jederzeit zur Verfügung`);
                return learnjs.BadEnd();
            }
            if (result > 5 && result < 10) {
                await learnjs.fs.Speech.tell(learnjs.character.narrator, `Sehr geehrte Frau/Herr ${learnjs.userData.Protagonist.name}, in Ihrer Programmier - Prüfung im Sommersemester haben Sie <span class="color-green">${learnjs.userData.Protagonist.pointsCollected}</span> von 10 Fragen richtig beantwortet. Sie haben diese Prüfung somit bestanden. Herzlichen Glückwunsch.`);
                return learnjs.HappyEnd();
            }
            if (result = 10) {
                await learnjs.fs.Speech.tell(learnjs.character.narrator, `Sehr geehrte Frau/Herr ${learnjs.userData.Protagonist.name}, in Ihrer Programmier - Prüfung im Sommersemester haben Sie <span class="color-green">${learnjs.userData.Protagonist.pointsCollected}</span> von 10 Fragen richtig beantwortet. Sie haben diese Prüfung somit mit der best möglichen Note bestanden. Herzlichen Glückwunsch.`);
                return learnjs.BestEnd();
            }
        }
    }
    learnjs.RoomSecond = RoomSecond;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Startscreen() {
        let playerChoices = {
            C0001: "Neues Spiel",
            C0002: "Skip Intro",
            C0003: "Credits"
        };
        learnjs.fs.Sound.play(learnjs.sound.menuMusic, 0.15, true);
        chooseTopic();
        async function chooseTopic() {
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "startscreen--select");
            switch (userInput) {
                case playerChoices.C0001:
                    await closeScreen();
                    return learnjs.Introduction();
                    break;
                case playerChoices.C0002:
                    await closeScreen();
                    return learnjs.Topics();
                    break;
                case playerChoices.C0003:
                    await closeScreen();
                    return learnjs.Credits();
                    break;
            }
            ;
        }
        async function closeScreen() {
            learnjs.fs.Sound.fade(learnjs.sound.menuMusic, 0, 0);
            await learnjs.fs.Sound.play(learnjs.sound.menuOption, 0.4, false);
            let startScreen = document.querySelector('.startscreen--select');
            startScreen.classList.remove('startscreen--select');
            return;
        }
        const allButtons = document.querySelectorAll('button');
        let number = 0;
        allButtons.forEach(button => {
            button.classList.add(`startscreen-button-${number}`);
            let buttonClass = document.querySelector(`.startscreen-button-${number}`);
            buttonClass.addEventListener('mouseover', test);
            buttonClass.addEventListener('click', playSound);
            number++;
        });
        function test() {
            learnjs.fs.Sound.play(learnjs.sound.menuClick, 0.15, false);
        }
        function playSound() {
        }
    }
    learnjs.Startscreen = Startscreen;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Topics() {
        await learnjs.fs.Location.show(learnjs.locations.heaven);
        learnjs.fs.Character.hide(learnjs.character.mainCharacter);
        await learnjs.fs.Character.animate(learnjs.character.goodProf, learnjs.character.goodProf.pose.normal, learnjs.fromOutofCanvasToRight());
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Du kannst aus folgenden Themenfeldern wählen:');
        let playerChoices = {
            C0001: "Variablen (noch nicht abgeschlossen)",
            C0002: "Operatoren (noch nicht abgeschlossen)",
            C0003: "Datentypen  (noch nicht abgeschlossen)",
            C0004: "Zur Prüfung"
        };
        if (learnjs.dataForSave.variablesDone === true) {
            playerChoices.C0001 = "Variablen | Abgeschlossen. Willst du es erneut hören?";
        }
        if (learnjs.dataForSave.operatorsDone === true) {
            playerChoices.C0002 = "Operatoren | Abgeschlossen. Willst du es erneut hören?";
        }
        if (learnjs.dataForSave.datatypesDone === true) {
            playerChoices.C0003 = "Datentypen | Abgeschlossen. Willst du es erneut hören?";
        }
        chooseTopic();
        async function chooseTopic() {
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "topic--select");
            switch (userInput) {
                case playerChoices.C0001:
                    return learnjs.Variables();
                    break;
                case playerChoices.C0002:
                    return learnjs.Operators();
                    break;
                case playerChoices.C0003:
                    return learnjs.Datatypes();
                    break;
                case playerChoices.C0004:
                    return learnjs.Challenge();
                    break;
            }
            ;
        }
        learnjs.fs.update(1);
    }
    learnjs.Topics = Topics;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function Variables() {
        const getVar = `<span class="color-red">var</span>`;
        const getLet = `<span class="color-green">let</span>`;
        const getConst = `<span class="color-green">const</span>`;
        const getNumberOne = `<span class="color-grey">1</span>`;
        const getNumberTwo = `<span class="color-grey">2</span>`;
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'In JavaScript gibt es drei verschiedene Möglichkeiten Variablen zu deklarieren.', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Wir brauchen Variablen in der Programmierung um Werte in ihnen abzuspeichern. Und diese Werte kann man dann immer wieder verwenden oder diese auch ändern.<br> Somit sind Variablen für einen Programmierer das täglich Brot und dementsprechend wichtig zu verstehen!`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Keine Sorge. Das Grundkonzept ist ganz simpel.<br> Es gibt ${getVar}, ${getLet} und ${getConst}.<br><br>In der modernen Entwicklung benutzt man meist nurnoch ${getLet} und ${getConst} deshalb lassen wir ${getVar} einfach weg.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Was ist also der Unterschied zwischen ${getLet} und ${getConst}?<br> Wenn man eine Variable mit ${getConst} deklariert, ist diese konstant und kann nichtmehr geändert werden.<br> Ein kleines Beispiel dafür:<br><br>${getNumberOne} ${getConst} yourName = "${learnjs.userData.Protagonist.name}"; <br>${getNumberTwo} yourName = "Neuer Name"; <br><br>Das funktioniert <span class="color-red">nicht!</span> Der Wert der Variablen yourName ist immernoch ${learnjs.userData.Protagonist.name}. Wie sieht das ganz aber mit ${getLet} aus? <br><br>${getNumberOne} ${getLet} yourName = "${learnjs.userData.Protagonist.name}"; <br> ${getNumberTwo} yourName = "Neuer Name"; <br><br>Das funktioniert <span class="color-green">genau!</span> Der Wert der Variablen yourName ist jetzt Neuer Name.`, true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Simpel oder nicht? Lass uns das ganze testen und du sagst mir welchen Wert die Variablen haben', true, 'editor--speech');
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `${getNumberOne} ${getLet} randomNumber = 5; <br> ${getNumberTwo} randomNumber = 10; <br><br> Welchen Wert hat die Variable randomNumber? <br><br>`, true, 'editor--speech');
        learnjs.userData.Protagonist.variableTest = await learnjs.fs.Speech.getInput();
        if (learnjs.userData.Protagonist.variableTest === '10') {
            await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Richtig der Wert ist 10. Sehr gut.', true, 'editor--speech');
        }
        if (learnjs.userData.Protagonist.variableTest != '10') {
            await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Leider nicht richtig der Wert wäre 10. Wie gesagt wenn eine Variable mit ${getLet} deklariert wird ändert sich der Wert sobald er neu zugewiesen wird.`, true, 'editor--speech');
        }
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `${getNumberOne} ${getConst} randomNumber = 5; <br> ${getNumberTwo} randomNumber = 150; <br><br> Welchen Wert hat die Variable randomNumber? <br><br>`, true, 'editor--speech');
        learnjs.userData.Protagonist.variableTest = await learnjs.fs.Speech.getInput();
        if (learnjs.userData.Protagonist.variableTest === '5') {
            await learnjs.fs.Speech.tell(learnjs.character.goodProf, 'Sehr gut! Ich denke das hast du verstanden.', true, 'editor--speech');
        }
        if (learnjs.userData.Protagonist.variableTest != '5') {
            await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Leider nicht richtig der Wert wäre 5. Wie gesagt wenn eine Variable mit ${getConst} deklariert wird ändert sich der Wert nicht!.`, true, 'editor--speech');
        }
        await learnjs.fs.Speech.tell(learnjs.character.goodProf, `Mehr müsst ihr über Variablen in der Prüfung nicht wissen. Du entscheidest wie es weiter geht.`, true, 'editor--speech');
        learnjs.fs.Inventory.add(learnjs.items.variables);
        await itemAdded();
        async function itemAdded() {
            setTimeout(() => {
                learnjs.fs.Text.print('Ein Item wurde deinem Inventar hinzugefügt.');
                learnjs.fs.Text.addClass('item-added');
            }, 1000);
            learnjs.fs.Text.close();
        }
        learnjs.dataForSave.variablesDone = true;
        return learnjs.Topics();
    }
    learnjs.Variables = Variables;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    async function homeSecond() {
        learnjs.fs.Sound.fade(learnjs.sound.challengeMusic, 0, 0);
        learnjs.fs.Sound.play(learnjs.sound.introMusic, 0.15, true);
        await learnjs.fs.Location.show(learnjs.locations.homeFloor);
        await learnjs.fs.Character.show(learnjs.character.mcMom, learnjs.character.mcMom.pose.happy, learnjs.fs.positionPercent(0, 100));
        await learnjs.fs.Speech.tell(learnjs.character.mcMom, `Hey mein Schatz! Wie war deine Prüfung <span class="color-red">${learnjs.userData.Protagonist.name}</span>?????`);
        await learnjs.fs.update(1);
        await learnjs.fs.Character.animate(learnjs.character.mainCharacter, learnjs.character.mainCharacter.pose.normal, learnjs.fromOutofCanvasToRight());
        await learnjs.fs.update(1).then(() => {
            answerQuestion();
        });
        async function answerQuestion() {
            let playerChoices = {
                C0001: "Sehr gut! Es lief Prima!",
                C0002: "Ganz okay",
                C0003: "Ohje. Ich glaube die habe ich nicht bestanden",
            };
            let userInput = await learnjs.fs.Menu.getInput(playerChoices, "player--select");
            switch (userInput) {
                case playerChoices.C0001:
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Mum!! Es lief soooo gut!! Ich hab einfach alles verstanden.');
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Okay. Dann sind wir mal auf die Ergebnisse gespannt');
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Sie kommen in einer Woche :) Hab dich lieb Mum!');
                    learnjs.fs.Speech.clear();
                    learnjs.fs.Speech.hide();
                    learnjs.fs.Character.hideAll();
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                    break;
                case playerChoices.C0002:
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Mhhmm.. Sie lief ganz okay glaube ich. Müsste es bestanden haben');
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Okay. Dann sind wir mal auf die Ergebnisse gespannt');
                    learnjs.fs.Speech.clear();
                    learnjs.fs.Speech.hide();
                    learnjs.fs.Character.hideAll();
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                case playerChoices.C0003:
                    await learnjs.fs.Speech.tell(learnjs.userData.Protagonist, 'Wie erwartet!! Ich hab nichts verstanden');
                    await learnjs.fs.Speech.tell(learnjs.character.mcMom, 'Wenn du diese Prüfung nicht bestanden hast, werf ich dich raus!!!!!!');
                    learnjs.fs.Speech.clear();
                    learnjs.fs.Speech.hide();
                    learnjs.fs.Character.hideAll();
                    await learnjs.fs.update(1).then(() => {
                        goToNextScene();
                    });
                    break;
            }
        }
        function goToNextScene() {
            return learnjs.RoomSecond();
        }
    }
    learnjs.homeSecond = homeSecond;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    function slideInAnimation() {
        return {
            start: { translation: learnjs.fs.positions.bottomright },
            end: { translation: learnjs.fs.positions.bottomleft },
            duration: 1,
            playmode: learnjs.fs.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    learnjs.slideInAnimation = slideInAnimation;
    function slideOutAnimation() {
        return {
            start: { translation: learnjs.fs.positions.bottomleft },
            end: { translation: learnjs.fs.positions.bottomright },
            duration: 1,
            playmode: learnjs.fs.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    learnjs.slideOutAnimation = slideOutAnimation;
    function fromOutofCanvasToRight() {
        return {
            start: { translation: learnjs.fs.positionPercent(110, 100) },
            end: { translation: learnjs.fs.positionPercent(70, 100) },
            duration: 1,
            playmode: learnjs.fs.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    learnjs.fromOutofCanvasToRight = fromOutofCanvasToRight;
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.character = {
        narrator: {
            name: 'Erzähler',
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
                normal: "./Images/js-teacher/js-teacher-neutral.png",
                angry: "./Images/js-teacher/js-teacher-angry.png",
                surprised: "./Images/js-teacher/js-teacher-surprised.png",
                distance: "./Images/js-teacher/js-teacher-distance.png",
                stunned: "./Images/js-teacher/js-teacher-stunned.png"
            }
        },
        mainCharacter: {
            name: 'Kazuko',
            origin: learnjs.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/main-character/mc-normal.png",
            }
        },
        mcMom: {
            name: 'Mom',
            origin: learnjs.fs.ORIGIN.BOTTOMLEFT,
            pose: {
                happy: "./Images/mc-mom/mc-mom-happy.png",
                angry: "./Images/mc-mom/mc-mom-angy.png"
            }
        },
    };
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    let menueObj = {
        safe: "Save",
        load: "Load",
        turnUpVolume: "+",
        turnDownVolume: "-",
        shortcuts: "Shortcuts",
        mute: "Mute Sound",
        close: "Close"
    };
    let gameMenue;
    let isMenueOpen = true;
    async function menueButtonPressed(action) {
        switch (action) {
            case menueObj.safe:
                await learnjs.fs.Progress.save();
                break;
            case menueObj.turnUpVolume:
                await incrementSound();
                break;
            case menueObj.turnDownVolume:
                await decrementSound();
                break;
            case menueObj.mute:
                await mute();
                break;
            case menueObj.shortcuts:
                await showShortcuts();
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
    let volume = 1.0;
    let isMuted = false;
    function incrementSound() {
        if (volume >= 100)
            return;
        volume += 0.2;
        learnjs.fs.Sound.setMasterVolume(volume);
    }
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.2;
        learnjs.fs.Sound.setMasterVolume(volume);
    }
    function mute() {
        if (!isMuted) {
            volume = 0;
            learnjs.fs.Sound.setMasterVolume(volume);
        }
        if (isMuted) {
            volume = 1;
            learnjs.fs.Sound.setMasterVolume(volume);
        }
        isMuted = !isMuted;
    }
    function showShortcuts() {
        learnjs.fs.Text.print(`<strong>Shortcuts</strong><br>Menü öffnen -> M<br>Inventar öffnen -> I<br>Inventar schließen -> ESC<br>Speichern -> F8<br>Laden -> F9`);
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
            case learnjs.f.KEYBOARD_CODE.M:
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
            case learnjs.f.KEYBOARD_CODE.I:
                console.log("open inventory");
                await learnjs.fs.Inventory.open();
                break;
            case learnjs.f.KEYBOARD_CODE.ESC:
                await learnjs.fs.Inventory.open();
                learnjs.fs.Inventory.close();
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
        homeFloor: {
            name: "homefloor",
            background: "./Images/rooms/vn-home.png"
        },
        homeRoom: {
            name: "homeroom",
            background: "./Images/rooms/room-mc.png"
        },
        heaven: {
            name: "heaven",
            background: "./Images/backgrounds/vn-teach-bg.jpg"
        },
        poorcity: {
            name: "poortcity",
            background: "./Images/rooms/poor-city.jpg"
        },
        office: {
            name: "office",
            background: "./Images/rooms/office.jpg"
        },
    };
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.sound = {
        // music 
        menuMusic: "./Audio/menue-sound-loop.mp3",
        introMusic: "./Audio/peaceful.mp3",
        heavenMusic: "./Audio/heaven-music.mp3",
        challengeMusic: "./Audio/challenge-music.mp3",
        //simple sounds
        menuClick: "./Audio/menue-sound.mp3",
        menuOption: "./Audio/options.mp3",
        type: "./Audio/type.mp3",
        delete: "./Audio/delete.mp3",
    };
})(learnjs || (learnjs = {}));
var learnjs;
(function (learnjs) {
    learnjs.userData = {
        Protagonist: {
            name: 'Kazuko',
            variableTest: '',
            pointsCollected: 0,
        },
    };
    learnjs.dataForSave = {
        nameProtagonist: "Kazuko",
        variablesDone: false,
        datatypesDone: false,
        operatorsDone: false,
        progressMeter: 0,
    };
})(learnjs || (learnjs = {}));
//# sourceMappingURL=learnjs.js.map