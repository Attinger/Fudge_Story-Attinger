namespace learnjs {
    export async function RoomSecond(): fs.SceneReturn {
        await fs.Location.show(locations.homeRoom);
        await fs.Character.show(character.mainCharacter, character.mainCharacter.pose.normal, fs.positionPercent(0, 100));
        await fs.Speech.tell(character.narrator, `Mittlerweile ist eine Woche vergangen und <span class="color-red">${userData.Protagonist.name}</span> prüft Ihre Emails.`);

        let finalResult = userData.Protagonist.pointsCollected;
        checkResult(finalResult);

        async function checkResult(result: number) {
            if(result < 5) {
                await fs.Speech.tell(character.narrator, `Sehr geehrte Frau/Herr ${userData.Protagonist.name}, in Ihrer Programmier - Prüfung im Sommersemester haben Sie <span class="color-red">${userData.Protagonist.pointsCollected}</span> von 10 Fragen richtig beantwortet. Sie haben diese Prüfung somit nicht bestanden! Das bedeutet Sie haben somit das Anrecht auf unser Studium leider verloren. Bei Fragen stehen wir Ihnen jederzeit zur Verfügung`);
                return BadEnd();
            }
            if(result > 5 && result < 10)  {
                await fs.Speech.tell(character.narrator, `Sehr geehrte Frau/Herr ${userData.Protagonist.name}, in Ihrer Programmier - Prüfung im Sommersemester haben Sie <span class="color-green">${userData.Protagonist.pointsCollected}</span> von 10 Fragen richtig beantwortet. Sie haben diese Prüfung somit bestanden. Herzlichen Glückwunsch.`);
                return HappyEnd();
            }
            if(result = 10) {
                await fs.Speech.tell(character.narrator, `Sehr geehrte Frau/Herr ${userData.Protagonist.name}, in Ihrer Programmier - Prüfung im Sommersemester haben Sie <span class="color-green">${userData.Protagonist.pointsCollected}</span> von 10 Fragen richtig beantwortet. Sie haben diese Prüfung somit mit der best möglichen Note bestanden. Herzlichen Glückwunsch.`);
                return BestEnd();
            }
        }

    }
}