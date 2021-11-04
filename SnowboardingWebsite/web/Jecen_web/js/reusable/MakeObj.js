function MakeObj(desc, imageFileName, price) {

    var ele = document.createElement("ele");
    ele.classList.add("obj"); // adds styling to ele - see obj.css rules for ".obj"

    var hdrImage = document.createElement("div");
    hdrImage.classList.add("imageContainer"); // see obj.css rules for ".obj .imageContainer"
    ele.appendChild(hdrImage);

    var header = document.createElement("h3");
    header.innerHTML = desc;
    hdrImage.appendChild(header);

    var myImage = document.createElement("img");
    myImage.src = imageFileName;
    hdrImage.appendChild(myImage);

    var priceHeading = document.createElement("h5");
    priceHeading.innerHTML = price;
    priceHeading.style.visibility = "hidden";
    ele.appendChild(priceHeading);

    myImage.onmouseenter = function () {
        console.log("you entered the image " + desc);
        priceHeading.style.visibility = "visible";
    };
    myImage.onmouseout = function () {
        console.log("you left the image " + desc);
        priceHeading.style.visibility = "hidden";
    };
    return ele;
}