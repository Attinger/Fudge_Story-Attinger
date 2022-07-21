namespace learnjs {
    export let character = {
        narrator: {
          name: 'Erzähler',
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
            normal: "./Images/js-teacher/js-teacher-neutral.png",
            angry:  "./Images/js-teacher/js-teacher-angry.png",
            surprised: "./Images/js-teacher/js-teacher-surprised.png",
            distance: "./Images/js-teacher/js-teacher-distance.png",
            stunned: "./Images/js-teacher/js-teacher-stunned.png"
          }
        },
        mainCharacter: {
          name: 'Kazuko',
          origin: fs.ORIGIN.BOTTOMLEFT,
          pose: {
            normal: "./Images/main-character/mc-normal.png",
          }
        },
        mcMom: {
            name: 'Mom',
            origin: fs.ORIGIN.BOTTOMLEFT,
            pose: {
              happy: "./Images/mc-mom/mc-mom-happy.png",
              angry: "./Images/mc-mom/mc-mom-angy.png"
            }
        },
      }
}