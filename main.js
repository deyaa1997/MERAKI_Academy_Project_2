const cpu = [
  "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
  "AMD RYZEN 5 3600 6-Core 3.6 GHz (4.2 GHz Max Boost)",
  "Intel Core i5-10400F Comet Lake 6-Cores up to 4.3 GHz 12MB",
  "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
];

const gpu = [
  "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
  "MSI GeForce RTX 3080 SUPRIM X 10G 10GB 320-Bit GDDR6X Video Card",
  "ASUS ROG Strix GeForce RTX 3060 OC Edition 12GB GDDR6",
  "ASUS ROG Strix GeForce GTX 1660 Super OC Edition 6GB Gaming",
];

const laptop = [
  "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
  "HP Gaming Pavilion 15-dk1020ne 10Gen I7 w/ GTX 1660 TI",
  "Lenovo NEW ThinkPad L15 Gen1 AMD Ryzen 7 PRO Laptop",
  "HP Laptop 15-dw3046ne NEW Intel 11th Gen Core i5 - Black",
];

const keyboard = [
  "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
  "Razer Huntsman V2 Analog Optical Switches RGB Chroma",
  "Redragon K530 RGB 61 Keys USB-C & Bluetooth White",
  "Razer Huntsman Mini 60% Linear Optical Switches White",
];
const arr = [];
const key = arr.concat(cpu, gpu, laptop, keyboard);
console.log(key);
const pricearr = [
  300,
  180,
  145,
  360,
  1200,
  1500,
  850,
  340,
  975,
  999,
  999,
  529,
  69,
  189,
  39,
  99,
];
// const save = JSON.parse(localStorage.getItem("save1")) || [];
const admin = JSON.parse(localStorage.getItem("admin")) || [
  {
    id: 0,
    username: "Deyaa Mosa",
    email: "deyah.mosa@hotmail.com",
    password: "dodo1997",
    save: JSON.parse(localStorage.getItem("save10")) || [],
  },
];
const user = JSON.parse(localStorage.getItem("user")) || [
  {
    id: 0,
    username: "Deyaa Mosa",
    email: "deyah.mosa@gmail.com",
    password: "dodo1997",
    save: JSON.parse(localStorage.getItem("save0")) || [],
  },
];
const status = [];
console.log(status);
const number = [];
const login = () => {
  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css({ height: "200px", margin: "40px", gap: "0px" });
  const h1 = $("<h1></h1>");
  h1.css("color", "rgb(177,22,22)");
  h1.text("Account Login");
  const alert = $("<div></div>");
  alert.addClass("alert");
  const pAlert = $("<p></p>");
  pAlert.addClass("pAlert");
  pAlert.css({
    width: "400px",
    color: "rgb(177,22,22)",
    "margin-left": "20px",
  });
  alert.append(pAlert);
  const div = $("<div></div>");
  div.addClass("login");
  const divLeft = $("<div></div>");
  divLeft.addClass("loginLeft");
  const h2 = $("<h2></h2>");
  h2.css("color", "rgb(51, 51, 51)");
  h2.text("Welcome To The Eagle");
  const p = $("<p></p>");
  p.css({ width: "550px", color: "rgb(0, 0, 0)", "line-height": "1.6" });
  p.text(
    "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."
  );
  divLeft.append(h2);
  divLeft.append(p);
  const divRight = $("<div></div>");
  divRight.addClass("loginRight");
  const label = $("<label></label><br>");
  label.attr("for", "email");
  label.html("E-Mail Address :-");
  label.css({
    color: "rgb(37,37,37)",
    "font-weight": "900",
    "font-size": "22px",
  });
  const email = $("<input><br>");
  email.addClass("email");
  email.attr({
    type: "email",
    name: "email",
    placeholder: "Enter Your E-mail",
  });
  const label1 = $("<label></label><br>");
  label1.attr("for", "pass");
  label1.html("Password :-");
  label1.css({
    color: "rgb(37,37,37)",
    "font-weight": "900",
    "font-size": "22px",
  });
  const password = $("<input><br>");
  password.addClass("pass");
  password.attr({
    type: "password",
    name: "pass",
    placeholder: "Enter Your Password",
  });
  const btnLogin = $("<button></button>");
  btnLogin.addClass("btnLogin");
  btnLogin.html("Login");
  const btnRigster = $("<button></button>");
  btnRigster.addClass("btnRigster");
  btnRigster.html("Rigster Account");
  divRight.append(label);
  divRight.append(email);
  divRight.append(label1);
  divRight.append(password);
  divRight.append(btnLogin);
  divRight.append(btnRigster);
  div.append(divLeft);
  div.append(divRight);
  $("#content").append(h1);
  $("#content").append(alert);
  $("#content").append(div);
  alert.hide();

  btnLogin.on("click", () => {
    const em = email.val();
    const pas = password.val();
    check(em, pas);
  });
  $(".h1header").on("click", () => {
    $("#content").css({ gap: "0px", "margin-top": "0px" });
    home();
  });

  btnRigster.on("click", () => {
    rigster();
  });
};

const check = (email, password) => {
  let status1 = false;
  admin.forEach((elem, ind) => {
    if (email === elem.email && password === elem.password) {
      $(".pAlert").text("Welcome To Your Website");
      $(".alert").show();
      setTimeout(() => {
        if (status.length > 0) {
          status.shift();
        }
        status.push("admin");
        if (number.length > 0) {
          number.shift();
        }
        number.push(elem.id);
        console.log(number);
        return home();
      }, 2000);
      status1 = true;
    }
  });
  user.forEach((elem, ind) => {
    if (email === elem.email && password === elem.password) {
      $(".pAlert").text("You Are Welcome");
      $(".alert").show();
      setTimeout(() => {
        if (status.length > 0) {
          status.shift();
        }
        status.push("user");
        if (number.length > 0) {
          number.shift();
        }
        number.push(elem.id);
        return home();
      }, 2000);
      status1 = true;
    }
  });
  if (status1 === false) {
    $(".pAlert").text("Warning: No match for E-Mail Address and/or Password.");
    $(".alert").show();
  }
};

const rigster = () => {
  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css({ height: "200px", margin: "40px", gap: "0px" });
  const h1 = $("<h1></h1>");
  h1.css("color", "rgb(177,22,22)");
  h1.text("Account Login");
  const alert = $("<div></div>");
  alert.addClass("alert");
  const pAlert = $("<p></p>");
  pAlert.addClass("pAlert");
  pAlert.css({
    width: "400px",
    color: "rgb(177,22,22)",
    "margin-left": "20px",
  });
  alert.append(pAlert);
  const div = $("<div></div>");
  div.addClass("login");
  const divLeft = $("<div></div>");
  divLeft.addClass("loginLeft");
  const h2 = $("<h2></h2>");
  h2.css("color", "rgb(51, 51, 51)");
  h2.text("Welcome To The Eagle");
  const p = $("<p></p>");
  p.css({ width: "550px", color: "rgb(0, 0, 0)", "line-height": "1.6" });
  p.text(
    "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."
  );
  divLeft.append(h2);
  divLeft.append(p);
  const divRight = $("<div></div>");
  divRight.addClass("loginRight");
  const labelFirst = $("<label></label><br>");
  labelFirst.attr("for", "first");
  labelFirst.html("First Name :-");
  labelFirst.css({
    color: "rgb(37,37,37)",
    "font-weight": "900",
    "font-size": "22px",
  });
  const first = $("<input><br>");
  first.addClass("first");
  first.attr({
    type: "text",
    name: "first",
    placeholder: "Enter Your First Name",
  });
  const labelLast = $("<label></label><br>");
  labelLast.attr("for", "last");
  labelLast.html("Last Name :-");
  labelLast.css({
    color: "rgb(37,37,37)",
    "font-weight": "900",
    "font-size": "22px",
  });
  const last = $("<input><br>");
  last.addClass("last");
  last.attr({
    type: "text",
    name: "last",
    placeholder: "Enter Your Last Name",
  });
  const label = $("<label></label><br>");
  label.attr("for", "email");
  label.html("E-Mail Address :-");
  label.css({
    color: "rgb(37,37,37)",
    "font-weight": "900",
    "font-size": "22px",
  });
  const email = $("<input><br>");
  email.addClass("email");
  email.attr({
    type: "email",
    name: "email",
    placeholder: "Enter Your E-mail",
  });
  const label1 = $("<label></label><br>");
  label1.attr("for", "pass");
  label1.html("Password :-");
  label1.css({
    color: "rgb(37,37,37)",
    "font-weight": "900",
    "font-size": "22px",
  });
  const password = $("<input><br>");
  password.addClass("pass");
  password.attr({
    type: "password",
    name: "pass",
    placeholder: "Enter Your Password",
  });
  const btnLogin = $("<button></button>");
  btnLogin.addClass("btnLogin");
  btnLogin.html("Login");
  const btnRigster = $("<button></button>");
  btnRigster.addClass("btnRigster");
  btnRigster.html("Rigster Account");
  divRight.append(labelFirst);
  divRight.append(first);
  divRight.append(labelLast);
  divRight.append(last);
  divRight.append(label);
  divRight.append(email);
  divRight.append(label1);
  divRight.append(password);
  divRight.append(btnLogin);
  divRight.append(btnRigster);
  btnLogin.hide();
  div.append(divLeft);
  div.append(divRight);
  $("#content").append(h1);
  $("#content").append(alert);
  $("#content").append(div);
  alert.hide();
  email.on("click", () => {});
  btnRigster.on("click", () => {
    const fir = first.val();
    const las = last.val();
    const em = email.val();
    const pas = password.val();
    if (email.val().includes("@") && email.val().includes(".com") === true) {
      $(".pAlert").text("");
      $(".alert").hide();
      aval(fir, las, em, pas);
    } else {
      $(".pAlert").text("Warning:E-Mail  Address Must Contain (@) or (.com).");
      $(".alert").show();
    }
  });
  $(".h1header").on("click", () => {
    $("#content").css({ gap: "0px", "margin-top": "0px" });
    home();
  });
};

const aval = (fir, las, em, pas) => {
  let status1 = true;
  admin.forEach((elem, ind) => {
    if (em === elem.email) {
      $(".pAlert").text("Warning:  E-Mail  Address  Is  Already  Exists.");
      $(".alert").show();
      status1 = false;
    }
  });
  user.forEach((elem, ind) => {
    if (em === elem.email) {
      $(".pAlert").text("Warning:  E-Mail  Address  Is  Already  Exists.");
      $(".alert").show();
      status1 = false;
    }
  });
  if (status1 === true) {
    $(".pAlert").text("Your Rigster Successfully");
    $(".alert").show();
    setTimeout(() => {
      status.push("user");
      user.push({
        id: user.length,
        username: fir + las,
        email: em,
        password: pas,
        save: [],
      });
      localStorage.setItem("user", JSON.stringify(user));
      return home();
    }, 2000);
  }
};

const home = () => {
  $(".mainimg").show();
  $("#content").html("");
  $("#content").css({ gap: "30px" });
  if (status[0] === "user") {
    const h0 = $("<h1></h1>");
    h0.addClass("h");
    h0.css({ "margin-top": "0px", "margin-left": "700px" });
    h0.text("-Users Home Page-");
    $("#content").append(h0);
  } else if (status[0] === "admin") {
    const h0 = $("<h1></h1>");
    h0.addClass("h");
    h0.css({ "margin-top": "0px", "margin-left": "680px" });
    h0.text("-Admin Home Page-");
    $("#content").append(h0);
  }
  const h1 = $("<h1></h1>");
  h1.addClass("h");
  h1.css("margin-top", "70px");
  h1.text("-Special Products-");
  const div1 = $("<div></div>");
  div1.addClass("special");
  const fun1 = $(`<script>addSpecial(${status[0]})</script>`);
  div1.append(fun1);
  $("#content").append(h1);
  $("#content").append(div1);
  const h2 = $("<h1></h1>");
  h2.addClass("h");
  h2.text("-New Products-");
  const div2 = $("<div></div>");
  div2.addClass("new");
  const fun2 = $(`<script>addNew(${status[0]})</script>`);
  div2.append(fun2);
  $("#content").append(h2);
  $("#content").append(div2);
  const h3 = $("<h1></h1>");
  h3.addClass("h");
  h3.text("-Best reviews-");
  const div3 = $("<div></div>");
  div3.addClass("best");
  const fun3 = $(`<script>addBest(${status[0]})</script>`);
  div3.append(fun3);
  $("#content").append(h3);
  $("#content").append(div3);
  const h4 = $("<h1></h1>");
  h4.addClass("h");
  h4.text("-Coming Soon-");
  const div4 = $("<div></div>");
  div4.addClass("coming");
  const fun4 = $(`<script>addComing(${status[0]})</script>`);
  div4.append(fun4);
  $("#content").append(h4);
  $("#content").append(div4);
};

const disc = (ind) => {
  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css("height", "600px");
  val = pricearr[ind];
  const arr = [
    "AMD's fastest 6-core processor for the main desktop, with 12 threads.",
    "It can deliver an elite 100+ FPS performance in the world's most popular games.",
    "NOT Including Cooler",
    "4.6 GHz Max Boost, Unlocked for Overclocking,",
  ];
  const name = key[ind];
  const div = $("<div></div>");
  div.addClass("divdiv");
  const h1 = $("<h1></h1>");
  h1.html(name + " :-");
  h1.css("color", "rgb(34,34,34)");
  const ul = $("<ul></ul>");
  ul.addClass("ul");
  for (let x = 0; x < arr.length; x++) {
    const li = $("<li></li>");
    li.addClass("li");
    li.text(arr[x]);
    li.css({
      "margin-bottom": "40px",
      "margin-left": "20px",
      color: "rgb(90,90,90)",
    });
    ul.append(li);
  }
  const img = $("<img>");
  if (ind === 3) {
    img.attr("src", "key img/" + ind + ".jpeg");
  } else {
    img.attr("src", "key img/" + ind + ".jpg");
  }
  img.addClass("im");
  img.css({ width: "400px", height: "330px", "margin-left": "40px" });
  div.css({ display: "grid", gap: "0px", "align-content": "center" });
  div.append(h1);
  div.append(ul);
  div.append(img);

  const divRight = $("<div></div>");
  divRight.addClass("divRight");
  const price = $("<h1></h1>");
  price.html("The Price Is :-");
  price.css({ color: "rgb(34,34,34)", "margin-bottom": "-80px" });
  const value = $("<h1></h1>");
  value.html(val + " JOD");
  value.css({ color: "rgb(0,0,0)", height: "50px" });
  const addToCart = $("<button></button>");
  addToCart.addClass("cart");
  addToCart.html("Add To Cart");
  const addrev = $("<i></i>");
  addrev.css("font-size", "50px");
  addrev.addClass("far fa-heart");
  const addrev1 = $("<i></i>");
  addrev1.css("font-size", "50px");
  addrev1.addClass("fas fa-heart");
  const btnrev = $("<button></button>");
  btnrev.addClass("btnrev");
  console.log(status);
  console.log(number);
  if (status.length !== 0) {
    addToCart.show();
  } else {
    addToCart.hide();
  }
  if (status[0] === "user") {
    btnrev.html(addrev);
  } else {
    btnrev.html("");
  }
  divRight.append(price);
  divRight.append(value);
  divRight.append(addToCart);
  divRight.append(btnrev);
  addrev1.click(function () {
    btnrev.html("");
    btnrev.html(addrev);
  });
  addrev.click(function () {
    btnrev.html("");
    btnrev.html(addrev1);
  });

  $("#content").append(div);
  $("#content").append(divRight);
  $(".h1header").on("click", () => home());
  addToCart.on("click", () => {
    $(".cart").css("background-color", "green");
    saveCart(ind);
  });
};
const saveCart = (q) => {
  if (status[0] === "admin") {
    if (admin[number[0]].save.indexOf(q) < 0) {
      admin[number[0]].save.push(q);
    }
    localStorage.setItem("save10", JSON.stringify(admin[number[0]].save));
  }
  if (status[0] === "user") {
    if (user[number[0]].save.indexOf(q) < 0) {
      user[number[0]].save.push(q);
      console.log(user[number[0]].save);
    }
    localStorage.setItem(
      "save" + number[0],
      JSON.stringify(user[number[0]].save)
    );
    localStorage.setItem("user", JSON.stringify(user));
  }
};

const addSpecial = (status) => {
  const special = [];
  for (let x = 0; x < 5; x++) {
    let ind = Math.ceil(Math.random() * 15);
    if (special.includes(ind) === false) {
      special.push(key[ind], ind);
    } else {
      x--;
    }
  }
  const spec = $(".special");
  for (let x = 0; x <= 8; x += 2) {
    const div = $("<div></div>");
    div.addClass("s");
    spec.append(div);
    const img = $("<img>");
    img.addClass("img");
    if (x === 8 && special[x + 1] !== 3) {
      img.attr("src", "key img/" + special[x + 1] + ".jpg");
      div.css("border-right", "hidden");
    } else if (x === 8 && special[x + 1] === 3) {
      div.css("border-right", "hidden");
      img.attr("src", "key img/" + special[x + 1] + ".jpeg");
    } else if (special[x + 1] === 3) {
      img.attr("src", "key img/" + special[x + 1] + ".jpeg");
    } else {
      img.attr("src", "key img/" + special[x + 1] + ".jpg");
    }
    img.on("click", () => disc(special[x + 1], status));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(special[x + 1], status));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(pricearr[special[x + 1]] + " JOD");
    div.append(price);
  }
};

const addNew = (status) => {
  const special = [
    "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
  ];
  const priceArr = ["300 JOD", "1200 JOD", "975 JOD", "70 JOD", "360 JOD"];
  const dis = [];
  for (let z = 0; z < special.length; z++) {
    if (key.indexOf(special[z]) >= 0) {
      dis.push(key.indexOf(special[z]));
    }
  }
  console.log(dis);
  const New = $(".new");
  for (let x = 0; x < 5; x++) {
    const div = $("<div></div>");
    div.addClass("s");
    const img = $("<img>");
    img.addClass("img");
    if (x === 4) {
      img.attr("src", "images/" + x + ".jpeg");
      div.css("border-right", "hidden");
    } else {
      img.attr("src", "images/" + x + ".jpg");
    }
    img.on("click", () => disc(dis[x], status));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(dis[x], status));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(priceArr[x]);
    div.append(price);
    New.append(div);
  }
};

const addBest = (status) => {
  const special = [key[2], key[5], key[10], key[13], key[9]];
  const priceArr = ["300 JOD", "1200 JOD", "975 JOD", "70 JOD", "360 JOD"];
  const dis = [];
  for (let z = 0; z < special.length; z++) {
    if (key.indexOf(special[z]) >= 0) {
      dis.push(key.indexOf(special[z]));
    }
  }
  const best = $(".best");
  for (let x = 0; x < 5; x++) {
    const div = $("<div></div>");
    div.addClass("s");
    const img = $("<img>");
    img.addClass("img");
    if (x === 4) {
      img.attr("src", "key img/" + key.indexOf(special[x]) + ".jpg");
      div.css("border-right", "hidden");
    } else {
      img.attr("src", "key img/" + key.indexOf(special[x]) + ".jpg");
    }
    img.on("click", () => disc(dis[x], status));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(dis[x], status));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(pricearr[key.indexOf(special[x])] + " JOD");
    div.append(price);
    best.append(div);
  }
};

const addComing = (status) => {
  const special = [key[1], key[7], key[6], key[15], key[11]];
  const priceArr = ["300 JOD", "1200 JOD", "975 JOD", "70 JOD", "360 JOD"];
  const dis = [];
  for (let z = 0; z < special.length; z++) {
    if (key.indexOf(special[z]) >= 0) {
      dis.push(key.indexOf(special[z]));
    }
  }
  const coming = $(".coming");
  for (let x = 0; x < 5; x++) {
    const div = $("<div></div>");
    div.addClass("s");
    const img = $("<img>");
    img.addClass("img");
    if (x === 4) {
      img.attr("src", "key img/" + key.indexOf(special[x]) + ".jpg");
      div.css("border-right", "hidden");
    } else {
      img.attr("src", "key img/" + key.indexOf(special[x]) + ".jpg");
    }
    img.on("click", () => disc(dis[x], status));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(dis[x], status));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(pricearr[key.indexOf(special[x])] + " JOD");
    div.append(price);
    coming.append(div);
  }
};

const search = function () {
  const arr = [];
  const ind = [];
  key.forEach((elem, index) => {
    if (elem.toLowerCase().search($(".insearch").val().toLowerCase()) >= 0) {
      console.log($(".insearch").val());
      arr.push(elem);
      ind.push(index);
    }
  });
  if (arr.length >= 1) {
    $(".mainimg").hide();
    $("#content").html("");
    $("#content").show();
    $("#content").css("height", "200px");
    const div = $("<div></div>");
    div.addClass("searchBar");
    div.css("margin", "40px");
    const result = $("<h1></h1>");
    result.html("The Results Search Is :-");
    div.append(result);
    const divRes = $("<div></div>");
    divRes.addClass("results");
    const divImg = $("<div></div>");
    divImg.addClass("sortImg");
    ind.forEach((elem) => {
      const img = $("<img>");
      img.addClass("img1");
      if (elem === 3) {
        img.attr("src", "key img/" + elem + ".jpeg");
      } else {
        img.attr("src", "key img/" + elem + ".jpg");
      }
      img.on("click", () => disc(elem));
      img.css("cursor", "pointer");
      divImg.append(img);
    });
    const divP = $("<div></div>");
    divP.addClass("sortP");
    arr.forEach((elem, ind) => {
      const p = $("<p></p>");
      p.text(elem);
      p.addClass("p1");
      p.on("click", () => disc(ind));
      p.css("cursor", "pointer");
      divP.append(p);
    });
    divRes.append(divImg);
    divRes.append(divP);
    div.append(divRes);
    $("#content").append(div);
    $(".h1header").on("click", () => home());
  } else {
    alert("Please Enter The Correct Word");
  }
};

const about = () => {
  $(".mainimg").hide();
  $("#content").html("");
  const main = $("#main");
  const div = $("<div></div>");
  const about = $("<h1></h1>");
  about.html("About Us");
  about.css("color", "rgb(177,22,22)");
  div.append(about);
  const Overview = $("<h1></h1>");
  Overview.html("Overview");
  Overview.addClass("aboutH");
  div.append(Overview);

  const p = $("<p></p>");
  p.html(
    "Founded in 2000, The Eagle is one of the largest IT distributors in the market. the company has been recognized by numerous publications as a preeminent global distributor of computer components. The Eagle specializes in offering a complete selection of memory, storage products and other hardware and software components for PCs and servers, and consumer electronics. We are committed to providing best-in-class services and value to over 4,000 active customers, including VARs, System Integrators, OEMs, and the Government and Education sectors."
  );
  p.addClass("aboutP");
  div.append(p);

  const Products = $("<h2></h2>");
  Products.html("Products");
  Products.addClass("aboutH");
  div.append(Products);

  const p1 = $("<p></p>");
  p1.html(
    "We endeavor to provide complete solutions to satisfy every customer's needs. We carry a comprehensive range of inventory including CPUs, Storage Devices, Notebooks, Motherboards, Graphics Cards, Displays, Wireless Networking, Cases, Consumer Electronics, Software and more. City Center is proud to be the leading authorized reseller for top brands such as Acer, ASUS, GIGABYTE, LG, Logitech, Microsoft, MSI, NVIDIA, Samsung, Super Talent, Toshiba and Western Digital."
  );
  p1.addClass("aboutP");
  div.append(p1);

  const CustomerService = $("<h2></h2>");
  CustomerService.html("Customer Service");
  CustomerService.addClass("aboutH");
  div.append(CustomerService);

  const p2 = $("<p></p>");
  p2.html(
    "Our dedicated customer service representatives are always ready to assist you with prompt responses to all your RMA inquiries .Our philosophy is to provide complete satisfaction to our customers."
  );
  p2.addClass("aboutP");
  div.append(p2);

  const TechnicalSupport = $("<h2></h2>");
  TechnicalSupport.html("Technical Support");
  TechnicalSupport.addClass("aboutH");
  div.append(TechnicalSupport);

  const p3 = $("<p></p>");
  p3.html(
    "Our technical support team provides customers with an extensive suite of services including component level troubleshooting, system restoration, software/hardware installation and device functionality verification. Our aim is to provide customers with rapid and reliable assistance."
  );
  p3.addClass("aboutP");
  div.append(p3);
  div.css("margin", "35px");
  $("#content").css({ height: "500px" });
  $("#content").append(div);
  $(".h1header").on("click", () => home());
};

const contact = () => {
  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css({ height: "200px", gap: "200px" });
  const div = $("<div></div>");
  div.addClass("contactDiv");
  const h1 = $("<h1></h1>");
  h1.css({
    color: "rgb(177,22,22)",
    "border-bottom-style": "groove",
    width: "240px",
  });
  h1.text("For Contact Us :-");
  const h2 = $("<h2></h2>");
  h2.css({
    color: "rgba(177,22,22,0.8)",
    "margin-left": "20px",
    "border-bottom-style": "groove",
    width: "62px",
  });
  h2.text("-Tel :-");
  const h3 = $("<h2></h2>");
  h3.text("078-66-8-77-48");
  h3.css({ color: "rgba(0, 0, 0,0.7)", "margin-left": "70px" });
  const h4 = $("<h2></h2>");
  h4.text("-E-mail :-");
  h4.css({
    color: "rgba(177,22,22,0.8)",
    "margin-left": "20px",
    "border-bottom-style": "groove",
    width: "101px",
  });
  const h5 = $("<h2></h2>");
  h5.text("deyah.mosa@hotmail.com");
  h5.css({ color: "rgba(0, 0, 0,0.7)", "margin-left": "70px" });
  const h6 = $("<h2></h2>");
  h6.text("-Location :-");
  h6.css({
    color: "rgba(177,22,22,0.8)",
    "margin-left": "20px",
    "border-bottom-style": "groove",
    width: "123px",
  });
  const h7 = $("<h2></h2>");
  h7.text("Amman - Jordan");
  h7.css({ color: "rgba(0, 0, 0,0.7)", "margin-left": "70px" });
  div.append(h1);
  div.append(h2);
  div.append(h3);
  div.append(h4);
  div.append(h5);
  div.append(h6);
  div.append(h7);
  $("#content").append(div);
  $(".h1header").on("click", () => home());
};

const cart = () => {
  console.log(status);
  console.log(number);

  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css({ height: "200px", gap: "200px" });
  let sum = 0;
  if (status.length === 0) {
    const div = $("<div></div>");
    div.addClass("div");
    const about = $("<h1></h1>");
    about.html("-Shopping Cart Is Not Availabele You Must Login To Use It-");
    about.css("color", "rgb(177,22,22)");
    div.append(about);
    div.css("margin", "40px");
    $("#content").append(div);
  } else {
    const div = $("<div></div>");
    div.addClass("div");
    const about = $("<h1></h1>");
    about.html("-Shopping Cart :-");
    about.css("color", "rgb(177,22,22)");
    div.append(about);
    if (status[0] === "admin") {
      if (admin[number[0]].save.length === 0) {
        const Overview = $("<h1></h1>");
        Overview.html("*Your shopping cart is empty!");
        Overview.css("margin-top", "40px");
        Overview.addClass("aboutH");
        div.append(Overview);
      } else {
        const div1 = $("<div></div>");
        div1.addClass("searchBar");
        div1.css("margin", "40px");
        const divRes = $("<div></div>");
        divRes.addClass("results");
        const divImg = $("<div></div>");
        divImg.addClass("sortImg");
        admin[number[0]].save.forEach((elem) => {
          const img = $("<img>");
          img.addClass("img1");
          if (elem === 3) {
            img.attr("src", "key img/" + elem + ".jpeg");
          } else {
            img.attr("src", "key img/" + elem + ".jpg");
          }
          img.on("click", () => disc(elem));
          img.css("cursor", "pointer");
          divImg.append(img);
        });
        const divP = $("<div></div>");
        divP.addClass("sortP");
        admin[number[0]].save.forEach((elem, ind) => {
          const p = $("<p></p>");
          p.text(key[elem]);
          p.addClass("p1");
          p.on("click", () => disc(elem));
          p.css("cursor", "pointer");
          divP.append(p);
        });
        const divPr = $("<div></div>");
        divPr.addClass("sortPr");
        admin[number[0]].save.forEach((elem, ind) => {
          const p2 = $("<p></p>");
          p2.text(pricearr[elem] + " JOD");
          sum += pricearr[elem];
          p2.addClass("p1");
          p2.css({ color: "rgb(177,22,22)", "font-weight": "bolder" });
          divPr.append(p2);
        });
        divRes.append(divImg);
        divRes.append(divP);
        divRes.append(divPr);
        div1.append(divRes);
        div.append(div1);
      }
      if (admin[number[0]].save.length !== 0) {
        const total = $("<h1></h1>");
        total.html(
          `- Thank You Your Subtotal For ( ${
            admin[number[0]].save.length
          } items ) Is:  ${sum}  JOD`
        );
        total.addClass("total");
        div.append(total);
      }
    }
    if (status[0] === "user") {
      if (user[number[0]].save.length === 0) {
        const Overview = $("<h1></h1>");
        Overview.html("*Your shopping cart is empty!");
        Overview.css("margin-top", "40px");
        Overview.addClass("aboutH");
        div.append(Overview);
      } else {
        const div1 = $("<div></div>");
        div1.addClass("searchBar");
        div1.css("margin", "40px");
        const divRes = $("<div></div>");
        divRes.addClass("results");
        const divImg = $("<div></div>");
        divImg.addClass("sortImg");
        user[number[0]].save.forEach((elem) => {
          const img = $("<img>");
          img.addClass("img1");
          if (elem === 3) {
            img.attr("src", "key img/" + elem + ".jpeg");
          } else {
            img.attr("src", "key img/" + elem + ".jpg");
          }
          img.on("click", () => disc(elem));
          img.css("cursor", "pointer");
          divImg.append(img);
        });
        const divP = $("<div></div>");
        divP.addClass("sortP");
        user[number[0]].save.forEach((elem, ind) => {
          const p = $("<p></p>");
          p.text(key[elem]);
          p.addClass("p1");
          p.on("click", () => disc(elem));
          p.css("cursor", "pointer");
          divP.append(p);
        });
        const divPr = $("<div></div>");
        divPr.addClass("sortPr");
        user[number[0]].save.forEach((elem, ind) => {
          const p2 = $("<p></p>");
          p2.text(pricearr[elem] + " JOD");
          sum += pricearr[elem];
          p2.addClass("p1");
          p2.css({ color: "rgb(177,22,22)", "font-weight": "bolder" });
          divPr.append(p2);
        });
        divRes.append(divImg);
        divRes.append(divP);
        divRes.append(divPr);
        div1.append(divRes);
        div.append(div1);
      }
      if (user[number[0]].save.length !== 0) {
        const total = $("<h1></h1>");
        total.html(
          `- Thank You Your Subtotal For ( ${
            user[number[0]].save.length
          } items ) Is:  ${sum}  JOD`
        );
        total.addClass("total");
        div.append(total);
      }
    }
    div.css("margin", "40px");
    $("#content").append(div);
  }
  $(".h1header").on("click", () => home());
};

const funCpu = () => {
  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css({ height: "200px", gap: "50px" });
  const header = $("<h1></h1>");
  header.addClass("h");
  header.text("CPU & Processor");
  header.css({ "margin-top": "30px" });
  const div1 = $("<div></div>");
  div1.css("border-bottom", "hidden");
  div1.addClass("special");
  for (let x = 0; x <= 3; x++) {
    const div = $("<div></div>");
    div.addClass("s");
    const img = $("<img>");
    img.addClass("img");
    if (x === 3) {
      img.attr("src", "key img/" + x + ".jpeg");
      div.css("border-right", "hidden");
    } else {
      img.attr("src", "key img/" + x + ".jpg");
    }
    img.on("click", () => disc(x));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(key[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(x));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(pricearr[x] + " JOD");
    div.append(price);
    div1.append(div);
  }
  $("#content").append(header);
  $("#content").append(div1);
  $(".h1header").on("click", () => home());
};

const funGpu = () => {
  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css({ height: "200px", gap: "50px" });
  const header = $("<h1></h1>");
  header.addClass("h");
  header.text("Gpu");
  header.css({ "margin-top": "30px" });
  const div1 = $("<div></div>");
  div1.css("border-bottom", "hidden");
  div1.addClass("special");
  for (let x = 4; x <= 7; x++) {
    const div = $("<div></div>");
    div.addClass("s");
    const img = $("<img>");
    img.addClass("img");
    if (x === 7) {
      div.css("border-right", "hidden");
    }
    img.attr("src", "key img/" + x + ".jpg");
    img.on("click", () => disc(x));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(key[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(x));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(pricearr[x] + " JOD");
    div.append(price);
    div1.append(div);
  }
  $("#content").append(header);
  $("#content").append(div1);
  $(".h1header").on("click", () => home());
};

const funLaptop = () => {
  $(".mainimg").hide();
  $("#content").html("");
  $("#content").css({ height: "200px", gap: "50px" });
  const header = $("<h1></h1>");
  header.addClass("h");
  header.text("Laptops");
  header.css({ "margin-top": "30px" });
  const div1 = $("<div></div>");
  div1.css("border-bottom", "hidden");
  div1.addClass("special");
  for (let x = 8; x <= 11; x++) {
    const div = $("<div></div>");

    div.addClass("s");
    const img = $("<img>");
    img.addClass("img");
    if (x === 11) {
      div.css("border-right", "hidden");
    }
    img.attr("src", "key img/" + x + ".jpg");
    img.on("click", () => disc(x));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(key[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(x));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(pricearr[x] + " JOD");
    div.append(price);
    div1.append(div);
  }
  $("#content").append(header);
  $("#content").append(div1);
  $(".h1header").on("click", () => home());
};

const funKeyboard = () => {
  $("#content").html("");
  $("#content").css({ height: "200px", gap: "50px" });
  $(".mainimg").hide();
  const header = $("<h1></h1>");
  header.addClass("h");
  header.text("Keyboard");
  header.css({ "margin-top": "30px" });
  const div1 = $("<div></div>");
  div1.css("border-bottom", "hidden");
  div1.addClass("special");
  for (let x = 12; x <= 15; x++) {
    const div = $("<div></div>");
    div.addClass("s");
    const img = $("<img>");
    img.addClass("img");
    if (x === 15) {
      div.css("border-right", "hidden");
    }
    img.attr("src", "key img/" + x + ".jpg");
    img.on("click", () => disc(x));
    img.css("cursor", "pointer");
    div.append(img);
    const p = $("<p></p>");
    p.text(key[x]);
    p.addClass("p");
    const btn = $("<button></button>");
    btn.addClass("contentbtn");
    btn.append(p);
    div.append(btn);
    btn.on("click", () => disc(x));
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(pricearr[x] + " JOD");
    div.append(price);
    div1.append(div);
  }
  $("#content").append(header);
  $("#content").append(div1);
  $(".h1header").on("click", () => home());
};
