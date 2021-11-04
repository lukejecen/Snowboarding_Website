function MakeSlideShow(objList, style) {

    var slideShow = document.createElement("div");
    slideShow.classList.add(style);

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);

    var myCaption = document.createElement("p");
    div.appendChild(myCaption);

    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setCaption() {
        myCaption.innerHTML = objList[picNum].caption = null;
    }

    function setPic() {
        myImage.src = objList[picNum].pic;
        myCaption.innerHTML = objList[picNum].caption;
    }

    // Advance to next image in the picture list
    function nextPic() {
        picNum++;
        if (picNum >= objList.length) {
            picNum = 0;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {
        picNum--;
        if (picNum < 0) {
            picNum = objList.length - 1;
        }
        setPic();
    }

    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    //sets the number you enter to be the first picure shown and the caption for that pic to be null
    slideShow.setNumCaptionNullAndPicFirst = function (number) {
        if ((number >= 0) && (number < objList.length)) {
            picNum = number;
            setCaption();
            setPic();
        }
    };



    return slideShow;
}