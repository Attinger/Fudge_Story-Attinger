namespace learnjs {
    let menueObj = {
        safe: 'safe',
        load: 'load',
        close: 'close',
      }
    
      let gameMenue: fs.Menu;
      let isMenueOpen: boolean = true;
    
      async function menueButtonPressed(action: string): Promise<void> {
        switch (action) {
          case menueObj.safe:
            await fs.Progress.save();
            break;
          case menueObj.load:
            await fs.Progress.load();
            break;
          case menueObj.close:
            gameMenue.close();
            isMenueOpen = false;
            break;
        }
      }
    
      document.addEventListener("keydown", handleKeyPressed);
      async function handleKeyPressed(_event: KeyboardEvent): Promise<void>{
        switch(_event.code) {
          case f.KEYBOARD_CODE.F8:
            await fs.Progress.save();
            break;
          case f.KEYBOARD_CODE.F9:
            await fs.Progress.load();
            break;
          case f.KEYBOARD_CODE.ESC:
            if (!isMenueOpen) {
              gameMenue = fs.Menu.create(menueObj, menueButtonPressed, 'ingame--menue');
              isMenueOpen = true;
              gameMenue.open();
            } else {
              isMenueOpen = false;
              gameMenue.close();
            }
            break;
        }
      }
}