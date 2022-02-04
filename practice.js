const firebaseConfig = {
    apiKey: "AIzaSyCoEIIvsTnXatN2kCYSKKjax-wBFFjMdDs",
    authDomain: "project-41-9444c.firebaseapp.com",
    databaseURL: "https://project-41-9444c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-41-9444c",
    storageBucket: "project-41-9444c.appspot.com",
    messagingSenderId: "655538974807",
    appId: "1:655538974807:web:cf6a36c9a1306158377312",
    measurementId: "G-XR7H0XPMYL"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

