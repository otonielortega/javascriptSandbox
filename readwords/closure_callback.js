 function logCar(logMsg, callback){
   process.nextTick(function() {
     callback(logMsg);
   });
 }
 var cars = ["Ferrari", "Porsche", "Bugatti"];
 for (var idx in cars){
   var message = "Saw a " + cars[idx];
   // (function(message){
   	 console.log("before Callback: " + message);
	   logCar(message, function(){
	     console.log("Normal Callback: " + message);
	   });
	//})(message);
 }
 for (var idx in cars){
   var message = "Saw a " + cars[idx];
   (function(msg){
     logCar(msg, function(){
       console.log("Closure Callback: " + msg);
     });
   })(message);
 }