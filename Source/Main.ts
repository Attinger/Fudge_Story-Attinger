namespace learnjs {
  export import f = FudgeCore;
  export import fs = FudgeStory;


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
      //{ id: "intro", scene: Introduction, name: "Introduction" },
      //{ id: "Home", scene: Home, name: "Home" },
      //{ id: "Room", scene: Room, name: "Room" },
      //{ id: "Heaven", scene: Heaven, name: "Heaven" },
      { id: "Topics", scene: Topics, name: "Topics" },
    ];

    // start the sequence
    fs.Progress.go(scenes);
  }
}
