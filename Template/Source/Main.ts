namespace Template {
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


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fs.Scenes = [
      { scene: Introduction, name: "Introduction" }
    ];

    const uiElement: HTMLElement = document.querySelector("[type=interface]");
    userData = fs.Progress.setData(userData, uiElement);

    // start the sequence
    fs.Progress.go(scenes);
  }
}
