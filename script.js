//Je declare mes variables
//"prompt" va faire apparaitre une fenêtre de dialogue
var flag = prompt('Quelle est la première couleur du drapeau Français ? bleu, blanc ou rouge ?');
 var color1 = 'bleu';
 var color2 = 'blanc';
 var color3 = 'rouge';
//je declare ma première condition
 if(flag == color1){
  alert('Bien joué!');
  //Je déclare "else if" si j'ajoute une condition à la première
} else if(flag == color2){
  alert('Réponse incorrecte: blanc est la deuxième couleur du drapeau');
} else if(flag == color3){
  alert('Réponse incorrecte: rouge est la troisième couleur du drapeau');
  //Je declare "else" pour toutes les autres conditions
} else{
  alert('Réponse incorrecte');
  }

/*
model:
let x = 0.5;

if(x > 1){
    alert('x contient une valeur strictement supérieure à 1');
}else if(x == 1){
    alert('x contient la valeur 1');
}else{
    alert('x contient une valeur strictement inférieure à 1');
}*/
