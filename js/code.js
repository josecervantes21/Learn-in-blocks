function calculariname(){
    var isurname=document.getElementById('isurname').value;
    array=['mi proyecto tiene que ver con enviar datos de manera mas rapido por excel','mi trabajo tiene que ver con organizar documentos','mi trabajo tiene que ver con enviar correos','mi proyecto tiene que ver hacer clicks']
    mix=['https://automatetheboringstuff.com/2e/chapter13/','https://automatetheboringstuff.com/2e/chapter10/','https://automatetheboringstuff.com/2e/chapter18/','https://automatetheboringstuff.com/2e/chapter20/']
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element == isurname) {
            document.write('Tú recorrido de aprendizaje será:',mix[i])
        }
    }
}