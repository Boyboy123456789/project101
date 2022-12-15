// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

    apiKey: "AIzaSyBIHHuoxXPQiQw4jnic0k1xDPuMqfWSuxY",
  
    authDomain: "kwitter-2b19c.firebaseapp.com",
  
    databaseURL: "https://kwitter-2b19c-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-2b19c",
  
    storageBucket: "kwitter-2b19c.appspot.com",
  
    messagingSenderId: "639421269340",
  
    appId: "1:639421269340:web:249f57f028661b17d7ad99"
  
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



