import { addTypeToArray, clickedOnResource, addPerClick,addDurability,addSpawnCount} from './spawner.js';
import {
    drawSideBarButton, drawSideBar, drawEras, drawUpgradeCells,
    deacreseSpeed, increaseSpeed, changePosition, getcellY,hoverOverUpgrade,
    getCellCount, unhoverOverUpgrade, buyUpgrade, fillCells, getDeployedStage
} from './sideBar.js';
document.body.style.backgroundImage = 'url(./img/grass.jpg)';
const canvas = document.getElementById('gameboard');
const cnv = gameboard.getContext('2d');
var clicked;
var clickedY;
//icon images 
const woodLog = new Image(); woodLog.src = './img/woodLog.png';
const stone = new Image(); stone.src = './img/stone.png';
const ironBar = new Image(); ironBar.src = './img/ironBar.png';

var winCondition = false;
var time = -0.1;
var autosaveTimer = 0;
var interval = 100; // ms
var expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
    var dt = Date.now() - expected; 
    if (dt > interval) {
    }
    else{
        if(autosaveTimer == 50){
            autosaveTimer = 0;
        }
        else{
            autosaveTimer++;
        }
        time +=0.1;
    }
    expected += interval;
    if(winCondition){

    }
    else{
        setTimeout(step, Math.max(0, interval - dt)); 
    }
}

//elements arrays
var elementArray = [];
var floatingNumber = [];
//
var gameframe = 0;
var mods = {
    woodMod1:1,
    woodMod2:1,
    stoneMod:1
}
//Resources count 
var woodCount = 0;
var stoneCount = 0;
var ironCount = 0;
//
var drawBar = false;
var hoveredEras=0;
//upgrades
var woodSpawnRate = 0;

var woodAutoClicker=false;
var woodAutoClickerUpgrade=0;

var stoneAutoClicker=false;
var stoneAutoClickerUpgrade=0;

var ironAutoClicker=false;
var ironAutoClickerUpgrade=0;

var stoneSpawnRate = 0;

var ironSpawnRate = 0;
var gamestate = 1;
//counter 
var counter={
    stage:0,
    x:80,
}
var counterDistance = counter.stage * counter.x;

fillCells(0);

function animate(){
    canvas.width = document.documentElement.clientWidth - 10;
    canvas.height = document.documentElement.clientHeight - 25;
    cnv.clearRect(0,0,canvas.width,canvas.height);
    switch(gamestate){
        case 0:{ //login
            cnv.fillStyle = "#377326";
            cnv.fillRect((canvas.width/2)-270, (canvas.height/2) - 150,500,300); //Back
            cnv.fillStyle = "#000000";
            cnv.fillRect((canvas.width/2)-150, (canvas.height/2) - 150,300,300); //NameBack
            cnv.fillStyle = "##ffffff";
            cnv.fillRect((canvas.width/2)-150, (canvas.height/2) - 150,300,300); //Name
            cnv.fillStyle = "#000000";
            cnv.fillRect((canvas.width/2)-150, (canvas.height/2) - 150,300,300); //PassBack
            cnv.fillStyle = "##ffffff";
            cnv.fillRect((canvas.width/2)-150, (canvas.height/2) - 150,300,300); //Pass
            cnv.fillStyle = "#377326";
            cnv.fillRect((canvas.width/2)-150, (canvas.height/2) - 150,300,300); //Button
            break;
        }
        case 1:{ //game
            cnv.fillStyle = "#000000";
            var rand = 0;
            //Spawn new resources
            if(gameframe%(30-woodSpawnRate) == 0 && elementArray.length<1000){
                addTypeToArray(canvas, elementArray, 1);
            }
            if(gameframe%(30-stoneSpawnRate) == 0 && elementArray.length<1000 && counter.stage>=1){
                addTypeToArray(canvas,elementArray, 2);
            }
            if(gameframe%(30-ironSpawnRate) == 0 && elementArray.length<1000 && counter.stage>= 2){
                addTypeToArray(canvas,elementArray, 3);
            }
            if(gameframe%(80-(15*woodAutoClickerUpgrade)) == 0 && woodAutoClicker){
                var tempTrees = 0;
                for(var i = 0; i<elementArray.length;i++)
                {
                    if(elementArray[i].type == 1){
                        tempTrees++;
                    }
                }
                if(tempTrees!=0){
                    while(true){
                        rand = Math.floor(Math.random() * elementArray.length);
                        if(elementArray[rand].type == 1){
                            var event = {
                                pageX: elementArray[rand].x+100,
                                pageY: elementArray[rand].y+100,
                            }
                            woodCount += clickedOnResource(event, elementArray, rand ,floatingNumber,mods);
                            break;
                        }
                    }
                }
            }
            if(gameframe%(80-(15*stoneAutoClickerUpgrade)) == 0 && stoneAutoClicker){
                var tempStone = 0;
                for(var i = 0; i<elementArray.length;i++)
                {
                    if(elementArray[i].type == 2){
                        tempStone++;
                    }
                }
                if(tempStone!=0){
                    while(true){
                        rand = Math.floor(Math.random() * elementArray.length);
                        if(elementArray[rand].type == 2){
                            var event = {
                                pageX: elementArray[rand].x+100,
                                pageY: elementArray[rand].y+100,
                            }
                            stoneCount += clickedOnResource(event, elementArray, rand ,floatingNumber,mods);
                            break;
                        }
                    }
                }
            }
            if(gameframe%(80-(15*ironAutoClickerUpgrade)) == 0 && ironAutoClicker){
                var tempTrees = 0;
                for(var i = 0; i<elementArray.length;i++)
                {
                    if(elementArray[i].type == 3){
                        tempTrees++;
                    }
                }
                if(tempTrees!=0){
                    while(true){
                        rand = Math.floor(Math.random() * elementArray.length);
                        if(elementArray[rand].type == 3){
                            var event = {
                                pageX: elementArray[rand].x+100,
                                pageY: elementArray[rand].y+100,
                            }
                            ironCount += clickedOnResource(event, elementArray, rand ,floatingNumber,mods);
                            break;
                        }
                    }
                }
            }
            //Draw elementArray
            for(let i = 0;i<elementArray.length;i++){
                cnv.drawImage(elementArray[i].image,elementArray[i].x,elementArray[i].y,200,300)
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
                            cnv.drawImage(woodLog,floatingNumber[i].x,floatingNumber[i].y-floatingNumber[i].tempy-34,50,50)
                            break;
                        }
                        case 2:{
                            cnv.drawImage(stone,floatingNumber[i].x,floatingNumber[i].y-floatingNumber[i].tempy-34,50,50)
                            break;
                        }
                        case 3:{
                            cnv.drawImage(ironBar,floatingNumber[i].x,floatingNumber[i].y-floatingNumber[i].tempy-34,50,50)
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
        
            cnv.textAlign = "left";
        
            //Draw counter
            cnv.fillStyle = "#000000";
            cnv.globalAlpha = 0.3;
            cnv.fillRect(canvas.width - (90 + (counterDistance)),0,600,80);
            cnv.globalAlpha = 1;
        
            //Wood counter + icon
            cnv.font = "30px arial";
            cnv.fillStyle = "#f5e6bc";
            cnv.drawImage(woodLog, canvas.width-80,0,50,50);
            cnv.fillText(Intl.NumberFormat("en-GB", {
                notation: "compact",
                compactDisplay: "short",
              }).format(woodCount),  canvas.width-80, 70);
        
            if(counter.stage>0){
            cnv.drawImage(stone, canvas.width-160,0,50,50);
            cnv.fillText(Intl.NumberFormat("en-GB", {
                notation: "compact",
                compactDisplay: "short",
              }).format(stoneCount),  canvas.width-160, 70);
            }
        
            if(counter.stage>1){
                cnv.drawImage(ironBar, canvas.width-240,0,50,50);
                cnv.fillText(Intl.NumberFormat("en-GB", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(ironCount),  canvas.width-240, 70);
            }
        
            //Draw SideBar
            drawSideBarButton(canvas,cnv,drawBar);
            if(drawBar){
                drawSideBar(canvas,cnv);
                drawUpgradeCells(canvas,cnv,woodLog,stone,ironBar);
                drawEras(canvas,cnv,hoveredEras,counter.stage);
            }
            deacreseSpeed();
            break;
        }
        case 2:{
            if(winCondition){
                cnv.font = "30px arial";
                cnv.fillStyle = "#f5e6bc";
                cnv.clearRect(0,0,canvas.width,canvas.height);
                cnv.fillText("You Win. \n Congrats. \n Your Time: \n" + Math.round(time * 10) / 10 ,canvas.width/2, canvas.height/2)
            } 
            break;
        }
    }
    gameframe++;
    requestAnimationFrame(animate);
};
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
function addAutoClicker(type,pricewood,pricestone,priceiron){
    switch(type){
        case 1:{
            woodAutoClicker=true;
            woodAutoClickerUpgrade++;
            break;
        }
        case 2:{
            stoneAutoClicker=true;
            stoneAutoClickerUpgrade++;
            break;
        }
        case 3:{
            ironAutoClicker=true;
            ironAutoClickerUpgrade++;
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
            woodSpawnRate +=5;
            break;
        }
        case 2:{
            stoneSpawnRate +=5;
            break;
        }
        case 3:{
            ironSpawnRate +=5;
            break;
        }
    }
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function addStage(type,pricewood,pricestone,priceiron){
    counter.stage=counter.stage+1;
    counterDistance = counter.stage * counter.x;
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
function addModifier(type,pricewood,pricestone,priceiron){
    switch(type){
        case 1 :{
            if(mods.woodMod1>1){
                mods.woodMod2 = 2;
            }
            else{
                mods.woodMod1 = 2;
            }
            break;
        }
        case 2:{
            mods.stoneMod = 2;
            break;
        }
        case 3:{
            winCondition = true;
            gamestate = 2;
            break;
        }
    }
    woodCount -= pricewood; 
    stoneCount -= pricestone;
    ironCount -= priceiron;
}
canvas.addEventListener('click', function(event) { 
    switch(gamestate){
        case 0:{
            if(event.y> 10 && event.y < 110 && event.x > 10 && event.x < 170){
                fillCells(0);
            }
            break;
        }
        case 1:{
            var side = 0;
    if(drawBar){
        side = 500;
        if(event.y> 10 && event.y < 110 && event.x > 10 && event.x < 170){
            fillCells(0);
        }
        else if(event.y> 10 && event.y < 110 && event.x > 175 && event.x < 335 && counter.stage>0){
            fillCells(1);
        }
        else if(event.y> 10 && event.y < 110 && event.x > 340 && event.x < 500 && counter.stage>1){
            fillCells(2);
        }
        else{
        for(var i = 0 ; i<= getCellCount();i++){
            if(event.y> getcellY(i)+85 && event.y < getcellY(i)+150 && event.x > 135 && event.x < 340){
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
                        buyUpgrade(i, woodCount,stoneCount,ironCount, addAutoClicker);
                        break;
                    }
                    case 5:{
                        if(getDeployedStage() == 2){
                            buyUpgrade(i, woodCount,stoneCount,ironCount, addModifier);
                        }
                        else{
                            buyUpgrade(i, woodCount,stoneCount,ironCount, addStage);
                        }
                        break;
                    }
                    case 6:{
                        buyUpgrade(i, woodCount,stoneCount,ironCount, addModifier);
                        break;
                    }
                    case 7:{
                        buyUpgrade(i, woodCount,stoneCount,ironCount, addModifier);
                        break;
                    }
                }
            } 
        }
    }
    }
    if( event.pageX > side
    &&  event.pageX < side+50
    &&  event.pageY > (canvas.height/2)-70
    &&  event.pageY < (canvas.height/2)+30){
        drawBar=!drawBar;
        return;
    }
    for(var i = elementArray.length-1;i>-1;i--){
        if(     event.pageX > elementArray[i].x
            &&  event.pageX < elementArray[i].x + 200
            &&  event.pageY > elementArray[i].y 
            &&  event.pageY < elementArray[i].y + 300
            &&  event.pageX > side){
                switch (elementArray[i].type){
                    case 1:{
                        woodCount += clickedOnResource(event, elementArray, i ,floatingNumber, mods);
                        break;
                    }
                    case 2:{
                        stoneCount += clickedOnResource(event, elementArray, i ,floatingNumber, mods);
                        break;
                    }
                    case 3:{
                        ironCount +=clickedOnResource(event, elementArray, i ,floatingNumber, mods);
                        break;
                    }
                    default:{
                        break;
                    }
                }
                break;
        }
    }
            break;
        }
        case 2:{
            break;
        }
    }
}, false);

canvas.addEventListener('mousedown', function(event) { 
    if(event.x < 500){
        clicked=true;
        clickedY = event.y;
    }
});
canvas.addEventListener('mousemove', function(event) { 
    switch(gamestate){
        case 0:{
            if(event.y> 10 && event.y < 110 && event.x > 10 && event.x < 170){}
        }
        case 1:{
            if(clicked && drawBar){
                increaseSpeed(( event.y - clickedY),canvas);
            }
            if(drawBar){
                for(var i = 0 ; i<= getCellCount();i++){
                    if(event.y> getcellY(i)+85 && event.y < getcellY(i)+150 && event.x > 135 && event.x < 340){
                        hoverOverUpgrade(i);
                    }
                    else{
                        unhoverOverUpgrade(i);
                    }
                }
                if(event.y> 10 && event.y < 110 && event.x > 10 && event.x < 170){
                    hoveredEras=1;
                }
                else if(event.y> 10 && event.y < 110 && event.x > 175 && event.x < 335){
                    hoveredEras=2;
                }
                else if(event.y> 10 && event.y < 110 && event.x > 340 && event.x < 500){
                    hoveredEras=3;
                }
                else{
                    hoveredEras=0;
                }
            }
        }
        case 2:{

        }
    }
});
canvas.addEventListener('wheel',function(event){
    if(drawBar){
        increaseSpeed(-event.deltaY,canvas);
        changePosition();
    }
}, false);
canvas.addEventListener('mouseup', function(event) { 
    clicked=false;
    changePosition();
});
animate();
