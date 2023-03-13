/*document.write("külön fájbólköszöntelek");
console.log("wasapp");
 var nev=prompt('MI a neved?',"....");
 alert('Szia '+ nev);*/
var a = 2;
var b = 3;
/*alert("a+b= "+(a+b));*/

var veltomb = new Array();

function feltolt() {
  for (let index = 0; index < 50; index++) {
    var vel = Math.floor(Math.random() * 100 + 1);
    veltomb[index] = vel;
  }
}

function kiir() {
  var szoveg = "";
  for (let index = 0; index < 50; index++) {
    szoveg += veltomb[index] + " ";
    if (index % 5 == 4) {
      szoveg += "\r\n";
    }
  }
  alert(szoveg);
}
function szamokosszege() {
  var szum = 0;
  for (let index = 0; index < veltomb.length; index++) {
    szum += veltomb[index];
  }
  console.log(szum);
}
function parosdb() {
  var parosdb = 0;
  for (let index = 0; index < veltomb.length; index++) {
    if (veltomb[index] % 2 == 0) {
      parosdb += 1;
    }
  }
  console.log(parosdb);
}
function haromaloszt() {
  var harommaloszhdb = 0;
  for (let index = 0; index < veltomb.length; index++) {
    if (veltomb[index] % 3 == 0) {
      harommaloszhdb += 1;
    }
  }
  console.log(harommaloszhdb);
}
