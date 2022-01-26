function calculariname(){
    var isurname=document.getElementById('isurname').value;
    array=['excel', 'datos','automatizar','documentos','correos','clicks']
    mix=['https://automatetheboringstuff.com/2e/chapter13/','https://automatetheboringstuff.com/2e/chapter13/','https://automatetheboringstuff.com/2e/chapter13/','https://automatetheboringstuff.com/2e/chapter10/','https://automatetheboringstuff.com/2e/chapter18/','https://automatetheboringstuff.com/2e/chapter20/']
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (isurname.includes(element)) {
            document.write('Tú recorrido de aprendizaje será:',mix[i])
        }
    }
}