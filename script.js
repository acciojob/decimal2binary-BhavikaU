function decimalToBinary(num) {
  // Initialize the output as an empty string
  let output = "";
  while (num >= 2) {
    let remainder = num % 2;
    output = remainder + output;
    num = parseInt(num / 2);
  }
  if (num === 1) {
    output = 1 + output;
  }
  
  return output; // Return the binary representation as a string
}

window.decimalToBinary = decimalToBinary;
