interface Point{
    x: number;
    y: number;
}

function printCoord(pt: Point){
    console.log(`x: ${pt.x}, y: ${pt.y}`);
}


let myPoint: Point = {x: 32, y: 42};

printCoord(myPoint);