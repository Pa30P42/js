let cost;

let country;

let selectedCountry;

country = prompt("Введите страну доставки");

if (country === null) {
  console.log("Вы отменили заказ");
} else if (country !== null) {
  selectedCountry = country.toLowerCase();
  switch (selectedCountry) {
    case "китай":
      cost = 100;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "чили":
      cost = 250;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "австралия":
      cost = 170;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "индия":
      cost = 80;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case "ямайка":
      cost = 120;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
