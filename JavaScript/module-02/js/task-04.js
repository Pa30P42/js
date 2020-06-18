const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    const formattedString = string.slice(0, 39);
    return `${formattedString}...`;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
