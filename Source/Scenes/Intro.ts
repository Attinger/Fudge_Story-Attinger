namespace learnjs {
  export async function Introduction(): fs.SceneReturn {
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
      await fs.Speech.tell(null, "<p>Bevor es losgeht, am unterem rechtem Rand deines Bildschirms findest du einen Hilfe Button wo alle Tastaturbefehle zu finden sind:</p><p>Im Menü kannst du Speichern, ein Spielstand laden und das Intro überspringen</p><p>Wenn du mir jetzt noch verrätst wie du heißt geht es direkt los</p>", true, 'introduction-text');
      userData.Protagonist.name = await fs.Speech.getInput();
      await fs.Speech.hide();
      sequenzOne();
    }

    //actual Scene.
    async function sequenzOne() {
      await fs.Location.show(locations.outSideSchool);
      await fs.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
      await fs.update(1);
      await fs.Speech.tell(character.narrator, dialogues.narrator.t00);
      await fs.Location.show(locations.inSideSchool);
      await fs.update(1);
      await fs.Speech.tell(character.narrator, dialogues.narrator.t01);
      await fs.Location.show(locations.insideClassroom);
      await fs.Character.animate(character.stupidProf, character.stupidProf.pose.normal, slideInAnimation());
      await fs.update(1);
      await fs.Speech.tell(character.stupidProf, dialogues.badProf.t00);
      await fs.Speech.tell(character.stupidProf, dialogues.badProf.t01);
      await fs.Speech.tell(character.narrator, dialogues.narrator.t02);
      await fs.Character.hide(character.stupidProf);
      await fs.Character.show(character.stupidProf, character.stupidProf.pose.happy, fs.positionPercent(0, 100));
      await fs.Speech.tell(character.stupidProf, dialogues.badProf.t02);
      await fs.update(0);
      await fs.Speech.clear();
      await fs.Location.show(locations.classMates);
      await fs.Character.hideAll();
      await fs.update(1);
      await fs.Location.show(locations.classMatesQuestions);
      await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideInAnimation());
      await fs.update(1).then(() => {
        saySomethingOrNot();
      });
    }

    async function saySomethingOrNot() {
      let playerChoices = {
        C0001: "Sagen das niemand was verstanden hat",
        C0002: "Nichts sagen"
      };

      let userInput = await fs.Menu.getInput(playerChoices, "player--select");

      switch (userInput) {
        case playerChoices.C0001:
          await fs.update(1);
          await fs.Speech.tell(userData.Protagonist, dialogues.mainChar.t00);
          await fs.update(1);
          await fs.Character.hide(character.mainCharacter);
          await fs.Location.show(locations.insideClassroom);
          await fs.Character.show(character.stupidProf, character.stupidProf.pose.angry, fs.positionPercent(0, 100));
          await fs.update(1);
          await fs.Speech.tell(character.stupidProf, `<p>Das ist ja unerhört <span class="color-red">${userData.Protagonist.name}!!!!!</span> Ich habe meine Pflicht erfüllt, von mir müssen Sie und die gesamte Klasse nichtsmehr erwarten. Wir sehen uns zur Prüfung. Und jetzt verschwinden Sie aus meinem Klassenzimmer und zwar ALLEEEE!!!!!!!!!!!</p>`);
          fs.Speech.clear();
          fs.Speech.hide();
          fs.Character.hideAll();
          await fs.update(1).then(() => {
            goToNextScene();
          });
        break;
        case playerChoices.C0002:
          await fs.update(1);
          await fs.Speech.tell(userData.Protagonist, dialogues.mainChar.t01);
          await fs.update(1);
          await fs.Character.hide(character.mainCharacter);
          await fs.Location.show(locations.insideClassroom);
          await fs.Character.show(character.stupidProf, character.stupidProf.pose.angry, fs.positionPercent(0, 100));
          await fs.update(1);
          await fs.Speech.tell(character.stupidProf, `<p>Das dachte ich mir bereits. Wer hier nichts versteht hat sowieso keine Zukunft!!!!!</span>Wir sehen uns zur Prüfung. Und jetzt verschwinden Sie aus meinem Klassenzimmer und zwar ALLEEEE!!!!!!!!!!!</p>`);
          fs.Speech.clear();
          fs.Speech.hide();
          fs.Character.hideAll();
          await fs.update(1).then(() => {
            goToNextScene();
          });
        break;
      };
    }

    fs.Progress

    function goToNextScene() {
      return Home();
    }
  }
}