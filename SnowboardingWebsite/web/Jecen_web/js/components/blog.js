function blog() {

// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
var content = `
     </p>
       <h4>Database:</h4>
        <p>
          For my database users will be the snowboarders and the other table will be mountains rode(a snowboarder can have ridden multiple mountains/
          ski resorts).<br>
          For the mountain/ski resorts visited table of my database this will include:
       </p>

        <ul>
         <li>The primary key will be an auto generated number for each mountain range that is put in by a user</li>
         <li>The unique name for this table will be the email of the snowboarder</li>
         <li>The unique name will be the name of the mountain or ski resort the user visited</li>
         <li>The 2 nullable options will be date_visited with the date data type and cost which will have a decimal data type</li>
         <li>Additional fields will include review and additional comments</li>
         <li>The foreign key to the user table will be the users table primary key</li>
         </ul>
      </p>
      </p>
       <h4>My Web Development Experience:</h4>
      <p>
        For me I have had no prior experience with web design and development before entering this class. 
        In highschool I made a very basic website using html, but have never used a external CSS before.
        I know the very basics of html but it has been since my senior year of highschool since I have used it
        and forget many of the tags and their meanings. I have enjoyed web design in the little bit I have
        been able to do so far in this class and in highschool and look forward to expanding my knowledge on
        what goes on behind the scenes for websites.
      </p>
    <h4>Homepage Homework:</h4>
      <p>
        What I found challenging for this homework was getting the title nav bar to be flexible o that the home and blog links would shift down
        underneath the title once you were in mobile view. I found this valuable though as I had to try out many different things to eventually get it to work
        which allowed me to see exactly how big a difference one change can in your external CSS can do to an entire webpage. What I also found very valuable
        was using an external css and the process of just figuring out exactly how link it to my .html file and making sure to style the correct parts of my 
        webpage that I was working on. It showed me just how important ids and classes are and how valuable good naming techniques are so its easy to understand
        what you are styling and adjusting when the time comes.
      </p>
    <h4>JS UI Homework:</h4>
      <p>
       What I found challenging for this homework was just figuring out which part of code I wrote correlated to what part of the page. It took a little bit of time to figure out
    where I needed to asjust certain things to make sure I was fixing the correct part of the page I wanted. What I found valuable was getting used to using the .js files, along with using
    the .css files, and my my idex file all togehter to get my website to work, look, and feel the way I want it too. It is valuable that I am learning what each different file type is used
    for when looking how to build an effective website and evreything that goes on behind the scences of a website.
      </p>
    <h4>JS Object Homework:</h4>
      <p>
       What I found challenging for this weeks homework was making sure that I refrenced evreything throughout all of my files so I could get all the important 
        information I needed on my page to get set up. I also had a tough time figurig out the trip price function I wrote as I made little eroors throughout and 
        had to figure out how to get it to reset the trip price evreytime I entered a new time spent. But it was very interesting figuring out how private and public methods and
        and functions work and felt like this homework really helped me grasp the concepts well even though it took some time to figure it out exactly.
     </p>
    <h4>JS Slide Show Homework:</h4>
    <p>
       What I found challenging for this weeks homework was writing a public function ro act upon the slide show. I had a hard time in general coming up with an idea
       that would act upon the slideshow I created. When I did figure out how the idea to make one of the captions null for a ceratin photo a user chooses,I had a hard
        tome getting the correct csption to show up null under the photo. The first way I did it msde it so the caption would only be null for said phot the first time around
    and then showed up the next time it would be there which wasnt what I wanted. But the trial and error that got me to finally figure  it out taught me a lot of things and
    helped to improve my debugging skills.
     </p>
    <h4>JS Click Sort Homework:</h4>
    <p>
       What I found challenging for this weeks homework was I had a problem getting the Users content to show. I had the moutains content and table showing up
        but for some reason it took me a while to get the userscontent file right to get it to show. I also was challeneged with mixing code as I had to incorporate
        the filterabe code into the sorting table code which was a challenge figuring out what to keep and what to let go but it was a fun challenge as when I made
        mistakes I saw what those mistakes did and from there I learned from them to get the correct final product. I feel like I learned a lot from this weeks homework.
     </p>
    <h4>Tutorial Proposal:</h4>
    <p>
       What I found challenging for this weeks homework was I had a problem getting the image zoom to work with the image I was calling when I selected the
        radio button. When I hit the radio bitton originally I had a hard time getting the square that was used over the image to zoom i n on it to show up.
        After that my next issue was figguring out how ti make it so the image and its zoom box wouldnt show up before I hit the radio button, but i used
        visibility hidden to achieve that. I learned a good amount with the poc for this project and belive this will help me geatly when making it reusable.
     </p>
    
    <h4>Database:</h4>
    <p>
       My database experience coming into this course was pretty solid as I have already taken the course CIS 2109.
       In that course we used oracle instead of MySQL which is a little bit diffrent in some of the keywords. But for
    the most part I most of the terminoligy is very similar and I feel my skills in SQL are pretty solid although I did need
    to shake off the rust a little bit in remebering all the formatting and what keyword go eactly where.
    <br>
    Fot this assignment I found most of it pretty easy as it was mostly using basic SQL which I feel very comfortable using.
    I did feel this homework was valuable as it howed me how valuable a database can be when looking at web devvelopment
    and what a key role in can play in creating a website. Databases are very key to web development because mostly evreyones
    information when logging into a website is most likely stored in some sort of database so web development and datbase go 
hand in hand with each other.
     </p>
    Click <a target="blank" href='database.pdf'>here</a>
    <h4>Tutorial Componenet:</h4>
    <p>
       Thi project was very challenging for me as I had a tough time converting the poc where it was hard coded into reusable code.
    The hardest part of my tutorial component was the image zoom. For the image zoom it was tricky getting each image associated with 
    each radio button to be its own seperate div. I then had trouble getting the lens to show up on all the differnet pictures. My 
    final challnege was my lens was off 40 pixels and I had to adjust it so that it would reach the bottom of the image and shpw where I
    was actually hovering over. I feel as though this homework was very valuable as I learned a lot about making code reusable for web 
    development.
     </p>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
}