const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

//Selectors
const passBox = document.querySelector("#pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#upper-case");
const lowerInput = document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");
const generateBtn = document.querySelector("#btn");

//Truncate String
const truncateString = (str, num) => {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
};

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

/*
const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperCase);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerCase);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length <= totalChar.value) {
    return generatePassword(password);
  }
  passBox.innerText = truncateString(password, totalChar.value);
};
*/
const generatePassword = (password = "") => {
  const charSets = [];

  if (upperInput.checked) {
    charSets.push(upperCase);
  }
  if (lowerInput.checked) {
    charSets.push(lowerCase);
  }
  if (numberInput.checked) {
    charSets.push(numberSet);
  }
  if (symbolInput.checked) {
    charSets.push(symbolSet);
  }

  if (charSets.length === 0) {
    passBox.innerText = "Select at least one character set.";
    return;
  }

  const randomCharSet = charSets[Math.floor(Math.random() * charSets.length)];
  password += getRandomData(randomCharSet);

  if (password.length <= totalChar.value) {
    return generatePassword(password);
  }

  passBox.innerText = truncateString(password, totalChar.value);
};

generatePassword();

generatePassword();
generateBtn.addEventListener("click", () => {
  generatePassword();
});
