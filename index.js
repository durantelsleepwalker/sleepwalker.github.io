import { EasyCrypt } from './Utils.js';

const Utils = new EasyCrypt();





const keyfield = document.getElementById("keyfield");
const decryptbtn = document.getElementById("decryptbtn");
decryptbtn.onclick = decrypt;
const encryptbtn = document.getElementById("encryptbtn");
encryptbtn.onclick = encrypt;
const setkeybtn = document.getElementById("setkeybtn");
setkeybtn.onclick = setkey;
const applykeybtn = document.getElementById("applykeybtn");
applykeybtn.onclick = applyKey;
const fileInput = document.getElementById('file-input');
fileInput.addEventListener("change", onFileChange);

const targetString = document.getElementById('targetString');
const resultString = document.getElementById('resultString');



let numbers;
let alphabets;



function applyKey(){
  const input = targetString.value;
  processKey(input);
}


function saveKeyFile(bigIntArray){
  // Convert BigInt array to a Uint8Array
  const uint8Array = new Uint8Array(bigIntArray.length * 8); // 8 bytes per BigInt (assuming 64-bit platform)
  const dataView = new DataView(uint8Array.buffer);
  for (let i = 0; i < bigIntArray.length; i++) {
    const bigIntValue = bigIntArray[i];
    dataView.setBigUint64(i * 8, bigIntValue);
  }
  Utils.saveToFile(uint8Array);
}

function loadKeyFile(event) {
  processKey(event.target.result);
  
  encryptbtn.disabled = false;
  decryptbtn.disabled = false;
}

function processKey(input){
  if (!Utils.validInput(input)){
    window.alert("Invalid Input. Only numbers and single alphabet separated with comma.\nAlso no weird commas position, no empty argument.\ne.g. 4362,g,567347,523536,h,654367");
    return;
  }
  numbers = Utils.numberArrayFromKey(input);
  alphabets = Utils.alphabetArrayFromKey(input);

  encryptbtn.disabled = false;
  decryptbtn.disabled = false;
}


function decrypt() {

  if (!(numbers && alphabets)) return window.alert("no key is used");



  const uint8Array = Utils.stringToUintArray(targetString.value);

  let array;
  for (let i=0; i < alphabets.length; i++){
    array = Utils.decrypt(uint8Array,numbers[i],alphabets[i]);
  }

  const invertedString = Utils.utf8Decode(array);
  resultString.value = invertedString;

}

function encrypt() {

  if (!(numbers && alphabets)) return window.alert("no key is used");

  const uint8Array = Utils.utf8Encode(targetString.value);

  let array;
  for (let i=0; i < alphabets.length; i++){
    array = Utils.encrypt(uint8Array,numbers[i],alphabets[i]);
  }

  resultString.value = array;
  
}


function setkey() {
  const file = fileInput.files[0];

  if (!Utils.validateFile(file)) return window.alert("Not .txt or file too big!");

  const reader = new FileReader();
  
  reader.onload = loadKeyFile;
  reader.readAsText(file);
}

function onFileChange(event){
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const isValidFile = Utils.validateFile(selectedFile);

    if (isValidFile) {
      setkeybtn.disabled = false;
      // You can perform additional operations on the selected file if needed
    } else {
      setkeybtn.disabled = true;
      console.log('Invalid file type or size.');
    }
  } else {
    setkeybtn.disabled = true;
  }
}

