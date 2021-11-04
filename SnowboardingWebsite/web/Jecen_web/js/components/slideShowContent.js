function slideShowContent() {

    var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
            }
            .flexContainer .slideShow {
                width: 50%; /* to fit two slideshows side by side in the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
        <h3>My Slide Show Components</h3>
        <p>
            I hope you enjoy my slide show pictures !!!
        </p>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content; // the HTML code specified just above...
    var twoObjects = document.createElement("div");
    twoObjects.classList.add('flexContainer'); // see styling in this file, above...
    ele.appendChild(twoObjects);

    ajax("json/cats.json", processCatsList, document.getElementById("firstSlideId"));

    function processCatsList(catsList) {


        // MakeSlideShow expects a property called "image", so provide that... 
        for (var i = 0; i < catsList.length; i++) {
            catsList[i].image = catsList[i].pic;
            console.log("image " + i + " " + catsList[i].pic);
        }
        for (var i = 0; i < catsList.length; i++) {
            catsList[i].caption = catsList[i].nickname;
            console.log("image " + i + " " + catsList[i].image);
        }

        console.log("catsList after setting image properties");
        console.log(catsList);
        var ss = MakeSlideShow(catsList, "slideShowStyle");
        document.getElementById("content").appendChild(ss);

        // Example showing why you need to get the ss reference, so the HTML page can invoke 
        // any public methods that may be available from the returned slide show object.
        ss.setNumCaptionNullAndPicFirst(2);
    }

    ajax("json/cars.json", processCarList, document.getElementById("secondSlideId"));

    function processCarList(carList) {

        // MakeSlideShow expects a property called "image", so provide that... 
        for (var i = 0; i < carList.length; i++) {
            carList[i].image = carList[i].pic;
            console.log("image " + i + " " + carList[i].pic);
        }
        for (var i = 0; i < carList.length; i++) {
            carList[i].caption = carList[i].make;
            console.log("image " + i + " " + carList[i].image);
        }

        var ss = MakeSlideShow(carList, "slideShowStyle");
        document.getElementById("content").appendChild(ss);

        // Example showing why you need to get the ss reference, so the HTML page can invoke 
        // any public methods that may be available from the returned slide show object.
        ss.setNumCaptionNullAndPicFirst(5);
    }

    return ele;
}