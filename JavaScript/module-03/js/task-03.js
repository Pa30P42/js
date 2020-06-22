const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);

  console.log(entries);

  let name = "";
  let value = 0;

  for (const entry of entries) {
    if (entry[1] > value) {
      value = entry[1];
      name = entry[0];
    }
  }

  return `Имя:${name} Кол-во:${value}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
