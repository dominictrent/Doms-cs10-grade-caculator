//input
//  let CSS1 = +prompt("Enter CSS1 Grade");
//  let SP1 = +prompt("Enter SP1 Grade");
//  let SP2= +prompt("Enter SP2 Grade");
//  let CSS2 = +prompt("Enter CSS2 Grade");
//  let PA = +prompt("Enter PA Grade");

//process
document.getElementById("btn").addEventListener("click", grade);

function grade() {
  let CSS1G = +document.getElementById("CSS1").value;

  let SP1G = +document.getElementById("SP1").value;

  let SP2G = +document.getElementById("SP2").value;

  let CSS2G = +document.getElementById("CSS2").value;

  let PAG = +document.getElementById("PA").value;

  let average = (CSS1G + SP1G + SP2G + CSS2G + PAG) / 5;

  //output
  document.getElementById("total").innerHTML = `Final Grade: ${average}%.`;
}
