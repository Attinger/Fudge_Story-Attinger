declare namespace learnjs {
    export import f = FudgeCore;
    export import fs = FudgeStory;
    let userData: {
        Protagonist: {
            name: string;
        };
    };
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
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
    };
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
            };
        };
        mainCharacter: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    let items: {
        exampleItem: {
            name: string;
            desc: string;
            img: string;
        };
    };
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
    function Home(): fs.SceneReturn;
}
declare namespace learnjs {
    function Introduction(): fs.SceneReturn;
}
