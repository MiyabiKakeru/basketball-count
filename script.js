let flag
let subFlag
const buttonList = document.querySelectorAll("button")
const aDoc = document.getElementById("aPoi")
const bDoc = document.getElementById("bPoi")
const mainTimerDoc = document.getElementById("mainTimer")
const subTimerDoc = document.getElementById("subTimer")
const mainB = document.getElementById("mainB")
const subB = document.getElementById("subB")
let aPoi = aDoc.textContent
let bPoi = bDoc.textContent
let mainTimer
let subTimer
//タイマー用変数
let mainTimes = 0
let subTimes = 0

function mainTSet(t){
    if(t % 60 == 0){
    return t / 60 + ":" + "00"
    }else if(t < 60){
        if(t % 60 < 10){
        return "0:0" + t
        } else {
            return "0:" + t
        }
    }else if(t % 60 < 10){
        return Math.floor(t / 60) + ":0" + t % 60 
    }
    else{
        return Math.floor(t / 60) + ":" + t % 60
    }
}

function mainTChange(){
    if(mainTimes <= 0){
        clearInterval(mainTimer)
    }else if(mainTimes == 1){
        mainTimes -= 1
        mainTimerDoc.textContent = mainTSet(mainTimes)
        mainB.play()
    }else{
        mainTimes -= 1
        mainTimerDoc.textContent = mainTSet(mainTimes)
    }
}

function subTSet(t){
    if(subTimes >= 6){
        return Math.floor(subTimes)
    }else if(Math.floor(subTimes * 10) / 10 % 1 == 0){
        return Math.floor(subTimes) + ".0"
    }else{
        return Math.floor(subTimes * 10) / 10
    }
}
function subTChange(){
    if(subTimes <= 0.1){
        clearInterval(subTimer)
        subTimerDoc.textContent = subTSet(subTimes)
    }else if(Math.floor(subTimes * 10) / 10 == 0.1){
        subTimes -= 0.1
        subTimerDoc.textContent = subTSet(subTimes)
        subB.play()
    }else{
        subTimes -= 0.1
        subTimerDoc.textContent = subTSet(subTimes)
    }
}

class eventLis {
    constructor(name) {
        this.name = name
    }
    ptSet() {
        if(this.name.textContent == "reset"){
            if(this.name.className == "a"){
                this.name.addEventListener("click", () =>{
                    aPoi = 0
                })
            }else if(this.name.className == "b"){
                this.name.addEventListener("click", () =>{
                    bPoi = 0
                })
            }
        }else{
        if(this.name.className == "a"){
                this.name.addEventListener("click", () =>{
            aPoi = Number(aPoi) + Number(this.name.textContent)
                })
        }else if(this.name.className == "b"){
                this.name.addEventListener("click", () =>{
                    bPoi = Number(bPoi) + Number(this.name.textContent)
                })
            }
        }
        this.name.addEventListener("click",() =>{
            aDoc.textContent = aPoi
            bDoc.textContent = bPoi
        })
    }
    timerSet() {
        if(this.name.className == "m"){
            if(this.name.textContent == "start"){
                this.name.addEventListener("click",() =>{
                    if(flag == "true"){   
                    }else{
                    flag = "true"
                    mainTimer = setInterval(mainTChange,1000)
                    }
                })
            }else if(this.name.textContent == "stop"){
                this.name.addEventListener("click", () => {
                    flag = "false"
                    clearInterval(mainTimer)
                })
            }else if(this.name.textContent == "reset"){
                this.name.addEventListener("click", () =>{
                    mainTimes = 0
                    mainTimerDoc.textContent = mainTSet(mainTimes)
                })
            }else{
                this.name.addEventListener("click", () => {
                    mainTimes += Number(this.name.id)
                })
            }
            this.name.addEventListener("click", () => {
                mainTimerDoc.textContent = mainTSet(mainTimes)
            })
        }else if(this.name.className == "s"){
            if(this.name.textContent == "start"){
                this.name.addEventListener("click", () => {
                    if(subFlag == "true"){
                    }else{
                clearInterval(subTimer)
                subTimer = setInterval(subTChange,100)
                subFlag = "true"
                    }
                subTimerDoc.setAttribute("style","color:#f00;")
                })
            }else if(this.name.textContent == "stop"){
                this.name.addEventListener("click", () => {
                clearInterval(subTimer)
                })
            }else if(this.name.textContent == "show"){
                this.name.addEventListener("click", () => {
                subTimerDoc.setAttribute("style","color:#f00;")
                })
            }else if(this.name.textContent == "hide"){
                this.name.addEventListener("click", () => {
                subTimerDoc.setAttribute("style","color:#000;")
                clearInterval(subTimer)
                })
            }else if(this.name.textContent == "+1"){
                this.name.addEventListener("click", () => {
                    subTimes++
                    subTimerDoc.textContent = subTSet(subTimes)
                })
            }else if(this.name.textContent == "-1"){
                this.name.addEventListener("click", () => {
                    subTimes--
                    subTimerDoc.textContent = subTSet(subTimes)
                })
            }else{
                this.name.addEventListener("click", () => {
                clearInterval(subTimer)
                subTimes = Number(this.name.textContent) + 1
                subTimer = setInterval(subTChange,100)
                subTimerDoc.setAttribute("style","color:#f00;")
                })
            }
        }
    }
}

//ポイント
for(let button of buttonList){
    new eventLis(button).ptSet()
    new eventLis(button).timerSet()
    button.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            if(flag == "true"){
                clearInterval(mainTimer)
                flag = "false"
            }else{
                mainTimer = setInterval(mainTChange,1000)
                flag = "true"
            }
        }
    });
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        subTimes ++
        subTimerDoc.textContent = subTSet()
    }
    if (event.key === 'ArrowDown') {
        subTimes --
        subTimerDoc.textContent = subTSet()
    }
    if (event.key === ' ') {
        if(flag == "true"){
            clearInterval(mainTimer)
            flag = "false"
        }else{
            mainTimer = setInterval(mainTChange,1000)
            flag = "true"
        }
    }
});
