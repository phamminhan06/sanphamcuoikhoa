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
      console.log(response);
      db.collection("users")
        .where("email", "==", user.email)
        .get()
        .then((snapshot) => {
          snapshot.docs.map((item) => {
            // chuyển về data
            const user = item.data();

            localStorage.setItem("address", JSON.stringify(user.address));
          });
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
