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
const lf=document.createElement('li');
lf.classList.add('list');
var file=document.createElement('a');
var linkText=document.createTextNode('Reading and writes file    ');
file.append(lf,linkText)
file.href='https://automatetheboringstuff.com/2e/chapter9/';


const lo=document.createElement('li');
lo.classList.add('list');
var org=document.createElement('a');
var linkText=document.createTextNode('Organizing files    ');
org.append(lo,linkText);
org.href='https://automatetheboringstuff.com/2e/chapter10/';


const lw=document.createElement('li');
lw.classList.add('list');
var web=document.createElement('a');
var linkText=document.createTextNode('Web Scrapting');
web.append(lw,linkText);
web.href='https://automatetheboringstuff.com/2e/chapter12/';

const le=document.createElement('li');
le.classList.add('list');
var excel=document.createElement('a');
var linkText=document.createTextNode('Working with excel Spreadsheets');
excel.append(le,linkText);
excel.href='https://automatetheboringstuff.com/2e/chapter13/';


const lpdf=document.createElement('li');
lpdf.classList.add('list');
var pdf=document.createElement('a');
var linkText=document.createTextNode('Working with pdf and word documents');
pdf.append(lpdf,linkText);
pdf.href='https://automatetheboringstuff.com/2e/chapter15/';

const lcvs=document.createElement('li');
lcvs.classList.add('list');
var cvs=document.createElement('a');
var linkText=document.createTextNode('Working with CVS files and JSON files');
cvs.append(lcvs,linkText);
cvs.href='https://automatetheboringstuff.com/2e/chapter16/';

const lt=document.createElement('li');
lt.classList.add('list');
var time=document.createElement('a');
var linkText=document.createTextNode('Keeping time Scheduling Task and Launching programs');
time.append(lt,linkText);
time.href='https://automatetheboringstuff.com/2e/chapter17/';

const lem=document.createElement('li');
lem.classList.add('list');
var email=document.createElement('a');
var linkText=document.createTextNode('Sending Email and Text Messages');
email.append(lem.linkText);
email.href='https://automatetheboringstuff.com/2e/chapter18/';


const lim=document.createElement('li');
lim.classList.add('list');
var images=document.createElement('a');
var linkText=document.createTextNode('Manipulating images');
images.append(lim,linkText);
images.href='https://automatetheboringstuff.com/2e/chapter19/';

const lg=document.createElement('li');
lg.classList.add('list');
var gui=document.createElement('a');
var linkText=document.createTextNode('Controlling a keyboard and Mouse with GUI Automation');
gui.append(lg,linkText);
gui.href='https://automatetheboringstuff.com/2e/chapter20/';