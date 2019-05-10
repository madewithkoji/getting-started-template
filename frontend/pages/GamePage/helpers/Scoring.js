// High score table stuff
import Koji from 'koji-tools';

function getScores() {
    return new Promise((resolve, reject) => {
        Koji.request(Koji.routes.GetScores).then((response) => {
            resolve(response);
        })
    })
}

function addScore(name, score) {
    return new Promise((resolve, reject) => {
        Koji.request(Koji.routes.AddScore, {
            body: {
                name,
                score,
            }
        }).then((response) => {
            console.log(response);
        })
    });
}

export default {
    getScores,
    addScore,
};
