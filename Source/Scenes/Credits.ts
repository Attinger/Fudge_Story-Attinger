namespace learnjs {
    export async function Credits(): fs.SceneReturn {
        let credits =
         `
         <div class="credits">
         <h1>CREDITS</h1>\
          <table>\
            <tr>\
              <td>Story</td>\
              <td>Kevin Attinger</td>\
            </tr>\
            <tr>\
              <td>Programming</td>\
              <td>Kevin Attinger</td>\
            </tr>\
          </table>\
          <h2>Music and Sound</h2>\
          <table>\
            <tr>\
              <td>All Soundeffects are provided by <a href="https://pixabay.com/sound-effects/" target="blank">pixabay</a></td>\
            </tr>\
          </table>\
          <h2> Characters </h2>
          <table>\
            <tr>\
              <td>Main Character: <a href="https://noranekogames.itch.io/hana?download" target="blank">found here</a></td>\
            </tr>\
            <tr>\
              <td>Mom Character: <a href="https://st-chem-atelier.itch.io/free-vnsprite-kaede" target="blank">found here</a></td>\
            </tr>\
            <tr>\
              <td>Prof. Dr. Harabashi Tadinpachi: <a href="https://charactercreator.org/" target="blank">created here</a></td>\
            </tr>\
            <tr>\
              <td>Dr Javascript: <a href="https://charactercreator.org/" target="blank">created here</a></td>\
            </tr>\
          </table>\
          <h2> Locations </h2>
          <table>\
          <tr>\
            <td>Home Backgrounds: <a href="https://potat0master.itch.io/free-visual-novel-backgrounds-starter-pack-2" target="blank">found here</a></td>\
          </tr>\
          <tr>\
            <td>Poor City in the Bad end: <a href="https://unsplash.com/photos/Lr49v_a5WOw" target="blank">found here</a></td>\
          </tr>\
          <tr>\
            <td>Office for good end: <a href="https://unsplash.com/photos/lDlU1zbjGQA" target="blank">found here</a></td>\
          </tr>\
        </table>\
          <h2>Special Thanks</h2>\
          <p> to Riem Yasin & Jirka Dell'Oro</p>
          <em> This Story is made with <a href="https://github.com/JirkaDellOro/FUDGE_Story" target="_blank">FUDGE STORY</a></em>
          <div class="close-button-wrapper">
            <div class="close-button">X</div>
          </div>
          </div>
          `;
        fs.Text.print(credits);

        const closeButtonInteraction = document.querySelector('.close-button');
        closeButtonInteraction.addEventListener('click', returnHome);

        function returnHome() {
            fs.Text.close();
            return Startscreen();
        }
    }
}