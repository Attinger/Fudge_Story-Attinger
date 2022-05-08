namespace learnjs {
    export function slideInAnimation(): fs.AnimationDefinition {
        return {
            start: { translation: fs.positions.bottomright},
            end: { translation: fs.positions.bottomleft},
            duration: 1,
            playmode: fs.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    export function slideOutAnimation(): fs.AnimationDefinition {
        return {
            start: { translation: fs.positions.bottomleft},
            end: { translation: fs.positions.bottomright},
            duration: 1,
            playmode: fs.ANIMATION_PLAYMODE.PLAYONCE
        }
    }
}