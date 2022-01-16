"use strict";
// // interface Circle{
// //     kind: "circle",
// //     radius: number;
// // }
// // interface Square{
// //     kind: "square",
// //     sideLength: number;
// // }
// // interface Triangle{
// //     kind: "triangle",
// //     sideLength: number;
// // }
// type Shape = Circle | Square ;
// function handleShape(shape: Shape){
//     if(shape.kind === "square") return;
// }
// function getArea(shape: Shape){
//     switch(shape.kind){
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.sideLength ** 2;
//         default:
//             const _exhaustiveCheck: never = shape;
//             return _exhaustiveCheck;
//     }
//     // shape.radius! is null assertion to tell typescript that 
//     // we know for sure that radius property exist in Shape
// }
// console.log(getArea({kind: "circle", radius: 10}));
// console.log(getArea({kind: "square", sideLength: 10}));
