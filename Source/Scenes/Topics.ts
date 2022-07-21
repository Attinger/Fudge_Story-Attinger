namespace learnjs {
    export async function Topics(): fs.SceneReturn {
        await fs.Location.show(locations.heaven);
        fs.Character.hide(character.mainCharacter);
        await fs.Character.animate(character.goodProf, character.goodProf.pose.normal, fromOutofCanvasToRight());
        await fs.Speech.tell(character.goodProf, 'Du kannst aus folgenden Themenfeldern wählen:');
        let playerChoices = {
          C0001: "Variablen (noch nicht abgeschlossen)",
          C0002: "Operatoren (noch nicht abgeschlossen)",
          C0003: "Datentypen  (noch nicht abgeschlossen)",
          C0004: "Zur Prüfung"
        };

        if(dataForSave.variablesDone === true) {
          playerChoices.C0001 = "Variablen | Abgeschlossen. Willst du es erneut hören?"
        }

        if(dataForSave.operatorsDone === true) {
          playerChoices.C0002 = "Operatoren | Abgeschlossen. Willst du es erneut hören?"
        }

        if(dataForSave.datatypesDone === true) {
          playerChoices.C0003 = "Datentypen | Abgeschlossen. Willst du es erneut hören?"
        }

        chooseTopic();


        async function chooseTopic() {
            let userInput = await fs.Menu.getInput(playerChoices, "topic--select");
      
            switch (userInput) {
              case playerChoices.C0001:
                return Variables();
              break;
              case playerChoices.C0002:
                return Operators();
              break;
              case playerChoices.C0003:
                return Datatypes();
              break;
              case playerChoices.C0004:
                return Challenge();
              break;
            };
          }
        fs.update(1);
    }
}