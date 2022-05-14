const config = {
    apiKey: "AIzaSyA3_gHLDIHBwjucGBTVedrL62KoKVF6XEg",
    authDomain: "kwitter-3e296.firebaseapp.com",
    databaseURL: "https://kwitter-3e296-default-rtdb.firebaseio.com",
    projectId: "kwitter-3e296",
    storageBucket: "kwitter-3e296.appspot.com",
    messagingSenderId: "692347113166",
    appId: "1:692347113166:web:a6e6e5ce3c8d35a0a0ca9f",
  };
  
  // Initialize Firebase
  firebase.initializeApp(config);
  user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
