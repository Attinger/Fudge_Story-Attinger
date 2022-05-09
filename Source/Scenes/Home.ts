namespace learnjs {
    export async function Home(): fs.SceneReturn {
        await fs.Location.show(locations.outSideSchool);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        await fs.update(1);
        await fs.Speech.tell(character.narrator, `<span class="color-red">${userData.Protagonist.name}</span> ist auf dem Weg nachhause`);
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideOutAnimation());
        await fs.Speech.tell(character.narrator, 'Etwas später');
        await fs.Location.show(locations.homeFloor);
        await fs.Character.show(character.mcMom, character.mcMom.pose.happy, fs.positionPercent(0, 100));
        await fs.Speech.tell(character.mcMom, `Hey mein Schatz! Wie war dein Tag <span class="color-red">${userData.Protagonist.name}</span>? Wie war die Uni?`);
        await fs.update(1);
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, fromOutofCanvasToRight());
        await fs.Speech.tell(userData.Protagonist, 'Frag nicht.....');
        await fs.Speech.tell(character.mcMom, 'Ach komm schon, als ob es so schlimm war?');
        await fs.Speech.tell(userData.Protagonist, 'Mama ich schaff die Uni nicht, Programmieren bricht mir das Genick... Niemand versteht es, keiner kann mir helfen');
        await fs.Character.hide(character.mcMom);
        await fs.Character.show(character.mcMom, character.mcMom.pose.angry, fs.positionPercent(0, 100));
        await fs.Speech.tell(character.mcMom, 'Sollen wir das nun wirklich wieder ausdisktuieren? Du weißt genau, von nichts kommt nichts. Wir kommen von ganz unten, dein Vater und ich mussten hart für unseren Erfolg arbeiten');
        await fs.update(1).then(() => {
            argueOrNot();
        });

        async function argueOrNot() {
            let playerChoices = {
                C0001: "Ausdiskutieren",
                C0002: "Müssen wir nicht. Irgendwie schaff ich das schon"
              };
        
              let userInput = await fs.Menu.getInput(playerChoices, "player--select");

              switch (userInput) {
                case playerChoices.C0001:
                    await fs.Speech.tell(userData.Protagonist, 'Du verstehst es nicht Mama, ich gebe alles aber unser Professor erklärt uns einfach nichts. Ich weiß nichts über das Thema.......');
                    await fs.Speech.tell(character.mcMom, 'Stop! Für deinen Misserfolg ist niemand anderes verantwortlich als du selbst. Dein Professor kann auch nichts dafür das du nicht hart genug für deine Ziele arbeitest.');
                    await fs.Speech.tell(userData.Protagonist, 'Aber ich will doch garnicht programmieren');
                    await fs.Speech.tell(character.mcMom, 'Es gibt Dinge im Leben da muss man durch, ganz egal wie irrelevant diese für dich wirken');
                    await fs.Speech.tell(userData.Protagonist, 'Niemand versteht mich');
                    await fs.Character.hide(character.mcMom);
                    await fs.Character.show(character.mcMom, character.mcMom.pose.happy, fs.positionPercent(0, 100));
                    await fs.Speech.tell(character.mcMom, `Ach <span class="color-red">${userData.Protagonist.name}</span>.. Du weißt genau wir glauben an dich, du schaffst das schon. Mach das nicht nur für dich sondern auch für die Familie`);
                    await fs.Speech.tell(userData.Protagonist, 'Ich geb mein bestes. Ich geh schlafen Mama, morgen ist ein neuer Tag');
                    await fs.Speech.tell(character.mcMom, 'Gute Nacht');
                    fs.Speech.clear();
                    fs.Speech.hide();
                    fs.Character.hideAll();
                    await fs.update(1).then(() => {
                      goToNextScene();
                    });
                break;
                case playerChoices.C0002:
                    await fs.Speech.tell(userData.Protagonist, 'Müssen wir nicht. Irgendwie schaff ich das schon. Ich geh jetzt schlafen und ab morgen lerne ich auf diese Prüfung.');
                    await fs.Speech.tell(character.mcMom, 'Gute Nacht');
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
            return Room();
          }
    }
  }