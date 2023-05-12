
let socket = io.connect("http://localhost:3000");

var message = document.getElementById("message"),
handle = document.getElementById("handle"),
btn = document.getElementById("send"),
output = document.getElementById("output"),
feedback = document.getElementById("feedback"),
sendto = document.getElementById("sendto"),
contacts = document.getElementsByClassName("contacts");
socket.emit("register",handle.value);

var x = document.getElementsByTagName("li")

for(var i=0; i<x.length;i++){
  x[i].addEventListener("click", function(e){
    e.preventDefault();
    const id = e.target.getAttribute("id");
    sendto.value = id;
  })
}
// .addEventListener("click", function(e){
//   e.preventDefault();
//   const id = e.target.getAttribute("id");
//   sendto.value = id;
  
// })


//Emit events


btn.addEventListener("click", function(){
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });

  socket.emit("private",{
    to: sendto.value,
    message: message.value
  });
  sendto.value="";
  message.value="";
  
});

message.addEventListener("keydown",function(){
  socket.emit("typing", handle.value);
})

//Listen for events
socket.on("chat", function(data){
  feedback.innerHTML = "";
  output.innerHTML += "<p><strong>"+data.handle+": </strong>"+data.message+"</p>";

});

socket.on("typing", function(data){
  feedback.innerHTML = "<p><em>"+data+" is typing a message</em></p>";
});

socket.on("private", function(data){
  output.innerHTML += "<p><strong>"+data.name+": </strong>"+data.message+"</p>";
})