import { UtilsWrapper } from './Utils.js';

const Utils = new UtilsWrapper();

// Sample HTML source code
const originalString = "<div>隠し書き: 隱藏訊息: hello world</div>";



// UTF-8 encode the string
const encodedBytes = Utils.utf8Encode(originalString);

// Perform bit inversion on the bytes
var invertedBytes = Utils.invertWithNumber(encodedBytes,537337);
invertedBytes = Utils.invertWithNumber(invertedBytes,357654864);
invertedBytes = Utils.invertWithNumber(invertedBytes,365363743);
invertedBytes = Utils.invertWithNumber(invertedBytes,36354634);
invertedBytes = Utils.invertWithNumber(invertedBytes,648547);

// Convert inverted bytes back to UTF-8 encoded string
const invertedString = Utils.utf8Decode(invertedBytes);

const content = document.getElementById("content");
content.innerHTML = invertedString;





const decryptbtn = document.getElementById("decryptbtn");
decryptbtn.onclick = decrypt;
const setkeybtn = document.getElementById("setkeybtn");
setkeybtn.onclick = setkey;
const resetkeybtn = document.getElementById("resetkeybtn");
resetkeybtn.onclick = resetkey;

function decrypt(){

  const storedValue = localStorage.getItem('sleepwalker-key');

  var reinvertedBytes = Utils.invertWithNumber(invertedBytes,648547);
  reinvertedBytes = Utils.invertWithNumber(reinvertedBytes,36354634);
  reinvertedBytes = Utils.invertWithNumber(reinvertedBytes,365363743);
  reinvertedBytes = Utils.invertWithNumber(reinvertedBytes,357654864);
  reinvertedBytes = Utils.invertWithNumber(reinvertedBytes,537337);


  const decodedstring = Utils.utf8Decode(reinvertedBytes);

  content.innerHTML = decodedstring;
}




function resetkey(){
  localStorage.removeItem('sleepwalker-key');
}

function setkey(){
  const keyfield = document.getElementById("keyfield").value;  
  localStorage.setItem('sleepwalker-key', keyfield?keyfield:0 );
}