var txt = document.getElementById('txt')
function ajax(){
    //console.log("btn clicked");

//step 1
var xhttp = new XMLHttpRequest();
//step 2
//xhttp.open("Get","content.txt",true);
xhttp.open("Get","data.json",true);
//step 3
xhttp.send();
// step 4
xhttp.onreadystatechange= function()
{ 
    if((this.readyState==4)&(this.status==200)) {
       //console.log(this.response)  
       var data = JSON.parse(this.response) 
       //txt.innerText=`Name:${data[1].name} Age:${data[1].age}`
       let output='';
       for (let i=0;i<data.length;i++){
        console.log(data[i])
      
        output +=`<li>${data[i].name}</li>`
        output +=`<li>${data[i].age}</li>`
        txt.innerHTML=output
      
    }}

   }


}