const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let ages = [20, 35, 23, 14, 40];

function sortAcendingOrder(age1, age2) {
  return age1 - age2;
}
app.get('/ages/sort-ascending', (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAcendingOrder);
  res.json(agesCopy);
});

function sortDescendingOrder(age1, age2) {
  return age2 - age1;
}

app.get('/ages/sort-descending', (req, res) => {
  let ageCopy = ages.slice();
  ageCopy.sort(sortDescendingOrder);
  res.json(ageCopy);
});

let students = [
  { name: 'raju', rollno: 101, marks: 50 },
  { name: 'yennam', rollno: 102, marks: 89 },
  { name: 'teju', rollno: 104, marks: 90 },
  { name: 'ram', rollno: 105, marks: 40 },
];

function sortStudentMarksByDescending(stu1, stu2) {
  return stu2.marks - stu1.marks;
}
app.get('/students/sort-marks-by-descending', (req, res) => {
  let studentsCopy = students.slice();
  studentsCopy.sort(sortStudentMarksByDescending);
  res.json(studentsCopy);
});

let cars = [
  { make: 'maruti', model: 'swift', mileage: 20 },
  { make: 'tata', model: 'nexon', mileage: 18 },
  { make: 'ford', model: 'fig', mileage: 14 },
];

function sortCarsMileagebyDescending(car1, car2) {
  return car2.mileage - car1.mileage;
}

app.get('/cars/sort-mileage-by-descending', (req, res) => {
  let carsCopy = cars.slice();
  carsCopy.sort(sortCarsMileagebyDescending);
  res.json(carsCopy);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
