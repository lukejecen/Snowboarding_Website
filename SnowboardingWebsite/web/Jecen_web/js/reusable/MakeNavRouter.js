function MakeNavRouter(params) {

    function MakeLink(linkObj) {  // local private function

        var aTag = document.createElement("a");

        var linkText = linkObj.linkText || "Missing Link Text";
        aTag.innerHTML = linkText;

        // if both the action property and the linkURL property exist in the linkObj
        // then "register" the link and action in the routing table...

        if ('action' in linkObj && 'linkURL' in linkObj && linkObj.action !== "") {

            console.log("registering " + linkObj.linkURL + " (in MakeNavRouter)");
            aTag.href = linkObj.linkURL;

            // register the linkURL into the routing table. linkURL is the key. 
            // action is the value associated with that key. action will
            // be run whenever that linkURL shows up in the browser's address bar. 
            routes[linkObj.linkURL] = linkObj.action;

        }

        return aTag;

    } // end function MakeLink

    function MakeNavGroup(obj) {  // local private function

        var navGroup = document.createElement("div");
        navGroup.classList.add(NavGroupClass);

        if (!obj.header) { // if its not a header, it must be a link 
            navGroup.appendChild(MakeLink(obj));
        } else {

            // create header div along with its associated submenu div 
            var headerDiv = document.createElement("div");
            headerDiv.innerHTML = obj.header;
            headerDiv.classList.add(MenuHeaderClass);
            navGroup.appendChild(headerDiv);

            var subMenuDiv = document.createElement("div");
            subMenuDiv.classList.add(SubMenuClass);
            subMenuDiv.classList.add(hideClass);
            navGroup.appendChild(subMenuDiv);
            headerDiv.assocSubMenu = subMenuDiv;

            // create all the links in the sub menu
            for (var j = 0; j < obj.subMenu.length; j++) {
                subMenuDiv.appendChild(MakeLink(obj.subMenu[j]));
            }
        }
        return navGroup;
    } // end function MakeNavGroup

    // This event handler will run any time the user clicks anywhere on the page. 
    // 
    // If a MenuHeader is clicked, the associated SubMenu is toggled (hidden/shown). 
    // Otherwise (when click is anywhere else), all SubMenus are closed.
    window.onclick = function (event) {

        var clickedEle = event.target; // this is the DOM element (anywhere on page) that was clicked.
        // console.log("clickedEle on next line");
        // console.log(clickedEle);

        // if the clicked element is a MenuHeader, it will have a custom property 
        // that indicates the associated SubMenu.
        var subMenu = clickedEle.assocSubMenu;
        if (subMenu) {

            // console.log("SubMenu associated with MenuHeader (on next line):");
            // console.log(subMenu);

            if (subMenu.classList.contains(showClass)) {
                hide(subMenu);
            } else {
                show(subMenu);
            }

            hideSubMenusExcept(subMenu);

        } else { // the element they clicked was not a MenuHeader, so close all SubMenus. 

            // console.log("clicked ele is not a MenuHeader");
            hideSubMenusExcept(null); // hide all SubMenus
        }
    }; // window.onclick function 


    // Private functions related to drop down menus. 
    function hideSubMenusExcept(ele) {
        var dropContentList = document.getElementsByClassName(SubMenuClass);
        for (var i = 0; i < dropContentList.length; i++) {
            if (ele !== dropContentList[i]) {
                hide(dropContentList[i]);
            }
        }
    }

    function hide(ele) {
        ele.classList.remove(showClass);
        ele.classList.add(hideClass);
    }

    function show(ele) {
        ele.classList.remove(hideClass);
        ele.classList.add(showClass);
    }

// ROUTER Private functions

    function inject(what) {
        document.getElementById(contentId).innerHTML = "";
        document.getElementById(contentId).appendChild(what);
    }

    // private function that will be called whenever the browser's address bar changes. 
    function router() {

        var path = location.hash;
        console.log('in function router, path is ' + path); // prints something like #/home

        if (!routes[path]) {

            // The URL is not an index (key) in the (associative) Routing table... 

            var ele = document.createElement("div");
            ele.innerHTML = "<p>Error: unknown linkURL '" + path + "' was never added to the routing table.</p>";
            inject(ele);

        } else {

            if (routes[path] instanceof Function) {

                // There is a function in the routing table (indexed by the URL). Set 'ele' 
                // to whatever that function generates. 

                var ele = routes[path](); // returns DOM element

                // Store the path in the user's session so that the same link will 
                // appear upon page refresh.
                sessionStorage.setItem("NavRouterURL", path);

                inject(ele);

            } else {

                // What's in the routing table (indexed by the URL) is a String, 
                // not a function. Open up a new tab using that String as URL.

                console.log("Ready to open this link in a new tab: " + routes[path]);
                window.open(routes[path], "_blank");

            }
        }
    }

    // ********************************************
    // ENTRY POINT for MakeNavRouter

    // extract properties from parameter object, setting default values for any properties
    // that have not been supplied.

    var navId = params.navId; // this is a required property of the parameter object
    if (!navId) {
        alert("Error in MakNavRouter: parameter property 'navId' must be supplied");
        return;
    }

    var navList = params.navList; // this is a required property of the parameter object
    if (!navList) {
        alert("Error in MakNavRouter: parameter property 'navList' must be supplied");
        return;
    }
    var contentId = params.contentId || "content";
    var startLink = params.startLink || "#/home";

    // use variable names instead of hard coded CSS class names, so it's easier to make changes.
    var NavRouterClass = "NavRouter";
    var NavGroupClass = "NavGroup";
    var MenuHeaderClass = "MenuHeader";
    var SubMenuClass = "SubMenu";
    var hideClass = "hide";
    var showClass = "show";

    // Declare an array to store our routes:
    var routes = [];

    var navRouter = document.createElement("div");
    navRouter.classList.add(NavRouterClass);
    for (var i = 0; i < navList.length; i++) {

        // This code will add entries into the routing table (declared above).
        navRouter.appendChild(MakeNavGroup(navList[i]));

    }

    // Whenever a link is clicked (or window.location.hash changes), invoke function router
    // that will figure out which content function to run (and inject into the content area).
    window.addEventListener('hashchange', router);

    // without this line of code, sometimes you'll get an empty content, e.g., 
    // when you refresh the page but the link didn't change.
    location.hash = "xxx";

    // without this line of code, initial rendering will show no content.
    // This code makes it look like the user clicked on the home link at initial rendering. 
    location.hash = startLink;
    console.log("initial location.hash is " + location.hash);

    // console.log("routing table on next line...");
    // console.log(routes);

    // if there's a previously stored path in user's local storage
    // use that path as initial link...
    // Closing the browser tab clears the user's local storage...
    var URL = sessionStorage.getItem("NavRouterURL");
    if (URL) {
        location.hash = URL;
    }

    document.getElementById(navId).appendChild(navRouter);

    console.log("MakeNavRouter injected nav bar");

} // end function MakeNavRouter