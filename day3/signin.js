document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault()
  
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const password = document.getElementById('password').value
    const address = document.getElementById('address').value
  
    const user = {
      email,
      phone,
      password,
      address
    } 
    
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(response){
      console.log('ok', response.user)
      db.collection('users').add({
        email,
        address,
        phone
      })
    })
    .catch(function(error){
      console.log('ko', error)
    })
  
    console.log('Submit form button clicked.', user)
  })