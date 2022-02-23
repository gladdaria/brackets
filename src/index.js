module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  let bracketsPair = {};
  let stack = [];

  for (let i = 0 ; i < bracketsConfig.length; i++) {
    let cur = bracketsConfig[i][0]
    openBrackets.push(cur);
  }
  for (let i = 0 ; i < bracketsConfig.length; i++) {
    let cur = bracketsConfig[i][1]
    closeBrackets.push(cur);
  }

  for (let i = 0 ; i < closeBrackets.length; i++) {
    let key = closeBrackets[i];
    bracketsPair[key] = openBrackets[i];
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol) && !(closeBrackets.includes(currentSymbol))) {
      stack.push(currentSymbol);
    } else if (closeBrackets.includes(currentSymbol) && openBrackets.includes(currentSymbol) && currentSymbol !== stack[stack.length-1]){
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];

      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;  
}

