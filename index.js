console.log(`Froyooo`)

// create a message for user upon opening the website
const enterFroyo = prompt(`Enter a list of comma-separated froyo flavors!`);

const froyoList = enterFroyo.split(",")
// froyoList = [vanilla,vanilla,vanilla,strawberry,coffee,coffee]

function froyo (froyoList) {
    let flavors = {}
for(let i = 0; i < froyoList.length; i++) {
    if(flavors[froyoList[i]] === undefined){
        flavors[froyoList[i]] = 1
}   else{
    flavors[froyoList[i]]++
}
}
return flavors
}
console.log(froyo(froyoList))