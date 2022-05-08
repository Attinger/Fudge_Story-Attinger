declare namespace learnjs {
    export import f = FudgeCore;
    export import fs = FudgeStory;
}
declare namespace learnjs {
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        long: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace learnjs {
    let items: {
        exampleItem: {
            name: string;
            desc: string;
            img: string;
        };
    };
}
declare namespace learnjs {
    function Home(): fs.SceneReturn;
}
declare namespace learnjs {
    function Introduction(): fs.SceneReturn;
}
declare namespace learnjs {
    function slideInAnimation(): fs.AnimationDefinition;
    function slideOutAnimation(): fs.AnimationDefinition;
}
declare namespace learnjs {
    let character: {
        narrator: {
            name: string;
        };
        stupidProf: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                angry: string;
                laugh: string;
            };
        };
        goodProf: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                surprised: string;
                distance: string;
                stunned: string;
            };
        };
        mainCharacter: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        mcMom: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                happy: string;
                angry: string;
            };
        };
    };
}
declare namespace learnjs {
}
declare namespace learnjs {
    let locations: {
        classMates: {
            name: string;
            background: string;
        };
        classMatesQuestions: {
            name: string;
            background: string;
        };
        outSideSchool: {
            name: string;
            background: string;
        };
        inSideSchool: {
            name: string;
            background: string;
        };
        insideClassroom: {
            name: string;
            background: string;
        };
        homeFloor: {
            name: string;
            background: string;
        };
        homeRoom: {
            name: string;
            background: string;
        };
        heaven: {
            name: string;
            background: string;
        };
    };
}
declare namespace learnjs {
    let userData: {
        Protagonist: {
            name: string;
        };
    };
}
