namespace learnjs {
    export async function homeSecond(): fs.SceneReturn {
        fs.Sound.fade(sound.challengeMusic, 0, 0);
        fs.Sound.play(sound.introMusic, 0.15, true);
        await fs.Location.show(locations.homeFloor);
        await fs.Character.show(character.mcMom, character.mcMom.pose.happy, fs.positionPercent(0, 100));
        await fs.Speech.tell(character.mcMom, `Hey mein Schatz! Wie war deine Prüfung <span class="color-red">${userData.Protagonist.name}</span>?????`);
        await fs.update(1);
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, fromOutofCanvasToRight());
        await fs.update(1).then(() => {
            answerQuestion();
        });

        async function answerQuestion() {
            let playerChoices = {
                C0001: "Sehr gut! Es lief Prima!",
                C0002: "Ganz okay",
                C0003: "Ohje. Ich glaube die habe ich nicht bestanden",
              };
        
              let userInput = await fs.Menu.getInput(playerChoices, "player--select");

              switch (userInput) {
                case playerChoices.C0001:
                    await fs.Speech.tell(userData.Protagonist, 'Mum!! Es lief soooo gut!! Ich hab einfach alles verstanden.');
                    await fs.Speech.tell(character.mcMom, 'Okay. Dann sind wir mal auf die Ergebnisse gespannt');
                    await fs.Speech.tell(userData.Protagonist, 'Sie kommen in einer Woche :) Hab dich lieb Mum!');
                    fs.Speech.clear();
                    fs.Speech.hide();
                    fs.Character.hideAll();
                    await fs.update(1).then(() => {
                      goToNextScene();
                    });
                break;
                case playerChoices.C0002:
                    await fs.Speech.tell(userData.Protagonist, 'Mhhmm.. Sie lief ganz okay glaube ich. Müsste es bestanden haben');
                    await fs.Speech.tell(character.mcMom, 'Okay. Dann sind wir mal auf die Ergebnisse gespannt');
                    fs.Speech.clear();
                    fs.Speech.hide();
                    fs.Character.hideAll();
                    await fs.update(1).then(() => {
                      goToNextScene();
                    });
                case playerChoices.C0003:
                    await fs.Speech.tell(userData.Protagonist, 'Wie erwartet!! Ich hab nichts verstanden');
                    await fs.Speech.tell(character.mcMom, 'Wenn du diese Prüfung nicht bestanden hast, werf ich dich raus!!!!!!');
                    fs.Speech.clear();
                    fs.Speech.hide();
                    fs.Character.hideAll();
                    await fs.update(1).then(() => {
                      goToNextScene();
                    });
                break;
              }
        }

        function goToNextScene() {
            return RoomSecond();
          }
    }
  }