namespace learnjs {
    export async function Challenge(): fs.SceneReturn {
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
        await fs.update(1);

        const meterBarVal = (<HTMLInputElement>document.getElementById('progressMeter'));
        const inputBarVal = (<HTMLInputElement>document.getElementById('progressChallenge'));
        const meterBar = document.querySelector('.meterbar');
        meterBar.classList.add('meterbar-visible');

        fs.Speech.hide();

        const qAndA = [
            {
                q: `<strong>Frage eins: Beispielfrage 1 ist richtig`,
                a: "richtig",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 2 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 3 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 4 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 5 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 6 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 7 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 8 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 9 ist falsch.`,
                a: "falsch",
            },
            {
                q: `<strong>Frage zwei: Beispielfrge 10 ist falsch.`,
                a: "falsch",
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
        fs.Speech.tell(character.narrator, `Du hast ${userData.Protagonist.pointsCollected} von 10 Fragen richtig beantwortet.`);
      }
}