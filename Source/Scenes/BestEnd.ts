namespace learnjs {
    export async function BestEnd(): fs.SceneReturn {
        await fs.Speech.tell(character.narrator, `10 Jahre später....`);
        await fs.Location.show(locations.homeFloor);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        fs.update(1);
        await fs.Speech.tell(character.narrator, `<span class="color-red">${userData.Protagonist.name}</span> ist mittlerweile Software Entwicklerin bei ,,FIRMA'' und lebt ein Traumleben. Sie hat ein sehr gutes Verhältnis mit Ihrer Familie und hat finanziell keine Sorgen mehr.`);
    }
}