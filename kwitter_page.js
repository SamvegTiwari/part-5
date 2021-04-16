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

user_name = localStorage.getItem("nils");
room_name = localStorage.getItem("newrooms");

function send() {
  var message7 = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message = message7,
    like: 0

  })
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                 //Start code
                 console.log(firebase_message_id);
                 console.log(message_data);
                 name = message_data['uer_name'];
                 msge = message_data['message7'];
                 like = message_data['like'];
                 name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                 message_with_tag = "<h4 class='message_h4'>" + msge + "</h4>";
                 like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                 row = name_with_tag + message_with_tag + like_button + span_with_tag;
                 document.getElementById("output").innerHTML += row;
                  //End code
                 } }); }); } getData();