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

const randomFreelancerArray = [];

function getRandomFreelancer() {
  const randomFreelancer =
    freelancers[Math.floor(Math.random() * freelancers.length)];
  return randomFreelancer;
}

function addFreelancer() {
  const randomFreelancer = getRandomFreelancer();
  if (!randomFreelancerArray.includes(randomFreelancer)) {
    randomFreelancerArray.push(randomFreelancer);
    const table = document.querySelector(".freelancer-info");
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `<td>${randomFreelancer.name}</td><td>${randomFreelancer.occupation}</td><td>${randomFreelancer.price}</td>`;
  }
}

setInterval(addFreelancer, 3000);
