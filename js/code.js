function usodelif() {
    document.location.href = "html/usodelif.html"
  }
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
  let mostrar_pantalla_juego_términado = true;
  
  
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
  } else {
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
      document.getElementById('contenedor').style.display='none';
      document.getElementById('No').style.display='block';
      document.getElementById('title').style.display='none';
      document.getElementById('instrucciones').style.display='block';
      document.getElementById('imgnc').style.display='block';
      document.getElementById("body").style.background='white'
      for (let i = 0; i < blocks.length; i++) {
            document.getElementById(blocks[i]).style.background='rgb(142, 190, 225)'
            document.getElementById(blocks[i]).style.imagen=img[i]
            document.getElementById(blocks[i]).style.color="white"
            
          }
          
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
let blocks=[]
let img=[]
function oprimir_btn(i) {
if (suspender_botones) {
return;
}
suspender_botones = true;
if (posibles_respuestas[i] == pregunta.respuesta) {
preguntas_correctas++;
btn_correspondiente[i].style.background = "lightgreen";

} else {
btn_correspondiente[i].style.background = "pink";
blocks.push(pregunta.slab)


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
}