const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("change", (event) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
    )

    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
    });
});


const planetList1 = [
    {
        name:'Neptune',
        class:"Solar system"
    },
    {
        name:'Earth',
        class:"Solar system"
    },
    {
        name:'Saturn',
        class:"Solar system"
    },
    {
        name:'Jupiter',
        class:"Solar system"
    },
    {
        name:'Mars',
        class:"Solar system"
    }
]

const index1 = planetList1.findIndex((planet) => planet.name === 'Earth')
console.log({index1})
console.log(planetList1[index1])

const index2 = planetList1.findIndex((planet) => planet.name === 'Jupiter')
console.log({index2})
console.log(planetList1[index2])

