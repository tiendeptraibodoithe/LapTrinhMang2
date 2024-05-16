const Tour = require("../models/tour");
const tourService = require("../service/tourService");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await tourService.findAllTours();
    res.render("shop/list-tour", { tours, path: "list-tour" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi lấy tất cả tour" }); // Xử lý lỗi trả về message
  }
};
exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    // pageTitle: "Shop",
    path: "/",
  });
};
exports.getNews = (req, res, next) => {
  res.render("shop/tin-tuc", {
    // pageTitle: "Shop",
    path: "/tin-tuc",
  });
};
