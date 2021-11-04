function home () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h3>Home For Snowboarding Club</h3>
            
        <h2>The best website to find the best trails you have to visit and ride
                in your lifetime</h2>
            <p>
                This website is for all snowboarders to leave what trails they have been able
                to ride on and review how good or bad they have been. Here you can find
                some truly great trails that you may have never known existed to go visit
                on your next snowboarding trip. You can also find what places to avoid
                from other snowboarders who have already ridden on and visited certain trails and
                left bad reviews for said places. This is so other snowboarders
                do not waste your time and money visiting not good mountains and can have much more
                insight from other individuals to take into account when planning there next trip.<br>
                <a href="mailto:lukej510@gmail.com" target="_blank">Email Contact</a>
            </p>
    
            <img src="pics/snowboard.jpeg" class="center">
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }