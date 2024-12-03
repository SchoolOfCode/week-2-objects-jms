console.log('Hello World!');



let person = {
    name: 'Sami',
    age: 28,
    eyeColour: "brown",
    favFood: "lasagna",
    height: "185cm",
    favSong: "baby shark",
}

let person2 = {
    name: 'Monika',
    age: 24,
    eyeColour: "brown",
    favFood: "lasagna",
    height: "185cm",
    favSong: "baby shark",
}

let person3 = {
    name: 'Joe',
    age: 22,
    eyeColour: "brown",
    favFood: "lasagna",
    height: "185cm",
    favSong: "baby shark",
}

console.log(person.age, person2.age, person3.age);
person.age += 1; 
console.log(person.age);

let ourTeam = {
    member1 : {
        nickname: 'Hero',
        superpower: 'Invincibility',
        methodOfTransport: 'Bus',
        favouriteAnimal: 'Wombat'
    },
    member2 : {
        nickname: 'Almighty',
        superpower: 'Strength',
        methodOfTransport: 'Car',
        favouriteAnimal: 'Cat'
    },
    member3 : {
        nickname: 'Jojo',
        superpower: 'Flight',
        methodOfTransport: 'Walking',
        favouriteAnimal: 'Seagull'
    }
}

console.log(ourTeam.member1.favouriteAnimal, ourTeam.member2.favouriteAnimal, ourTeam.member3.favouriteAnimal)