const key = [
  "AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
  "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
  "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
  "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
  "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",
];
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
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    div.append(p);
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
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    div.append(p);
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
    div.append(p);
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
    div.append(img);
    const p = $("<p></p>");
    p.text(special[x]);
    p.addClass("p");
    div.append(p);
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
    if (
      elem.toLowerCase().search($(".insearch").val().toLowerCase()) >= 0) {
      console.log($(".insearch").val());
      arr.push(elem);
      ind.push(index);
    }

  });
  $("#content").hide();
  const main = $("#main");
  const div = $("<div></div>");
  div.addClass("searchBar");
  const result = $("<h1></h1>");
  result.html("The Result Search Is :-");
  div.append(result);
  const divRes = $("<div></div>");
  divRes.addClass("results");
  const divImg = $("<div></div>");
  divImg.addClass("sortImg")
  ind.forEach((elem) => {
    const img = $("<img>");
    img.addClass("img1");
    if (elem === 4) {
      img.attr("src", "images/" + elem + ".jpeg");
    } else {
      img.attr("src", "images/" + elem + ".jpg");
    }
    divImg.append(img)

  });
  const divP = $("<div></div>");
  divP.addClass("sortP")
  arr.forEach((elem) => {
    const p = $("<p></p>");
    p.text(elem);
    p.addClass("p1");
    divP.append(p);
  });
  divRes.append(divImg)
  divRes.append(divP)
  div.append(divRes)
  main.append(div)
};
