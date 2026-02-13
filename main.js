
function getArea(){
   var value1=document.getElementById('Radius').value;
   var Area = (Number(value1) ** 2) * Math.PI;
   document.getElementById("Area").value=Area.toFixed(2);

        }