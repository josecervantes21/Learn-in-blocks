function calculariname(){
    var isurname=document.getElementById('isurname').value; 
    array=[
    'archivo','archivos','folder','folders',
    'guardar','eliminar','documentos', 'zip','.zip', 'quitar',
    'web','pagina',
    'excel','datos','data',
    'pdf', 'pdfs','word', 'words',
    'cvs','json', 
    'fecha','fechas',
    'correo','mensajes', 'mensaje','correos',
    'imagen','imagenes',
    'teclear','mouse','clicks','click'
    ]

    mix=[
      file,file,file,file,
      org,org,org,org,org,org,
      web,web,
      excel,excel,excel,
      pdf,pdf,pdf,pdf,
      cvs,cvs,
      time,time,
      email,email,email,email,
      images,images,
      gui,gui,gui,gui
    ]
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (isurname.toLowerCase().includes(element) ) {
            var resultado=document.getElementById('lazy')
            document.body.appendChild(mix[i])
        }
    }
}


var file=document.createElement('a');
var linkText=document.createTextNode('Reading and writes file');
file.appendChild(linkText);
file.href='https://automatetheboringstuff.com/2e/chapter9/';

var org=document.createElement('a');
var linkText=document.createTextNode('Organizing files');
org.appendChild(linkText);
org.href='https://automatetheboringstuff.com/2e/chapter10/';

var web=document.createElement('a');
var linkText=document.createTextNode('Web Scrapting');
web.appendChild(linkText);
web.href='https://automatetheboringstuff.com/2e/chapter12/';

var excel=document.createElement('a');
var linkText=document.createTextNode('Working with excel Spreadsheets');
excel.appendChild(linkText);
excel.href='https://automatetheboringstuff.com/2e/chapter13/';

var pdf=document.createElement('a');
var linkText=document.createTextNode('Working with pdf and word documents');
pdf.appendChild(linkText);
pdf.href='https://automatetheboringstuff.com/2e/chapter15/';

var cvs=document.createElement('a');
var linkText=document.createTextNode('Working with CVS files and JSON files');
cvs.appendChild(linkText);
cvs.href='https://automatetheboringstuff.com/2e/chapter16/';

var time=document.createElement('a');
var linkText=document.createTextNode('Keeping time Scheduling Task and Launching programs');
time.appendChild(linkText);
time.href='https://automatetheboringstuff.com/2e/chapter17/';

var email=document.createElement('a');
var linkText=document.createTextNode('Sending Email and Text Messages');
email.appendChild(linkText);
email.href='https://automatetheboringstuff.com/2e/chapter18/';

var images=document.createElement('a');
var linkText=document.createTextNode('Manipulating images');
images.appendChild(linkText);
images.href='https://automatetheboringstuff.com/2e/chapter19/';

var gui=document.createElement('a');
var linkText=document.createTextNode('Controlling a keyboard and Mouse with GUI Automation');
gui.appendChild(linkText);
gui.href='https://automatetheboringstuff.com/2e/chapter20/';