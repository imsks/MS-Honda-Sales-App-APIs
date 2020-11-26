const router = require("express").Router();
const carsController = require("../../controllers/admin/cars");

// For Auth
router.route("/add-car-data").post(carsController.addCarData);
router.route("/get-car-data").get(carsController.getACarData);
router.route("/get-all-cars").get(carsController.getAllCarsData);
router.route("/edit-car-data").post(carsController.editCarData);
router.route("/delete-a-car").post(carsController.deleteACar);

module.exports = router;
