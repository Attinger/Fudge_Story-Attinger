namespace learnjs {
    export async function Home(): fs.SceneReturn {

        let slideOut: fs.AnimationDefinition = {
            start: { translation: fs.positions.bottomleft},
            end: { translation: fs.positions.bottomright},
            duration: 1,
            playmode: fs.ANIMATION_PLAYMODE.PLAYONCE
        }
      

        await fs.Location.show(locations.outSideSchool);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        await fs.update(1);
        await fs.Speech.tell(character.narrator, `<span class="color-red">${userData.Protagonist.name}</span> ist auf dem Weg nachhause`);
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideOut);
        await fs.Speech.tell(character.narrator, 'Etwas später');

    }
  }