const $navegador = document.getElementById('nav'),
$raf =document.getElementById('menu')


$navegador.addEventListener('click', function(e){
    e.preventDefault()
    
    $raf.style.display = 'block'

    // window.setInterval(function(){
    //     $raf.style.display = 'none'
    // },6000)

    window.MediaStreamAudioSourceNode()

    window.setTimeout(function(){
        $raf.style.display = 'none'
    },3000)
    
    console.log($navegador)
})

$navegador.addEventListener('abort', function(){
    $raf.style.display = 'none'
})

// function nav() {
//     let navegador = document.getElementById('menu').value;
    
//     document.getElementById('menu').style.display = 'block'
// }



function espalda() {

    let espalda = document.getElementById('espalda1').value;

    let nombreimagenes = ['espalda1.gif', 'espalda2.gif', 'espalda3.gif', 'espalda4.gif', 'espalda5.gif', 'espalda6.gif', 'espalda7.gif', 'espalda8.gif', 'espalda9.gif', 'espalda10.gif']
    let gimnacia;

    gimnacia = `<h1>Espalda</h1> <img src="/espalda/${nombreimagenes[0]}" alt=""> <img src="/espalda/${nombreimagenes[1]}" alt=""> <img src="/espalda/${nombreimagenes[2]}" alt="">
    <img src="/espalda/${nombreimagenes[3]}" alt=""> <img src="/espalda/${nombreimagenes[4]}" alt=""> <img src="/espalda/${nombreimagenes[5]}" alt=""> <img src="/espalda/${nombreimagenes[6]}" alt="">
    <img src="/espalda/${nombreimagenes[7]}" alt=""> <img src="/espalda/${nombreimagenes[8]}" alt=""> <img src="/espalda/${nombreimagenes[9]}" alt=""> <img src="/espalda/${nombreimagenes[10]}" alt="">  <button class="cerrar" onclick="cerrar()" >Cerrar</button>;`

    document.getElementById('espalda1').innerHTML = gimnacia;
    document.getElementById('espalda1').style.display = 'block';

}






function pecho() {
    let pecho = document.getElementById('pecho1').value;

    let nombreimagenes = ['pecho1.gif', 'pecho2.gif', 'pecho3.gif', 'pecho4.gif', 'pecho5.gif', 'pecho6.gif', 'pecho7.gif', 'pecho8.gif', 'pecho9.gif', 'pecho10.gif']

    let gimnciapecho;

    gimnciapecho = `<h1>Pectorales</h1> <img src="/pecho/${nombreimagenes[0]}" alt=""> <img src="/pecho/${nombreimagenes[1]}" alt=""> <img src="/pecho/${nombreimagenes[2]}" alt=""> <img src="/pecho/${nombreimagenes[3]}" alt=""> <img src="/pecho/${nombreimagenes[4]}" alt=""> <img src="/pecho/${nombreimagenes[5]}" alt=""> 
    <img src="/pecho/${nombreimagenes[6]}" alt=""> <img src="/pecho/${nombreimagenes[7]}" alt=""> <img src="/pecho/${nombreimagenes[8]}" alt=""> <img src="/pecho/${nombreimagenes[9]}" alt=""> <img src="/pecho/${nombreimagenes[10]}" alt="">  <button class="cerrar" onclick="cerrar()" >Cerrar</button>;`

    document.getElementById('pecho1').innerHTML = gimnciapecho;
    document.getElementById('pecho1').style.display = 'block'


}




function brazo() {

    let brazos = document.getElementById('brazos1').value;

    let imagenesbrazo = ['brazo1.gif', 'brazo2.gif', 'brazo3.gif', 'brazo4.gif', 'brazo5.gif', 'brazo6.gif', 'brazo7.gif', 'brazo8.gif', 'brazo9.gif', 'brazo10.gif']

    let gimnaciabrazos;

    gimnaciabrazos = `<h1>Biceps</h1> <img src="/brazos/${imagenesbrazo[0]}" alt=""> <img src="/brazos/${imagenesbrazo[1]}" alt=""> <img src="/brazos/${imagenesbrazo[2]}" alt=""> <img src="/brazos/${imagenesbrazo[3]}" alt=""> <img src="/brazos/${imagenesbrazo[4]}" alt=""> <img src="/brazos/${imagenesbrazo[5]}" alt="">
    <img src="/brazos/${imagenesbrazo[6]}" alt=""> <img src="/brazos/${imagenesbrazo[7]}" alt=""> <img src="/brazos/${imagenesbrazo[8]}" alt=""> <img src="/brazos/${imagenesbrazo[9]}" alt=""> <img src="/brazos/${imagenesbrazo[10]}" alt=""> <button class="cerrar" onclick="cerrar()" >Cerrar</button>`

    document.getElementById('brazos1').innerHTML = gimnaciabrazos;
    document.getElementById('brazos1').style.display = 'block';
}

function hombros(){

    let hombro = document.getElementById('hombro1').value;

    let imageneshombro = ['hombro1.gif','hombro2.gif' ,'hombro3.gif' ,'hombro4.gif' ,'hombro5.gif' ,'hombro6.gif' ,'hombro7.gif' ,'hombro8.gif' ,'hombro9.gif' ,'hombro10.gif' ]

    let gimnaciahombro;

    gimnaciahombro = `<h1>Hombros</h1> <img src="/hombros/${imageneshombro[0]}" alt=""> <img src="/hombros/${imageneshombro[1]}" alt=""> <img src="/hombros/${imageneshombro[2]}" alt=""> <img src="/hombros/${imageneshombro[3]}" alt=""> <img src="/hombros/${imageneshombro[4]}" alt=""> <img src="/hombros/${imageneshombro[5]}" alt=""> <img src="/hombros/${imageneshombro[6]}" alt=""> <img src="/hombros/${imageneshombro[7]}" alt=""> <img src="/hombros/${imageneshombro[8]}" alt=""> <img src="/hombros/${imageneshombro[9]}" alt=""> <img src="/hombros/${imageneshombro[10]}" alt=""> <button class="cerrar" onclick="cerrar()" >Cerrar</button> `

    document.getElementById('hombro1').innerHTML = gimnaciahombro ;
    document.getElementById('hombro1').style.display = 'block';
}


function abdomen(){

    let abdomen = document.getElementById('abdomen1').value;

    let imagenesabdomen = ['abdomen1.gif','abdomen2.gif' ,'abdomen3.gif' ,'abdomen4.gif' ,'abdomen5.gif' ,'abdomen6.gif' ,'abdomen7.gif']

    let gimnaciaabdomen;

    gimnaciaabdomen = `<h1>Abdomen</h1> <img src="/abdomen/${imagenesabdomen[0]}" alt=""> <img src="/abdomen/${imagenesabdomen[1]}" alt=""> <img src="/abdomen/${imagenesabdomen[2]}" alt=""> <img src="/abdomen/${imagenesabdomen[3]}" alt=""> <img src="/abdomen/${imagenesabdomen[4]}" alt=""> <img src="/abdomen/${imagenesabdomen[5]}" alt=""> <img src="/abdomen/${imagenesabdomen[6]}" alt=""> <img src="/abdomen/${imagenesabdomen[7]}" alt=""> <button class="cerrar" onclick="cerrar()" >Cerrar</button>`

    document.getElementById('abdomen1').innerHTML = gimnaciaabdomen ;
    document.getElementById('abdomen1').style.display = 'block';
}

function piernas(){

    let pierna = document.getElementById('pierna1').value;

    let imagenespierna = ['pierna1.gif','pierna2.gif' ,'pierna3.gif' ,'pierna4.gif','pierna5.gif','pierna6.gif','pierna7.gif','pierna8.gif','pierna9.gif','pierna10.gif']

    let gimnaciapierna;

    gimnaciapierna = `<h1>Piernas</h1> <img src="/pierna/${imagenespierna[0]}" alt=""> <img src="/pierna/${imagenespierna[1]}" alt=""> <img src="/pierna/${imagenespierna[2]}" alt=""> <img src="/pierna/${imagenespierna[3]}" alt=""> <img src="/pierna/${imagenespierna[4]}" alt=""> <img src="/pierna/${imagenespierna[5]}" alt=""> 
    <img src="/pierna/${imagenespierna[6]}" alt=""> <img src="/pierna/${imagenespierna[7]}" alt=""> <img src="/pierna/${imagenespierna[8]}" alt=""> <img src="/pierna/${imagenespierna[9]}" alt=""> <img src="/pierna/${imagenespierna[10]}" alt=""> <button class="cerrar" onclick="cerrar()" >Cerrar</button>`

    document.getElementById('pierna1').innerHTML = gimnaciapierna;
    document.getElementById('pierna1').style.display = 'block';
}

function cardios(){

    let cardio = document.getElementById('cardio1').value;

    let imagenescardio = ['cardio1.gif', 'cardio2.gif', 'cardio3.gif', 'cardio4.gif', 'cardio5.gif', 'cardio6.gif', 'cardio7.gif', 'cardio8.gif', 'cardio9.gif', 'cardio10.gif']

    let gimnaciacardio;

    gimnaciacardio = `<h1>Cardio</h1> <img src="/cardio/${imagenescardio[0]}" alt=""> <img src="/cardio/${imagenescardio[1]}" alt=""> <img src="/cardio/${imagenescardio[2]}" alt=""> <img src="/cardio/${imagenescardio[3]}" alt=""> <img src="/cardio/${imagenescardio[4]}" alt=""> <img src="/cardio/${imagenescardio[5]}" alt=""> 
    <img src="/cardio/${imagenescardio[6]}" alt=""> <img src="/cardio/${imagenescardio[7]}" alt=""> <img src="/cardio/${imagenescardio[8]}" alt=""> <img src="/cardio/${imagenescardio[9]}" alt=""> <img src="/cardio/${imagenescardio[10]}" alt="">  <button class="cerrar" onclick="cerrar()" >Cerrar</button>`

    document.getElementById('cardio1').innerHTML = gimnaciacardio;
    document.getElementById('cardio1').style.display ='block';
}

function cerrar() {

    // cierra espalda
    document.getElementById('espalda1','pecho1').innerHTML =
    document.getElementById('espalda1','pecho1').style.display = 'none';
    // cierra oecho
    document.getElementById('pecho1').innerHTML =
    document.getElementById('pecho1').style.display = 'none';

    document.getElementById('brazos1').innerHTML =
    document.getElementById('brazos1').style.display = 'none';

    document.getElementById('hombro1').innerHTML =
    document.getElementById('hombro1').style.display = 'none';

    document.getElementById('abdomen1').innerHTML =
    document.getElementById('abdomen1').style.display = 'none';

    document.getElementById('pierna1').innerHTML =
    document.getElementById('pierna1').style.display = 'none';

    document.getElementById('cardio1').innerHTML =
    document.getElementById('cardio1').style.display = 'none';
}

