let arr = [
    [
        [],
        [],
    ],
    [
        [],
        [],
    ],
]
let green = "rgb(108, 255, 9)"
let red = "rgba(255, 2, 2, 1)"
let yellow = "rgba(255, 251, 25, 1)"
let cyan = "rgb(12, 255, 255)"
let orange = "rgb(255, 169, 9)"
let blue = "rgba(2, 27, 255, 1)"
let arrColor = [red, blue, orange, yellow, green, cyan]


let b1 = document.querySelector('.b1')
let b2 = document.querySelector('.b2')
let b3 = document.querySelector('.b3')
let b4 = document.querySelector('.b4')
let b5 = document.querySelector('.b5')
let b6 = document.querySelector('.b6')
let b7 = document.querySelector('.b7')
let b8 = document.querySelector('.b8')

let container = document.querySelector('.container')

let number = 1
createCube()
function createCube() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                let cube = document.createElement('div')
                cube.classList.add('cube')
                for (let p = 0; p < 6; p++) {
                    let face = document.createElement('div')
                    cube.appendChild(face)
                    createFace(p, face)
                }
                container.appendChild(cube)
                arr[i][j].push(cube)
            }
        }
    }
}

function createFace(index, elem) {

    let arrRotY = ["0", "0", "0", "90", "180", "270"]
    let arrRotX = ["90", "270", "0", "0", "0", "0"]
    elem.style.height = "99px"
    elem.style.width = "99px"
    elem.style.border = "solid 1px black"
    elem.style.position = "absolute"
    elem.style.transformStyle = "preserve-3d"
    elem.style.transform = "rotateY(" + arrRotY[index] + "deg) rotateX(" + arrRotX[index] + "deg) translateZ(50px)"
    elem.style.background = arrColor[index]
}
function colorFace(elem1, elem2, elem3, elem4, index) {
    let arrElem = [elem1, elem2, elem3, elem4]
    for(let j = 0; j < 4; j++){
        let arrStockageFace = []
        let arrColor2 = []
        for (let i = 0; i < arrElem[j].children.length; i++) {
            arrStockageFace.push(arrElem[j].children[i])
            arrColor2.push(window.getComputedStyle(arrElem[j].children[i]).getPropertyValue("background-color"))
        }    
        let newArr = []
        if(index == 1){
            newArr.push(arrColor2[4], arrColor2[2], arrColor2[0], arrColor2[3], arrColor2[1], arrColor2[5])
        }
        if(index == 2){
            newArr.push(arrColor2[2], arrColor2[4], arrColor2[1], arrColor2[3], arrColor2[0], arrColor2[5])
        }
        if(index == 3){
            newArr.push(arrColor2[0], arrColor2[1], arrColor2[5], arrColor2[2], arrColor2[3], arrColor2[4])
        }
        if(index == 4){
            newArr.push(arrColor2[0], arrColor2[1], arrColor2[5], arrColor2[2], arrColor2[3], arrColor2[4])
        }
        for (let i = 0; i < arrStockageFace.length; i++) {  
            arrStockageFace[i].style.background = newArr[i]    
        }
    }

}



displayCube()
function displayCube() {
    let x, y, z = 0
    for (let i = 0; i < 2; i++) {
        y = 0
        for (let j = 0; j < 2; j++) {
            x = 0
            for (let k = 0; k < 2; k++) {
                arr[i][j][k].style.transform = "translate3d(" + x + "px," + y + "px," + z + "px)"

                x += 100
            }
            y += 100
        }
        z += 100
    }
}

function transitionNone(elem1, elem2, elem3, elem4, time){
    elem1.style.transition = time
    elem2.style.transition = time
    elem3.style.transition = time
    elem4.style.transition = time
}

//------------------ Deplacement X----------------------
function deplacement1() {
    let d1 = arr[0][0][0]
    let d2 = arr[0][1][0]
    let d3 = arr[1][0][0]
    let d4 = arr[1][1][0]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 1)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 100 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 0 + "px) rotateX(" + angle +") "
        d3.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + 100 + "px) rotateX(" + angle +") "
        d4.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + 0 + "px) rotateX(" + angle +")"
    }
    rotate("-90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][0] = d2
    arr[0][1][0] = d4
    arr[1][0][0] = d1
    arr[1][1][0] = d3
}

function deplacement2() {
    let d1 = arr[0][0][0]
    let d2 = arr[0][1][0]
    let d3 = arr[1][0][0]
    let d4 = arr[1][1][0]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 2)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + 0 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + 100 + "px) rotateX(" + angle +") "
        d3.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 0 + "px) rotateX(" + angle +") "
        d4.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 100 + "px) rotateX(" + angle +")"
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][0] = d3
    arr[0][1][0] = d1
    arr[1][0][0] = d4
    arr[1][1][0] = d2
}
function deplacement1Bis() {
    let d1 = arr[0][0][1]
    let d2 = arr[0][1][1]
    let d3 = arr[1][0][1]
    let d4 = arr[1][1][1]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 1)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 100 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 0 + "px) rotateX(" + angle +") "
        d3.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 100 + "px) rotateX(" + angle +") "
        d4.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 0 + "px) rotateX(" + angle +")"
    }
    rotate("-90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][1] = d2
    arr[0][1][1] = d4
    arr[1][0][1] = d1
    arr[1][1][1] = d3
}

function deplacement2Bis() {
    let d1 = arr[0][0][1]
    let d2 = arr[0][1][1]
    let d3 = arr[1][0][1]
    let d4 = arr[1][1][1]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 2)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 0 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 100 + "px) rotateX(" + angle +") "
        d3.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 0 + "px) rotateX(" + angle +") "
        d4.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 100 + "px) rotateX(" + angle +")"
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][1] = d3
    arr[0][1][1] = d1
    arr[1][0][1] = d4
    arr[1][1][1] = d2
}

//------------------ Deplacement Y----------------------

function deplacement3() {
    let d1 = arr[0][0][0]
    let d2 = arr[0][0][1]
    let d3 = arr[1][0][0]
    let d4 = arr[1][0][1]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 3)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 100 + "px) rotateY(" + angle + ") "
        d2.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 0 + "px) rotateY(" + angle +") "
        d3.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 100 + "px) rotateY(" + angle +") "
        d4.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 0 + "px) rotateY(" + angle +")"
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][0] = d2
    arr[0][0][1] = d4
    arr[1][0][0] = d1
    arr[1][0][1] = d3
}

function deplacement4() {
    let d1 = arr[0][0][0]
    let d2 = arr[0][1][0]
    let d3 = arr[1][0][0]
    let d4 = arr[1][1][0]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 2)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + 0 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + 100 + "px) rotateX(" + angle +") "
        d3.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 0 + "px) rotateX(" + angle +") "
        d4.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + 100 + "px) rotateX(" + angle +")"
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][0] = d3
    arr[0][1][0] = d1
    arr[1][0][0] = d4
    arr[1][1][0] = d2
}
function deplacement1Bis() {
    let d1 = arr[0][0][1]
    let d2 = arr[0][1][1]
    let d3 = arr[1][0][1]
    let d4 = arr[1][1][1]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 1)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 100 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 0 + "px) rotateX(" + angle +") "
        d3.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 100 + "px) rotateX(" + angle +") "
        d4.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 0 + "px) rotateX(" + angle +")"
    }
    rotate("-90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][1] = d2
    arr[0][1][1] = d4
    arr[1][0][1] = d1
    arr[1][1][1] = d3
}

function deplacement2Bis() {
    let d1 = arr[0][0][1]
    let d2 = arr[0][1][1]
    let d3 = arr[1][0][1]
    let d4 = arr[1][1][1]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, 2)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, "none")
    }, 1000)
    function rotate(angle){
        d1.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 0 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + 100 + "px) rotateX(" + angle +") "
        d3.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 0 + "px) rotateX(" + angle +") "
        d4.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + 100 + "px) rotateX(" + angle +")"
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, "all 1s")

    arr[0][0][1] = d3
    arr[0][1][1] = d1
    arr[1][0][1] = d4
    arr[1][1][1] = d2
}
//-----------boutton

b1.addEventListener('click', function () {
    deplacement1()
})
b2.addEventListener('click', function () {
    deplacement2()
})
b3.addEventListener('click', function () {
    deplacement1Bis()
})
b4.addEventListener('click', function () {
    deplacement2Bis()
})
b5.addEventListener('click', function () {
    deplacement3()
})
b6.addEventListener('click', function () {
    deplacement4()
})
