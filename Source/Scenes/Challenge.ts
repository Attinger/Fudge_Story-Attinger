namespace learnjs {
    export async function Challenge(): fs.SceneReturn {
        fs.Sound.fade(sound.heavenMusic, 0, 0);
        fs.Sound.play(sound.challengeMusic, 0.15, true);
        fs.Speech.clear();
        fs.Speech.hide();
        fs.Character.hideAll();
        await fs.Location.show(locations.outSideSchool);
        //await fs.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
        await fs.update(1);
        await fs.Speech.tell(character.narrator, '8:30 Uhr - Tag der Programmier Prüfung');
        await fs.update(1);
        await fs.Location.show(locations.insideClassroom);
        await fs.Character.animate(character.stupidProf, character.stupidProf.pose.normal, slideInAnimation());
        await fs.Speech.tell(character.stupidProf, 'Guten Morgen. Alles klar - seid ihr bereit für euren Untergang? Hahahaha gut! Ihr kennt die Regeln, wer Spickzettel nutzt fliegt von der Uni also hütet euch und beantwortet die Fragen. Wer in meinem Unterricht aufgepasst hat sollte keine Probleme haben. Viel Erfolg.');
        fs.Speech.clear();
        fs.Speech.hide();
        await fs.Character.hideAll();
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideInAnimation());
        await fs.update(1);

        const meterBarVal = (<HTMLInputElement>document.getElementById('progressMeter'));
        const inputBarVal = (<HTMLInputElement>document.getElementById('progressChallenge'));
        const meterBar = document.querySelector('.meterbar');
        meterBar.classList.add('meterbar-visible');

        fs.Speech.hide();

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


        let current: number = 0;
        let flip = { right: "Richtig", wrong: "Falsch"};
        let choice: string;
        fs.Text.addClass("flip-question");
        do {
          fs.Text.print(qAndA[current].q);
          choice = await fs.Menu.getInput(flip, "flip");
          switch (choice) {
            case flip.right:
            if(qAndA[current].a === "richtig") {
                userData.Protagonist.pointsCollected = userData.Protagonist.pointsCollected + 1;
            };
            current = current + 1;
            inputBarVal.value = current.toString() + "/10";
            meterBarVal.value = current.toString();
            break;
            case flip.wrong:
            if(qAndA[current].a === "falsch") {
                userData.Protagonist.pointsCollected = userData.Protagonist.pointsCollected + 1;
            };
            current = current + 1;
            inputBarVal.value = current.toString() + "/10";
            meterBarVal.value = current.toString();
            break;
          }
        } while (meterBarVal.value != "10");
        fs.Text.close();
        meterBar.classList.remove('meterbar-visible');
        await fs.Character.hideAll();
        await fs.Character.animate(character.stupidProf, character.stupidProf.pose.normal, slideInAnimation());
        await fs.Speech.tell(character.stupidProf, 'Meine Damen und Herren, Füller aus der Hand. Abgabe!!! JETZT!!!. Danke. Sie kriegen die Ergebnisse binnen einer Woche auf Ihre E-Mail geschickt. Keine Sorge, wer hier gescheitert ist wird so oder so auf der Straße landen.');
        await fs.Character.hideAll();
        await fs.Location.show(locations.outSideSchool);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        await fs.update(1);
        await fs.Speech.tell(character.narrator, `Die Prüfung ist zuende und <span class="color-red">${userData.Protagonist.name}</span> ist auf dem Weg nachhause.`);
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideOutAnimation());
        return homeSecond();
      }
}