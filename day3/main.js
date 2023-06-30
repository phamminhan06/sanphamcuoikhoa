fetch("https://649ed17b245f077f3e9cf187.mockapi.io/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("product-list").innerHTML = `
    <div class="col-4">
      <div class="product-item card border-0 shadow px-2" style="width:450px;">
        <img
          src="${data[1].img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[1].name}</h5>
          <div class="d-flex">
          <p class="card-text me-4">${data[1].salePrice}</p>
          <p class="text-decoration-line-through">${data[1].price}</p>
          </div>
          <div class="d-flex">
            <div class="dropdown me-5">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Kích cỡ
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item">Nhỏ</button></li>
                <li><button class="dropdown-item">Vừa</button></li>
                <li><button class="dropdown-item">Lớn</button></li>
              </ul>
            </div>
            <br>
            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Đế viền
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item">Mỏng</button></li>
                <li><button class="dropdown-item">Dày</button></li>
                <li><button class="dropdown-item">Phô mai</button></li>
              </ul>
            </div>
          </div>
          <br>
          <button class="btn btn-success" type="button">Thêm</button>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="product-item card border-0 shadow px-2" style="width:450px;">
        <img
          src="${data[0].img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[0].name}</h5>
          <div class="d-flex">
          <p class="card-text me-4">${data[0].salePrice}</p>
          <p class="text-decoration-line-through">${data[0].price}</p>
          </div>
          <div class="d-flex">
            <div class="dropdown me-5">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Kích cỡ
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item">Nhỏ</button></li>
                <li><button class="dropdown-item">Vừa</button></li>
                <li><button class="dropdown-item">Lớn</button></li>
              </ul>
            </div>
            <br>
            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Đế viền
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item">Mỏng</button></li>
                <li><button class="dropdown-item">Dày</button></li>
                <li><button class="dropdown-item">Phô mai</button></li>
              </ul>
            </div>
          </div>
          <br>
          <button class="btn btn-success" type="button">Thêm</button>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="product-item card border-0 shadow px-2" style="width:450px;">
        <img
          src="${data[2].img}" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data[2].name}</h5>
          <div class="d-flex">
          <p class="card-text me-4">${data[2].salePrice}</p>
          <p class="text-decoration-line-through">${data[2].price}</p>
          </div>
          <div class="d-flex">
            <div class="dropdown me-5">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Kích cỡ
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item">Nhỏ</button></li>
                <li><button class="dropdown-item">Vừa</button></li>
                <li><button class="dropdown-item">Lớn</button></li>
              </ul>
            </div>
            <br>
            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Đế viền
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item">Mỏng</button></li>
                <li><button class="dropdown-item">Dày</button></li>
                <li><button class="dropdown-item">Phô mai</button></li>
              </ul>
            </div>
          </div>
          <br>
          <button class="btn btn-success" type="button">Thêm</button>
        </div>
      </div>
    </div>
    `;
  });
