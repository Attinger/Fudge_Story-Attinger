namespace learnjs {
  export import f = FudgeCore;
  export import fs = FudgeStory;

  export let userData = {
    Protagonist: {
      name: 'Default',
    },
  };


  export let transition = {
    clock: {
      duration:1,
      alpha: "./Images/bsp-trans-one.png",
      edge: 1
    },
  };

  export let locations = {
    classMates: {
      name: "classroom",
      background: "./Images/rooms/vn-class.jpg"
    },
    classMatesQuestions: {
      name: "classroomquestion",
      background: "./Images/rooms/vn-class-questions.jpg"
    },
    outSideSchool: {
      name: "outsideschool",
      background: "./Images/rooms/vn-school-outside.jpg"
    },
    inSideSchool: {
      name: "insideschool",
      background: "./Images/rooms/vn-school-inside.jpg"
    },
    insideClassroom: {
      name: "insideclassroom",
      background: "./Images/rooms/vn-classroom.jpg"
    },
  };
  
  export let character = {
    narrator: {
      name: 'Narrator',
    },
    stupidProf: {
      name: 'Prof. Dr. Harabashi Tadinpachi',
      origin: fs.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "./Images/prof/uni-prof-normal.png",
        happy: "./Images/prof/uni-prof-happy.png",
        angry: "./Images/prof/uni-prof-angry.png",
        laugh: "./Images/prof/uni-prof-laugh.png"
      }
    },
    goodProf: {
      name: 'Dr JavaScript',
      origin: fs.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "./Images/main-character/main-char-mid-scaled.png",
        angry:  "./Images/main-character/main-char-mid-angry.png",
      }
    },
    mainCharacter: {
      name: '',
      origin: fs.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "./Images/main-character/mc-normal.png",
      }
    }
  }

  export let items = {
    exampleItem: {
      name: 'bspItem',
      desc: 'Ein Beispielitem',
      img: './Images/items/bspitem.png',
    }
  }

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


  window.addEventListener("load", start);
  function start(_event: Event): void {
    const uiElement: HTMLElement = document.querySelector("[type=interface]");
    userData = fs.Progress.setData(userData, uiElement);

    const helpButton = document.querySelector('.help');

    helpButton.addEventListener('click', helpOptions);
  
    async function helpOptions() {
      fs.Text.print("<p>Tastaturbelegung:</p> <p>Menü aufrufen: ESC</p>");
    }


    let scenes: fs.Scenes = [
      { id: "intro", scene: Introduction, name: "Introduction" },
    ];

    // start the sequence
    fs.Progress.go(scenes);
  }
}
