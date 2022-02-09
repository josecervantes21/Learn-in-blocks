function calculariname(){
    var isurname=document.getElementById('isurname').value; 
    array=[
    ['archivo','archivos','folder','folders','file','files'],
    ['guardar','eliminar','documentos', 'zip','.zip', 'quitar'],
    ['web','pagina','página','HTML','html'],
    ['excel','datos','data','enviar'],
    ['pdf', 'pdfs','word', 'words','.pdf'],
    ['cvs','json'], 
    ['fecha','fechas','dates','date'],
    ['correo','mensajes', 'mensaje','correos','enviar'],
    ['imagen','imagenes'],
    ['teclear','mouse','clicks','click']
    ]
    mix=[
      file,
      org,
      web,
      excel,
      pdf,
      cvs,
      time,
      email,
      images,
      gui,
    ]
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const element = array[i][j];
            if (isurname.toLowerCase().includes(element) ) {
            var resultado=document.getElementById('project')
            document.body.appendChild(mix[i])
        }
    }
    }
}


var file=document.createElement('a');
file.classList.add('file');
var linkText=document.createTextNode('Reading and writes file ');
file.append(linkText)
file.href='https://automatetheboringstuff.com/2e/chapter9/';



var org=document.createElement('a');
org.classList.add('org')
var linkText=document.createTextNode('Organizing files');
org.append(linkText);
org.href='https://automatetheboringstuff.com/2e/chapter10/';


var web=document.createElement('a');
web.classList.add('web')
var linkText=document.createTextNode('Web Scrapting');
web.append(linkText);
web.href='https://automatetheboringstuff.com/2e/chapter12/';

var excel=document.createElement('a');
excel.classList.add('excel')
var linkText=document.createTextNode('Working with excel Spreadsheets');
excel.append(linkText);
excel.href='https://automatetheboringstuff.com/2e/chapter13/';

var pdf=document.createElement('a');
pdf.classList.add('web')
var linkText=document.createTextNode('Working with pdf and word documents');
pdf.append(linkText);
pdf.href='https://automatetheboringstuff.com/2e/chapter15/';


var cvs=document.createElement('a');
cvs.classList.add('cvs')
var linkText=document.createTextNode('Working with CVS files and JSON files');
cvs.append(linkText);
cvs.href='https://automatetheboringstuff.com/2e/chapter16/';

var time=document.createElement('a');
time.classList.add('time')
var linkText=document.createTextNode('Keeping time Scheduling Task and Launching programs');
time.append(linkText);
time.href='https://automatetheboringstuff.com/2e/chapter17/';

var email=document.createElement('a');
email.classList.add('email')
var linkText=document.createTextNode('Sending Email and Text Messages');
email.append(linkText);
email.href='https://automatetheboringstuff.com/2e/chapter18/';

var images=document.createElement('a');
images.classList.add('images')
var linkText=document.createTextNode('Manipulating images');
images.append(linkText);
images.href='https://automatetheboringstuff.com/2e/chapter19/';

var gui=document.createElement('a');
gui.classList.add('gui')
var linkText=document.createTextNode('Controlling a keyboard and Mouse with GUI Automation');
gui.append(linkText);
gui.href='https://automatetheboringstuff.com/2e/chapter20/';