function clickSortMountainContent() {
    var ele = document.createElement("div");
    var mountainObjects = document.createElement("div");
    ele.appendChild(mountainObjects);

    var SortableTableUtils = {};

    SortableTableUtils.makeText = function (text) {
        var tableData = document.createElement('td');
        text = text || ""; // set it to empty string if the input parameter does not exist
        if (text === "") {
            tableData.sortOrder = -1;  // put empty entries at top if sorting by this column
        } else {
            tableData.sortOrder = text.toUpperCase();
        }
        tableData.innerHTML = text;
        tableData.style.textAlign = "left"; // text elements usually align left

        return tableData;
    };

    SortableTableUtils.makeNumber = function (num, isFormatCurrency) {

        var tableData = document.createElement('td');

        if (!num) { // empty data
            num = "";
            tableData.sortOrder = -1; // put empty entries at top if sorting by this column

        } else { // non empty data

            tmp = num + ""; // tmp will be num but converted to string.

            // In case the number is already formatted, remove the formatting characters.
            tmp = tmp.replace(" ", "");
            tmp = tmp.replace(",", "");
            tmp = tmp.replace("$", "");

            if (isNaN(tmp)) { // non numeric data
                tableData.sortOrder = -1; // put invalid entries at top if sorting by this column
                num = "Not numeric " + num; // preserve the original data when added this error msg.
            } else { // numeric data
                var convertedNum = Number(tmp);
                tableData.sortOrder = convertedNum; // put empty entries at top if sorting by this column
                if (isFormatCurrency) {
                    num = convertedNum.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
                }
            }
        }

        tableData.innerHTML = num;
        tableData.style.textAlign = "right"; // text elements usually align left
        return tableData;
    };


    SortableTableUtils.makeDate = function (dateString) {

        var tableData = document.createElement('td');

        if (!dateString) { // empty data
            dateString = "";
            tableData.sortOrder = -1; // put empty entries at top if sorting by this column

        } else { // check if it's a date

            var parsedDate = Date.parse(dateString);
            if (isNaN(dateString) && !isNaN(parsedDate)) {
                //console.log(s + " is a Date ");

                // JS dates are stored as the number of milliseconds from Jan 1, 1970. 
                // So that we can appropriately sort dates earlier than that, I'm adding 
                // a big offset to make it the number of seconds from Jan 1, 1800...

                var years = 170; // want to start from Jan 1, 1800, not Jan 1, 1970
                var days = years * 365;
                var hours = days * 24;
                var minutes = hours * 60;
                var seconds = minutes * 60;
                tableData.sortOrder = parsedDate / 1000 + seconds;
            } else {
                tableData.sortOrder = -1; // put invalid entries at top if sorting by this column
                dateString = "Not a Date " + dateString;
            }
        }

        tableData.innerHTML = dateString;
        tableData.style.textAlign = "center"; // center the dates
        return tableData;
    };

    SortableTableUtils.makeImage = function (imageFileName, width) {

        var tableData = document.createElement('td');
        var img = document.createElement("img");
        if (imageFileName && imageFileName !== "") {
            img.src = imageFileName;
        }
        img.style.width = width;

        tableData.appendChild(img);
        tableData.style.textAlign = "center"; // center the images 
        tableData.sortOrder = null; // should not be sorting on image columns
        return tableData;
    };


    ajax("json/mountains.json", processData);

    function processData(mountainList) {

        // print out JS object/array that was converted from JSON data by ajax function
        console.log(mountainList);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var newMountainList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < mountainList.length; i++) {

            newMountainList[i] = {};
            // Don't show the id (no meaningful data)
            newMountainList[i].Image = SortableTableUtils.makeImage(mountainList[i].image, ".5 rem");
            newMountainList[i].MountainName = SortableTableUtils.makeText(mountainList[i].mountainName);
            newMountainList[i].Description = SortableTableUtils.makeText(mountainList[i].description);
            // true means format like currency
            newMountainList[i].HourlyFee = SortableTableUtils.makeNumber(mountainList[i].hourlyFee, true);
            newMountainList[i].DailyFee = SortableTableUtils.makeNumber(mountainList[i].dailyFee, true);
            newMountainList[i].WebUserId = SortableTableUtils.makeText(mountainList[i].webUserId);
        }
        mountainObjects.appendChild(MakeClickSort("Mountain List", newMountainList, "MountainName", "icons/sortUpDown16.png", "clickSortStyle"));
    }
    return ele;
}