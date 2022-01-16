type Fish = {swim: () => void; name?: string};
type Bird = {fly: () => void; name?: string};


function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}


let myFish: Fish = {swim: () => {
    console.log("fish swim");
}};
let myBird: Bird = {fly: () => {
    console.log("bird fly");
}};

console.log(isFish(myFish));
console.log(isFish(myBird));

function getSmallPet(): Fish | Bird{
    return Math.random() < 0.5 ? {swim: () => {
        console.log("fish swim");
    }, name: "mikey"} : {fly: () => {
        console.log("bird fly");
    }, name: "georgy"};
}

let myPet = getSmallPet();
if(isFish(myPet)){
    myPet.swim();
}else{
    myPet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
zoo.push({swim: () => {
    let name = 'sharkey';
    console.log(`hello i'm ${name} and i swim`);
}, name: 'sharkey'})

console.log(zoo);

const underWater1: Fish[] = zoo.filter(isFish);

console.log(underWater1);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

console.log(underWater2);

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if(pet.name === "sharkey") return false;
    return isFish(pet);
})

console.log(underWater3);