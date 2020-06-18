const checkForSpam = function (message) {
  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    return true;
  }
  return false;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
