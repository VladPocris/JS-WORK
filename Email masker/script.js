function maskEmail(email) {
  let asteriks = "*";
  let name = email.slice(0, email.indexOf("@"));
  let domain = email.slice(email.indexOf("@"));
  let firstLetter = email.slice(0, 1);
  let lastLetter = name.slice(-1);
  let charsToMask = email.slice(1, email.indexOf("@") - 1);
  let maskedName = asteriks.repeat(charsToMask.length);

  let result = firstLetter + maskedName + lastLetter + domain;
  return result;
}

const email = "vpocris@gmail.com";
console.log(maskEmail(email));