document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault()
  
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
  
    const user = {
      email,
      password,
    } 

    console.log(user)
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(response){
      location.replace('index.html')
    })
      db.collection('users').add({
        email,
        address,
        phone
      })
    })
    .catch(function(error){
        console.log(error)
      
    })
    
  