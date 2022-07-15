namespace learnjs {
    export async function Heaven(): fs.SceneReturn {
        console.log('yes');
        await fs.Location.show(locations.heaven);
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideInAnimation());
        await fs.Speech.tell(userData.Protagonist.name, 'Was zum....?');
        await fs.Speech.tell(userData.Protagonist.name, 'Wo bin ich?');
        await fs.Character.animate(character.goodProf, character.goodProf.pose.normal, fromOutofCanvasToRight());
        await fs.Speech.tell(character.goodProf, 'Ahhhhh, endlich bist du hier... Man man man brauchst du lange um in den Tiefschlaf zu kommen');
        await fs.Speech.tell(userData.Protagonist.name, '?????');
        fs.Character.hide(character.goodProf);
        fs.Character.show(character.goodProf, character.goodProf.pose.stunned, fs.positionPercent(70, 100));
        await fs.Speech.tell(character.goodProf, 'Du verstehst nicht? Na gut, ich erkläre es dir');
        fs.Character.hide(character.goodProf);
        fs.Character.show(character.goodProf, character.goodProf.pose.normal, fs.positionPercent(70, 100));
        await fs.Speech.tell(character.goodProf, 'Du träumst gerade und da du mir so hilflos vorkamst dachte ich helfe dir bei deinem...naja nennen wir es mal Prüfungsproblem');
        await fs.Speech.tell(userData.Protagonist.name, 'Werrrr, wer bist du?');
        await fs.Speech.tell(character.goodProf, 'haha, das spielt keine Rolle, sagen wir so... Ich kenne mich ziemlich gut in dem Gebiet aus wo du Hilfe brauchst.');
        await fs.Speech.tell(userData.Protagonist.name, 'Bin ich im Himmel? Bin ich Tot?');
        await fs.Speech.tell(character.goodProf, 'Schluss mit den vielen Fragen! Wollen wir beginnen?');
        sayYes();

        async function sayYes() {
            let playerChoices = {
              C0001: "Okay",
              C0002: "Okay"
            };
      
            let userInput = await fs.Menu.getInput(playerChoices, "player--select");
      
            switch (userInput) {
              case playerChoices.C0001:
                await fs.Speech.tell(userData.Protagonist.name, 'Okay');
                await fs.Speech.tell(character.goodProf, 'Perfekt, Ich habe mir mal angeschaut was ihr so alles für die Prüfung wissen müsst');
                await fs.Speech.tell(character.goodProf, 'Also, es gibt 4 Zentrale Themengebiete die ihr verstehen müsst');
                fs.Character.hide(character.mainCharacter);
                await fs.update(1).then(() => {
                    goToNextScene();
                  });
              break;
              case playerChoices.C0002:
                await fs.Speech.tell(userData.Protagonist.name, 'Okay');
                await fs.Speech.tell(userData.Protagonist.name, 'Perfekt, Ich habe mir mal angeschaut was ihr so alles für die Prüfung wissen müsst');
                await fs.Speech.tell(character.goodProf, 'Also, es gibt 4 Zentrale Themengebiete die ihr verstehen müsst');
                fs.Character.hide(character.mainCharacter);
                await fs.update(1).then(() => {
                    goToNextScene();
                  });
              break;
            };
          }

          function goToNextScene() {
            return Topics();
          }
    }
}