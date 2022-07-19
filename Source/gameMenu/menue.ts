namespace learnjs {
    let menueObj = {
      safe: "Save",
      load: "Load",
      turnUpVolume: "+",
      turnDownVolume: "-",
      shortcuts: "Shortcuts",
      mute: "Mute Sound",
      close: "Close"
      }
    
      let gameMenue: fs.Menu;
      let isMenueOpen: boolean = true;
    
      async function menueButtonPressed(action: string): Promise<void> {
        switch (action) {
          case menueObj.safe:
            await fs.Progress.save();
            break;
          case menueObj.turnUpVolume:
            await incrementSound();
            break;
          case menueObj.turnDownVolume:
            await decrementSound();
            break;
          case menueObj.mute:
            await mute();
          break;
          case menueObj.shortcuts:
            await showShortcuts();
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

     let volume: number = 1.0;
     let isMuted: boolean = false;

      function incrementSound() {
        if (volume >= 100)
          return;
        volume += 0.2;
        fs.Sound.setMasterVolume(volume);
      }
    
      function decrementSound() {
        if (volume <= 0)
          return;
        volume -= 0.2;
        fs.Sound.setMasterVolume(volume);
      }

      function mute() {
        if(!isMuted) {
          volume = 0;
          fs.Sound.setMasterVolume(volume);
        }

        if(isMuted) {
          volume = 1;
          fs.Sound.setMasterVolume(volume);
        }

        isMuted = !isMuted
      }

      function showShortcuts() {
        fs.Text.print(`<strong>Shortcuts</strong><br>Menü öffnen -> M<br>Inventar öffnen -> I<br>Inventar schließen -> ESC<br>Speichern -> F8<br>Laden -> F9`);
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
          case f.KEYBOARD_CODE.M:
            if (!isMenueOpen) {
              gameMenue = fs.Menu.create(menueObj, menueButtonPressed, 'ingame--menue');
              isMenueOpen = true;
              gameMenue.open();
            } else {
              isMenueOpen = false;
              gameMenue.close();
            }
            break;
          case f.KEYBOARD_CODE.I:
            console.log("open inventory");
            await fs.Inventory.open();
          break;
          case f.KEYBOARD_CODE.ESC:
            await fs.Inventory.open();
            fs.Inventory.close();
          break;
        }
      }
}