type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d){
    const [x, y , z] = coord;

    console.log(`provided coordinates had ${coord.length} dimentions`);
}

setCoordinate([1,2,3])
setCoordinate([11,22]);