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