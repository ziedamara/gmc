  document.querySelector("#product").addEventListener("submit" , function(e){
      e.preventDefault()
      submitProduct()
  })

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC9owxhUhiGMBM89QSQBlD0CAt6XHLj_Vs",
    authDomain: "product-bf537.firebaseapp.com",
    databaseURL: "https://product-bf537.firebaseio.com",
    projectId: "product-bf537",
    storageBucket: "product-bf537.appspot.com",
    messagingSenderId: "239499483398",
    appId: "1:239499483398:web:3dec6a7a4dcff3c9b8e687",
    measurementId: "G-WJW26M6PYP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database()

  let ref = database.ref("products") 

  function submitProduct(){
    let ref = database.ref("products/" + document.querySelector("#pc-company").value)

    let data = {
        name : document.querySelector("#pc-name").value ,
        ram : document.querySelector("#pc-ram").value ,
        cpu : document.querySelector("#pc-cpu").value ,
        company : document.querySelector("#pc-company").value ,
        url : document.querySelector("#url").value
        
    }
    ref.push(data)
  }
 