function objContent() {

var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
                background-color: grey;
            }
            .flexContainer .obj {
                width: 50%; /* to fit three columns inside the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
        <h3>Example Code for JS Object HW</h3>
        <p>
            In this example, several objects are created and then appended into the 
            content area. To see the event handling (that's built into these objects), 
            hover over an image then look for text to appear below the image. 
            The "weird" background colors (grey, light green, pink) 
            were added to make it easier to see which styling applies to 
            which parts of the UI. The "effort" for this homework is in three files: 
            js/reusable/MakeObj.js (creates an object), style/obj.css 
            (styles those objects), and js/components/objContent.js (creates 
            a styled div that contains several objects that were made by MakeObj). 
        </p>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content; // the HTML code specified just above...
        var twoObjects = document.createElement("div");
        twoObjects.classList.add('flexContainer'); // see styling in this file, above...
        ele.appendChild(twoObjects);
        twoObjects.appendChild(MakeObj("Camelback Mountain Resort", "pics/camelbackMountain.jpg", "$2400 for 6 days/nights"));
        twoObjects.appendChild(MakeObj("Mammoth Mountain Resort", "pics/mammothMountain.jpg", "$5900 for 9 days/nights"));
        var trailer = document.createElement("p");
        trailer.innerHTML = "My name is Luke Jecen, the three aspects of the stling in obj.css that I changed were I changed the backrounf color of .obj to cyan\n\
        and .obj .image container to white, I changed the width of .obj .img to 100% and finally I changed the border radius of .obj .img to 1.5 rem from .5rem which \n\
        curved the edges of the images and changed them from being a straight line. The objects created by the function makeObj are styled by the code in obj.css \n\
        because in MakeObj.js the var ele is created and ele ass a class of obj onto it which is then called in obj.css as before any of the elements are called you must\n\
        the class .obj in front of the elements as seen in lines 16, 22, and 27 of the obj.css file where it calls .obj, .obj .image container, and .obj img. This .obj class that was created\n\
        allows for the objects created by the MakeObj function to be styled by the css.";
        ele.appendChild(trailer);
        return ele;
}