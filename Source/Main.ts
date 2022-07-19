namespace learnjs {
  export import f = FudgeCore;
  export import fs = FudgeStory;


  window.addEventListener("load", start);
  function start(_event: Event): void {
    const uiElement: HTMLElement = document.querySelector("[type=interface]");
    userData = fs.Progress.setData(userData, uiElement);
    
    let scenes: fs.Scenes = [
      //{ id: "start", scene: Startscreen, name: "Startscreen" },
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
