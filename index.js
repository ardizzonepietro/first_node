var express = require("express")     //dichiarare utlizzo node modules, diventa un oggetto che riguarda il mnode module
var apiServer = express();


/* console.log("funziona");
var a = 5;
var b = "3";
console.log(a+b); */
var port = 3000;
var host = "localhost";
apiServer.listen(port, host, ()=>{
    console.log("server running at http://%s:%s",
    host, port);
});       //vediamo se è in ascolto