namespace Template {
  export import f = FudgeCore;
  export import fs = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
    clock: {
      duration:1,
      alpha: "../Images/bsp-transition-one.jpg",
      edge: 1
    },
  };

  export let locations = {
    classRoom: {
      name: "classroom",
      background: "Images/visual-novel-classroom.jpg"
    },
  };
  
  export let character = {
    narrator: {
      name: '',
    },
    stupidProf: {
      name: 'Max Mustermann',
      origin: fs.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "../Images/bsp-img-prof.jpg",
      
      }
    },
    goodProf: {
      name: 'Dr JavaScript',
      origin: fs.ORIGIN.BOTTOMRIGHT,
    },
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fs.Scenes = [
      { scene: Introduction, name: "Introduction" }
    ];

    //const uiElement: HTMLELement = document.querySelector("[type=interface]");
    //dataForSave = fs.Progress.setData(DataForSave, uiElement);

    // start the sequence
    fs.Progress.go(scenes);
  }
}
