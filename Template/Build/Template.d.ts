declare namespace Template {
    function Introduction(): fs.SceneReturn;
}
declare namespace Template {
    export import f = FudgeCore;
    export import fs = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let locations: {
        classRoom: {
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
            };
        };
        goodProf: {
            name: string;
            origin: f.ORIGIN2D;
        };
    };
}
