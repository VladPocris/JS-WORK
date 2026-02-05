function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for(let i = 0; i < length; ++i) {
    const randomCharId = Math.floor(Math.random() * chars.length);
    password += chars[randomCharId];
  }

  return password;

}

const password = generatePassword(16);
console.log(`Generated password: ${password}`);