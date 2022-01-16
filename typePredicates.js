"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
let myFish = { swim: () => {
        console.log("fish swim");
    } };
let myBird = { fly: () => {
        console.log("bird fly");
    } };
console.log(isFish(myFish));
console.log(isFish(myBird));
function getSmallPet() {
    return Math.random() < 0.5 ? { swim: () => {
            console.log("fish swim");
        }, name: "mikey" } : { fly: () => {
            console.log("bird fly");
        }, name: "georgy" };
}
let myPet = getSmallPet();
if (isFish(myPet)) {
    myPet.swim();
}
else {
    myPet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
zoo.push({ swim: () => {
        let name = 'sharkey';
        console.log(`hello i'm ${name} and i swim`);
    }, name: 'sharkey' });
console.log(zoo);
const underWater1 = zoo.filter(isFish);
console.log(underWater1);
const underWater2 = zoo.filter(isFish);
console.log(underWater2);
const underWater3 = zoo.filter((pet) => {
    if (pet.name === "sharkey")
        return false;
    return isFish(pet);
});
console.log(underWater3);
