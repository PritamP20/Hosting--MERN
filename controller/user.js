const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const users = data.users;

//MVC model-view-controller

exports.createuser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};

exports.getAlluser = (req, res) => {
  res.status(201).json(users);
};

exports.getuser = (req, res) => {
  const id = +req.params.id;
  const prod = users.find((p) => p.id === id);
  res.status(201).json(prod);
};

exports.replaceuser = (req, res) => {
  const id = +req.params.id;
  const prodIndex = users.find((p) => p.id === id);
  users.splice(prodIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.updateuser = (req, res) => {
  const id = +req.params.id;
  const prodIndex = users.findIndex((p) => p.id === id);
  const prodOriginal = users[prodIndex];
  users.splice(prodIndex, 1, { ...prodOriginal, ...req.body });
  res.status(201).json();
};
exports.deleteuser = (req, res) => {
  const id = +req.params.id;
  const prodIndex = users.findIndex((p) => p.id === id);
  users.splice(prodIndex, 1);
  res.status(201).json();
};
