namespace Template {
  export async function Introduction(): fs.SceneReturn {
    console.log("Intro");

    let slideIn: fs.AnimationDefinition = {
      start: { translation: fs.positions.bottomright},
      end: { translation: fs.positions.bottomleft},
      duration: 1,
      playmode: fs.ANIMATION_PLAYMODE.PLAYONCE
    }

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
      await fs.Speech.tell(null, "Bitte gib deinen Namen hier ein: ", true, 'start--screen');
      userData.Protagonist.name = await fs.Speech.getInput();
      //const playerName = userData.Protagonist.name.toString();

      sequenzOne();
    }

    //actual Scene.
    async function sequenzOne() {
      await fs.Location.show(locations.outSideSchool);
      await fs.update(1);
      await fs.Speech.tell(character.narrator, dialogues.narrator.t00);
      await fs.Location.show(locations.inSideSchool);
      await fs.update(1);
      await fs.Location.show(locations.insideClassroom);
      await fs.Speech.tell(character.narrator, dialogues.narrator.t01);
      await fs.Character.animate(character.stupidProf, character.stupidProf.pose.normal, slideIn);
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
      await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideIn);
      await fs.update(1);
      playerChoice();
    }

    async function playerChoice() {
      let playerChoices = {
        C0001: "Sagen das niemand was verstanden hat",
        C0002: "Nichts sagen"
      };

      let userInput = await fs.Menu.getInput(playerChoices, "player--select");

      switch (userInput) {
        case playerChoices.C0001:
          await fs.Speech.tell(userData.Protagonist, dialogues.mainChar.t00);
          await fs.update(1);
          await fs.Character.hide(character.mainCharacter);
          await fs.Location.show(locations.insideClassroom);
          await fs.Character.show(character.stupidProf, character.stupidProf.pose.angry, fs.positionPercent(0, 100));
          await fs.Speech.tell(character.stupidProf, dialogues.badProf.t03);
          await fs.update(1);
          break
        case playerChoices.C0002:
          await fs.Speech.tell(userData.Protagonist, dialogues.mainChar.t01);
          await fs.update(1);
          await fs.Character.hide(character.mainCharacter);
          await fs.Location.show(locations.insideClassroom);
          await fs.Character.show(character.stupidProf, character.stupidProf.pose.happy, fs.positionPercent(0, 100));
          await fs.update(0);
          await fs.Speech.tell(character.stupidProf, dialogues.badProf.t04);
          await fs.update(0);
          break
      };
    }
  }
}