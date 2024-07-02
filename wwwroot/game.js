const woodAxeIcon= new Image(); woodAxeIcon.src = './img/sideBarIcons/woodenAxe.png';
const treeBarkIcon =  new Image(); treeBarkIcon.src = './img/sideBarIcons/treeBark.png';
const spawnRateIcon =  new Image(); spawnRateIcon.src = './img/sideBarIcons/spawnRate.png';
const treeCountIcon =  new Image(); treeCountIcon.src = './img/sideBarIcons/treeCount.png';
const chainsawIcon =  new Image(); chainsawIcon.src = './img/sideBarIcons/chainsaw.png';
const woodenPickaxeIcon =  new Image(); woodenPickaxeIcon.src = './img/sideBarIcons/woodenPickaxe.webp';
const stoneAxeIcon =  new Image(); stoneAxeIcon.src = './img/sideBarIcons/stoneAxe.webp';
const ironAxeIcon =  new Image(); ironAxeIcon.src = './img/sideBarIcons/ironAxe.webp';
const stoneDurabilityIcon =  new Image(); stoneDurabilityIcon.src = './img/sideBarIcons/stoneDurability.png';
const stoneCountIcon =  new Image(); stoneCountIcon.src = './img/sideBarIcons/stoneCount.png';
const stoneTimeIcon =  new Image(); stoneTimeIcon.src = './img/sideBarIcons/stoneTime.png';
const ironDurabilityIcon =  new Image(); ironDurabilityIcon.src = './img/sideBarIcons/ironDurability.png';
const ironCountIcon =  new Image(); ironCountIcon.src = './img/sideBarIcons/ironCount.png';
const ironTimeIcon =  new Image(); ironTimeIcon.src = './img/sideBarIcons/ironTime.png';
const minerIcon =  new Image(); minerIcon.src = './img/sideBarIcons/miner.png';
const stonePickaxeIcon =  new Image(); stonePickaxeIcon.src = './img/sideBarIcons/stonePickaxe.png';
const ironPickaxeIcon =  new Image(); ironPickaxeIcon.src = './img/sideBarIcons/ironPickaxe.png';
const escapeIcon =  new Image(); escapeIcon.src = './img/sideBarIcons/escape.png';
const woodLog = new Image(); woodLog.src = './img/woodLog.png';
const stone = new Image(); stone.src = './img/stone.png';
const ironBar = new Image(); ironBar.src = './img/ironBar.png';
const comTree = new Image(); comTree.src = './img/tree2Com.png';
const rareTree = new Image(); rareTree.src = './img/tree2Rare.png';
const comStone = new Image(); comStone.src = './img/stone2Com.png';
const rareStone = new Image(); rareStone.src = './img/stone2Rare.png';
const comIron = new Image(); comIron.src = './img/iron2Com.png';
const rareIron = new Image(); rareIron.src = './img/iron2Rare.png';

var backgroundcolor = "#3a3b3a";
document.body.style.backgroundColor = backgroundcolor;
document.body.style.backgroundImage = 'url(./img/grass4.jpg)';
//document.body.style.backgroundRepeat =  'no-repeat';
//document.body.style.backgroundAttachment = 'fixed';
//document.body.style.backgroundSize = '100% 100%';

const canvas = document.getElementById('gameboard');
const cnv = gameboard.getContext('2d');

var woodUpgrades={
    perClick:0,
    durability:0,
    spawnRate:0,
    spawnCount:0,
    autoclicker:0,
    next:0
}
var stoneUpgrades={
    perClick:0,
    durability:0,
    spawnRate:0,
    spawnCount:0,
    autoclicker:0,
    next:0
}
var ironUpgrades={
    perClick:0,
    durability:0,
    spawnRate:0,
    spawnCount:0,
    autoclicker:0,
    next:0
}
function addToArray(elementArray, type){
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
            resource = checkBorder(canvas,resource);
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
            resource = checkBorder(canvas,resource);
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
            resource = checkBorder(canvas,resource);
            elementArray.push(resource);
            break;
        }
        default:{
            return;
        }
    }
    
}
function checkBorder(canvas,resource){
    if(resource.x < canvas.width * 0.31){
        resource.x += canvas.width * 0.31;
    }
    if(resource.x > canvas.width*0.90){
        resource.x -= canvas.height*0.15;
    }
    if(resource.y > canvas.height*0.85){
        resource.y -= canvas.height*0.15;
    }
    return resource;
}
function addPerClick(type){
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
function addDurability(type, elementArray){
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
function addSpawnRate(type){
    switch(type){
        case 1 :{
            woodUpgrades.spawnRate++;
            break;
        }
        case 2:{
            stoneUpgrades.spawnRate++;
            break;
        }
        case 3:{
            ironUpgrades.spawnRate++;
            break;
        }
    }
}
function addSpawnCount(type){
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
function addAutoClicker(type){
    switch(type){
        case 1 :{
            woodUpgrades.autoclicker++;
            break;
        }
        case 2:{
            stoneUpgrades.autoclicker++;
            break;
        }
        case 3:{
            ironUpgrades.autoclicker++;
            break;
        }
    }
}
function addTypeToArray( elementArray, type){
    switch(type){
        case 1 :{
            for(var i = 0; i<woodUpgrades.spawnCount+1;i++){
                addToArray(elementArray, 1)
            }
            break;
        }
        case 2:{
            for(var i = 0; i<stoneUpgrades.spawnCount+1;i++){
                addToArray(elementArray, 2)
            }
            break;
        }
        case 3:{
            for(var i = 0; i<ironUpgrades.spawnCount+1;i++){
                addToArray(elementArray, 3)
            }
            break;
        }
    }
}
function clickedOnResource(event, elementArray, i, floatingNumber){
    switch (elementArray[i].type){
        case 1:{
            var temp = elementArray[i].basicResource * (woodUpgrades.perClick+1);
            break;
        }
        case 2:{
            var temp = elementArray[i].basicResource * (stoneUpgrades.perClick+1);
            break;
        }
        case 3:{
            var temp = elementArray[i].basicResource * (ironUpgrades.perClick+1);
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

var woodimagesArray= [woodAxeIcon,treeBarkIcon,spawnRateIcon,treeCountIcon,chainsawIcon,woodenPickaxeIcon];
var stoneimagesArray= [stoneAxeIcon, stoneDurabilityIcon, stoneTimeIcon, stoneCountIcon, minerIcon, stonePickaxeIcon];
var ironimagesArray= [ironAxeIcon,ironDurabilityIcon,ironTimeIcon,ironCountIcon,minerIcon,escapeIcon];
//
var side;
var cellY = [];
var deployedStage = 0;
//
var woodCellCount = 5;
var woodCellName = ["Wood Axe","Durability","Spawn Rate","Spawn Count", "Chainsaw","Woden Pickaxe"];
var woodCoef;
var woodCellPricewood;
var woodCellPricestone;
var woodCellPriceiron; 
var woodCellMax = [100,3,3,3,5,1];

var stoneCellCount = 5;
var stoneCellName = ["Stone Axe","Durability","Spawn Rate","Spawn Count", "Autominer","Stone Pickaxe"];
var stoneCoef;
var stoneCellPricewood;
var stoneCellPricestone;
var stoneCellPriceiron; 
var stoneCellMax = [100,3,3,3,5,1];

var ironCellCount = 5;
var ironCellName = ["Iron Axe","Durability","Spawn Rate","Spawn Count", "Autominer","Escape"];
var ironCoef;
var ironCellPricewood;
var ironCellPricestone;
var ironCellPriceiron; 
var ironCellMax = [100,3,3,3,5,1];

var drawprice;

var back = "#416641";
var text = "#ffcd42";
var nonactive = "#2a472a"; 
var buttoncolor = "#2a472a"; 

function transformUpgrades(upgrades){
    var result = [upgrades.perClick,upgrades.durability,upgrades.spawnRate,upgrades.spawnCount,upgrades.autoclicker,upgrades.next];
    return result;
}
function transformUpgradesback(upgrades){
    var defaults={
        perClick:upgrades[0],
        durability:upgrades[1],
        spawnRate:upgrades[2],
        spawnCount:upgrades[3],
        autoclicker:upgrades[4],
        next:upgrades[5]
    }
    return defaults
}
function fillCellsWood(){
    var temp = transformUpgrades(woodUpgrades);
    cellY.splice(0);
    deployedStage = 0;
    for(var i = 0; i<= woodCellCount;i++){
        var woodcellData = {
            y: 0,
            number: i,
            hovered: false,
            name: woodCellName[i],
            pricewood:woodCellPricewood[i],
            pricestone:woodCellPricestone[i],
            priceiron:woodCellPriceiron[i],
            max:woodCellMax[i],
            current:temp[i],
        }
        cellY.push(woodcellData);
    }
}
function fillCellsStone(){
    var temp = transformUpgrades(stoneUpgrades);
    cellY.splice(0);
    deployedStage = 1;
    for(var i = 0; i<= stoneCellCount;i++){
        var stonecellData = {
            y: 0,
            number: i,
            hovered: false,
            name: stoneCellName[i],
            pricewood:stoneCellPricewood[i],
            pricestone:stoneCellPricestone[i],
            priceiron:stoneCellPriceiron[i],
            max:stoneCellMax[i],
            current:temp[i],
        }
        cellY.push(stonecellData);
    }
}
function fillCellsIron(){
    var temp = transformUpgrades(ironUpgrades);
    cellY.splice(0);
    deployedStage = 2;
    for(var i = 0; i<= ironCellCount;i++){
        var ironcellData = {
            y: 0,
            number: i,
            hovered: false,
            name: ironCellName[i],
            pricewood:ironCellPricewood[i],
            pricestone:ironCellPricestone[i],
            priceiron:ironCellPriceiron[i],
            max:ironCellMax[i],
            current:temp[i],
        }
        cellY.push(ironcellData);
    }
}
function fillCells(stage){
    switch(stage){
        case 0:{
            fillCellsWood();
            break;
        }
        case 1:{
            fillCellsStone();
            break;
        }
        case 2:{
            fillCellsIron();
            break;
        }
    }
}
function buyUpgrade(index, wood, stone, iron, addUpgrade){
    if(cellY[index].pricewood <= wood && cellY[index].pricestone <= stone && cellY[index].priceiron <= iron && cellY[index].current< cellY[index].max){
        addUpgrade(deployedStage+1,cellY[index].pricewood, cellY[index].pricestone, cellY[index].priceiron);
        switch(deployedStage+1){
            case 1:{
                cellY[index].pricewood = Math.floor(cellY[index].pricewood * woodCoef[index]);
                cellY[index].pricestone = Math.floor(cellY[index].pricestone * woodCoef[index]);
                cellY[index].priceiron = Math.floor(cellY[index].priceiron * woodCoef[index]);
                woodCellPricewood[index] = cellY[index].pricewood;
                woodCellPricestone[index] = cellY[index].pricestone;
                woodCellPriceiron[index] = cellY[index].priceiron;
                break;
            }
            case 2:{
                cellY[index].pricewood = Math.floor(cellY[index].pricewood * stoneCoef[index]);
                cellY[index].pricestone = Math.floor(cellY[index].pricestone * stoneCoef[index]);
                cellY[index].priceiron = Math.floor(cellY[index].priceiron * stoneCoef[index]);
                stoneCellPricewood[index] = cellY[index].pricewood;
                stoneCellPricestone[index] = cellY[index].pricestone;
                stoneCellPriceiron[index] = cellY[index].priceiron;
                break;
            }
            case 3:{
                cellY[index].pricewood = Math.floor(cellY[index].pricewood * ironCoef[index]);
                cellY[index].pricestone = Math.floor(cellY[index].pricestone * ironCoef[index]);
                cellY[index].priceiron = Math.floor(cellY[index].priceiron * ironCoef[index]);
                ironCellPricewood[index] = cellY[index].pricewood;
                ironCellPricestone[index] = cellY[index].pricestone;
                ironCellPriceiron[index] = cellY[index].priceiron;
                break;
            }
        }
        cellY[index].current++;
        return true;
    }
    return false;
}
function addPerClicktoElement(type,pricewood,pricestone,priceiron){
    addPerClick(type, elementArray);
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function addDurabilityToElement(type,pricewood,pricestone,priceiron){
    addDurability(type, elementArray);
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function addSpawnCountToElement(type,pricewood,pricestone,priceiron){
    addSpawnCount(type, elementArray);
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function addAutoClickerToElement(type,pricewood,pricestone,priceiron){
    switch(type){
        case 1:{
            woodUpgrades.autoclicker++;
            break;
        }
        case 2:{
            stoneUpgrades.autoclicker++;
            break;
        }
        case 3:{
            ironUpgrades.autoclicker++;
            break;
        }
    }
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function addSpawnRateToElement(type,pricewood,pricestone,priceiron){
    switch(type){
        case 1 :{
            woodUpgrades.spawnRate++;
            break;
        }
        case 2:{
            stoneUpgrades.spawnRate++;
            break;
        }
        case 3:{
            ironUpgrades.spawnRate++;
            break;
        }
    }
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function addStage(type,pricewood,pricestone,priceiron){
    switch(type){
        case 1 :{
            woodUpgrades.next++;

            break;
        }
        case 2:{
            stoneUpgrades.next++;
            break;
        }
        case 3:{
            putrecord(textboxtext[0]);
            //ironUpgrades.next++;
            gamestate = 3;
            break;
        }
    }
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function drawSideBar(){
    panel(cnv,0,0, canvas.width * 0.31, canvas.height,"#000000");
}
function drawEras(hovered,stage){
    panel(cnv,0,0, canvas.width * 0.31, canvas.height*0.12,"#ffcd42");
    var normalcolor = nonactive;
    var selectedcolor = "#5d9903";
    var notunlocked = "#868786";
    switch(hovered){
        case 0:{
            panel(cnv,canvas.width * 0.01, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
            switch(stage){
                case 0:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 1:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 2:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    break;
                }
            }
            break;
        }
        case 1:{
            panel(cnv,canvas.width * 0.01, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,selectedcolor);
            switch(stage){
                case 0:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 1:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 2:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    break;
                }
            }
            break;
        }
        case 2:{
            panel(cnv,canvas.width * 0.01, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
            switch(stage){
                case 0:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 1:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,selectedcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 2:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,selectedcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    break;
                }
            }
            break;
        }
        case 3:{
            panel(cnv,canvas.width * 0.01, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
            switch(stage){
                case 0:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 1:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,notunlocked);
                    break;
                }
                case 2:{
                    panel(cnv,canvas.width * 0.11, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,normalcolor);
                    panel(cnv,canvas.width * 0.21, canvas.height * 0.01, canvas.width *0.09 , canvas.height * 0.10 ,selectedcolor);
                    break;
                }
            }
            break;
        }
    }
    switch(deployedStage){
        case 0:{
            label(cnv,canvas.width*0.09, canvas.height * 0.10,"30","#ffcd42","center","✔");
            break;
        }
        case 1:{
            label(cnv,canvas.width*0.19, canvas.height * 0.10,"30","#ffcd42","center","✔");
            break;
        }
        case 2:{
            label(cnv,canvas.width*0.29, canvas.height * 0.10,"30","#ffcd42","center","✔");
            break;
        }
    }
    cnv.drawImage(comTree,canvas.width*0.028,canvas.height * 0.01,canvas.height*0.1,canvas.height*0.1);
    cnv.drawImage(comStone,canvas.width*0.128,canvas.height * 0.01,canvas.height*0.1,canvas.height*0.1);
    cnv.drawImage(comIron,canvas.width*0.228,canvas.height * 0.01,canvas.height*0.1,canvas.height*0.1);
}
function drawUpgradeCells(woodlog,stone,ironBar){
    var hoveredcolor;
    for(var i = 0;i<cellY.length; i++){
        cellY[i].y =  canvas.height*0.125 + ((canvas.height*0.125)*i);   
        panel(cnv,canvas.width*0.005 ,cellY[i].y, canvas.width*0.30, canvas.height*0.12, nonactive); 
        if(cellY[i].hovered){
            hoveredcolor = "#5d9903";
        }   
        else{
            hoveredcolor =  text;
        }
        panel(cnv,canvas.width*0.10 ,cellY[i].y + canvas.height*0.06, canvas.width*0.10, canvas.height*0.04, hoveredcolor); 
        label(cnv,canvas.width * 0.15, cellY[i].y + canvas.height * 0.095, "30","#000000","center","BUY");
        label(cnv,canvas.width * 0.15, cellY[i].y + canvas.height * 0.035, "30",text,"center",cellY[i].name);

        var resources = 0;

        if(cellY[i].current == cellY[i].max){
            label(cnv,canvas.width * 0.30, cellY[i].y + canvas.height * 0.03, "20","#910606" ,"right","MAX");
        }
        else{
            label(cnv,canvas.width * 0.30, cellY[i].y + canvas.height * 0.03, "20",text ,"right",cellY[i].current + " / " + cellY[i].max);
        }
        if(cellY[i].pricewood != 0){
            if(cellY[i].current != cellY[i].max){
                if(cellY[i].pricewood < woodCount){
                    label(cnv,canvas.width * 0.28, cellY[i].y + canvas.height * 0.11 - resources, "15","#12b300","right",cellY[i].pricewood);
                }
                else{
                    label(cnv,canvas.width * 0.28, cellY[i].y + canvas.height * 0.11 - resources, "15",text,"right",cellY[i].pricewood);
                }
                cnv.drawImage(woodlog,canvas.width * 0.28,canvas.height * 0.085 + cellY[i].y - resources,canvas.height * 0.04,canvas.height * 0.04);
            }
            resources = resources + canvas.height * 0.03;
        }
        if(cellY[i].pricestone != 0){
            if(cellY[i].current != cellY[i].max){
                if(cellY[i].pricestone < stoneCount){
                    label(cnv,canvas.width * 0.28, cellY[i].y + canvas.height * 0.11 - resources, "15","#12b300","right",cellY[i].pricestone);
                }
                else{
                    label(cnv,canvas.width * 0.28, cellY[i].y + canvas.height * 0.11 - resources, "15",text,"right",cellY[i].pricestone);
                }
                cnv.drawImage(stone,canvas.width * 0.28,canvas.height * 0.085 + cellY[i].y - resources,canvas.height * 0.04,canvas.height * 0.04);
            }
            resources = resources + canvas.height * 0.03;
        }
        if(cellY[i].priceiron != 0){
            if(cellY[i].current != cellY[i].max){
                if(cellY[i].priceiron < ironCount){
                    label(cnv,canvas.width * 0.28, cellY[i].y + canvas.height * 0.11 - resources, "15","#12b300","right",cellY[i].priceiron);
                }
                else{
                    label(cnv,canvas.width * 0.28, cellY[i].y + canvas.height * 0.11 - resources, "15",text,"right",cellY[i].priceiron);
                }
                cnv.drawImage(ironBar,canvas.width * 0.28,canvas.height * 0.085 + cellY[i].y - resources,canvas.height * 0.04,canvas.height * 0.04);
            }
            resources = resources + canvas.height * 0.03;
        }
        
        
        switch(deployedStage){
            case 0:{
                cnv.drawImage(woodimagesArray[i],canvas.width * 0.02,canvas.height * 0.01 + cellY[i].y,canvas.height * 0.10,canvas.height * 0.10);
                break;
            }
            case 1:{
                cnv.drawImage(stoneimagesArray[i],canvas.width * 0.02,canvas.height * 0.01 + cellY[i].y,canvas.height * 0.10,canvas.height * 0.10);
                break;
            }
            case 2:{
                cnv.drawImage(ironimagesArray[i],canvas.width * 0.02,canvas.height * 0.01 + cellY[i].y,canvas.height * 0.10,canvas.height * 0.10);
                break;
            }
        }
    }
}
var backbutton = false;
function drawbackbutton(){
    if(backbutton){
        panel(cnv,canvas.width*0.005 ,canvas.height * 0.875, canvas.width*0.30, canvas.height*0.12, "#5d9903"); 
    }
    else{
        panel(cnv,canvas.width*0.005 ,canvas.height * 0.875, canvas.width*0.30, canvas.height*0.12, back); 
    }
    label(cnv,canvas.width * 0.15, canvas.height * 0.94, "30",text,"center","Back to Menu");
}
function hoverOverUpgrade(index){
    cellY[index].hovered = true;
}
function unhoverOverUpgrade(index){
    cellY[index].hovered = false;
}
function getDeployedStage(){
    return deployedStage;
}
function getcellY(index){
    return cellY[index].y;
}
function label(cnv,x,y,size,color,side,text){
    cnv.save();
    cnv.font = size+"px arial";
    var scalex = (canvas.width / 1600);
    var scaley = (canvas.height / 768);
    var ypos = (y / scaley);
    var xpos = (x/scalex);
    cnv.fillStyle = color;
    cnv.textAlign = side;
    cnv.scale(scalex, scaley)
    cnv.fillText(text,xpos,ypos);
    cnv.restore();
}
function panel(cnv,x,y,sizex,sizey,color){
    cnv.fillStyle = color;
    cnv.fillRect(x,y,sizex,sizey);
}
function roundpanel(cnv,x,y,sizex,sizey,radius,color){
    cnv.beginPath();
    cnv.fillStyle = color;
    cnv.roundRect(x,y,sizex,sizey,radius);
    cnv.fill();
}
function button(cnv, x, y, sizex, sizey, colorb){
    cnv.fillStyle = "#000000";
    cnv.fillRect(x-3,y-3,sizex+6,sizey+6);
    cnv.fillStyle = colorb;
    cnv.fillRect(x,y,sizex,sizey);
}
function textBox(cnv,x,y,sizex,sizey, color){
    cnv.fillStyle = color;
    cnv.fillRect(x-3,y-3,sizex+6,sizey+6);
    cnv.fillStyle = "#ffffff";
    cnv.fillRect(x,y,sizex,sizey);
}
function cleangame(){
    time = 0.1;
    autosaveTimer =0;
    spawntimer = 0;
    expected = Date.now() + interval;
    woodCount = 0;
    stoneCount = 0;
    ironCount = 0;
    deployedStage = 0;
    drawBar = false;
    woodUpgrades.perClick =0;
    woodUpgrades.durability =0;
    woodUpgrades.spawnRate =0;
    woodUpgrades.spawnCount =0;
    woodUpgrades.autoclicker =0;
    woodUpgrades.next =0;
    stoneUpgrades.perClick =0;
    stoneUpgrades.durability =0;
    stoneUpgrades.spawnRate=0;
    stoneUpgrades.spawnCount=0;
    stoneUpgrades.autoclicker=0;
    stoneUpgrades.next=0;
    ironUpgrades.perClick=0;
    ironUpgrades.durability=0;
    ironUpgrades.spawnRate=0;
    ironUpgrades.spawnCount=0;
    ironUpgrades.autoclicker=0;
    ironUpgrades.next=0;
    elementArray = [];
    floatingNumber = [];
}
var time = 0.1;
var autosaveTimer = 0;
var spawntimer = 0;
var interval = 100; // ms
var expected = Date.now() + interval;
function step() {
    var dt = Date.now() - expected; 
    if (dt > interval) {
    }
    else{
        if(autosaveTimer == 50){
            if(gamestate == 2){
                updatesave();
                putsave(textboxtext[0],savedata);
            }
            autosaveTimer = 0;
        }
        else{
            autosaveTimer++;
        }
        if(((Math.round((spawntimer + 1 + Number.EPSILON) * 10) / 10) * 10) % 8-(1 * woodUpgrades.spawnRate) == 0 && elementArray.length<300 && gamestate == 2 ){
            addTypeToArray(elementArray, 1);
        }
        if(((Math.round((spawntimer + 2 + Number.EPSILON) * 10) / 10) * 10) % 8-(1 * stoneUpgrades.spawnRate) == 0 && elementArray.length<300 && gamestate == 2 && woodUpgrades.next){
            addTypeToArray(elementArray, 2);
        }
        if(((Math.round((spawntimer + 3 + Number.EPSILON) * 10) / 10) * 10) % 8-(1 * ironUpgrades.spawnRate) == 0 && elementArray.length<300 && gamestate == 2 && stoneUpgrades.next){
            addTypeToArray(elementArray, 3);
        }
        var rand = 0;
        //wood
        if(((Math.round((spawntimer + 4 + Number.EPSILON) * 10) / 10) * 10) % 7-(1 * woodUpgrades.autoclicker) == 0  && woodUpgrades.autoclicker>0){
            var tempTrees = 0;
            for(var i = 0; i<elementArray.length;i++)
            {
                if(elementArray[i].type == 1){
                    tempTrees++;
                }
            }
            for(var temp = 0; temp < woodUpgrades.autoclicker;temp++){
                if(tempTrees!=0){
                    while(true){
                        rand = Math.floor(Math.random() * elementArray.length);
                        if(elementArray[rand].type == 1){
                            var event = {
                                pageX: elementArray[rand].x+100,
                                pageY: elementArray[rand].y+100,
                            }
                            woodCount += clickedOnResource(event, elementArray, rand ,floatingNumber);
                            break;
                        }
                    }
                    tempTrees--;
                }
            }
        }
        if(((Math.round((spawntimer + 5 + Number.EPSILON) * 10) / 10) * 10) % 7-(1 * stoneUpgrades.autoclicker) == 0  && stoneUpgrades.autoclicker>0){
            var tempStone = 0;
            for(var i = 0; i<elementArray.length;i++)
            {
                if(elementArray[i].type == 2){
                    tempStone++;
                }
            }
            for(var temp = 0; temp < stoneUpgrades.autoclicker;temp++){
                if(tempStone!=0){
                    while(true){
                        rand = Math.floor(Math.random() * elementArray.length);
                        if(elementArray[rand].type == 2){
                            var event = {
                                pageX: elementArray[rand].x+100,
                                pageY: elementArray[rand].y+100,
                            }
                            stoneCount += clickedOnResource(event, elementArray, rand ,floatingNumber);
                            break;
                        }
                    }
                tempStone--;
                }
            }
        }
        if(((Math.round((spawntimer + 6 + Number.EPSILON) * 10) / 10) * 10) % 7-(1 * ironUpgrades.autoclicker) == 0  && ironUpgrades.autoclicker>0){
            var tempIron = 0;
            for(var i = 0; i<elementArray.length;i++)
            {
                if(elementArray[i].type == 3){
                    tempIron++;
                }
            }
            for(var temp = 0; temp < ironUpgrades.autoclicker;temp++){
            if(tempIron!=0){
                while(true){
                    rand = Math.floor(Math.random() * elementArray.length);
                    if(elementArray[rand].type == 3){
                        var event = {
                            pageX: elementArray[rand].x+100,
                            pageY: elementArray[rand].y+100,
                        }
                        ironCount += clickedOnResource(event, elementArray, rand ,floatingNumber);
                        break;
                    }
                }
                tempIron--;
            }
        }
        }
        spawntimer += 0.1;
        spawntimer = Math.round((spawntimer + Number.EPSILON) * 10) / 10;
        time +=0.1;
    }
    expected += interval;
    if(gamestate == 3){

    }
    else{
        setTimeout(step, Math.max(0, interval - dt)); 
    }
}

var elementArray = [];
var floatingNumber = [];
var gameframe = 0;
var woodCount=0;
var stoneCount=0;
var ironCount=0;
var drawBar = false;
var hoveredEras=0;
var gamestate = 0;
var loginswitch = true;
var endButtons = [false,false];
var textbox =[false,false];
var textboxtext = ["",""];
var textboxcensor = "";
var buttonswitch = [false,false];
var badinput = false;
var newgamemove = false;
var continuemove = false;
var savedata;
var bestrecord = 0;
var savebuttons =[false,false];
function tostage0(){
    textboxtext[0] = "";
    textboxtext[1] = "";
    textboxcensor = "";
    loginswitch = true;
    gamestate = 0;
}
async function tostage1(){
    records = await getrecords();
    cleangame();
    await getcost();
    savedata = await getsave(textboxtext[0]);
    getbestrecord(textboxtext[0]);
    gamestate = 1;
}
function tostage2(){
        fillCells(0);
        expected = Date.now() + interval;
        setTimeout(step, interval);
        gamestate = 2;
}
function tostage3(){
    gamestate = 3;
}
async function tostage4(){
    records = await getrecords();
    sortedrecords = sortrecord();
    gamestate = 4;
}
// API BELOW
var accounturi = 'api/Account';
var saveuri = 'api/Saves';
var upgradesuri = 'api/Upgrades';
var recorduri = 'api/Record';
async function putrecord(name){
    const acc = {
        account_name: name,
        time: time
      }
    try {
        const response = await fetch(recorduri, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(acc)
        });
    
        const result = await response.json();
        if(result.status == 404){
            return false;
        }
        return true;
      } catch (error) {
        console.error("Error:", error);
        return false;
    }
} 
async function getrecords(){
    var result = await fetch(recorduri);
    if(result.status == 404){
        return false;
    }
    var resultjson = await result.json();
    return resultjson;
}
async function getsave(name){
    var result = await fetch(saveuri + '/' + name);
    if(result.status == 404){
        return false;
    }
    var resultjson = await result.json();
    return resultjson;
}
async function checkacc(name,pass) { // LOGIN
    if(pass == ""){
        return false;
    }
    var result = await fetch(accounturi + '/' + name + '/' + pass);
    if (result.ok) {
        return true;   
    }
    return false;
}
async function getcost(){
    var result = await fetch(upgradesuri);
    if(result.status == 404){
        return false;
    }
    var resultjson = await result.json();
    woodCellPricestone = [0,0,0,0,0,0];
    woodCellPriceiron = [0,0,0,0,0,0];
    stoneCellPriceiron = [0,0,0,0,0,0];

    woodCoef = resultjson[0].multiplier;
    woodCellPricewood = structuredClone(resultjson[0].cost);
    for(var i = 0; i< resultjson[0].cost.length;i++){
        resultjson[0].cost[i] = resultjson[0].cost[i]*3;
    }
    stoneCoef = resultjson[1].multiplier;
    stoneCellPricewood = structuredClone(resultjson[0].cost);
    stoneCellPricestone = structuredClone(resultjson[1].cost);
    for(var i = 0; i< resultjson[0].cost.length;i++){
        resultjson[0].cost[i] = resultjson[0].cost[i]*3;
        resultjson[1].cost[i] = resultjson[1].cost[i]*3;
    }
    ironCoef = resultjson[2].multiplier;
    ironCellPricewood = structuredClone(resultjson[0].cost);
    ironCellPricestone = structuredClone(resultjson[1].cost);
    ironCellPriceiron = resultjson[2].cost;

}
async function registacc(name,pass){ // REGISTRATION
    const acc = {
        name: name,
        password: pass,
    }
    try {
        const response = await fetch(accounturi, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(acc)
        });
    
        const result = await response.json();
        if(result.status == 404){
            return false;
        }
        return true;
      } catch (error) {
        console.error("Error:", error);
        return false;
      }
}
async function deletesave(name){
    const response = await fetch(saveuri + "/" + name, {
        method: 'DELETE'
      })
}
async function postsave(name){
    await deletesave(name);
    const acc = {
            account_name: name,
            time: 0.01,
            wood_count: 0,
            stone_count: 0,
            iron_count: 0,
            wood_upgrades: [0,0,0,0,0,0],
            stone_upgrades: [0,0,0,0,0,0],
            iron_upgrades: [0,0,0,0,0,0]
          }
    savedata = acc;
    try {
        const response = await fetch(saveuri, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(acc)
        });
    
        const result = await response.json();
        if(result.status == 404){
            return false;
        }
        return true;
      } catch (error) {
        console.error("Error:", error);
        return false;
    }
}
function updatesave(){
    savedata.time = Math.floor(time);
    savedata.wood_count = woodCount;
    savedata.stone_count = stoneCount;
    savedata.iron_count = ironCount;
    var wood = transformUpgrades(woodUpgrades);
    var stone = transformUpgrades(stoneUpgrades);
    var iron = transformUpgrades(ironUpgrades);
    for(var i = 0; i< 6;i++){
        savedata.wood_upgrades[i] = wood[i];
        savedata.stone_upgrades[i] = stone[i];
        savedata.iron_upgrades[i] = iron[i];
    }
}
function setsavedata(){
    time = savedata.time;
    woodCount = savedata.wood_count;
    stoneCount = savedata.stone_count;
    ironCount = savedata.iron_count;
    var wood = transformUpgrades(woodUpgrades);
    var stone = transformUpgrades(stoneUpgrades);
    var iron = transformUpgrades(ironUpgrades);
    for(var i = 0; i < 7;i++){
        wood[i] = savedata.wood_upgrades[i];
        stone[i] = savedata.stone_upgrades[i];
        iron[i] = savedata.iron_upgrades[i];
        woodUpgrades = transformUpgradesback(wood);
        stoneUpgrades = transformUpgradesback(stone);
        ironUpgrades =transformUpgradesback(iron);
        for(var j = 0; j < savedata.wood_upgrades[i];j++){
            woodCellPricewood[i] = Math.floor(woodCellPricewood[i] * woodCoef[i]);
            woodCellPricestone[i] = Math.floor(woodCellPricestone[i] * woodCoef[i]);
            woodCellPriceiron[i] = Math.floor(woodCellPriceiron[i] * woodCoef[i]);
        }
        for(var j = 0; j < savedata.stone_upgrades[i];j++){
            stoneCellPricewood[i] = Math.floor(stoneCellPricewood[i] * stoneCoef[i]);
            stoneCellPricestone[i] = Math.floor(stoneCellPricestone[i] * stoneCoef[i]);
            stoneCellPriceiron[i] =Math.floor( stoneCellPriceiron[i] * stoneCoef[i]);
        }
        for(var j = 0; j <savedata.iron_upgrades[i];j++){
            ironCellPricewood[i] = Math.floor(ironCellPricewood[i] * ironCoef[i]);
            ironCellPricestone[i] = Math.floor(ironCellPricestone[i] * ironCoef[i]);
            ironCellPriceiron[i] = Math.floor(ironCellPriceiron[i] * ironCoef[i]);
        }
    }

    
}
async function putsave(name,save){
    const acc = {
        account_name: name,
        time: save.time,
        wood_count: save.wood_count,
        stone_count: save.stone_count,
        iron_count: save.iron_count,
        wood_upgrades: save.wood_upgrades,
        stone_upgrades: save.stone_upgrades,
        iron_upgrades: save.iron_upgrades
      }
      console.log(acc);

    const response = await fetch(saveuri + "/" + name, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(acc)
    });
    return true;
}
var records;
var sortedrecords;
function getbestrecord(name){
    bestrecord = 0;
    for(var i = 0; i< records.length;i++){
        if(records[i].account_name == name){
            bestrecord = records[i].time;
            break;
        }
    }
    for(var i = 0; i< records.length;i++){
        if(records[i].account_name == name && bestrecord > records[i].time){
            bestrecord = records[i].time;
        }
    }
}
function sortrecord(){
    var sorted= records.sort(function(a, b){
        return a.time - b.time;
    });
    console.log(sorted);
    return sorted;
}
// DRAW BELOW
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
var selectedsavebuttoncolor = ["#2a472a", "#5d9903", "#868786"];
var selectedsavebutton = [0,0,0,0];
var recordstext = "";
var recordstextbox = false;
var recordsbuttonback = false;
function animate(){
    resizeCanvas();
    switch(gamestate){
        case 0:{ //login
            if(badinput){
                roundpanel(cnv, canvas.width * 0.30 , canvas.height * 0.30, canvas.width * 0.40 , canvas.height * 0.45,20, back);// cnv , x , y , sizex , sizey, color
                label(cnv,canvas.width * 0.50 , canvas.height * 0.73, "30" , text, "center", "Either login or password invalid" ); //cnv , x , y , size, color , side, text
            }
            if(loginswitch){
                roundpanel(cnv, canvas.width * 0.30 , canvas.height * 0.20, canvas.width * 0.20 , canvas.height * 0.15,20, back);// cnv , x , y , sizex , sizey, color
                roundpanel(cnv, canvas.width * 0.50 , canvas.height * 0.20, canvas.width * 0.20 , canvas.height * 0.15,20, nonactive);// cnv , x , y , sizex , sizey, color
                roundpanel(cnv, canvas.width * 0.30 , canvas.height * 0.30, canvas.width * 0.40 , canvas.height * 0.40,20, back);// cnv , x , y , sizex , sizey, color
            }
            else{
                roundpanel(cnv, canvas.width * 0.30 , canvas.height * 0.20, canvas.width * 0.20 , canvas.height * 0.15,20, nonactive);// cnv , x , y , sizex , sizey, color
                roundpanel(cnv, canvas.width * 0.50 , canvas.height * 0.20, canvas.width * 0.20 , canvas.height * 0.15,20, back);// cnv , x , y , sizex , sizey, color
                roundpanel(cnv, canvas.width * 0.30 , canvas.height * 0.30, canvas.width* 0.40 , canvas.height * 0.40,20, back);// cnv , x , y , sizex , sizey, color

            }
            label(cnv,canvas.width * 0.40 , canvas.height * 0.28, "40" , text, "center", "Login" ); //cnv , x , y , size, color , side, text
            label(cnv,canvas.width * 0.60 , canvas.height * 0.28, "40" ,  text, "center", "Register" ); //cnv , x , y , size, color , side, text

            label(cnv,canvas.width * 0.50 , canvas.height * 0.38, "35" , text, "center", "Username" ); //cnv , x , y , size, color , side, text
            label(cnv,canvas.width * 0.50 , canvas.height * 0.51, "35" , text, "center", "Password" ); //cnv , x , y , size, color , side, text
            if(textbox[0]){
                textBox(cnv, canvas.width * 0.35 , canvas.height * 0.40, canvas.width * 0.30 , canvas.height * 0.05,text);
                textBox(cnv, canvas.width * 0.35 , canvas.height * 0.53, canvas.width * 0.30 , canvas.height * 0.05,"#000000");
            }
            else if(textbox[1]){
                textBox(cnv, canvas.width * 0.35 , canvas.height * 0.40, canvas.width * 0.30 , canvas.height * 0.05,"#000000");
                textBox(cnv, canvas.width * 0.35 , canvas.height * 0.53, canvas.width * 0.30 , canvas.height * 0.05,text);
            }
            else{
                textBox(cnv, canvas.width * 0.35 , canvas.height * 0.40, canvas.width * 0.30 , canvas.height * 0.05,"#000000");
                textBox(cnv, canvas.width * 0.35 , canvas.height * 0.53, canvas.width * 0.30 , canvas.height * 0.05,"#000000");
            }
            label(cnv,canvas.width * 0.355 , canvas.height * 0.44, "30" ,  "#000000", "left", textboxtext[0] ); //cnv , x , y , size, color , side, text
            label(cnv,canvas.width * 0.355 , canvas.height * 0.57, "30" ,  "#000000", "left", textboxcensor ); //cnv , x , y , size, color , side, text

            if(buttonswitch[0]){
                button(cnv,canvas.width * 0.42 , canvas.height * 0.61, canvas.width * 0.16 , canvas.height * 0.05 , "#477a47" );
            }
            else{
                button(cnv,canvas.width * 0.42 , canvas.height * 0.61, canvas.width * 0.16 , canvas.height * 0.05 , buttoncolor );
            }
            label(cnv,canvas.width * 0.50 , canvas.height * 0.65, "35" , text, "center", "Confirm" ); //cnv , x , y , size, color , side, text
            break;
        }
        case 1:{ // SAVE CHOOSE
            roundpanel(cnv, canvas.width * 0.195 , canvas.height * 0.10, canvas.width * 0.61 , canvas.height * 0.71,20, nonactive);// cnv , x , y , sizex , sizey, color
            roundpanel(cnv, canvas.width * 0.20 , canvas.height * 0.17, canvas.width * 0.60 , canvas.height * 0.63,20, back);// cnv , x , y , sizex , sizey, color
            if(savedata != false){
                label(cnv,canvas.width * 0.63 , canvas.height * 0.23, "40" , text, "center", "Save Data"); //cnv , x , y , size, color , side, text
                label(cnv,canvas.width * 0.63 , canvas.height * 0.29, "35" , text, "center", "Time: " + savedata.time); //cnv , x , y , size, color , side, text
                label(cnv,canvas.width * 0.63 , canvas.height * 0.34, "35" , text, "center", "Wood: " + savedata.wood_count ); //cnv , x , y , size, color , side, text
                label(cnv,canvas.width * 0.63 , canvas.height * 0.39, "35" , text, "center", "Stone: " + savedata.stone_count ); //cnv , x , y , size, color , side, text
                label(cnv,canvas.width * 0.63 , canvas.height * 0.44, "35" , text, "center", "Iron: " + savedata.iron_count  ); //cnv , x , y , size, color , side, text
            }
            else{
                label(cnv,canvas.width * 0.64 , canvas.height * 0.31, "40" , text, "center", "NO SAVE"); //cnv , x , y , size, color , side, text
            }
            panel(cnv, canvas.width * 0.245 , canvas.height * 0.455, canvas.width * 0.23 , canvas.height * 0.15, "#000000");
            panel(cnv, canvas.width * 0.245 , canvas.height * 0.615, canvas.width * 0.23 , canvas.height * 0.15, "#000000");

            panel(cnv, canvas.width * 0.525 , canvas.height * 0.455, canvas.width * 0.23 , canvas.height * 0.15, "#000000");
            panel(cnv, canvas.width * 0.525 , canvas.height * 0.615, canvas.width * 0.23 , canvas.height * 0.15, "#000000");

            panel(cnv, canvas.width * 0.25 , canvas.height * 0.46, canvas.width * 0.22 , canvas.height * 0.14, selectedsavebuttoncolor[selectedsavebutton[0]]);// cnv , x , y , sizex , sizey, color
            panel(cnv, canvas.width * 0.25 , canvas.height * 0.62, canvas.width * 0.22 , canvas.height * 0.14, selectedsavebuttoncolor[selectedsavebutton[1]]);// cnv , x , y , sizex , sizey, color
            panel(cnv, canvas.width * 0.53 , canvas.height * 0.46, canvas.width * 0.22 , canvas.height * 0.14, selectedsavebuttoncolor[selectedsavebutton[2]]);// cnv , x , y , sizex , sizey, color
            panel(cnv, canvas.width * 0.53 , canvas.height * 0.62, canvas.width * 0.22 , canvas.height * 0.14, selectedsavebuttoncolor[selectedsavebutton[3]]);// cnv , x , y , sizex , sizey, color

            label(cnv,canvas.width * 0.35 , canvas.height * 0.55, "35" , text, "center", "Records" ); //cnv , x , y , size, color , side, text
            label(cnv,canvas.width * 0.35 , canvas.height * 0.71, "35" , text, "center", "Login Menu" ); //cnv , x , y , size, color , side, text
            label(cnv,canvas.width * 0.64 , canvas.height * 0.55, "35" , text, "center", "Continue" ); //cnv , x , y , size, color , side, text
            label(cnv,canvas.width * 0.64 , canvas.height * 0.71, "35" , text, "center", "New Game" ); //cnv , x , y , size, color , side, text

            label(cnv,canvas.width * 0.50 , canvas.height * 0.155, "40" , text, "center", "Save Menu" ); //cnv , x , y , size, color , side, text
            
            label(cnv,canvas.width * 0.33 , canvas.height * 0.25, "40" , text, "center", "Personal Best: " ); //cnv , x , y , size, color , side, text
            if(bestrecord > 0){
                var temp_minutes = 0;
                var temp_seconds = 0;
                var temp_time = bestrecord;
                while(temp_time>60){
                    temp_minutes++;
                    temp_time = temp_time - 60;
                }
                while(temp_time>1){
                    temp_seconds++;
                    temp_time = temp_time - 1;
                }
                label(cnv, canvas.width*0.29, canvas.height*0.32,"35",text,"center",temp_minutes);
                label(cnv, canvas.width*0.35, canvas.height*0.32,"35",text,"center","Minutes");
                label(cnv, canvas.width*0.29, canvas.height*0.37,"35",text,"center",temp_seconds);
                label(cnv, canvas.width*0.35, canvas.height*0.37,"35",text,"center","Second");
            }
            else{
                label(cnv,canvas.width * 0.36 , canvas.height * 0.30, "50" , text, "center", " - " ); //cnv , x , y , size, color , side, text
            }
            
            break;
        }
        case 2:{ //game
            
            //Draw elementArray
            for(let i = 0;i<elementArray.length;i++){
                cnv.drawImage(elementArray[i].image,elementArray[i].x,elementArray[i].y,canvas.height*0.13,canvas.height*0.13)
            }
        
            //Draw floating numbers
            for(let i = 0;i<floatingNumber.length;i++){
                if(floatingNumber[i].count>0){
                    cnv.font = "30px arial";
                    cnv.fillStyle = "#f5e6bc";
                    floatingNumber[i].alpha -=0.005;
                    cnv.globalAlpha = floatingNumber[i].alpha;
                    cnv.textAlign = "right";
                    cnv.fillText(floatingNumber[i].click,floatingNumber[i].x,floatingNumber[i].y-floatingNumber[i].tempy);
                    switch(floatingNumber[i].type){
                        case 1:{
                            cnv.drawImage(woodLog,floatingNumber[i].x,floatingNumber[i].y-floatingNumber[i].tempy-34,canvas.height*0.05,canvas.height*0.05)
                            break;
                        }
                        case 2:{
                            cnv.drawImage(stone,floatingNumber[i].x,floatingNumber[i].y-floatingNumber[i].tempy-34,canvas.height*0.05,canvas.height*0.05)
                            break;
                        }
                        case 3:{
                            cnv.drawImage(ironBar,floatingNumber[i].x,floatingNumber[i].y-floatingNumber[i].tempy-34,canvas.height*0.05,canvas.height*0.05)
                            break;
                        }
                    }
                    floatingNumber[i].tempy+=2;
                    floatingNumber[i].count--;
                }
                else{
                    floatingNumber.splice(i,1);
                }
                cnv.globalAlpha = 1;
            }

            //Counter + icons
            cnv.globalAlpha = 0.3;
            var distance = woodUpgrades.next + stoneUpgrades.next;
            panel(cnv,canvas.width * 0.92 - ((canvas.width * 0.05) * distance) ,0 ,canvas.width, canvas.height * 0.1, "#000000");
            cnv.globalAlpha = 1;

            cnv.drawImage(woodLog, canvas.width * 0.95 ,0 ,canvas.height * 0.07, canvas.height * 0.07);
            label(cnv, canvas.width * 0.97,canvas.height * 0.09,"30" , "#f5e6bc" , "center" ,Intl.NumberFormat("en-GB", {
                notation: "compact",
                compactDisplay: "short",
              }).format(woodCount));

            if(woodUpgrades.next==1){
            cnv.drawImage(stone, canvas.width * 0.90 ,0 ,canvas.height * 0.06, canvas.height * 0.06);
            label(cnv, canvas.width * 0.915,canvas.height * 0.09,"30" , "#f5e6bc" , "center" ,Intl.NumberFormat("en-GB", {
                notation: "compact",
                compactDisplay: "short",
              }).format(stoneCount));
            }
        
            if(stoneUpgrades.next==1){
                cnv.drawImage(ironBar, canvas.width * 0.84 ,0 ,canvas.height * 0.07, canvas.height * 0.07);
                label(cnv, canvas.width * 0.86,canvas.height * 0.09,"30" , "#f5e6bc" , "center" ,Intl.NumberFormat("en-GB", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(ironCount));
            }
        
            //Draw SideBar
            //drawSideBarButton(drawBar);
            drawSideBar();
            drawUpgradeCells(woodLog,stone,ironBar);
            drawEras(hoveredEras,woodUpgrades.next + stoneUpgrades.next);
            drawbackbutton();
            break;
        }
        case 3:{ //END
            var temp_minutes = 0;
            var temp_seconds = 0;
            var temp_time = time;
            while(temp_time>60){
                temp_minutes++;
                temp_time = temp_time - 60;
            }
            while(temp_time>1){
                temp_seconds++;
                temp_time = temp_time - 1;
            }
            roundpanel(cnv,canvas.width*0.29, canvas.height*0.24,canvas.width*0.42,canvas.height*0.47,20,nonactive);
            roundpanel(cnv,canvas.width*0.30, canvas.height*0.30,canvas.width*0.40,canvas.height*0.40,20,back);
            label(cnv, canvas.width*0.49, canvas.height*0.29,"40",text,"center","Victory");
            label(cnv, canvas.width*0.39, canvas.height*0.41,"40",text,"center","Your Time: ");
            label(cnv, canvas.width*0.39, canvas.height*0.46,"40",text,"center",temp_minutes);
            label(cnv, canvas.width*0.39, canvas.height*0.51,"40",text,"center","Minutes");
            label(cnv, canvas.width*0.39, canvas.height*0.56,"40",text,"center",temp_seconds);
            label(cnv, canvas.width*0.39, canvas.height*0.61,"40",text,"center","Second");

            if(endButtons[0]){
                button(cnv,canvas.width*0.50, canvas.height*0.38,canvas.width*0.18,canvas.height*0.12,"#5d9903");
                button(cnv,canvas.width*0.50, canvas.height*0.53,canvas.width*0.18,canvas.height*0.12,nonactive);
            }
            else if(endButtons[1]){
                button(cnv,canvas.width*0.50, canvas.height*0.38,canvas.width*0.18,canvas.height*0.12,nonactive);
                button(cnv,canvas.width*0.50, canvas.height*0.53,canvas.width*0.18,canvas.height*0.12,"#5d9903");
            }
            else{
                button(cnv,canvas.width*0.50, canvas.height*0.38,canvas.width*0.18,canvas.height*0.12,nonactive);
                button(cnv,canvas.width*0.50, canvas.height*0.53,canvas.width*0.18,canvas.height*0.12,nonactive);
            }
            label(cnv, canvas.width*0.59, canvas.height*0.45,"30",text,"center","To Save Menu");
            label(cnv, canvas.width*0.59, canvas.height*0.60,"30",text,"center","To Login Menu");
            break;
        }
        case 4:{
            roundpanel(cnv, canvas.width * 0.345 , canvas.height * 0.10, canvas.width * 0.31 , canvas.height * 0.78,20, nonactive);// cnv , x , y , sizex , sizey, color
            //roundpanel(cnv, canvas.width * 0.35 , canvas.height * 0.17, canvas.width * 0.30 , canvas.height * 0.63,20, back);// cnv , x , y , sizex , sizey, color
            label(cnv,canvas.width * 0.50 , canvas.height * 0.15, "35" , text, "center", "RECORDS"); //cnv , x , y , size, color , side, text
            //label(cnv,canvas.width * 0.40 , canvas.height * 0.23, "35" , text, "center", "Name"); //cnv , x , y , size, color , side, text
            //label(cnv,canvas.width * 0.60 , canvas.height * 0.23, "35" , text, "center", "Time"); //cnv , x , y , size, color , side, text
            var displayed = 0;
            for(var i = 0; i < sortedrecords.length; i++){
                if(displayed == 5){
                    break;
                }
                if(sortedrecords[i].account_name.toLowerCase().includes(recordstext.toLowerCase())){
                    var temp_minutes = 0;
                    var temp_seconds = 0;
                    var temp_time = sortedrecords[i].time;
                    while(temp_time>60){
                        temp_minutes++;
                        temp_time = temp_time - 60;
                    }
                    while(temp_time>1){
                        temp_seconds++;
                        temp_time = temp_time - 1;
                    }
                    roundpanel(cnv,canvas.width * 0.35 , canvas.height * 0.17 + (displayed * (canvas.height * 0.11)), canvas.width * 0.30 , canvas.height * 0.10,20,back);
                    label(cnv,canvas.width * 0.37 , canvas.height * 0.23 + (displayed * (canvas.height * 0.11)), "30" , text, "left", (i+1) + "." + sortedrecords[i].account_name); //cnv , x , y , size, color , side, text
                    label(cnv,canvas.width * 0.54 , canvas.height * 0.21 + (displayed * (canvas.height * 0.11)), "30" , text, "left",  temp_minutes); //cnv , x , y , size, color , side, text
                    label(cnv,canvas.width * 0.57 , canvas.height * 0.21 + (displayed * (canvas.height * 0.11)), "30" , text, "left", "Minutes"); //cnv , x , y , size, color , side, text
                    label(cnv,canvas.width * 0.54 , canvas.height * 0.25 + (displayed * (canvas.height * 0.11)), "30" , text, "left", temp_seconds); //cnv , x , y , size, color , side, text
                    label(cnv,canvas.width * 0.57 , canvas.height * 0.25 + (displayed * (canvas.height * 0.11)), "30" , text, "left", "Seconds"); //cnv , x , y , size, color , side, text
                    displayed++;
                }
            }
            label(cnv,canvas.width * 0.40 , canvas.height * 0.76, "30" , text, "center", "SEARCH: "); //cnv , x , y , size, color , side, text
            //panel(cnv, canvas.width * 0.525 , canvas.height * 0.615, canvas.width * 0.23 , canvas.height * 0.15, "#000000");
            //panel(cnv, canvas.width * 0.25 , canvas.height * 0.46, canvas.width * 0.22 , canvas.height * 0.14, selectedsavebuttoncolor[selectedsavebutton[0]]);// c
            if(recordstextbox){
                textBox(cnv, canvas.width * 0.45 , canvas.height * 0.72, canvas.width * 0.19 , canvas.height * 0.05,text);
            }
            else{
                textBox(cnv, canvas.width * 0.45 , canvas.height * 0.72, canvas.width * 0.19 , canvas.height * 0.05,"#000000");
            }
            panel(cnv, canvas.width * 0.355 , canvas.height * 0.78, canvas.width * 0.29 , canvas.height * 0.09, "#000000");
            if(recordsbuttonback){
                panel(cnv, canvas.width * 0.36 , canvas.height * 0.785, canvas.width * 0.28 , canvas.height * 0.08, "#5d9903");
            }
            else{
                panel(cnv, canvas.width * 0.36 , canvas.height * 0.785, canvas.width * 0.28 , canvas.height * 0.08, back);
            }
            label(cnv,canvas.width * 0.50 , canvas.height * 0.835, "30" , text, "center", "To Save Menu"); //cnv , x , y , size, color , side, text
            label(cnv,canvas.width * 0.455 , canvas.height * 0.76, "35" , "#000000", "left", recordstext); //cnv , x , y , size, color , side, text
            break;
        }
    }
    gameframe++;
    requestAnimationFrame(animate);
};

function checkclick(truex,truey,x1,y1,x2,y2){
    if(truex>x1 && truex<x2 && truey>y1 && truey<y2){
        return true;
    }
    else{
        return false;
    }
}
var selected = 2;
canvas.addEventListener('keydown', function(event) {
    switch(gamestate){
        case 0:{
            for(var i = 0; i < textbox.length;i++){
                if(textbox[i]){
                    if (event.key === "Backspace" || event.key === "Delete") {
                        textboxtext[i] = textboxtext[i].slice(0,-1);
                        if(i==1){
                            textboxcensor = textboxcensor.slice(0,-1);
                        }
                    }
                    else if(event.key === "CapsLock" || event.key === "Shift"  || event.key === "Alt"|| event.key ==="Control"|| event.key ==="Escape"|| event.key ==="Enter"|| event.key ==="Meta"){
                    }
                    else if(event.key === "Tab"){
                    }
                    else{
                        if(i==1){
                            textboxcensor +="*";
                        }
                        textboxtext[i] += event.key;
                    }
                }
            }
            break;
        }
        case 4:{
            if(recordstextbox){
                if (event.key === "Backspace" || event.key === "Delete") {
                    recordstext =  recordstext.slice(0,-1);
                }
                else if(event.key === "Tab" || event.key === "CapsLock" || event.key === "Shift"  || event.key === "Alt"|| event.key ==="Control"|| event.key ==="Escape"|| event.key ==="Enter"|| event.key ==="Meta"){
                }
                else{
                    recordstext += event.key;
                }
            }
            break;
        }
    }
});
canvas.addEventListener('click', async function(event) { 
    switch(gamestate){
        case 0:{ 
            for(var i = 0; i<textbox.length;i++){
                textbox[i] = false;
            }
            if(checkclick(event.x,event.y, canvas.width * 0.30 ,canvas.height * 0.20, canvas.width * 0.50 , canvas.height * 0.35)){ // login button
                loginswitch = true;
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.50 , canvas.height * 0.20, canvas.width * 0.70 , canvas.height * 0.35)){ // register button
                loginswitch = false;
            }
            else if(checkclick(event.x,event.y,canvas.width * 0.35 , canvas.height * 0.40, canvas.width * 0.65 , canvas.height * 0.45)){
                textbox[0] = true;
            }
            else if(checkclick(event.x,event.y,canvas.width * 0.35 , canvas.height * 0.53, canvas.width * 0.65 , canvas.height * 0.58)){
                textbox[1] = true;
            }
            else if(checkclick(event.x,event.y,canvas.width * 0.42 , canvas.height * 0.61, canvas.width * 0.58 , canvas.height * 0.66)){
                if(loginswitch){
                    var login = await checkacc(textboxtext[0],textboxtext[1]);
                    if(login){
                        await tostage1();
                    }
                    else{
                        badinput = true;
                    }
                }
                else{
                    if(textboxtext[1] == ""){
                        badinput = true;
                        break;
                    }
                    var register = await registacc(textboxtext[0],textboxtext[1]);
                    if(register){
                        await tostage1();
                    }
                    else{
                        badinput = true;
                    }
                }
            }
            break;
        }
        case 1:{
            if(checkclick(event.x,event.y, canvas.width * 0.25 , canvas.height * 0.46, canvas.width * 0.47 , canvas.height * 0.60)){ // login button
                await tostage4();
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.25 , canvas.height * 0.62, canvas.width * 0.47 , canvas.height * 0.76)){
                tostage0();
            }
            if(checkclick(event.x,event.y, canvas.width * 0.53 , canvas.height * 0.46, canvas.width * 0.75 , canvas.height * 0.60)){
                if(savedata != 0){
                    setsavedata();
                    tostage2();
                }
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.53 , canvas.height * 0.62, canvas.width * 0.75 , canvas.height * 0.76)){
                await postsave(textboxtext[0]);
                tostage2();
            }
            break;
        }
        case 2:{
        var side =  canvas.width* 0.31; 
            if(checkclick(event.x,event.y, canvas.width * 0.01 ,canvas.height * 0.01, canvas.width * 0.10 , canvas.height * 0.14)){
                fillCells(0);
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.11 ,canvas.height * 0.01, canvas.width * 0.20 , canvas.height * 0.14) && woodUpgrades.next == 1){
                fillCells(1);
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.11 ,canvas.height * 0.01, canvas.width * 0.30 , canvas.height * 0.14) && stoneUpgrades.next == 1){
                fillCells(2);
            }
            for(var i = 0 ; i < 6;i++){
                if(checkclick(event.x,event.y, canvas.width * 0.10 ,getcellY(i) + canvas.height*0.06, canvas.width * 0.20 , getcellY(i) + canvas.height * 0.10)){
                    switch (i){
                            case 0:{
                                buyUpgrade(i, woodCount,stoneCount,ironCount, addPerClicktoElement);
                                break;
                            }
                            case 1:{
                                buyUpgrade(i, woodCount,stoneCount,ironCount, addDurabilityToElement);
                                break;
                            }
                            case 2:{
                                buyUpgrade(i, woodCount,stoneCount,ironCount, addSpawnRateToElement);
                                break;
                            }
                            case 3:{
                                buyUpgrade(i, woodCount,stoneCount,ironCount, addSpawnCountToElement);
                                break;
                            }
                            case 4:{
                                buyUpgrade(i, woodCount,stoneCount,ironCount, addAutoClickerToElement);
                                break;
                            }
                            case 5:{
                                buyUpgrade(i, woodCount,stoneCount,ironCount, addStage);
                                break;
                            }
                        }
                    } 
                }
            for(var i = elementArray.length-1;i>-1;i--){
                if(event.pageX > elementArray[i].x &&  event.pageX < elementArray[i].x + canvas.height*0.15   &&  event.pageY > elementArray[i].y &&  event.pageY < elementArray[i].y + canvas.height*0.15 &&  event.pageX > side){
                    switch (elementArray[i].type){
                        case 1:{
                            woodCount += clickedOnResource(event, elementArray, i ,floatingNumber);
                            break;
                        }
                        case 2:{
                            stoneCount += clickedOnResource(event, elementArray, i ,floatingNumber);
                            break;
                        }
                        case 3:{
                            ironCount +=clickedOnResource(event, elementArray, i ,floatingNumber);
                            break;
                        }
                    }
                break;
                }
            }
            if(checkclick(event.x,event.y, canvas.width*0.005 ,canvas.height * 0.875, canvas.width * 0.305 , canvas.height)){
                updatesave();
                await putsave(textboxtext[0],savedata);
                await tostage1();
            }
        break;
        }
        case 3:{
            if(checkclick(event.x,event.y, canvas.width*0.50, canvas.height*0.38, canvas.width * 0.68 , canvas.height * 0.50)){
                await deletesave(textboxtext[0]);
                savedata = false;
                await tostage1(true);
            }
            else if(checkclick(event.x,event.y, canvas.width*0.50, canvas.height*0.53, canvas.width * 0.68 , canvas.height * 0.65)){
                await deletesave(textboxtext[0]);
                savedata = false;
                tostage0();
            }
            break;
        }
        case 4:{
            recordstextbox = false;
            if(checkclick(event.x,event.y, canvas.width * 0.45 , canvas.height * 0.72, canvas.width * 0.64 , canvas.height * 0.77)){
                recordstextbox = true;
            }
            if(checkclick(event.x,event.y, canvas.width * 0.36 , canvas.height * 0.785, canvas.width * 0.64 , canvas.height * 0.865)){
                recordstext = "";
                await tostage1();
            }
            break;
        }
    }
}, false);
canvas.addEventListener('mousemove', function(event) { 
    buttonswitch[0] = false;
    newgamemove = false;
    continuemove = false;
    endButtons[0] =false;
    endButtons[1] =false;
    savebuttons[0] = false;
    savebuttons[1] = false;
    recordsbuttonback = false;
    switch(gamestate){
        case 0:{
            if(checkclick(event.x,event.y,canvas.width * 0.42 , canvas.height * 0.61, canvas.width * 0.58 , canvas.height * 0.66)){
                buttonswitch[0] = true;
            }
            break;
        }
        case 1:{
            selectedsavebutton[0] = 0;
            selectedsavebutton[1] = 0;
            selectedsavebutton[2] = 0;
            selectedsavebutton[3] = 0;
            if(checkclick(event.x,event.y, canvas.width * 0.25 , canvas.height * 0.46, canvas.width * 0.47 , canvas.height * 0.60)){ // login button
                selectedsavebutton[0] = 1;
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.25 , canvas.height * 0.62, canvas.width * 0.47 , canvas.height * 0.76)){
                selectedsavebutton[1] = 1;
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.53 , canvas.height * 0.46, canvas.width * 0.75 , canvas.height * 0.60)){
                selectedsavebutton[2] = 1;
            }
            else if(checkclick(event.x,event.y, canvas.width * 0.53 , canvas.height * 0.62, canvas.width * 0.75 , canvas.height * 0.76)){
                selectedsavebutton[3] = 1;
            }
            if(savedata == false){
                selectedsavebutton[2] = 2;
            }
            break;
        }
        case 2:{
            backbutton = false;
                for(var i = 0 ; i< 6;i++){
                    if(checkclick(event.x,event.y, canvas.width * 0.10 ,getcellY(i) + canvas.height*0.06, canvas.width * 0.20 , getcellY(i) + canvas.height * 0.10)){
                        hoverOverUpgrade(i);
                    }
                    else{
                        unhoverOverUpgrade(i);
                    }
                }
                if(checkclick(event.x,event.y, canvas.width * 0.01 ,canvas.height * 0.01, canvas.width * 0.10 , canvas.height * 0.11)){
                    hoveredEras=1;
                }
                else if(checkclick(event.x,event.y, canvas.width * 0.11 ,canvas.height * 0.01, canvas.width * 0.20 , canvas.height * 0.11)){
                    hoveredEras=2;
                }
                else if(checkclick(event.x,event.y, canvas.width * 0.11 ,canvas.height * 0.01, canvas.width * 0.30 , canvas.height * 0.11)){
                    hoveredEras=3;
                }
                else{
                    hoveredEras=0;
                }
                if(checkclick(event.x,event.y, canvas.width*0.005 ,canvas.height * 0.875, canvas.width * 0.305 , canvas.height)){
                    backbutton = true;
                }
            
            break;
        }
        case 3:{
            if(checkclick(event.x,event.y, canvas.width*0.50, canvas.height*0.38, canvas.width * 0.68 , canvas.height * 0.50)){
                endButtons[0] = true;
            }
            else if(checkclick(event.x,event.y, canvas.width*0.50, canvas.height*0.53, canvas.width * 0.68 , canvas.height * 0.65)){
                endButtons[1] = true;
            }
            break;
        }
        case 4:{
            if(checkclick(event.x,event.y, canvas.width * 0.36 , canvas.height * 0.785, canvas.width * 0.64 , canvas.height * 0.865)){
                recordsbuttonback = true;
            }
            break;
        }
    }
});

animate();
