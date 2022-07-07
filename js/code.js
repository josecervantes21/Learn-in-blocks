let iconos=[]
let blocks=[]
function usodelif() {
  document.location.href = "html/usodelif.html"
}
(()=>{
  const quizz=JSON.parse(localStorage.getItem("quizz"))
  const icono=JSON.parse(localStorage.getItem("iconos"))
  const iconch=JSON.parse(localStorage.getItem("iconch"))
  const color=JSON.parse(localStorage.getItem("slabs"))
  const icon1=JSON.parse(localStorage.getItem("icon1"))
  const icon2=JSON.parse(localStorage.getItem("icon2"))
  const icon3=JSON.parse(localStorage.getItem("icon3"))
  const icon4=JSON.parse(localStorage.getItem("icon4"))
  const icon5=JSON.parse(localStorage.getItem("icon5"))
  const icon6=JSON.parse(localStorage.getItem("icon6"))
  const color1=JSON.parse(localStorage.getItem("divslab1"))
  const color2=JSON.parse(localStorage.getItem("divslab2"))
  const color3=JSON.parse(localStorage.getItem("divslab3"))
  const color4=JSON.parse(localStorage.getItem("divslab4"))
  const color5=JSON.parse(localStorage.getItem("divslab5"))
  const color6=JSON.parse(localStorage.getItem("divslab6"))
  const check1=JSON.parse(localStorage.getItem("iconch1"))
  const check2=JSON.parse(localStorage.getItem("iconch2"))
  const check3=JSON.parse(localStorage.getItem("iconch3"))
  const check4=JSON.parse(localStorage.getItem("iconch4"))
  const check5=JSON.parse(localStorage.getItem("iconch5"))
  const check6=JSON.parse(localStorage.getItem("iconch6"))
  let universo=[]
  let coloruniverso=[]
  let checks=[]
  
  if (check1===null) {
    console.log("null")
  }
  else{
    checks.push(check1)
  }
  if (check2===null) {
    console.log("null")
  }
  else{
    checks.push(check2)
  }
  if (check3===null) {
    console.log("null")
  }
  else{
    checks.push(check3)
  }
  if (check4===null) {
    console.log("null")
  }
  else{
    checks.push(check4)
  }
  if (check5===null) {
    console.log("null")
  }
  else{
    checks.push(check5)
  }
  if (check6===null) {
    console.log("null")
  }
  else{
    checks.push(check6)
  }


  if (color1===null) {
    console.log("null")
  }
  else{
    coloruniverso.push(color1)
  }
  if (color2===null) {
    console.log("null")
  }
  else{
    coloruniverso.push(color2)
  }
  if (color3===null) {
    console.log("null")
  }
  else{
    coloruniverso.push(color3)
  }
  if (color4===null) {
    console.log("null")
  }
  else{
    coloruniverso.push(color4)
  }
  if (color5===null) {
    console.log("null")
  }
  else{
    coloruniverso.push(color5)
  }
  if (color6===null) {
    console.log("null")
  }
  else{
    coloruniverso.push(color6)
  }






  if (icon1===null) {
    console.log("null")
  }
  else{
    universo.push(icon1)
  }
  if (icon2===null) {
    console.log("null")
  }
  else{
    universo.push(icon2)
  }
  if (icon3===null) {
    console.log("null")
  }
  else{
    universo.push(icon3)
  }
  if (icon4===null) {
    console.log("null")
  }
  else{
    universo.push(icon4)
  }
  if (icon5===null) {
    console.log("null")
  }
  else{
    universo.push(icon5)
    document.getElementById("encuesta").style.display='block'
  }
  if (icon6===null) {
    console.log("null")
  }
  else{
    universo.push(icon6)
    document.getElementById("encuesta").style.display='block'
  }




  console.log(universo)
  localStorage.setItem("iconosch",JSON.stringify(universo))
  const done=JSON.parse(localStorage.getItem("iconosch"))

  localStorage.setItem("colores",JSON.stringify(coloruniverso))
  const colordone=JSON.parse(localStorage.getItem("colores"))

  localStorage.setItem("checks",JSON.stringify(checks))
  const doneicon=JSON.parse(localStorage.getItem("checks"))



  


    if(color===null){
      console.log("color")
    }
    else{ 
      for (let i = 0; i < quizz.length; i++) {
        if (quizz[i]===null) {
          console.log("null")
        }
        else{ 
        document.getElementById(quizz[i]).style.display='none'
        document.getElementById("instrucciones1").style.display='block'
        }
      }
      document.getElementById('instrucciones').style.display='block';
      document.getElementById('title').style.display='none';
      for (let i = 0; i < color.length; i++) {  
        if (color[i]===null) {
          console.log("null")
        }   
        else{ 
        document.getElementById(color[i]).style.background='rgb(142, 190, 225)'
        }
      }
      for (let i = 0; i < icono.length; i++) {
        if (icono===null) {
          console.log("null")
          
        }
        else{ 
        document.getElementById(icono[i]).style.display='none';
        }
      }
      for (let j = 0; j < iconch.length; j++) {
        if (iconch[j]===null) {
          console.log("null")
        }
        else { 
        document.getElementById(iconch[j]).style.display="block"
        }
      }
      for (let i = 0; i < universo.length; i++) {
        if (universo[i]==null) {
          console.log(universo[i])
        }
        else{
          for (let j = 0; j < done.length; j++) {
            document.getElementById(done[j]).style.display="block"
          }
        }
      }
      for (let i = 0; i < coloruniverso.length; i++) {
        if (coloruniverso[i]==null) {
          console.log(coloruniverso[i])
        }
        else{
          for (let j = 0; j < colordone.length; j++) {
            document.getElementById(colordone[j]).style.background="rgb(238, 238, 238)"
          }
        }
      }
      for (let i = 0; i < doneicon.length; i++) {
        if (doneicon[i]==null) {
          console.log(doneicon[i])
        }
        else{
          for (let j = 0; j < doneicon.length; j++) {
            document.getElementById(doneicon[j]).style.display='none'
          }
        }
      }
    }

  })()

function usodelfor() {
  document.location.href = "/html/usodelfor.html"
}
function comentarios() {
  document.location.href = "html/comentarios.html"
}
function tiposdedatos() {
  document.location.href = "html/tiposdedatos.html"
}
function home() {
  document.location.href = "index.html"
} 
function listas() {
  document.location.href="html/listas.html"
}
function importar() {
  document.location.href="html/import.html"
}




let preguntas_aleatorias = true;
window.onload = function () {
base_preguntas = readText("/json/base-preguntas.json");
interprete_bp = JSON.parse(base_preguntas);
escogerPreguntaAleatoria();
};

btns=[
  select_id("btones1"),
  select_id("btones2"),
  select_id("btones3"),
  select_id("btones4"),
  select_id("btones6")
]
  

let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4")
];

let npreguntas = [];
let preguntas_hechas = 0;
let preguntas_correctas = 0;

function escogerPreguntaAleatoria() {
  let n;
  if (preguntas_aleatorias) {
    n = Math.floor(Math.random() * interprete_bp.length);
  } 
  else {
    n = 0;
  }

while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
    n = 0;
    }
    if (npreguntas.length == interprete_bp.length) {
      npreguntas = [];
    }
  }

npreguntas.push(n);
preguntas_hechas++;
if (preguntas_hechas==7) {
  location.reload()
  document.getElementById('contenedor').style.display='none';
  document.getElementById('title').style.display='none';
  document.getElementById('instrucciones').style.display='block';
  document.getElementById("body").style.background='white'
  let quizzz=[]
  quizzz.push("quizz")
  localStorage.setItem("quizz",JSON.stringify(quizzz))
}

escogerPregunta(n)
}
      
function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n;
  let pc = preguntas_correctas;
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
  } else {
select_id("puntaje").innerHTML = "";
}

style("imagen").objectFit = pregunta.objectFit;
desordenarRespuestas(pregunta);
if (pregunta.imagen) {
select_id("imagen").setAttribute("src", pregunta.imagen);
style("imagen").height = "130px";
style("imagen").width = "15%";
} else {
style("imagen").height = "0px";
style("imagen").width = "0px";
setTimeout(() => {
select_id("imagen").setAttribute("src", "");
}, 500);
}
}

function desordenarRespuestas(pregunta) {
posibles_respuestas = [
pregunta.respuesta,
pregunta.incorrecta1,
pregunta.incorrecta2,
pregunta.incorrecta3,
];
posibles_respuestas.sort(() => Math.random() - 0.5);

select_id("btn1").innerHTML = posibles_respuestas[0];
select_id("btn2").innerHTML = posibles_respuestas[1];
select_id("btn3").innerHTML = posibles_respuestas[2];
select_id("btn4").innerHTML = posibles_respuestas[3];
}



let suspender_botones = false;
let img=[]
let iconosch=[]
function oprimir_btn(i) {
if (suspender_botones) {
return;
}
suspender_botones = true;
if (posibles_respuestas[i] == pregunta.respuesta) {
preguntas_correctas++;
btn_correspondiente[i].style.background = "lightgreen";

} 
else {
btn_correspondiente[i].style.background = "pink";
blocks.push(pregunta.slab)
localStorage.setItem("slabs",JSON.stringify(blocks))
iconos.push(pregunta.icon)
localStorage.setItem("iconos",JSON.stringify(iconos))
iconosch.push(pregunta.iconch)
localStorage.setItem("iconch",JSON.stringify(iconosch))

for (let j = 0; j < 4; j++) {
if (posibles_respuestas[j] == pregunta.respuesta) {
btn_correspondiente[j].style.background = "lightgreen";
break;
}
}
}
setTimeout(() => {
reiniciar();
suspender_botones = false;
}, 1000);
}

// let p = prompt("numero")

function reiniciar() {
for (const btn of btn_correspondiente) {
btn.style.background = "slategray";
}
escogerPreguntaAleatoria();
}

function select_id(id) {
return document.getElementById(id);
}

function style(id) {
return select_id(id).style;
}

function readText(ruta_local) {
var texto = null;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", ruta_local, false);
xmlhttp.send();
if (xmlhttp.status == 200) {
texto = xmlhttp.responseText;
}
return texto;
}

function quizz() {
  document.getElementById("quizz").style.display='none'
  document.getElementById("contenedor").style.display='block'
  document.getElementById("body").style.background='rgb(182, 181, 179)'
  document.getElementById("container").style.background='rgb(182, 181, 179)'
}
function instructions() {
  document.getElementById("body").style.background='rgb(182, 181, 179)'
  document.getElementById("container").style.background='rgb(182, 181, 179)'
  document.getElementById("instructions").style.display='block'
  document.getElementById("instrucciones1").style.display='none'
}
function cerrar() {
  document.getElementById("instructions").style.display="none"
  document.getElementById("body").style.background='white'
  document.getElementById("container").style.background='white'
}
