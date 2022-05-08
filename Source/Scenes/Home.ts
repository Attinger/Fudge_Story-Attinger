namespace learnjs {
    export async function Home(): fs.SceneReturn {
        await fs.Location.show(locations.outSideSchool);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        await fs.update(1);
        await fs.Speech.tell(character.narrator, `<span class="color-red">${userData.Protagonist.name}</span> ist auf dem Weg nachhause`);
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideOutAnimation());
        await fs.Speech.tell(character.narrator, 'Etwas später');
        await fs.Location.show(locations.homeFloor);
        await fs.update(1);
    }
  }