var firebaseConfig = {
  apiKey: "AIzaSyC5dCEloIahuoQ7H1B6hZ5kPLrlL0ot9m0",
  authDomain: "kwitter-eb5d3.firebaseapp.com",
  databaseURL: "https://kwitter-eb5d3-default-rtdb.firebaseio.com",
  projectId: "kwitter-eb5d3",
  storageBucket: "kwitter-eb5d3.appspot.com",
  messagingSenderId: "876564508946",
  appId: "1:876564508946:web:7110af2edd49450be783cb",
  measurementId: "G-E28BD0RKG9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_room.html";
}
function getData() {
firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
    });
});
}
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room"
  })
}
function logout() {
  localStorage.removeItem("user_name");
  window.location = "kwitter.html";
}