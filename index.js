var express = require("express")     //dichiarare utlizzo node modules, diventa un oggetto che riguarda il mnode module
var apiServer = express();


/* console.log("funziona");
var a = 5;
var b = "3";
console.log(a+b); */
var port = 3000;
var host = "localhost";
apiServer.listen(port, host, ()=>{
    console.log("server running at http://%s:%d",
    host, port);
});       //vediamo se è in ascolto

apiServer.get("/", (request, response)=>{
console.log("sono in get /", request);
response.send("<h1>ciao client sei in home<h1>"); //risposta con anche tgag html

})    //cio che do quando contatto il server (risosrsa, fuunction) in questo caso è la all

apiServer.get("/nome", (request, response)=>{
     console.log("richiesta nome");
    response.send("<p1>Ardizzone Pietro<p1>"); 
    })   