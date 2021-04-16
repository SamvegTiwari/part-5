// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9N0VsOme4GW1MnwQxhhqZAaZVrkZjhzE",
  authDomain: "lets-chat-webapp.firebaseapp.com",
  databaseURL: "https://lets-chat-webapp-default-rtdb.firebaseio.com",
  projectId: "lets-chat-webapp",
  storageBucket: "lets-chat-webapp.appspot.com",
  messagingSenderId: "683554194465",
  appId: "1:683554194465:web:85f0ed0a9619113b130f60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var display_names= localStorage.getItem("nils");
  document.getElementById("username_displau").innerHTML = "welcome " + display_names;

  function addroom(){
    room_name=document.getElementById("room_names_new").value;  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding new room name"
});
localStorage.setItem("newrooms", room_name);
window.location ="kwitter_page.html";
}




  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("getting value from firebase" + Room_names)
   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML=row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("newrooms", name);
  window.location="kwitter_page.html";

}

