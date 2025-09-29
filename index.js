/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


function randomFreelancer() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];

    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

    return {name, occupation, rate};
}

const freelancers = Array.from({length: NUM_FREELANCERS}, randomFreelancer);

console.log(freelancers)

function averageRate(freelancers) {
    if (!Array.isArray(freelancers) || freelancers.length === 0) return 0;
    const total = freelancers.reduce((sum, f) => sum + (Number(f.rate) || 0), 0);

    return total / freelancers.length;
}

const avg = averageRate(freelancers);
console.log("Average rate:", avg);


function randomElement(array) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
    
    return array[Math.floor(Math.random() * array.length)];
}

function FreelancerRow({name, occupation, rate}) {
    const $tr = document.createElement("tr");
    $tr.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>$${rate}</td>
    `;
    return $tr
}

function FreelancerRows() {
    const $tbody = document.createElement("tbody");
    const $freelancers = freelancers.map(FreelancerRow);
    $tbody.replaceChildren(...$freelancers);
    return $tbody;
}

function AverageRate() {
    const $p = document.createElement("p");
    $p.textContent = `The average rate is $${averageRate(freelancers).toFixed(2)}.`;
    return $p;
}


function render() {
    const $app = document.querySelector("#app");

    $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Rate</th>
            </tr>
        </thead>
        <tbody id="FreelancerRows"></tbody>
    </table>
    `;
    $app.querySelector("AverageRate").replaceWith(AverageRate());
    $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();





 


