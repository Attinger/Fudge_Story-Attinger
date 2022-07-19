namespace learnjs {
    export async function BadEnd(): fs.SceneReturn {
        await fs.Speech.tell(character.narrator, `10 Jahre später....`);
        await fs.Location.show(locations.homeFloor);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        fs.update(1);
        await fs.Speech.tell(character.narrator, `<span class="color-red">${userData.Protagonist.name}</span> wurde von zuhause rausgeworfen und hat alles in Ihrem Leben verloren. Sie ist arbeitslos und lebt auf der Straße. Es gibt kaum noch Hoffnung. Hätte <span class="color-red">${userData.Protagonist.name}</span> doch damals mehr Zeit fürs Lernen investiert.`);
    }
}