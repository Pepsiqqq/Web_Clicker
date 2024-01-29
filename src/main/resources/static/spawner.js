const comTree = new Image(); comTree.src = './img/tree.png';
const rareTree = new Image(); rareTree.src = './img/treerare.png';

const comStone = new Image(); comStone.src = './img/stoneCom.png';
const rareStone = new Image(); rareStone.src = './img/stoneRare.png';

const comIron = new Image(); comIron.src = './img/ironCom.png';
const rareIron = new Image(); rareIron.src = './img/ironRare.png';

var woodUpgrades={
    perClick:1,
    durability:0,
    spawnCount:0,
}
var stoneUpgrades={
    perClick:1,
    durability:0,
    spawnCount:0,
}
var ironUpgrades={
    perClick:1,
    durability:0,
    spawnCount:0,
}
function addToArray(canvas, elementArray, type){
    var resource=
    {
        image: null,
        x: Math.floor(Math.random()*canvas.width),
        y: Math.floor(Math.random()*canvas.height),
        durability:1,
        basicResource: null,
        type: type
    };
    let random = Math.random();
    switch(type){
        case 1 :{
            if(random>0.9){
                resource.image = rareTree;
                resource.basicResource = 5;
            } 
            else{
                resource.image = comTree;
                resource.basicResource = 1;
            } 
            resource.durability = resource.durability + woodUpgrades.durability; 
            checkBorder(canvas,resource);
            elementArray.push(resource);
            break;
        }
        case 2 :{
            if(random>0.9){
                resource.image = rareStone;
                resource.basicResource = 5;
            } 
            else{
                resource.image = comStone;
                resource.basicResource = 1;
            } 
            resource.durability = resource.durability + stoneUpgrades.durability; 
            checkBorder(canvas,resource);
            elementArray.push(resource);
            break;
        }
        case 3 :{
            if(random>0.9){
                resource.image = rareIron;
                resource.basicResource = 5;
            } 
            else{
                resource.image = comIron;
                resource.basicResource = 1;
            } 
            resource.durability = resource.durability + ironUpgrades.durability; 
            checkBorder(canvas,resource);
            elementArray.push(resource);
            break;
        }
        default:{
            return;
        }
    }
    
}
function checkBorder(canvas,resource){
    if(resource.x > canvas.width-200){
        resource.x -= 250;
    }
    if(resource.y > canvas.height-300){
        resource.y -= 350;
    }
}
export function addPerClick(type, elementArray){
    switch(type){
        case 1 :{
            woodUpgrades.perClick++;
            break;
        }
        case 2:{
            stoneUpgrades.perClick++;
            break;
        }
        case 3:{
            ironUpgrades.perClick++;
            break;
        }
    }
}
export function addDurability(type, elementArray){
    switch(type){
        case 1 :{
            woodUpgrades.durability++;
            break;
        }
        case 2:{
            stoneUpgrades.durability++;
            break;
        }
        case 3:{
            ironUpgrades.durability++;
            break;
        }
    }
    for(let i = 0;i<elementArray.length;i++){
        if(elementArray[i].type == type){
            elementArray[i].durability++;
        }  
    }
}
export function addSpawnCount(type, elementArray){
    switch(type){
        case 1 :{
            woodUpgrades.spawnCount++;
            break;
        }
        case 2:{
            stoneUpgrades.spawnCount++;
            break;
        }
        case 3:{
            ironUpgrades.spawnCount++;
            break;
        }
    }
}
export function addTypeToArray(canvas, elementArray, type){
    switch(type){
        case 1 :{
            for(var i = 0; i<woodUpgrades.spawnCount+1;i++){
                addToArray(canvas, elementArray, 1)
            }
            break;
        }
        case 2:{
            for(var i = 0; i<stoneUpgrades.spawnCount+1;i++){
                addToArray(canvas, elementArray, 2)
            }
            break;
        }
        case 3:{
            for(var i = 0; i<ironUpgrades.spawnCount+1;i++){
                addToArray(canvas, elementArray, 3)
            }
            break;
        }
    }
}
export function clickedOnResource(event, elementArray, i, floatingNumber, mods){
    switch (elementArray[i].type){
        case 1:{
            var temp = ((elementArray[i].basicResource * woodUpgrades.perClick) * mods.woodMod1) * mods.woodMod2;
            break;
        }
        case 2:{
            var temp = (elementArray[i].basicResource * stoneUpgrades.perClick)* mods.stoneMod;
            break;
        }
        case 3:{
            var temp = elementArray[i].basicResource * ironUpgrades.perClick;
            break;
        }
    }
    var tempnumber={
        x: event.pageX,
        y: event.pageY,
        tempy: 0,
        alpha:1,
        count:199,
        click:"+" + temp,
        type:elementArray[i].type
    }
    floatingNumber.push(tempnumber);
    if(elementArray[i].durability>1){
        elementArray[i].durability -=1;
    }
    else{
        elementArray.splice(i,1);
    }
    return temp;
}