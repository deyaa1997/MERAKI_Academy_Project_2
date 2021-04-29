const cpu = [
  "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
  "AMD RYZEN 5 3600 6-Core 3.6 GHz (4.2 GHz Max Boost)",
  "Intel Core i5-10400F Comet Lake 6-Cores up to 4.3 GHz 12MB",
  "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
]
const gpu =[
  "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
  "MSI GeForce RTX 3080 SUPRIM X 10G 10GB 320-Bit GDDR6X Video Card",
  "ASUS ROG Strix GeForce RTX 3060 OC Edition 12GB GDDR6",
  "ASUS ROG Strix GeForce GTX 1660 Super OC Edition 6GB Gaming",
]

const laptop =[
  "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
  "HP Gaming Pavilion 15-dk1020ne 10Gen I7 w/ GTX 1660 TI",
  "Lenovo NEW ThinkPad L15 Gen1 AMD Ryzen 7 PRO Laptop",
  "HP Laptop 15-dw3046ne NEW Intel 11th Gen Core i5 - Black"
]

const keyboard =[
  "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
  "Razer Huntsman V2 Analog Optical Switches RGB Chroma",
  "Redragon K530 RGB 61 Keys USB-C & Bluetooth White",
  "Razer Huntsman Mini 60% Linear Optical Switches White"
]
const arr = []
const key = arr.concat(cpu,gpu,laptop,keyboard)
console.log(key)

const disc = () => {
  $("#content").html("")
}

const addSpecial = () => {
  const special = [
    "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
  ];
  const priceArr = ["300 JOD", "1200 JOD", "975 JOD", "70 JOD", "360 JOD"];
  const spec = $("#special");
  for (let x = 0; x < 5; x++) {
    const div = $("<div></div>");
    div.addClass("s");
    spec.append(div);
    const img = $("<img>");
    img.addClass("img");
    if (x === 4) {
      img.attr("src", "images/" + x + ".jpeg");
      div.css("border-right", "hidden");
    } else {
      img.attr("src", "images/" + x + ".jpg");
    }
    img.on("click" , () => disc())
    img.css("cursor" , "pointer")
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>")
    btn.addClass("contentbtn")
    btn.append(p)
    div.append(btn);
    btn.on("click" , () => disc())
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(priceArr[x]);
    div.append(price);
  }
};

const addNew = () => {
  const special = [
    "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
  ];
  const priceArr = ["300 JOD", "1200 JOD", "975 JOD", "70 JOD", "360 JOD"];
  const New = $("#new");
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
    img.on("click" , () => disc())
    img.css("cursor" , "pointer")
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>")
    btn.addClass("contentbtn")
    btn.append(p)
    div.append(btn);
    btn.on("click" , () => disc())
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(priceArr[x]);
    div.append(price);
    New.append(div);
  }
};

const addBest = () => {
  const special = [
    "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
  ];
  const priceArr = ["300 JOD", "1200 JOD", "975 JOD", "70 JOD", "360 JOD"];
  const best = $("#best");
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
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>")
    btn.addClass("contentbtn")
    btn.append(p)
    div.append(btn);
    btn.on("click" , () => disc())
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(priceArr[x]);
    div.append(price);
    best.append(div);
  }
};

const addComing = () => {
  const special = [
    "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
  ];
  const priceArr = ["300 JOD", "1200 JOD", "975 JOD", "70 JOD", "360 JOD"];
  const coming = $("#coming");
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
    img.on("click" , () => disc())
    img.css("cursor" , "pointer")
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    const btn = $("<button></button>")
    btn.addClass("contentbtn")
    btn.append(p)
    div.append(btn);
    btn.on("click" , () => disc())
    const price = $("<h2></h2>");
    price.addClass("pr");
    price.text(priceArr[x]);
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
  $("#content").html("");
  $("#content").show();
  $("#content").css("height", "200px");
  const main = $("#main");
  const div = $("<div></div>");
  div.addClass("searchBar");
  const result = $("<h1></h1>");
  result.html("The Result Search Is :-");
  div.append(result);
  const divRes = $("<div></div>");
  divRes.addClass("results");
  const divImg = $("<div></div>");
  divImg.addClass("sortImg");
  ind.forEach((elem) => {
    const img = $("<img>");
    img.addClass("img1");
    if (elem === 4) {
      img.attr("src", "images/" + elem + ".jpeg");
    } else {
      img.attr("src", "images/" + elem + ".jpg");
    }
    divImg.append(img);
  });
  const divP = $("<div></div>");
  divP.addClass("sortP");
  arr.forEach((elem) => {
    const p = $("<p></p>");
    p.text(elem);
    p.addClass("p1");
    divP.append(p);
  });
  divRes.append(divImg);
  divRes.append(divP);
  div.append(divRes);
  $("#content").append(div);
};

const about = () => {
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
  $("#content").css({"height" :"500px" })
  $("#content").append(div);
};

const contact = () => {
  $("#content").html("")
  $("#content").css({"height": "200px" , "gap" :"200px"});
  const div = $("<div></div>")
  div.addClass("contactDiv")
  const h1 = $("<h1></h1>")
  h1.css("color", "rgb(177,22,22)")
  h1.text("For Contact Us :-")
  const h2 = $("<h2></h2>")
  h2.css({"color":"rgba(177,22,22,0.8)" , "margin-left": "20px"})
  h2.text("Tel :-")
  const h3 = $("<h2></h2>")
  h3.text("078-66-8-77-48")
  h3.css({"color": "rgba(0, 0, 0,0.7)" , "margin-left": "70px"})
  const h4 = $("<h2></h2>")
  h4.text("E-mail :-")
  h4.css({"color":"rgba(177,22,22,0.8)" , "margin-left": "20px"})
  const h5 = $("<h2></h2>")
  h5.text("deyah.mosa@hotmail.com")
  h5.css({"color": "rgba(0, 0, 0,0.7)" , "margin-left": "70px"})
  const h6 = $("<h2></h2>")
  h6.text("Location :-")
  h6.css({"color":"rgba(177,22,22,0.8)" , "margin-left": "20px"})
  const h7 = $("<h2></h2>")
  h7.text("Amman - Jordan")
  h7.css({"color": "rgba(0, 0, 0,0.7)" , "margin-left": "70px"})
  div.append(h1)
  div.append(h2)
  div.append(h3)
  div.append(h4)
  div.append(h5)
  div.append(h6)
  div.append(h7)
  $("#content").append(div)
}
