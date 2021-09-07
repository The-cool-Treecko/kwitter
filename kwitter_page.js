// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCUAnwEk1xyxfFxhvxlK0IltpmSNkH1eK4",
      authDomain: "kwitter-d2794.firebaseapp.com",
      databaseURL: "https://kwitter-d2794-default-rtdb.firebaseio.com",
      projectId: "kwitter-d2794",
      storageBucket: "kwitter-d2794.appspot.com",
      messagingSenderId: "752601801527",
      appId: "1:752601801527:web:1973cf814460135a13f0b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var room_name = localStorage.getItem("room-name");
var userName = localStorage.getItem("User Name")

function send() {
      message = document.getElementById("message").value;
      document.getElementById("message").value = "";
      firebase.database().ref(room_name).push({
            user: userName,
            msg: message,
            like: 0
      });
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
                  }
            });
      });
}

function logout() {
      localStorage.removeItem("User Name");
      localStorage.removeItem("room-name");
      window.location = "index.html";
}

