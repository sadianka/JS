function pustoTu(znaki) { 
  if (znaki.length > 0) {
    return false;
  } else {
    return true;
  }
}
function weryfikacja() {
    var pusteimie = document.forms["user_data"]["imie"].value;
    if (pustoTu(pusteimie)){
    alert("Podaj swoje imię!"); 
    return false;
    } else {
    return true;
    }
    
}
