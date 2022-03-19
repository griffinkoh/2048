const grid_size = 4;
const cell_size = 20;
const cell_gap = 2;

export default class Grid{
    constructor(gridElement){
        gridElement.style.setProperty("--grid-size", grid_size)
        gridElement.style.setProperty("--cell-size", `${cell_size}vmin`)
        gridElement.style.setProperty("--cell-gap", `${cell_gap}vmin`)
        createCellElement(gridElement)
    }
}

function createCellElement(gridElement){
    const cells = []
    for (let i = 0;)
}