document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

  console.log(user);
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(function (response) {
      window.location.href = "index.html";
    })
    .catch(function (error) {
      Swal.fire({
        title: "Lỗi!",
        text: error.message,
        icon: "error",
      });
    });
});
