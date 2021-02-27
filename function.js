/***************************************************************/
/* Clicks listener */

document.getElementById("ld-page").addEventListener("click", go_ld_page);
document.getElementById("lolo").addEventListener("click", go_ld_page);
document.getElementById("acceuil").addEventListener("click", go_acceuil);
document.getElementById("cv").addEventListener("click", go_cv);
document.getElementById("rea").addEventListener("click", go_rea);
document.getElementById("contact").addEventListener("click", go_contact);

/***************************************************************/
/* Fonction scroll vers page des liens de la nav-bar */

function go_ld_page() {
  document.getElementById("bal-page1").scrollIntoView();
  x = 0;
  verif_bg();
  verifNavbar();
  setPagecv();
  setPagerea();
  setContact();
  ButtonDebug();
  setBox();
}
function go_acceuil() {
  document.getElementById("bal-page2").scrollIntoView();
  x = 1;
  verif_bg();
  verifNavbar();
  setPagecv();
  setPagerea();
  setContact();
  ButtonDebug();
  setBox();
}
function go_cv() {
  document.getElementById("bal-page3").scrollIntoView();
  x = 2;
  verif_bg();
  verifNavbar();
  setPagecv();
  setPagerea();
  setContact();
  ButtonDebug();
  setBox();
}
function go_rea() {
  document.getElementById("bal-page4").scrollIntoView();
  x = 3;
  verif_bg();
  verifNavbar();
  setPagecv();
  setPagerea();
  setContact();
  ButtonDebug();
  setBox();
}
function go_contact() {
  document.getElementById("bal-page5").scrollIntoView();
  x = 4;
  verif_bg();
  verifNavbar();
  setPagecv();
  setPagerea();
  setContact();
  ButtonDebug();
  setBox();
}

/***************************************************************/
/* Fonction adaptation background par rapport à la valeur de x */

function verif_bg(){
  switch(x){
    case 0:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.add("bg-active-page1");
    break;
    case 1:
      document.body.classList.add("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
    case 2:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.add("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
    case 3:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.add("bg-active-page4");
      document.body.classList.remove("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
    case 4:
      document.body.classList.remove("bg-active-page2");
      document.body.classList.remove("bg-active-page3");
      document.body.classList.remove("bg-active-page4");
      document.body.classList.add("bg-active-page5");
      document.body.classList.remove("bg-active-page1");
    break;
  }
}
/***************************************************************/
/* Gere affichage éléments de la page réalisations*/

function setPagerea(){
    if(x == 3){
      var z = document.getElementsByClassName("mini-box");
      for (i = 0; i < z.length; i++) {
        z[i].style.visibility="visible";
        z[i].classList.replace("hidden-grid","reveal-grid");
      }
      document.getElementById("box").style.visibility="hidden";
    }else{
      var z = document.getElementsByClassName("mini-box");
      for (i = 0; i < z.length; i++) {
        z[i].style.visibility="hidden";
        z[i].classList.replace("reveal-grid","hidden-grid");
    }
    document.getElementById("box").style.visibility="visible";
  }
}

/***************************************************************/


/***************************************************************/

function setBox(){
  if (x == 0 || x == 1){
    document.getElementById("box").style.visibility="visible";
    document.getElementById("hr").style.visibility="visible";
  }else{
    document.getElementById("box").style.visibility="hidden";
    document.getElementById("hr").style.visibility="hidden";
  }
}

/***************************************************************/
/* Gere affichage éléments de la page CV */

function setPagecv(){
  if(x == 2){
    document.getElementById("box").style.visibility="hidden";
    document.getElementById("card_one").classList.replace("hidden-card1","reveal-card1");
    document.getElementById("card_two").classList.replace("hidden-card2","reveal-card2");
    document.getElementById("card_three").classList.replace("hidden-card3","reveal-card3");
    document.getElementById("card_four").classList.replace("hidden-card4","reveal-card4");
    document.getElementById("lolo").classList.replace("hidden-card4","reveal-card4");
    document.getElementById("pdp").classList.replace("hidden-card4","reveal-card4");
  }else{
    document.getElementById("box").style.visibility="visible";
    document.getElementById("card_one").classList.replace("reveal-card1","hidden-card1");
    document.getElementById("card_two").classList.replace("reveal-card2","hidden-card2");
    document.getElementById("card_three").classList.replace("reveal-card3","hidden-card3");
    document.getElementById("card_four").classList.replace("reveal-card4","hidden-card4");
    document.getElementById("lolo").classList.replace("reveal-card4","hidden-card4");
    document.getElementById("pdp").classList.replace("reveal-card4","hidden-card4");
  }
}

/***************************************************************/

function setContact(){
  if (x == 4){
      document.getElementById("containeer").style.visibility="visible";
  }else{
      document.getElementById("containeer").style.visibility="hidden";
  }
}

/***************************************************************/
/* Gerer affichage éléments navbar */

function verifNavbar(){
  switch(x){
    case 0:
    var y = document.getElementsByClassName("nav-li");
      for (i = 0; i < y.length; i++) {
        y[i].style.visibility="visible";
      }
      document.getElementById("ld-page").style.visibility="visible";
    break;
    case 1:
    var y = document.getElementsByClassName("nav-li");
      for (i = 0; i < y.length; i++) {
        y[i].style.visibility="visible";
      }
      document.getElementById("ld-page").style.visibility="visible";
    break;
    case 2:
    var y = document.getElementsByClassName("nav-li");
      for (i = 0; i < y.length; i++) {
        y[i].style.visibility="visible";
      }
      document.getElementById("ld-page").style.visibility="hidden";
    break;
    case 3:
      document.getElementById("ld-page").style.visibility="hidden";
      var y = document.getElementsByClassName("nav-li");
        for (i = 0; i < y.length; i++) {
          y[i].style.visibility="visible";
        }
    break;
    case 4:
    var y = document.getElementsByClassName("nav-li");
      for (i = 0; i < y.length; i++) {
        y[i].style.visibility="visible";
      }
      document.getElementById("ld-page").style.visibility="visible";
    break;
  }
}

/***************************************************************/
/* Fonction verif pour afficher ou non bouton up/down par rapport à x */

function verif_visibilityButton(){
  switch(x){
    case 0:
      document.getElementById("up").style.visibility="hidden";
      document.getElementById("down").style.visibility="visible";
    break;
    case 1:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="visible";
    break;
    case 2:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="visible";
    break;
    case 3:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="visible";
    break;
    case 4:
      document.getElementById("up").style.visibility="visible";
      document.getElementById("down").style.visibility="hidden";
    break;
  }
}

/***************************************************************/
/* [NOTES] Activation de "verif_visibilityButton()" par délai avec "ButtonDebug" car sans cela l'utilisateur peut double clique sur les up/down ce qui provoque un bug d'affichage entre les pages
Dorénavant après un clique sur up/down, les bouttons disparaissent l'instant de [setTimeout] laissant le temps au défilement des pages */

function ButtonDebug(){
  document.getElementById("down").style.visibility="hidden";
  document.getElementById("up").style.visibility="hidden";
  setTimeout(verif_visibilityButton, 1500);
}
