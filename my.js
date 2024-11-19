document.getElementById('btn-1').addEventListener('click', function(){
  let XXX = document.getElementById('input').value;
  let text = "";
  if( XXX == ""){ 
    text = "The Value is not Valid ";
    document.getElementById('demo').style.color = "white";
  }
  else if(XXX == "person") {
   document.getElementById("myImg").src="./images/image-1.jpg";
  }
  else if (XXX == "Faisal") {
    document.getElementById("myImg").src="./images/myimage2.jpg";
  }
  else if(XXX == "Flower") {
    text = "";
    document.getElementById("myImg").src="./images/70e8957ec64793bcf30f0666c7c0b96e.jpg";
  }
  else if(XXX == "pigeon") {
    text = "";
    document.getElementById("myImg").src="./images/pegion.jpg";
  }
  else if(XXX == "parrot") {
    text = "";
    document.getElementById("myImg").src="./images/parrots.jpg";
  }
  else {
    text = "The Value is not Valid";
    document.getElementById('demo').style.color = "white";
  }
document.getElementById('demo').innerHTML = text;
});










// document.getElementById('btn-1').addEventListener('click', function(){
//   let XXX = document.getElementById('input').value;
//   let text = "";
// if(XXX =="" || XXX == "Flower" || XXX == "Faisal" || XXX == "person"){
// text = "";
// document.getElementById("myImg").src="./images/image-1.jpg";
// document.getElementById("myImg").src="./images/myimage2.jpg";
// document.getElementById("myImg").src="./images/70e8957ec64793bcf30f0666c7c0b96e.jpg";
// }else {
//   text = "The value is not Valid";
//   document.getElementById('demo').style.color = "white";
// };
// document.getElementById('demo').innerHTML = text;
// });









// document.getElementById('btn-1').addEventListener('click', function () {

//   Obj = document.getElementById('input').value;


//   myPerson = document.getElementById("myImg").src = "./images/image-1.jpg";
//   myName = document.getElementById("myImg").src = "./images/myimage2.jpg";
//   myFlower = document.getElementById("myImg").src = "./images/70e8957ec64793bcf30f0666c7c0b96e.jpg";



// let myText = "";
//   if (Obj.myPerson == "person" || Obj.myName == "Faisal" || Obj.myFlower == "Flower") {
//    myText = Obj;
//   } else {
//     myText = "The Value is rong";
//     document.getElementById('demo').style.color = "white";
//   }
//   document.getElementById('demo').innerHTML =myText;
// });