let bloques=[]
let color=[]
let checks=[]
function home() {
    document.location.href = "/index.html"
} 
function check1() {
    bloques.push("icon1")
    color.push("divslab1")
    localStorage.setItem("icon1",JSON.stringify(bloques))
    localStorage.setItem("divslab1",JSON.stringify(color))
    checks.push("iconch1")
localStorage.setItem("iconch1",JSON.stringify(checks))
}
function check2() {
    bloques.push("icon2")
    color.push("divslab2")
    localStorage.setItem("icon2",JSON.stringify(bloques))
    localStorage.setItem("divslab2",JSON.stringify(color))
    checks.push("iconch2")
localStorage.setItem("iconch2",JSON.stringify(checks))
}
function check3() {
    bloques.push("icon3")
    color.push("divslab3")
    localStorage.setItem("icon3",JSON.stringify(bloques))
    localStorage.setItem("divslab3",JSON.stringify(color))
    checks.push("iconch3")
localStorage.setItem("iconch3",JSON.stringify(checks))
}
function check4() {
    bloques.push("icon4")
    color.push("divslab4")
    localStorage.setItem("icon4",JSON.stringify(bloques))
    localStorage.setItem("divslab4",JSON.stringify(color))
    checks.push("iconch4")
localStorage.setItem("iconch4",JSON.stringify(checks))
}
function check5() {
    bloques.push("icon5")
    color.push("divslab5")
    localStorage.setItem("icon5",JSON.stringify(bloques))
    localStorage.setItem("divslab5",JSON.stringify(color))
    checks.push("iconch5")
localStorage.setItem("iconch5",JSON.stringify(checks))
}
function check6() {
    bloques.push("icon6")
    color.push("divslab6")
    localStorage.setItem("icon6",JSON.stringify(bloques))
    localStorage.setItem("divslab6",JSON.stringify(color))
    checks.push("iconch6")
localStorage.setItem("iconch6",JSON.stringify(checks))
}
function simulador() {
    document.getElementById("simulador").style.display='block'
}
