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
        variables: {
            name: string;
            description: string;
            image: string;
        };
        operators: {
            name: string;
            description: string;
            image: string;
        };
        datatypes: {
            name: string;
            description: string;
            image: string;
        };
    };
}
declare namespace learnjs {
    function BadEnd(): fs.SceneReturn;
}
declare namespace learnjs {
    function BestEnd(): fs.SceneReturn;
}
declare namespace learnjs {
    function Challenge(): fs.SceneReturn;
}
declare namespace learnjs {
    function Credits(): fs.SceneReturn;
}
declare namespace learnjs {
    function Datatypes(): fs.SceneReturn;
}
declare namespace learnjs {
    function Endscreen(): fs.SceneReturn;
}
declare namespace learnjs {
    function HappyEnd(): fs.SceneReturn;
}
declare namespace learnjs {
    function Heaven(): fs.SceneReturn;
}
declare namespace learnjs {
    function Home(): fs.SceneReturn;
}
declare namespace learnjs {
    function Introduction(): fs.SceneReturn;
}
declare namespace learnjs {
    function Operators(): fs.SceneReturn;
}
declare namespace learnjs {
    function Room(): fs.SceneReturn;
}
declare namespace learnjs {
    function RoomSecond(): fs.SceneReturn;
}
declare namespace learnjs {
    function Startscreen(): fs.SceneReturn;
}
declare namespace learnjs {
    function Topics(): fs.SceneReturn;
}
declare namespace learnjs {
    function Variables(): fs.SceneReturn;
}
declare namespace learnjs {
    function homeSecond(): fs.SceneReturn;
}
declare namespace learnjs {
    function slideInAnimation(): fs.AnimationDefinition;
    function slideOutAnimation(): fs.AnimationDefinition;
    function fromOutofCanvasToRight(): fs.AnimationDefinition;
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
        poorcity: {
            name: string;
            background: string;
        };
        office: {
            name: string;
            background: string;
        };
    };
}
declare namespace learnjs {
    let sound: {
        menuMusic: string;
        introMusic: string;
        heavenMusic: string;
        challengeMusic: string;
        menuClick: string;
        menuOption: string;
        type: string;
        delete: string;
    };
}
declare namespace learnjs {
    let userData: {
        Protagonist: {
            name: string;
            variableTest: string;
            pointsCollected: number;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        variablesDone: boolean;
        datatypesDone: boolean;
        operatorsDone: boolean;
        progressMeter: number;
    };
}
