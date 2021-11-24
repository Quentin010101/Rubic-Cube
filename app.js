let delay = "0.5s"

let arr = [
    [
        [],
        [],
        [],
    ],
    [
        [],
        [],
        [],
    ],
    [
        [],
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
let b9 = document.querySelector('.b9')
let b10 = document.querySelector('.b10')
let b11 = document.querySelector('.b11')
let b12 = document.querySelector('.b12')
let b13 = document.querySelector('.b13')
let b14 = document.querySelector('.b14')
let b15 = document.querySelector('.b15')
let b16 = document.querySelector('.b16')
let b17 = document.querySelector('.b17')
let b18 = document.querySelector('.b18')

let container = document.querySelector('.container')

createCube()
function createCube() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
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
    elem.style.height = "100px"
    elem.style.width = "100px"
    elem.style.border = "solid 2px black"
    elem.style.position = "absolute"
    elem.style.transformStyle = "preserve-3d"
    elem.style.transform = "rotateY(" + arrRotY[index] + "deg) rotateX(" + arrRotX[index] + "deg) translateZ(50px)"
    elem.style.background = arrColor[index]
}
function colorFace(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9, index) {
    let arrElem = [elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9]
    for (let j = 0; j < 9; j++) {
        let arrStockageFace = []
        let arrColor2 = []
        for (let i = 0; i < arrElem[j].children.length; i++) {
            arrStockageFace.push(arrElem[j].children[i])
            arrColor2.push(window.getComputedStyle(arrElem[j].children[i]).getPropertyValue("background-color"))
        }
        let newArr = []
        if (index == 1) {
            newArr.push(arrColor2[2], arrColor2[4], arrColor2[1], arrColor2[3], arrColor2[0], arrColor2[5])
        }
        if (index == 2) {
            newArr.push(arrColor2[4], arrColor2[2], arrColor2[0], arrColor2[3], arrColor2[1], arrColor2[5])

        }
        if (index == 3) {
            newArr.push(arrColor2[0], arrColor2[1], arrColor2[3], arrColor2[4], arrColor2[5], arrColor2[2])
        }
        if (index == 4) {
            newArr.push(arrColor2[0], arrColor2[1], arrColor2[5], arrColor2[2], arrColor2[3], arrColor2[4])
        }
        if (index == 5) {
            newArr.push(arrColor2[5], arrColor2[3], arrColor2[2], arrColor2[0], arrColor2[4], arrColor2[1])
        }
        if (index == 6) {
            newArr.push(arrColor2[3], arrColor2[5], arrColor2[2], arrColor2[1], arrColor2[4], arrColor2[0])
        }
        for (let i = 0; i < arrStockageFace.length; i++) {
            arrStockageFace[i].style.background = newArr[i]
        }
    }

}

displayCube()
function displayCube() {
    let x, y, z = 0
    for (let i = 0; i < 3; i++) {
        y = 0
        for (let j = 0; j < 3; j++) {
            x = 0
            for (let k = 0; k < 3; k++) {
                arr[i][j][k].style.transform = "translate3d(" + x + "px," + y + "px," + z + "px)"

                x += 100
            }
            y += 100
        }
        z += 100
    }
}

function transitionNone(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9, time) {
    elem1.style.transition = time
    elem2.style.transition = time
    elem3.style.transition = time
    elem4.style.transition = time
    elem5.style.transition = time
    elem6.style.transition = time
    elem7.style.transition = time
    elem8.style.transition = time
    elem9.style.transition = time
}

//------------------ Deplacement X----------------------
function deplacement1(deplacementX, deplacementIndex) {
    let d1 = arr[0][0][deplacementX]
    let d2 = arr[1][0][deplacementX]
    let d3 = arr[2][0][deplacementX]
    let d4 = arr[0][1][deplacementX]
    let d5 = arr[1][1][deplacementX]
    let d6 = arr[2][1][deplacementX]
    let d7 = arr[0][2][deplacementX]
    let d8 = arr[1][2][deplacementX]
    let d9 = arr[2][2][deplacementX]

    setTimeout(() => {
        colorFace(d1, d2, d3, d4, d5, d6, d7, d8, d9, deplacementIndex)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "none")
    }, 1000)
    function rotate(angle) {
        switch (deplacementX) {
            case 0: valeurX = 0; break;
            case 1: valeurX = 100; break;
            case 2: valeurX = 200; break;
        }
        d1.style.transform = "translate3d(" + valeurX + "px," + 200 + "px," + 0 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + valeurX + "px," + 100 + "px," + 0 + "px) rotateX(" + angle + ") "
        d3.style.transform = "translate3d(" + valeurX + "px," + 0 + "px," + 0 + "px) rotateX(" + angle + ") "
        d4.style.transform = "translate3d(" + valeurX + "px," + 200 + "px," + 100 + "px) rotateX(" + angle + ")"
        d5.style.transform = "translate3d(" + valeurX + "px," + 100 + "px," + 100 + "px) rotateX(" + angle + ") "
        d6.style.transform = "translate3d(" + valeurX + "px," + 0 + "px," + 100 + "px) rotateX(" + angle + ") "
        d7.style.transform = "translate3d(" + valeurX + "px," + 200 + "px," + 200 + "px) rotateX(" + angle + ") "
        d8.style.transform = "translate3d(" + valeurX + "px," + 100 + "px," + 200 + "px) rotateX(" + angle + ")"
        d9.style.transform = "translate3d(" + valeurX + "px," + 0 + "px," + 200 + "px) rotateX(" + angle + ") "
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "all " + delay)

    arr[0][0][deplacementX] = d3
    arr[1][0][deplacementX] = d6
    arr[2][0][deplacementX] = d9
    arr[0][1][deplacementX] = d2
    arr[1][1][deplacementX] = d5
    arr[2][1][deplacementX] = d8
    arr[0][2][deplacementX] = d1
    arr[1][2][deplacementX] = d4
    arr[2][2][deplacementX] = d7
}
//-------------------------------
function deplacement1bis(deplacementX, deplacementIndex) {
    let d1 = arr[0][0][deplacementX]
    let d2 = arr[1][0][deplacementX]
    let d3 = arr[2][0][deplacementX]
    let d4 = arr[0][1][deplacementX]
    let d5 = arr[1][1][deplacementX]
    let d6 = arr[2][1][deplacementX]
    let d7 = arr[0][2][deplacementX]
    let d8 = arr[1][2][deplacementX]
    let d9 = arr[2][2][deplacementX]


    setTimeout(() => {
        colorFace(d1, d2, d3, d4, d5, d6, d7, d8, d9, deplacementIndex)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "none")
    }, 1000)
    function rotate(angle) {
        switch (deplacementX) {
            case 0: valeurX = 0; break;
            case 1: valeurX = 100; break;
            case 2: valeurX = 200; break;
        }
        d1.style.transform = "translate3d(" + valeurX + "px," + 0 + "px," + 200 + "px) rotateX(" + angle + ") "
        d2.style.transform = "translate3d(" + valeurX + "px," + 100 + "px," + 200 + "px) rotateX(" + angle + ") "
        d3.style.transform = "translate3d(" + valeurX + "px," + 200 + "px," + 200 + "px) rotateX(" + angle + ") "
        d4.style.transform = "translate3d(" + valeurX + "px," + 0 + "px," + 100 + "px) rotateX(" + angle + ")"
        d5.style.transform = "translate3d(" + valeurX + "px," + 100 + "px," + 100 + "px) rotateX(" + angle + ") "
        d6.style.transform = "translate3d(" + valeurX + "px," + 200 + "px," + 100 + "px) rotateX(" + angle + ") "
        d7.style.transform = "translate3d(" + valeurX + "px," + 0 + "px," + 0 + "px) rotateX(" + angle + ") "
        d8.style.transform = "translate3d(" + valeurX + "px," + 100 + "px," + 0 + "px) rotateX(" + angle + ")"
        d9.style.transform = "translate3d(" + valeurX + "px," + 200 + "px," + 0 + "px) rotateX(" + angle + ") "
    }
    rotate("-90deg")
    transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "all " + delay)

    arr[0][0][deplacementX] = d7
    arr[1][0][deplacementX] = d4
    arr[2][0][deplacementX] = d1
    arr[0][1][deplacementX] = d8
    arr[1][1][deplacementX] = d5
    arr[2][1][deplacementX] = d2
    arr[0][2][deplacementX] = d9
    arr[1][2][deplacementX] = d6
    arr[2][2][deplacementX] = d3
}
//------------------ Deplacement Y----------------------
function deplacement2(deplacementY, deplacementIndex) {
    let d1 = arr[0][deplacementY][0]
    let d2 = arr[1][deplacementY][0]
    let d3 = arr[2][deplacementY][0]
    let d4 = arr[0][deplacementY][1]
    let d5 = arr[1][deplacementY][1]
    let d6 = arr[2][deplacementY][1]
    let d7 = arr[0][deplacementY][2]
    let d8 = arr[1][deplacementY][2]
    let d9 = arr[2][deplacementY][2]


    setTimeout(() => {
        colorFace(d1, d2, d3, d4, d5, d6, d7, d8, d9, deplacementIndex)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "none")
    }, 1000)
    function rotate(angle) {
        switch (deplacementY) {
            case 0: valeurY = 0; break;
            case 1: valeurY = 100; break;
            case 2: valeurY = 200; break;
        }
        d1.style.transform = "translate3d(" + 200 + "px," + valeurY + "px," + 0 + "px) rotateY(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + valeurY + "px," + 0 + "px) rotateY(" + angle + ") "
        d3.style.transform = "translate3d(" + 0 + "px," + valeurY + "px," + 0 + "px) rotateY(" + angle + ") "
        d4.style.transform = "translate3d(" + 200 + "px," + valeurY + "px," + 100 + "px) rotateY(" + angle + ")"
        d5.style.transform = "translate3d(" + 100 + "px," + valeurY + "px," + 100 + "px) rotateY(" + angle + ") "
        d6.style.transform = "translate3d(" + 0 + "px," + valeurY + "px," + 100 + "px) rotateY(" + angle + ") "
        d7.style.transform = "translate3d(" + 200 + "px," + valeurY + "px," + 200 + "px) rotateY(" + angle + ") "
        d8.style.transform = "translate3d(" + 100 + "px," + valeurY + "px," + 200 + "px) rotateY(" + angle + ")"
        d9.style.transform = "translate3d(" + 0 + "px," + valeurY + "px," + 200 + "px) rotateY(" + angle + ") "
    }
    rotate("-90deg")
    transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "all " + delay)

    arr[0][deplacementY][0] = d3
    arr[1][deplacementY][0] = d6
    arr[2][deplacementY][0] = d9
    arr[0][deplacementY][1] = d2
    arr[1][deplacementY][1] = d5
    arr[2][deplacementY][1] = d8
    arr[0][deplacementY][2] = d1
    arr[1][deplacementY][2] = d4
    arr[2][deplacementY][2] = d7
}
//-------------------------------
function deplacement2bis(deplacementY, deplacementIndex) {
    let d1 = arr[0][deplacementY][0]
    let d2 = arr[1][deplacementY][0]
    let d3 = arr[2][deplacementY][0]
    let d4 = arr[0][deplacementY][1]
    let d5 = arr[1][deplacementY][1]
    let d6 = arr[2][deplacementY][1]
    let d7 = arr[0][deplacementY][2]
    let d8 = arr[1][deplacementY][2]
    let d9 = arr[2][deplacementY][2]


    setTimeout(() => {
        colorFace(d1, d2, d3, d4, d5, d6, d7, d8, d9, deplacementIndex)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "none")
    }, 1000)
    function rotate(angle) {
        switch (deplacementY) {
            case 0: valeurY = 0; break;
            case 1: valeurY = 100; break;
            case 2: valeurY = 200; break;
        }
        d1.style.transform = "translate3d(" + 0 + "px," + valeurY + "px," + 200 + "px) rotateY(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + valeurY + "px," + 200 + "px) rotateY(" + angle + ") "
        d3.style.transform = "translate3d(" + 200 + "px," + valeurY + "px," + 200 + "px) rotateY(" + angle + ") "
        d4.style.transform = "translate3d(" + 0 + "px," + valeurY + "px," + 100 + "px) rotateY(" + angle + ")"
        d5.style.transform = "translate3d(" + 100 + "px," + valeurY + "px," + 100 + "px) rotateY(" + angle + ") "
        d6.style.transform = "translate3d(" + 200 + "px," + valeurY + "px," + 100 + "px) rotateY(" + angle + ") "
        d7.style.transform = "translate3d(" + 0 + "px," + valeurY + "px," + 0 + "px) rotateY(" + angle + ") "
        d8.style.transform = "translate3d(" + 100 + "px," + valeurY + "px," + 0 + "px) rotateY(" + angle + ")"
        d9.style.transform = "translate3d(" + 200 + "px," + valeurY + "px," + 0 + "px) rotateY(" + angle + ") "
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "all " + delay)

    arr[0][deplacementY][0] = d7
    arr[1][deplacementY][0] = d4
    arr[2][deplacementY][0] = d1
    arr[0][deplacementY][1] = d8
    arr[1][deplacementY][1] = d5
    arr[2][deplacementY][1] = d2
    arr[0][deplacementY][2] = d9
    arr[1][deplacementY][2] = d6
    arr[2][deplacementY][2] = d3
}
//------------------ Deplacement Z----------------------
function deplacement3(deplacementZ, deplacementIndex) {
    let d1 = arr[deplacementZ][0][0]
    let d2 = arr[deplacementZ][1][0]
    let d3 = arr[deplacementZ][2][0]
    let d4 = arr[deplacementZ][0][1]
    let d5 = arr[deplacementZ][1][1]
    let d6 = arr[deplacementZ][2][1]
    let d7 = arr[deplacementZ][0][2]
    let d8 = arr[deplacementZ][1][2]
    let d9 = arr[deplacementZ][2][2]


    setTimeout(() => {
        colorFace(d1, d2, d3, d4, d5, d6, d7, d8, d9, deplacementIndex)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "none")
    }, 1000)
    function rotate(angle) {
        switch (deplacementZ) {
            case 0: valeurZ = 0; break;
            case 1: valeurZ = 100; break;
            case 2: valeurZ = 200; break;
        }
        d1.style.transform = "translate3d(" + 200 + "px," + 0 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d3.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d4.style.transform = "translate3d(" + 200 + "px," + 100 + "px," + valeurZ + "px) rotateZ(" + angle + ")"
        d5.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d6.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d7.style.transform = "translate3d(" + 200 + "px," + 200 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d8.style.transform = "translate3d(" + 100 + "px," + 200 + "px," + valeurZ + "px) rotateZ(" + angle + ")"
        d9.style.transform = "translate3d(" + 0 + "px," + 200 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
    }
    rotate("90deg")
    transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "all " + delay)

    arr[deplacementZ][0][0] = d3
    arr[deplacementZ][1][0] = d6
    arr[deplacementZ][2][0] = d9
    arr[deplacementZ][0][1] = d2
    arr[deplacementZ][1][1] = d5
    arr[deplacementZ][2][1] = d8
    arr[deplacementZ][0][2] = d1
    arr[deplacementZ][1][2] = d4
    arr[deplacementZ][2][2] = d7
}
        //---------------------------
function deplacement3bis(deplacementZ, deplacementIndex) {
    let d1 = arr[deplacementZ][0][0]
    let d2 = arr[deplacementZ][1][0]
    let d3 = arr[deplacementZ][2][0]
    let d4 = arr[deplacementZ][0][1]
    let d5 = arr[deplacementZ][1][1]
    let d6 = arr[deplacementZ][2][1]
    let d7 = arr[deplacementZ][0][2]
    let d8 = arr[deplacementZ][1][2]
    let d9 = arr[deplacementZ][2][2]


    setTimeout(() => {
        colorFace(d1, d2, d3, d4, d5, d6, d7, d8, d9, deplacementIndex)
        rotate("0deg")
        transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "none")
    }, 1000)
    function rotate(angle) {
        switch (deplacementZ) {
            case 0: valeurZ = 0; break;
            case 1: valeurZ = 100; break;
            case 2: valeurZ = 200; break;
        }
        d1.style.transform = "translate3d(" + 0 + "px," + 200 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d2.style.transform = "translate3d(" + 100 + "px," + 200 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d3.style.transform = "translate3d(" + 200 + "px," + 200 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d4.style.transform = "translate3d(" + 0 + "px," + 100 + "px," + valeurZ + "px) rotateZ(" + angle + ")"
        d5.style.transform = "translate3d(" + 100 + "px," + 100 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d6.style.transform = "translate3d(" + 200 + "px," + 100 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d7.style.transform = "translate3d(" + 0 + "px," + 0 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
        d8.style.transform = "translate3d(" + 100 + "px," + 0 + "px," + valeurZ + "px) rotateZ(" + angle + ")"
        d9.style.transform = "translate3d(" + 200 + "px," + 0 + "px," + valeurZ + "px) rotateZ(" + angle + ") "
    }
    rotate("-90deg")
    transitionNone(d1, d2, d3, d4, d5, d6, d7, d8, d9, "all " + delay)

    arr[deplacementZ][0][0] = d7
    arr[deplacementZ][1][0] = d4
    arr[deplacementZ][2][0] = d1
    arr[deplacementZ][0][1] = d8
    arr[deplacementZ][1][1] = d5
    arr[deplacementZ][2][1] = d2
    arr[deplacementZ][0][2] = d9
    arr[deplacementZ][1][2] = d6
    arr[deplacementZ][2][2] = d3
}
//-----------boutton

//----------------------------------------------------Axe X
b1.addEventListener('click', function () {
    deplacement1(0, 1)
})
b2.addEventListener('click', function () {
    deplacement1(1, 1)
})
b3.addEventListener('click', function () {
    deplacement1(2, 1)
})
b4.addEventListener('click', function () {
    deplacement1bis(0, 2)
})
b5.addEventListener('click', function () {
    deplacement1bis(1, 2)
})
b6.addEventListener('click', function () {
    deplacement1bis(2, 2)
})
//----------------------------------------------------Axe Y

b7.addEventListener('click', function () {
    deplacement2(0, 3)
})
b8.addEventListener('click', function () {
    deplacement2(1, 3)
})
b9.addEventListener('click', function () {
    deplacement2(2, 3)
})
b10.addEventListener('click', function () {
    deplacement2bis(0, 4)
})
b11.addEventListener('click', function () {
    deplacement2bis(1, 4)
})
b12.addEventListener('click', function () {
    deplacement2bis(2, 4)
})
//----------------------------------------------------Axe Y
b13.addEventListener('click', function () {
    deplacement3(0, 5)
})
b14.addEventListener('click', function () {
    deplacement3(1, 5)
})
b15.addEventListener('click', function () {
    deplacement3(2, 5)
})
b16.addEventListener('click', function () {
    deplacement3bis(0, 6)
})
b17.addEventListener('click', function () {
    deplacement3bis(1, 6)
})
b18.addEventListener('click', function () {
    deplacement3bis(2, 6)
})
