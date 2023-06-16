console.log(123);
document.getElementById("signup-form").addEventListener("submit", function (e) {
  console.log(222);
  e.preventDefault();

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;

  const user = {
    email,
    phone,
    password,
    address,
  };

  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(function (response) {
      Swal.fire({
        title: "Success!",
        text: "Đăng ký thành công",
        html: `
         <a class="btn btn-primary" href="/day3/login.html" role="button">Đăng nhập</a>
        `,
        icon: "success",
        showConfirmButton: false,
      });
      db.collection("users").add({
        email,
        address,
        phone,
      });
    })
    .catch(function (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    });
});
