const ask = () => {
 //leer pregunta
 const questionInput = document.getElementById('question')
 if (questionInput.value !== ""){
 //Recibir respuesta al preguntar a bola magica
 let answer = magicBall();
 //Imprimir resultado
 const answerInput = document.getElementById('answer');
 answerInput.value = answer;
 }
};

//Función bola magica
const magicBall = () => {
let eightBall = '';
const randomNumber = Math.floor(Math.random() * 8)
switch (randomNumber){
  case 0:
    eightBall = "No eres nada";
  break;
  case 1:
    eightBall = "Chapulin, te pareces al victor";
  break;
  case 2:
    eightBall = "Caracol,por lento";
  break;
  case 3:
    eightBall = "Abeja, por que te gusta picar";
  break;
  case 4:
    eightBall = "Cucaracha,por que eres bien persistente con tu ex";
  break;
  case 5:
    eightBall = "Araña, por Paton";
  break;
  case 6:
    eightBall = "Mosquito, por que te gusta chupar y no cerveza";
  case 7:
  eightBall = "Pulga, por enanin";
  break;
  case 8:
  eightBall = "Escorpion, aaa perro bien venenoso";
  break;
}
 return eightBall;
};