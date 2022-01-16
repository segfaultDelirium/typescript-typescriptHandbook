// interface PaintOptions{
//     shape: Shape;
//     xPos?: number;
//     yPos?: number;
// }

// function PaintShape(options: PaintOptions){
//     console.log(options.shape);
//     let xPos = options.xPos === undefined ? 0 : options.xPos;
//     let yPos = options.yPos === undefined ? 0 : options.yPos;
//     console.log(`${xPos}, ${yPos}`);
// }

// function PaintShape2({shape, xPos = 0, yPos = 0}: PaintOptions){
//     console.log(shape);
//     console.log(`${xPos}, ${yPos}`);
// }

// let mySquare: Square = {
//     kind: "square",
//     sideLength: 10
// }

// PaintShape({shape: mySquare, xPos: 12, yPos: 32})

// function getShape(): Shape{
//     return Math.random() < 0.5 ? {kind: "square", sideLength: Math.random() * 10} :
//         {kind: "circle", radius: 10};
// }

// const shape = getShape()
// PaintShape({shape});
// PaintShape({shape, xPos: 12});
// PaintShape({shape, xPos: 122, yPos: 43});
// PaintShape({shape, yPos: 142});

// console.log('paintshape2:')
// PaintShape2({shape});
// PaintShape2({shape, xPos: 12});
// PaintShape2({shape, xPos: 122, yPos: 43});
// PaintShape2({shape, yPos: 142});