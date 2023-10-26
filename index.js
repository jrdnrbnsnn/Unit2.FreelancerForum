const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// creates random Freelancer Array to push when generating random frelancers
const randomFreelancerArray = [];

// gets Random free lancer
function getRandomFreelancer() {
  const randomFreelancer =
    freelancers[Math.floor(Math.random() * freelancers.length)];
  return randomFreelancer;
}

// to initialize array with 2 starting freelancers. is called twice in code
function render() {
  // runs through loop twice to get initial freelancer data
  for (let step = 0; step < 2; step++) {
    addFreelancer();
  }
}

function addFreelancer() {
  const randomFreelancer = getRandomFreelancer();
  if (!randomFreelancerArray.includes(randomFreelancer)) {
    randomFreelancerArray.push(randomFreelancer);
    const table = document.querySelector(".freelancer-info tbody");
    const newRow = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = randomFreelancer.name;

    const occupation = document.createElement("td");
    occupation.textContent = randomFreelancer.occupation;

    const price = document.createElement("td");
    price.textContent = randomFreelancer.price;

    newRow.replaceChildren(name, occupation, price);
    table.appendChild(newRow);

    // newRow.innerHTML = `<td>${randomFreelancer.name}</td><td>${randomFreelancer.occupation}</td><td>${randomFreelancer.price}</td>`;
    updateAveragePrice();
    if (randomFreelancerArray.length === freelancers.length) {
      {
        clearInterval(addFreelancerIntervalID);
      }
    }
  }
}

function updateAveragePrice() {
  const averagePriceElement = document.querySelector(".average-price");
  const total = randomFreelancerArray.reduce((sum, freelancer) => {
    if (typeof freelancer.price === "number") {
      sum += freelancer.price;
    }
    return sum;
  }, 0);
  const average = total / randomFreelancerArray.length;
  averagePriceElement.textContent = average.toFixed(2);
}

render();
const addFreelancerIntervalID = setInterval(addFreelancer, 1000);
