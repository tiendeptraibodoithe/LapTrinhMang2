import db from "../models/index";

let createNewTour = async (data) => {
  console.log(
    "..............................................................."
  );
  console.log(data);
  console.log(
    "..............................................................."
  );
  return new Promise(async (resolve, reject) => {
    try {
      await db.Tour.create({
        title: data.title,
        imageUrl: data.imageUrl,
        price: data.price,
        description: data.description,
      });
      resolve("ok ! tao new tour thanh cong !");
    } catch (e) {
      reject(e);
    }
  });
};
const findAllTours = async () => {
  try {
    const tours = await db.Tour.findAll();
    return tours;
  } catch (error) {
    throw error; // Hoặc xử lý lỗi theo cách mong muốn
  }
};

module.exports = {
  createNewTour: createNewTour,
  findAllTours: findAllTours,
};
