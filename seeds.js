const mongoose = require("mongoose");
const Data = require("./models/persons");
const userData = require("./models/users");

mongoose
  .connect("mongodb://localhost:27017/covided", { useNewUrlParser: true, useUnifiedTopology: true, uri_decode_auth: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

const seedDatas = [
  {
    name: "Diaz Armito",
    gender: "male",
    age: 15,
    condition: "sehat",
  },
  {
    name: "Adi Mangro",
    gender: "male",
    age: 17,
    condition: "terjangkit",
  },
  {
    name: "David Beckham",
    gender: "male",
    age: 40,
    condition: "sehat",
  },
  {
    name: "Valentino Rossi",
    gender: "male",
    age: 35,
    condition: "sehat",
  },
  {
    name: "Raya Dragoness",
    gender: "female",
    age: 19,
    condition: "sehat",
  },
  {
    name: "Katarina",
    gender: "female",
    age: 22,
    condition: "terjangkit",
  },
  {
    name: "Natalia Clementine",
    gender: "female",
    age: 30,
    condition: "sehat",
  },
  {
    name: "Olivia Munn",
    gender: "female",
    age: 27,
    condition: "terjangkit",
  },
  {
    name: "Khabib Nurmagomedov",
    gender: "male",
    age: 32,
    condition: "sehat",
  },
  {
    name: "Ghiffari Imam",
    gender: "male",
    age: 20,
    condition: "sehat",
  },
  {
    name: "Awang Widi",
    gender: "male",
    age: 18,
    condition: "sehat",
  },
  {
    name: "Donnie Damian",
    gender: "male",
    age: 27,
    condition: "terjangkit",
  },
  {
    name: "Christian Pulisic",
    gender: "male",
    age: 30,
    condition: "sehat",
  },
  {
    name: "Maria Sharapova",
    gender: "female",
    age: 30,
    condition: "sehat",
  },
];

const useruser = [
  {
    username: "awangwidi382",
    password: "okay",
    level: 3,
  },
  {
    username: "Ghiffari99",
    password: "okay2",
    level: 3,
  },
  {
    username: "mundaneuser",
    password: "okay3",
    level: 1,
  },
];

Data.insertMany(seedDatas)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

userData.insertMany(useruser)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });