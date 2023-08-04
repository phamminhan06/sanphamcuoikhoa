document.getElementById("signup-form").addEventListener("submit", function (e) {
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
      console.log(response);
      Swal.fire({
        title: "Thành công!",
        text: "Đăng ký thành công",
        html: `
         <a class="btn btn-primary" href="/day3/index.html" role="button">OK</a>
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
        title: "Lỗi!",
        text: error.message,
        icon: "error",
      });
    });
});
