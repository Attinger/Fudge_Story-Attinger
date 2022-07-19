namespace learnjs {
    export async function Endscreen(): fs.SceneReturn {
        let playerChoices = {
            C0001: "Play again",
            C0002: "Credits"
        };

        fs.Sound.play(sound.menuMusic, 0.15, true);

        chooseTopic();
        async function chooseTopic() {
            let userInput = await fs.Menu.getInput(playerChoices, "startscreen--select");
            switch (userInput) {
              case playerChoices.C0001:
                await closeScreen();
                return Introduction();
              break;
              case playerChoices.C0002:
                await closeScreen();
                return Credits();
                break;
            };
        }

        async function closeScreen() {
            fs.Sound.fade(sound.menuMusic, 0, 0);
            await fs.Sound.play(sound.menuOption, 0.4, false);
            let startScreen = document.querySelector('.startscreen--select');
            startScreen.classList.remove('startscreen--select');
            return;
        }


        const allButtons = document.querySelectorAll('button');

        let number = 0;

        allButtons.forEach(button => {
            button.classList.add(`startscreen-button-${number}`);
            let buttonClass = document.querySelector(`.startscreen-button-${number}`);
            buttonClass.addEventListener('mouseover', test);
            buttonClass.addEventListener('click', playSound);
            number++;
        });

        function test() {
            fs.Sound.play(sound.menuClick, 0.15, false);
        }

        function playSound() {
        }
        
    }
}