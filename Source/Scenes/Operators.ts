namespace learnjs {
    export async function Operators(): fs.SceneReturn {

        const getNumberOne =`<span class="color-grey">1</span>`

        await fs.Speech.tell(character.goodProf, 'Dieser Themenblock beschäftigt sich mit Operatoren', true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `In eigentlich jeder Programmiersprache gibt es Operatoren. Mit diesen kann man bestimmte Aufgaben erledigen. Es gibt zum Beispiel die Rechenoperatoren <br><br><span class="color-red">+   -   x   /</span><br<br>Diese sind dir bestimmt schon aus der Mathematik bekannt. Damit kann man in JavaScript ganz normal Rechenoperationen durchführen. Was man im Leben eines Entwicklers ziemlich oft benötigt.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Dann gibt es noch Operatoren für die Zeichenkettenverknüfung. Und zwar ist das ein einfaches <span class="color-red">+</span>. Was kann man damit machen?`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Man kann damit unter anderem Strings kombinieren, was Strings in der Programmiersprache sind findest du im Kapitel Datentypen. Aber um dir mal ein Beispiel zu zeigen könnte das ganze so aussehn.<br><br>${getNumberOne} let string = 'Hello' + 'World'<br><br> Wird durch das <span class="color-red">+</span> dann als ein Satz Interpretiert -> Hello World`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Ebenfalls gibt es noch den sogenannten Zuweisungsoperator dieser ist immer als <span class="color-red> = </span> gekennzeichnet. Diesen haben wir bereits kennengelernt, er dient ganz simpel dazu Variablen Werte zuzuweisen.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Auch sehr sehr wichtig sind die Vergleichsoperatoren.<br><br> <span class="color-red">===   !==  <  >  <=   >=</span>.<br><br> Du kennst hier bestimmt auch wieder einigen Zeichen aus der Mathematik. Zur Erklärung: <br><br> <span class="color-red">===</span> heißt soviel wie Datentyp und Wert ist gleich.<br><span class="color-red">!==</span> heißt soviel wie ist nicht gleich wie. <br><span class="color-red">></span> heißt soviel wie größer als, somit ist <span class="color-red"><</span> das Gegenteil davon.<br><span class="color-red">>=</span> heißt soviel wie größer oder gleich.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Zuletzt sind auch sogenannte Logische Operatoren wichtig.<br><br> <span class="color-red">&&  || !</span>.<br><br> Diese Logischen Operatoren benötigt man meist dann wenn man gewissen Bedingungen aufstellen möchte. <br>Was heißen diese Zeichen?<br><br><span class="color-red"> && </span> heißt soviel wie "und"<br><span class="color-red"> || </span> bedeutet "oder"<br><span class="color-red"> ! </span>heißt "nicht".<br> Das mag dir alles aktuell sehr trocken vorkommen, aber wenn man komplexere Programme erstellen möchte benötigt man mit relativer Sicherheit aller dieser Operatorentypen dementsprechend ist es wichtig mal von diesen gehört zu haben.`, true, 'editor--speech');
        await fs.Speech.tell(character.goodProf, `Mehr müsst ihr über Operatoren in der Prüfung nicht wissen. Du entscheidest wie es weiter geht.`, true, 'editor--speech');
        
        dataForSave.operatorsDone = true;

        fs.Inventory.add(items.operators);
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