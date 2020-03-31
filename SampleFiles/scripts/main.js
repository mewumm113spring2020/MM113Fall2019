const StarTrekTweet = {
    name: 'Star Trek',
    handle: '@StarTrek',
    text: 'Welcome to the OFFICIAL Star Trek Twitter Page!'
}

const links = ['https://twitter.com/StarTrek', 'https://twitter.com/StarTrek', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/26/1530003551-star-trek.jpg']

const modifyText = () => {
  //Change the text of message2 to be the message of the StarTrekTweet object
  //Change the text of user2 to be the handle from the StarTrekTweet object
  //Changes the text of message 2 class to be the handle from the StarTrekTweet object
  // YOUR CODE BELOW THIS LINE.
  document.getElementById('user2').innerHTML = StarTrekTweet.name;
  document.getElementById('link2').innerHTML = StarTrekTweet.handle;
  document.getElementById('message2').innerHTML = StarTrekTweet.text;
}

const changeLinkAndImageAttributes = () => {
  //Set the href attribute for link1 to point to the first element in the links array
  //Sets the href attribute for link2 to point to the second element in the links array
  //Sets the src attribute for the Ohlone image to point to the third element in the links array
  // YOUR CODE BELOW THIS LINE.
  document.getElementById('link1').setAttribute("href", links[0]);
  document.getElementById('link2').setAttribute("href", links[1]);
  document.getElementById('Ohlone').setAttribute("src", links[2]);
}

const changeClassAttribute = () => {
  //Update the changeClassAttribute
  //function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.
  // change id="tweet1" class="tweet" to id="tweet1" class="tweet-pink"
  // YOUR CODE BELOW THIS LINE

  // approach #1
  // while (document.getElementsByClassName("tweet").length > 0) {
  //   document.getElementsByClassName("tweet")[0].setAttribute("class", "tweet-pink");
  // }
  
  // approach #2
  // while (document.querySelectorAll(".tweet").length > 0) {
  //   document.querySelectorAll(".tweet")[0].setAttribute("class", "tweet-pink");
  // }

  var elem = document.querySelector("#tweet1");
  elem.setAttribute("class", "tweet-pink");
  elem = document.querySelector("#tweet2");
  elem.setAttribute("class", "tweet-pink");

  
}

const appendElements = () => {
  //A. An "a" element (a link) to the bottom of tweet1 that links to Ohlone College
  //(http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
  //B. An "img" element (an image) to the bottom of tweet1 that
  //points to an image of your choice,symbolizing something about the course.
  //id="tweet1"
  // YOUR CODE BELOW THIS LINE
  var tweet1 = document.getElementById("tweet1");
  var new_link = document.createElement("a");
  new_link.textContent = "Intro to JavaScript.";
  new_link.setAttribute("href","http://www.ohlone.edu");
  tweet1.appendChild(new_link);
  var new_img = document.createElement("img");
  new_img.setAttribute("src","https://developers.google.com/web/updates/images/2014-12-02-fundamentals-of-web-dev/image03.gif")
  tweet1.appendChild(new_img);

}
