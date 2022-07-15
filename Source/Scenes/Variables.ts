namespace learnjs {
    export async function Variables(): fs.SceneReturn {
        const getVar = `<span class="color-red">var</span>`
        const getLet = `<span class="color-green">let</span>`
        const getConst = `<span class="color-green">const</span>`
        const getNumberOne =`<span class="color-grey">1</span>`
        const getNumberTwo =`<span class="color-grey">2</span>`


        await fs.Speech.tell(character.goodProf, 'In JavaScript gibt es drei verschiedene Möglichkeiten Variablen zu deklarieren.', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Wir brauchen Variablen in der Programmierung um Werte in ihnen abzuspeichern. Und diese Werte kann man dann immer wieder verwenden oder diese auch ändern.<br> Somit sind Variablen für einen Programmierer das täglich Brot und dementsprechend wichtig zu verstehen!`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Keine Sorge. Das Grundkonzept ist ganz simpel.<br> Es gibt ${getVar}, ${getLet} und ${getConst}.<br><br>In der modernen Entwicklung benutzt man meist nurnoch ${getLet} und ${getConst} deshalb lassen wir ${getVar} einfach weg.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Was ist also der Unterschied zwischen ${getLet} und ${getConst}?<br> Wenn man eine Variable mit ${getConst} deklariert, ist diese konstant und kann nichtmehr geändert werden.<br> Ein kleines Beispiel dafür:<br><br>${getNumberOne} ${getConst} yourName = "${userData.Protagonist.name}"; <br>${getNumberTwo} yourName = "Neuer Name"; <br><br>Das funktioniert <span class="color-red">nicht!</span> Der Wert der Variablen yourName ist immernoch ${userData.Protagonist.name}. Wie sieht das ganz aber mit ${getLet} aus? <br><br>${getNumberOne} ${getLet} yourName = "${userData.Protagonist.name}"; <br> ${getNumberTwo} yourName = "Neuer Name"; <br><br>Das funktioniert <span class="color-green">genau!</span> Der Wert der Variablen yourName ist jetzt Neuer Name.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, 'Simpel oder nicht? Lass uns das ganze testen und du sagst mir welchen Wert die Variablen haben', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `${getNumberOne} ${getLet} randomNumber = 5; <br> ${getNumberTwo} randomNumber = 10; <br><br> Welchen Wert hat die Variable randomNumber? <br><br>`, true, 'editor--speech');
        userData.Protagonist.variableTest = await fs.Speech.getInput();

        if(userData.Protagonist.variableTest === '10') {
            await fs.Speech.tell(character.goodProf, 'Richtig der Wert ist 10. Sehr gut.', true, 'editor--speech');
        }

        if(userData.Protagonist.variableTest != '10') {
            await fs.Speech.tell(character.goodProf, `Leider nicht richtig der Wert wäre 10. Wie gesagt wenn eine Variable mit ${getLet} deklariert wird ändert sich der Wert sobald er neu zugewiesen wird.`, true, 'editor--speech');
        }

        await fs.Speech.tell(character.goodProf, `${getNumberOne} ${getConst} randomNumber = 5; <br> ${getNumberTwo} randomNumber = 150; <br><br> Welchen Wert hat die Variable randomNumber? <br><br>`, true, 'editor--speech');
        userData.Protagonist.variableTest = await fs.Speech.getInput();

        if(userData.Protagonist.variableTest === '5') {
            await fs.Speech.tell(character.goodProf, 'Sehr gut! Ich denke das hast du verstanden.', true, 'editor--speech');
        }

        if(userData.Protagonist.variableTest != '5') {
            await fs.Speech.tell(character.goodProf, `Leider nicht richtig der Wert wäre 5. Wie gesagt wenn eine Variable mit ${getConst} deklariert wird ändert sich der Wert nicht!.`, true, 'editor--speech');
        }

        await fs.Speech.tell(character.goodProf, `Mehr müsst ihr über Variablen in der Prüfung nicht wissen. Du entscheidest wie es weiter geht.`, true, 'editor--speech');
        userData.Protagonist.variablesDone = true;

        const variablesPages: string = `Weitere Nützliche Informationen findest du unter folgenden links:<br><br><a target="_blank" href="http://www.google.de">Google</a><br>`

        let playerChoices = {
            C0001: "Mehr Informationen zu Variablen",
            C0002: "Zurück zur Lernübersicht",
            C0003: "Ich bin bereit für die Abschlussprüfung",
          };

        chooseVariablesAction();


        async function chooseVariablesAction() {
            let userInput = await fs.Menu.getInput(playerChoices, "topic--select");
      
            switch (userInput) {
              case playerChoices.C0001:
                fs.Text.print(variablesPages);
              break;
              case playerChoices.C0002:
                return Topics();
              break;
              case playerChoices.C0003:
                return Challenge();
              break;
            };
          }
    }
}