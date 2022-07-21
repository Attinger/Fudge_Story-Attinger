namespace learnjs {
    export async function Room(): fs.SceneReturn {
        await fs.Location.show(locations.homeRoom);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        await fs.Speech.tell(userData.Protagonist, 'Ich hab keine Ahnung wie ich das alles schaffen soll');
        await fs.Speech.tell(userData.Protagonist, 'Wenn ich doch nur jemanden hätte der mir das alles angenehm erklärt, wäre mein Leben so viel leichter');
        await fs.Speech.tell(userData.Protagonist, 'Ich muss morgen unbedingt anfangen, sonst hab ich es verkackt');
        await fs.Speech.tell(userData.Protagonist, 'Alexa');
        await fs.Speech.tell(userData.Protagonist, 'Licht aus!');
        await fs.Character.animate(character.mainCharacter, character.mainCharacter.pose.normal, slideOutAnimation());
        fs.Speech.clear();
        fs.Speech.hide();
        fs.update(1);
        await fs.Speech.tell(character.narrator, `4:20Uhr.... Mitten in der Nacht..<span class="color-red">${userData.Protagonist.name}</span> schläft bereits tief und fest`);
        await fs.Speech.tell(character.narrator, 'Als plötzlich....');
        fs.Speech.clear();
        fs.Speech.hide();
        fs.Character.hideAll();
        await fs.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
        await goToNextScene();
        fs.update(1);

        function goToNextScene() {
            return Heaven();
        };

    }
}