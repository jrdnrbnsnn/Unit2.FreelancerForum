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
  const randomFreelancer = getRandomFreelancer();
  if (!randomFreelancerArray.includes(randomFreelancer)) {
    randomFreelancerArray.push(randomFreelancer);
    const table = document.querySelector(".freelancer-info tbody");

    // Check if the table has a tbody element.
    if (!table.querySelector("tbody")) {
      const tbody = document.createElement("tbody");
      table.appendChild(tbody);
    }

    // Inserts new table tow and adds info
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `<td>${randomFreelancer.name}</td><td>${randomFreelancer.occupation}</td><td>${randomFreelancer.price}</td>`;

    updateAveragePrice();
  }
}

function addFreelancer() {
  const randomFreelancer = getRandomFreelancer();
  if (!randomFreelancerArray.includes(randomFreelancer)) {
    randomFreelancerArray.push(randomFreelancer);
    const table = document.querySelector(".freelancer-info tbody");
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `<td>${randomFreelancer.name}</td><td>${randomFreelancer.occupation}</td><td>${randomFreelancer.price}</td>`;
    updateAveragePrice();
    console.log(randomFreelancerArray);
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
  averagePriceElement.textContent = average;
}

render();
render();
setInterval(addFreelancer, 3000);
