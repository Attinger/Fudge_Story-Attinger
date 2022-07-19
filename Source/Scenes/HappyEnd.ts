namespace learnjs {
    export async function HappyEnd(): fs.SceneReturn {
        await fs.Speech.tell(character.narrator, `10 Jahre später....`);
        await fs.Location.show(locations.homeFloor);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        fs.update(1);
        await fs.Speech.tell(character.narrator, `<span class="color-red">${userData.Protagonist.name}</span> hat mit der Programmierung zwar nichtsmehr am Hut. Lebt aber ein erfülltes und glückliches Leben. Sie versteht sich mit Ihrer Familie gut und Sie ist überaus glücklich.`);
    }
}