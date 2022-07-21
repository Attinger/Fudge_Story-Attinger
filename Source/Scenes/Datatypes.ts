namespace learnjs {
    export async function Datatypes(): fs.SceneReturn {

        await fs.Speech.tell(character.goodProf, 'Dieser Themenblock beschäftigt sich mit Datentypen', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Warum gibt es denn verschiedene Datentypen überhaupt in JavaScript?<br> Naja, der Hauptzweck der meisten Programme ist es Daten auf irgendeine Weise einlesen, verarbeiten und wieder auslesen zu können.<br> Damit das funktionieren kann, muss der Computer wissen um welche Daten es sich hierbei handelt. Schließlich wollen wir beispielweise bei einer Rechnung wie <br><br>2 + 4 = 6<br><br> das die 2 und 4 miteinander addiert werden wenn zwischen diesen beiden Zahlen ein + steht.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Um das realisieren zu können unterscheidet man beim Programmieren zwischen verschiedenen Datentypen.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Es gibt folgende wichtige Datentypen in JavaScript:<br><br><span class="arrow color-green">Number</span>, <span class="arrow color-green">String</span>, <span class="arrow color-green">Boolean</span>, <span class="arrow color-green">Undefined</span>, <span class="arrow color-green">Null</span>.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, 'Datentyp Number<br> Ist für Zahlen beinaher jeder Art bestimmt. Sie können im Code einfach als Zahl aufgeschrieben werden wie z.B die 10 oder die -3. <span class="color-red">Achtung!</span> aber bei Dezimalzahlen. Es wird ein Punkt als Trenner und nicht wie im Deutschen ein Komma verwendet also 2.45 und nicht 2,45.', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, 'Datentyp String<br> Ist für Zeichenketten bzw. Texte oder Worte. Um Sie als solche zu Kennzeichnen benutzt man typischerweise "Hallo" -> Anführungszeichen.', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, 'Datentyp Boolean<br> Sind Wahrheitswerte, die ausschließlich zwei Zustände annehmen können True(wahr) oder False(falsch). Der Wert eines Booleans liefert also immer die Antwort auf eine Ja/Nein Frage.', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, 'Datentyp Undefined<br> Ist das englische Wort für nicht definiert. Und so ist es auch, es entsteht immer dann wenn einer Variable bzw. Eigenschaft noch kein Wert zugewiesen wurde.', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, 'Datentyp Null<br> Ist sehr ähnliche zu Undefined, während Undefined wie eben erwähnt aussagt das ein Wert noch nicht gesetzt wurde sagt Null jedoch aus das der Wert explizit geleert also auf sozusagen Nichts festgelegt wurde.', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Mehr müsst ihr über Datentypen in der Prüfung nicht wissen. Du entscheidest wie es weiter geht.`, true, 'editor--speech');
        dataForSave.datatypesDone = true;

        fs.Inventory.add(items.datatypes);
        await itemAdded();

        async function itemAdded() {
          setTimeout(() => {
            fs.Text.print('Ein Item wurde deinem Inventar hinzugefügt.')
            fs.Text.addClass('item-added');
          }, 1000);
          fs.Text.close();
        }

        return Topics();
    }
}