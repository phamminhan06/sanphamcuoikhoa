const formatVNDCurrency = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
};

let productList = [];
let productPickedList = JSON.parse(localStorage.getItem("an_cart")) || [];
const calcBill = (productPickedList) => {
  const totalBill = productPickedList.reduce(
    (accumulator, productPicked) => accumulator + productPicked.salePrice,
    0
  );
  document.getElementById("total-money").innerHTML =
    formatVNDCurrency(totalBill);
};

calcBill(productPickedList);
const removeItem = (index) => {
  productPickedList.splice(index, 1);
  localStorage.setItem("an_cart", JSON.stringify(productPickedList));
  renderCart(productPickedList);
  calcBill(productPickedList);
};
document.getElementById("count-products").innerHTML = productPickedList.length;
const renderCart = (myCart) => {
  console.log(myCart);
  // xu ly hien thi gio hang khi moi vao trang web
  if (myCart.length > 0) {
    // gio hang co san pham
    let htmlString = "";
    myCart.map((cartItem, index) => {
      htmlString += `
      <div class="cart-item d-flex my-5">
        <div>
            <img class="me-3" src="${
              cartItem.img
            }" alt="" style="width: 120px; height: 120px; border-radius: 8px" />
            <p class="text-danger text-center" onClick="removeItem(${index})"> Xóa </p>
        </div>
        <div class="">
            <h4>${cartItem.name}</h4>

            <small class="text-primary">
                ${formatVNDCurrency(cartItem.salePrice)}
            </small>
            <br>
            <small class="text-decoration-line-through">
                ${formatVNDCurrency(cartItem.price)}
            </small>
        </div>
      </div>
      `;
    });
    document.getElementById("cart-body").innerHTML = htmlString;
  } else {
    // gio hang rong
    document.getElementById("cart-body").innerHTML = `
    <div class="flex-fill">
      <p class="text-center">Chưa có sản phẩm nào bên trong giỏ hàng</p>
    </div> 
  `;
  }
};
renderCart(productPickedList);
const addToCart = (id) => {
  const productPicked = productList.find((product) => product.id === id);
  console.log(productPicked, productList);
  productPickedList.push(productPicked);
  localStorage.setItem("an_cart", JSON.stringify(productPickedList));
  document.getElementById("count-products").innerHTML =
    productPickedList.length;
  let newData = JSON.parse(localStorage.getItem("an_cart")) || [];

  renderCart(newData);
  calcBill(productPickedList);
};

const order = () => {
  const address = localStorage.getItem("address");
  if (productPickedList.length > 0) {
    localStorage.removeItem("an_cart");
    renderCart([]);
    calcBill([]);
    Swal.fire({
      title: "Success!",
      text: "Đặt hàng thành công",
      html: `
          Đơn hàng của bạn sẽ được giao tới địa ${address}
        `,
      icon: "success",
      showConfirmButton: false,
    });
    document.getElementById("count-products").innerHTML = 0;
  } else {
    Swal.fire({
      title: "Lỗi!",
      text: "Đặt hàng thất bại",
      html: `
          Giỏ hàng của bạn trống không
        `,
      icon: "error",
      showConfirmButton: false,
    });
  }
};

fetch("https://649ed17b245f077f3e9cf187.mockapi.io/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    productList = [...data];
    const htmlString = `
    <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-item card border-0 shadow px-2" >
        <img
          src="${data[1].img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[1].name}</h5>
          <div class="d-flex">
          <p class="card-text me-4 text-primary">${formatVNDCurrency(
            data[1].salePrice
          )}</p>
          <p class="text-decoration-line-through">${formatVNDCurrency(
            data[1].price
          )}</p>
          </div>
          <br>
          <button class="btn btn-success" onClick="addToCart(${
            data[1].id
          })" type="button">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-item card border-0 shadow px-2" >
        <img
          src="${data[0].img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[0].name}</h5>
          <div class="d-flex">
          <p class="card-text me-4 text-primary">${formatVNDCurrency(
            data[0].salePrice
          )}</p>
          <p class="text-decoration-line-through">${formatVNDCurrency(
            data[0].price
          )}</p>
          </div>
          <br>
          <button class="btn btn-success" onClick="addToCart (${
            data[0].id
          })" type="button">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-item card border-0 shadow px-2" >
        <img
          src="${data[7].img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[7].name}</h5>
          <div class="d-flex">
          <p class="card-text me-4 text-primary">${formatVNDCurrency(
            data[7].salePrice
          )}</p>
          <p class="text-decoration-line-through">${formatVNDCurrency(
            data[7].price
          )}</p>
          </div>
          <br>
          <button class="btn btn-success" onClick="addToCart (${
            data[7].id
          })" type="button">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-item card border-0 shadow px-2" >
        <img
          src="${data[8].img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[8].name}</h5>
          <div class="d-flex">
          <p class="card-text me-4 text-primary">${formatVNDCurrency(
            data[8].salePrice
          )}</p>
          <p class="text-decoration-line-through">${formatVNDCurrency(
            data[8].price
          )}</p>
          </div>
          <br>
          <button class="btn btn-success" onClick="addToCart (${
            data[8].id
          })" type="button">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
    `;
    if (document.getElementById("product-list")) {
      document.getElementById("product-list").innerHTML = htmlString;
    }
  });

fetch("https://649ed17b245f077f3e9cf187.mockapi.io/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let htmlString = "";
    data.map((productItem) => {
      htmlString += `
            <div class="col-6 col-lg-4 col-xl-3">
      <div class="product-item card border-0 shadow px-2">
        <img
          src="${productItem.img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${productItem.name}</h5>
          <div class="d-flex">
          <p class="card-text me-4 text-primary">${formatVNDCurrency(
            productItem.salePrice
          )}</p>
          <p class="text-decoration-line-through">${formatVNDCurrency(
            productItem.price
          )}</p>
          </div>
          <br>
          <button class="btn btn-success" type="button" onClick="addToCart(${
            productItem.id
          })">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
            `;
      if (document.getElementById("product-list2")) {
        document.getElementById("product-list2").innerHTML = htmlString;
      }
    });
  });
