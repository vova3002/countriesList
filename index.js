// / Отримати список країн з REST Countries API Опис:
// Використайте публічне API REST Countries для отримання списку країн.Зробіть GET - запит за адресою
// https://restcountries.com/v3.1/all та перегляньте отримані дані про країни.

const countriesList = document.querySelector(".country")
  const data = fetch("https://restcountries.com/v3.1/all").then((countries) => {
    return countries.json()
})
function getCountries(){
  const data = fetch("https://restcountries.com/v3.1/all").then((countries) => {
    return countries.json()
  })
  return data
}
console.log(getCountries())
getCountries().then((data) => {
  const dataCountries = data.map((dataCountry) => {
    console.log(dataCountry)
    const countriesStructuce = `    <li class="country__item">
    <h3 class="country__area">Area: ${dataCountry.area}</h3>
    <img class="country__img" src=${dataCountry.flags.png}>
    <p class="country__capital">Capital: ${dataCountry.capital}</p>
  </li>`
  return countriesStructuce
  }).join("")
  countriesList.innerHTML = dataCountries
})