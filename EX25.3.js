const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];
// and a print name function:
function printName() {
    console.log(`my name is ${this.name}`);
}


console.log("--------------------------------------------");
for (let i = 0; i < superHeroes.length; i++) {
    debugger;
    const element = superHeroes[i];
    printName.call(element);
}



function printHeroes(heroes, printFunc) {
    console.log("--------------------------------------------");
    for (let i = 0; i < superHeroes.length; i++) {
        const element = superHeroes[i];
        printName.apply(element);
    }
}
printHeroes(superHeroes, printName)