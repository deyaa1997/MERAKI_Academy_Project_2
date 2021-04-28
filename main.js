const addSpecial = () => {
    const special = ["AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",]
    const priceArr = ["300 Jd","1200 Jd","975 Jd","70 Jd","360 Jd"]
    const spec = $("#special")
    for (let x = 0 ; x<5 ; x++){
        const div =$("<div></div>")
        div.addClass("s") 
        spec.append(div);
        const img = $("<img>")
        img.addClass("img")
        if (x === 4 ){
            img.attr("src" , 'images/' + x +".jpeg" )
        }else{
        img.attr("src" , 'images/' + x +".jpg" )}
        div.append(img)
        const p = $("<p></p>")
        p.text(special[x])
        p.addClass("p")
        div.append(p)
        const price = $("<h2></h2>")
        price.addClass("pr")
        price.text(priceArr[x])
        div.append(price)
    }
}


const addNew = () => {
    const special = ["AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",]
    const priceArr = ["300 Jd","1200 Jd","975 Jd","70 Jd","360 Jd"]
    const New = $("#new")
    for (let x = 0 ; x<5 ; x++){
        const div =$("<div></div>")
        div.addClass("s") 
        const img = $("<img>")
        img.addClass("img")
        if (x === 4 ){
            img.attr("src" , 'images/' + x +".jpeg" )
        }else{
        img.attr("src" , 'images/' + x +".jpg" )}
        div.append(img)
        const p = $("<p></p>")
        p.text(special[x])
        p.addClass("p")
        div.append(p)
        const price = $("<h2></h2>")
        price.addClass("pr")
        price.text(priceArr[x])
        div.append(price)
        New.append(div);
    }
}



const addBest = () => {
    const special = ["AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",]
    const priceArr = ["300 Jd","1200 Jd","975 Jd","70 Jd","360 Jd"]
    const best = $("#best")
    for (let x = 0 ; x<5 ; x++){
        const div =$("<div></div>")
        div.addClass("s") 
        const img = $("<img>")
        img.addClass("img")
        if (x === 4 ){
            img.attr("src" , 'images/' + x +".jpeg" )
        }else{
        img.attr("src" , 'images/' + x +".jpg" )}
        div.append(img)
        const p = $("<p></p>")
        p.text(special[x])
        p.addClass("p")
        div.append(p)
        const price = $("<h2></h2>")
        price.addClass("pr")
        price.text(priceArr[x])
        div.append(price)
        best.append(div);
    }
}


const addComing = () => {
    const special = ["AMD RYZEN 5 5600X 6-Core 3.7 GHz (4.6 GHz Max Boost) Tray",
    "ASUS ROG Strix GeForce RTX 3070 8GB GDDR6 OC Edition",
    "MSI GF65 Thin NEW 10Gen Core i7 6-Cores w/ GTX 1660TI 144Hz",
    "HyperX Alloy Origins 60 Mechanical Gaming Keyboard",
    "Intel Core i7-10700KA Comet Lake 8-Cores up to 5.1 GHz 16MB",]
    const priceArr = ["300 Jd","1200 Jd","975 Jd","70 Jd","360 Jd"]
    const coming = $("#coming")
    for (let x = 0 ; x<5 ; x++){
        const div =$("<div></div>")
        div.addClass("s") 
        const img = $("<img>")
        img.addClass("img")
        if (x === 4 ){
            img.attr("src" , 'images/' + x +".jpeg" )
        }else{
        img.attr("src" , 'images/' + x +".jpg" )}
        div.append(img)
        const p = $("<p></p>")
        p.text(special[x])
        p.addClass("p")
        div.append(p)
        const price = $("<h2></h2>")
        price.addClass("pr")
        price.text(priceArr[x])
        div.append(price)
        coming.append(div);
    }
}