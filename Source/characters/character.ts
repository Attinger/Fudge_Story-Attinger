namespace learnjs {
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
}