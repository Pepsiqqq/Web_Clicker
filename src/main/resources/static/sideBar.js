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

const comTree = new Image(); comTree.src = './img/tree.png';
const comStone = new Image(); comStone.src = './img/stoneCom.png';
const comIron = new Image(); comIron.src = './img/ironCom.png';



var woodimagesArray= [woodAxeIcon,treeBarkIcon,spawnRateIcon,treeCountIcon,chainsawIcon,woodenPickaxeIcon, stoneAxeIcon, ironAxeIcon];
var stoneimagesArray= [stoneAxeIcon, stoneDurabilityIcon, stoneTimeIcon, stoneCountIcon, minerIcon, stonePickaxeIcon, ironPickaxeIcon];
var ironimagesArray= [ironAxeIcon,ironDurabilityIcon,ironTimeIcon,ironCountIcon,minerIcon,escapeIcon];
//
var side;
var cellY = [];

var deployedStage = 0;
//
var woodCellCount = 7;
var woodCellName = ["Wood Axe","Durability","Spawn Rate","Spawn Count", "Chainsaw","Woden Pickaxe","Stone Axe","Iron Axe"];
var woodCoef = [1.7, 3.0, 7, 10, 5, 0, 0, 0];
var woodCellPricewood = [10,50,100,200,300,500,0,0];
var woodCellPricestone = [0,0,0,0,0,0,100,100];
var woodCellPriceiron = [0,0,0,0,0,0,0,100];
var woodCellMax = [100,3,3,3,5,1,1,1];
var woodCellCurrent = [1,0,0,0,0,0,0,0];

var stoneCellCount = 6;
var stoneCellName = ["Stone Axe","Durability","Spawn Rate","Spawn Count", "Autominer","Stone Pickaxe","Iron Pickaxe"];
var stoneCoef = [1.7, 3.0, 7, 10, 5, 0, 0];
var stoneCellPricewood = [100,500,1000,2000,3000,5000,0];
var stoneCellPricestone = [10,50,100,200,300,500,300];
var stoneCellPriceiron = [0,0,0,0,0,0,300];
var stoneCellMax = [100,3,3,3,5,1,1];
var stoneCellCurrent = [1,0,0,0,0,0,0];

var ironCellCount = 5;
var ironCellName = ["Iron Axe","Durability","Spawn Rate","Spawn Count", "Autominer","Escape"];
var ironCoef = [1.7, 3.0, 7, 10, 5, 0];
var ironCellPricewood = [100,500,1000,2000,3000,10000];
var ironCellPricestone = [100,500,1000,2000,3000,5000];
var ironCellPriceiron = [10,50,100,200,300,1000];
var ironCellMax = [100,3,3,3,5,1];
var ironCellCurrent = [1,0,0,0,0,0];

function fillCellsWood(){
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
            current:woodCellCurrent[i],
        }
        cellY.push(woodcellData);
    }
}
function fillCellsStone(){
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
            current:stoneCellCurrent[i],
        }
        cellY.push(stonecellData);
    }
}
function fillCellsIron(){
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
            current:ironCellCurrent[i],
        }
        cellY.push(ironcellData);
    }
}
//
export function fillCells(stage){
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
export function buyUpgrade(index, wood, stone, iron, addUpgrade){
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
                woodCellCurrent[index]++;
                break;
            }
            case 2:{
                cellY[index].pricewood = Math.floor(cellY[index].pricewood * stoneCoef[index]);
                cellY[index].pricestone = Math.floor(cellY[index].pricestone * stoneCoef[index]);
                cellY[index].priceiron = Math.floor(cellY[index].priceiron * stoneCoef[index]);
                stoneCellPricewood[index] = cellY[index].pricewood;
                stoneCellPricestone[index] = cellY[index].pricestone;
                stoneCellPriceiron[index] = cellY[index].priceiron;
                stoneCellCurrent[index]++;
                break;
            }
            case 3:{
                cellY[index].pricewood = Math.floor(cellY[index].pricewood * ironCoef[index]);
                cellY[index].pricestone = Math.floor(cellY[index].pricestone * ironCoef[index]);
                cellY[index].priceiron = Math.floor(cellY[index].priceiron * ironCoef[index]);
                ironCellPricewood[index] = cellY[index].pricewood;
                ironCellPricestone[index] = cellY[index].pricestone;
                ironCellPriceiron[index] = cellY[index].priceiron;
                ironCellCurrent[index]++;
                break;
            }
        }
        cellY[index].current++;
        return true;
    }
    return false;
}

export function drawSideBarButton(canvas,cnv, drawBar){
    if(drawBar){
        side = 505;
    }
    else{
        side = 0;
    }
    cnv.font = "30px arial";
    cnv.fillStyle = "#302f29";
    cnv.globalAlpha = 0.5;
    cnv.fillRect(0+side,(canvas.height/2)-70,40,100);
    cnv.globalAlpha = 1;
    cnv.fillStyle ="#bdb8ac";
    cnv.fillText(">>",3+side,(canvas.height/2)-10);
    cnv.fillStyle ="#000";
}

export function drawSideBar(canvas,cnv){
    cnv.fillRect(0,0,500,canvas.height);
}
export function drawEras(canvas,cnv,hovered,stage){
    cnv.fillRect(0,0,500,103);
    cnv.fillStyle = "#373b32"; //default
    switch(hovered){
        case 0:{
            cnv.fillRect(3,3,162,97);
            switch(stage){
                case 0:{
                    cnv.fillStyle ="#868786"
                    cnv.fillRect(168,3,162,97);
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 1:{
                    cnv.fillRect(168,3,162,97);
                    cnv.fillStyle ="#868786" 
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 2:{
                    cnv.fillRect(168,3,162,97);
                    cnv.fillRect(333,3,162,97);
                    break;
                }
            }
            break;
        }
        case 1:{
            cnv.fillStyle = "#5d9903";//green
            cnv.fillRect(3,3,162,97);
            switch(stage){
                case 0:{
                    cnv.fillStyle ="#868786"
                    cnv.fillRect(168,3,162,97);
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 1:{
                    cnv.fillStyle = "#373b32";
                    cnv.fillRect(168,3,162,97);
                    cnv.fillStyle ="#868786"
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 2:{
                    cnv.fillStyle = "#373b32";
                    cnv.fillRect(168,3,162,97);
                    cnv.fillRect(333,3,162,97);
                    break;
                }
            }
            break;
        }
        case 2:{
            cnv.fillStyle = "#373b32";//default
            cnv.fillRect(3,3,162,97);
            switch(stage){
                case 0:{
                    cnv.fillStyle ="#868786"
                    cnv.fillRect(168,3,162,97);
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 1:{
                    cnv.fillStyle = "#5d9903";//green
                    cnv.fillRect(168,3,162,97);
                    cnv.fillStyle ="#868786"
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 2:{
                    cnv.fillStyle = "#5d9903";//green
                    cnv.fillRect(168,3,162,97);
                    cnv.fillStyle = "#373b32";
                    cnv.fillRect(333,3,162,97);
                    break;
                }
            }
            break;
        }
        case 3:{
            cnv.fillStyle = "#373b32";//default
            cnv.fillRect(3,3,162,97);
            switch(stage){
                case 0:{
                    cnv.fillStyle ="#868786"
                    cnv.fillRect(168,3,162,97);
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 1:{
                    cnv.fillRect(168,3,162,97);
                    cnv.fillStyle ="#868786"
                    cnv.fillRect(333,3,162,97);
                    break;
                }
                case 2:{
                    cnv.fillStyle = "#373b32";//green
                    cnv.fillRect(168,3,162,97);
                    cnv.fillStyle = "#5d9903";
                    cnv.fillRect(333,3,162,97);
                    break;
                }
            }
            break;
        }
    }
    cnv.font = "40px arial";
    cnv.fillStyle = "#ffcd42";
    switch(deployedStage){
        case 0:{
            cnv.fillText("✔",150,90);
            break;
        }
        case 1:{
            cnv.fillText("✔",320,90);
            break;
        }
        case 2:{
            cnv.fillText("✔",490,90);
            break;
        }
    }
    cnv.drawImage(comTree,40,10,80,80);
    cnv.drawImage(comStone,200,10,80,80);
    cnv.drawImage(comIron,380,10,80,80);
}
export function drawUpgradeCells(canvas, cnv,woodlog,stone,ironBar){
    for(var i = 0;i<cellY.length; i++){
        cnv.fillStyle = "#373b32";
        cellY[i].y =  107 + (150*i) + position + speed;    
        cnv.fillRect(5 ,cellY[i].y, 490, 145); // x, y, width, height
        if(cellY[i].hovered){
            cnv.fillStyle = "#5d9903";
        }
        else{
            cnv.fillStyle = "#ffcd42";
        }
        cnv.fillRect(130,cellY[i].y+80, 200,60);
        cnv.textAlign = "center";
        cnv.font = "40px arial";
        cnv.fillStyle = "#0a2b45";
        cnv.fillText("BUY",230, 125+cellY[i].y);

        cnv.fillStyle = "#ffcd42";
        cnv.fillText(cellY[i].name,230, 35+cellY[i].y);

        cnv.font = "20px arial";
        cnv.textAlign = "right";
        var resources = 0;
        if(cellY[i].pricewood != 0){
            cnv.drawImage(woodlog,455,100 - resources + cellY[i].y,45,45);
            cnv.fillText(cellY[i].pricewood,460,130 - resources + cellY[i].y);
            resources = resources + 40;
        }
        if(cellY[i].pricestone != 0){
            cnv.drawImage(stone,455,100 - resources + cellY[i].y,45,45);
            cnv.fillText(cellY[i].pricestone,460,130 - resources + cellY[i].y);
            resources = resources + 40;
        }
        if(cellY[i].priceiron != 0){
            cnv.drawImage(ironBar,455,100 - resources + cellY[i].y,45,45);
            cnv.fillText(cellY[i].priceiron,460,130 - resources + cellY[i].y);
            resources = resources + 40;
        }
        
        if(cellY[i].current == cellY[i].max){
            cnv.fillStyle ="#910606";
            cnv.fillText("MAX",490,40 + cellY[i].y);
        }
        else{
            cnv.fillText(cellY[i].current + " / " + cellY[i].max,490,30 + cellY[i].y);
        }
        cnv.fillStyle ="#fcba03";
        cnv.font = "26px arial";
        switch(deployedStage){
            case 0:{
                cnv.drawImage(woodimagesArray[i],10,20 + cellY[i].y,100,100);
                break;
            }
            case 1:{
                cnv.drawImage(stoneimagesArray[i],10,20 + cellY[i].y,100,100);
                break;
            }
            case 2:{
                cnv.drawImage(ironimagesArray[i],10,20 + cellY[i].y,100,100);
                break;
            }
        }
    }
}
var speed = 0;
var position = 0;
var target = 0;
var boundary = false;
export function increaseSpeed(value,canvas){
    value = value*1.5;
    var futurePosition = 5 + position + value;
    var southEnd = -canvas.height;
    if(deployedStage == 0){
        southEnd += 325;
    }
    else if(deployedStage == 1){
        southEnd += 475;
    }
    else{
        southEnd += 625;
    }
    boundary = false;
    target = 0;
    if(futurePosition > 5){
        boundary = true;
        if(futurePosition > 200){
            return;
        }
        else{
            speed=value;
        }
    }
    else{
        if(futurePosition > southEnd){
            speed=value;
        }
        if(futurePosition < southEnd+220){
            boundary = true;
            target = southEnd + 210;
        }
    }
}
export function changePosition(){
    position += speed;
    speed = 0;
}
export function deacreseSpeed(){
    if(boundary){
        if(target - position < 20 && target - position > 0 || target - position > -20 && target - position < 0){
            position = target;
            boundary = false;
        }
        else if(position < target){
            position+=20;
        }
        else if(position > target){
            position-=20;
        }
    }
}
export function getCellCount(){
    switch(deployedStage){
        case 0:{
            return woodCellCount;
        }
        case 1:{
            return stoneCellCount;
        }
        case 2:{
            return ironCellCount;
        }
    }
    return false;
}
export function hoverOverUpgrade(index){
    cellY[index].hovered = true;
}
export function unhoverOverUpgrade(index){
    cellY[index].hovered = false;
}
export function getcellY(index){
    return cellY[index].y;
}
export function getDeployedStage(){
    return deployedStage;
}