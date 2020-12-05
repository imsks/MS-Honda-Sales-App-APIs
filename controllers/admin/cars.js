const firebase = require("../../database/FirebaseConfig");
const error = require("../../utils/errors");

// Global Variables
// 1. Initialize the Firestore
const db = firebase.firestore();
// 2. Create Auth reference
const carRef = db.collection("cars");

// For testing only => Can be removed
exports.test = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "This route is only for testing purpose.",
  });
};

exports.addCarData = async (req, res) => {
  const { carData } = req.body;

  // Check if car already exists with same model
  const query = await carRef
    .where("carData.modelNo", "==", carData.modelNo)
    .where("carData.carName", "==", carData.carName)
    .get();

  if (query.empty) {
    await carRef
      .add({
        carData,
        time: Date.now(),
      })
      .then(() => {
        res.status(200).json({
          status: "Success",
          message: "Car added successfully",
        });
      });
  } else {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.carAlreadyExists,
    });
  }
};

exports.getACarData = async (req, res) => {
  const { carName, carModel, carType } = req.params;

  const snapshot = await carRef
    .where("carData.carName", "==", carName)
    .where("carData.modelNo", "==", carModel)
    .where("carData.type", "==", carType)
    .get();
  if (!snapshot.empty) {
    snapshot.forEach((car) => {
      res.status(200).json({
        status: "Success",
        data: {
          data: car.data().carData,
          carId: car.id,
        },
      });
    });
  } else {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.carDoesNotExists,
    });
  }
};

exports.getACarDataById = async (req, res) => {
  const { id } = req.params;

  const snapshot = await carRef.doc(id).get();

  if (snapshot.exists) {
    res.status(200).json({
      status: "Success",
      data: snapshot.data(),
    });
  } else {
    res.status(400).json({
      status: "Fail",
      message: error.errorMessages.carDoesNotExists,
    });
  }
};

exports.getAllCarsData = async (req, res) => {
  const snapshot = await carRef.get();

  const data = [];
  snapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  res.status(200).json({
    status: "Success",
    data,
  });
};

exports.editCarData = async (req, res) => {
  const { carId, carData } = req.body;

  await carRef
    .doc(carId)
    .update({
      carData,
      time: Date.now(),
    })
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Car edited successfully",
      });
    })
    .catch(() => {
      res.status(400).json({
        status: "Fail",
        message: error.errorMessages.carDoesNotExists,
      });
    });
};

exports.deleteACar = async (req, res) => {
  const { carId } = req.body;

  await carRef
    .doc(carId)
    .delete()
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Car Deleted Successfully",
      });
    });
};
