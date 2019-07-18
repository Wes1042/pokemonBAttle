
function setup(){
    createCanvas (600,600)
    background( 255,0,0)

}

pikachu = 300
pichu= 300
function draw(){
   // ellipse(posX, posY, circHeight, circWidth);
    pokemon = health()

if (mouseIsPressed){
    
pichu -= health
}

}

let pokemon  = 300

const possibleDamage =
["127",
"129",
"130",
"132",
"133",
"135",
"136",
"138",
"139",
"141",
"142",
"144",
"145",
"147",
"148",
"150",]

function randomDamage() {
    const len = possibleDamage.length;
    const attack =Math.random() * len;
    const roundNum=Math.floor(attack);
    const final = possibleDamage[roundNum];
    return final
    

}






function health(){

    let damage = randomDamage()
    if (pokemon > damage){
    pokemon -= damage
    }else {
        pokemon = 0
    }
    console.log(pokemon)
    return pokemon
    
    }
    

    function pikachu(){



    }