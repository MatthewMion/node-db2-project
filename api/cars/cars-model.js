const db = require("../../data/db-config");

const getAll = async () => {
  const result = await db("cars");
  return result;
};
const getById = async (id) => {
  const result = await db("cars").where("id", id).first();
  return result;
};
const create = async (cars) => {
  const [id] = await db("cars").insert(cars);
  const newCar = await getById(id);
  return newCar;
};

module.exports = { getAll, getById, create };
