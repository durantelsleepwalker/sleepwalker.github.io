// Sample HTML source code
const originalString = "<div>隠し書き: 隱藏訊息: hello world</div>";


// UTF-8 encode a string to bytes
function utf8Encode(str) {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(str);
  return encoded;
}

// Perform bit inversion on bytes
function invertBytes(bytes) {
  const invertedBytes = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    invertedBytes[i] = ~bytes[i] & 0xFF;
  }
  return invertedBytes;
}

// Convert bytes back to UTF-8 encoded string
function utf8Decode(bytes) {
  const decoder = new TextDecoder();
  const decoded = decoder.decode(bytes);
  return decoded;
}

// UTF-8 encode the string
const encodedBytes = utf8Encode(originalString);

// Perform bit inversion on the bytes
const invertedBytes = invertBytes(encodedBytes);

// Convert inverted bytes back to UTF-8 encoded string
const invertedString = utf8Decode(invertedBytes);

const content = document.getElementById("content");
content.innerHTML = invertedBytes;





const decryptbtn = document.getElementById("decryptbtn");
decryptbtn.onclick = decrypt;


function decrypt(){

  const reinvertedBytes = invertBytes(invertedBytes);

  const decodedstring = utf8Decode(reinvertedBytes);

  content.innerHTML = decodedstring;
}


function encodeUtf8(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for (var i = 0; i < code.length; i++) {
      const c = code.charAt(i);
      if (c === '%') {
          const hex = code.charAt(i + 1) + code.charAt(i + 2);
          const hexVal = parseInt(hex, 16);
          bytes.push(hexVal);
          i += 2;
      } else bytes.push(c.charCodeAt(0));
  }
  return bytes;
}

function decodeUtf8(bytes) {
  var encoded = "";
  for (var i = 0; i < bytes.length; i++) {
      encoded += '%' + bytes[i].toString(16);
  }
  return decodeURIComponent(encoded);
}