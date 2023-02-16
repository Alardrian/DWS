
function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
          
          document.getElementById("table").innerHTML = "";

          separadas = this.responseText.split(",");
          document.getElementById("txtHint").innerHTML = "";

          tablaH = document.createElement("th");
          document.getElementById("table").appendChild(tablaH);
          tablaH.innerHTML="PAÏSOS";
          for (let i = 0; i < separadas.length; i++) {
            tablaR = document.createElement("tr");
            document.getElementById("table").appendChild(tablaR)
            tablaD = document.createElement("td");
            tablaR.appendChild(tablaD);

            tablaD.innerHTML = separadas[i];
          }
        }
      xmlhttp.open("GET", "ejer3_2.php?q=" + str);
      xmlhttp.send();
    }
}

contador = 0;

function showHint2() {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function() {
      
        contador = 0;
        if (contador === 0){
          separadas = this.responseText.split(",");
      
        selectPais = document.getElementById("selectPais");
        selectPais.innerHTML = "";
        for (let i = 0; i < separadas.length; i++) {

          option = document.createElement("option");
          selectPais.appendChild(option);

          option.innerHTML = separadas[i];
          contador++;
          }
        }
      }
    xmlhttp.open("GET", "ejer3.php?");
    xmlhttp.send();
  }

  function showHint3(str) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {

      separadas = this.responseText.split(",");
    
      selectPais = document.getElementById("selectCiudad");
      selectPais.innerHTML = "";
      for (let i = 0; i < separadas.length; i++) {

        option = document.createElement("option");
        selectPais.appendChild(option);

        option.innerHTML = separadas[i];
        contador++;
        }
    }
  xmlhttp.open("GET", "ejer3_2.php?q=" + str);
  xmlhttp.send();
}
    