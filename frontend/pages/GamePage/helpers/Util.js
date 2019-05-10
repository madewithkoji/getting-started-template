// just random stuff that doesn't fit anywhere else.
import Koji from 'koji-tools';

function getBlockSize(rows, columns) {
    let height = (typeof window.orientation !== "undefined") ? window.innerHeight - 66 : window.innerHeight;
    return Math.min(
        (window.innerWidth - 32) / rows,
        (height - 70) / (parseInt(columns) + 1)
    );
}

function getColor(type) {
    return Koji.config.style[`piece${type + 1}`];
}

function getImage(type) {
    return Koji.config.pieces[`image${type + 1}`];
}

function getNumTypes() {
    let i = 0;
    while(Koji.config.pieces[`image${i + 1}`] && Koji.config.pieces[`image${i + 1}`].length !== 0) i ++;
    return i;
}

function newElement(numTypes) {
    return {
        selected: false,
        type: Math.floor(Math.random() * numTypes),
        deltaY: 0,
        deltaX: 0,
        deleted: false,
        rowPower: false,
        typePower: false,
    };
}


export default {
    getBlockSize,
    newElement,
    getNumTypes,
    getColor,
    getImage,
};
