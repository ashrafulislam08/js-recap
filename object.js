const car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",
};

console.log(Object.keys(car));
console.log(Object.values(car));
for (let prop in car) {
  console.log(prop);
}
