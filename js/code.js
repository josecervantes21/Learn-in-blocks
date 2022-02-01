function calculariname(){
    var isurname=document.getElementById('isurname').value; 
    
    file='Reading and writes file'.link(files)
    org='Organizing files'.link(organizing)
    webs='Web Scrapting'.link(web)
    excels='Working with excel Spreadsheets'.link(excel)
    pdfs='Working with pdf and word documents'.link(pdf)
    cvss='Working with CVS files and JSON files'.link(cvs)
    date='Keeping time Scheduling Task and Launching programs'.link(time)
    emails='Sending Email and Text Messages'.link(email)
    image='Manipulating images'.link(images)
    mouse='Controlling a keyboard and Mouse with GUI Automation'.link(gui)
    
    
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
      webs,webs,
      excels,excels,excels,
      pdfs,pdfs,pdfs,pdfs,
      cvss,cvss,
      date,date,
      emails,emails,emails,emails,
      image,image,
      mouse,mouse,mouse,mouse
    ]
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (isurname.toLowerCase().includes(element) ) {
            var resultado=document.getElementById('lazy')
            resultado.innerHTML='Tus bloques de aprendizaje son <br/>'+mix[i]
        }
    }
}


files='https://automatetheboringstuff.com/2e/chapter9/',
organizing='https://automatetheboringstuff.com/2e/chapter10/'
web='https://automatetheboringstuff.com/2e/chapter12/'
excel='https://automatetheboringstuff.com/2e/chapter13/'
pdf='https://automatetheboringstuff.com/2e/chapter15/'
cvs='https://automatetheboringstuff.com/2e/chapter16/'
time='https://automatetheboringstuff.com/2e/chapter17/'
email='https://automatetheboringstuff.com/2e/chapter18/'
images='https://automatetheboringstuff.com/2e/chapter19/'
gui='https://automatetheboringstuff.com/2e/chapter20/'