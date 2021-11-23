const router = require('express').Router();
const userController = require("../controllers/userController");
const userValidator = require('../services/userValidation');

// new user signup
router.post('/signup', userValidator.validateUser, userController.createUser);

// existing user login
router.post('/login', userValidator.validateUser, userController.readUser);

// Get all existing reservations
router.get('/:userId/reservations', userValidator.validateUserId, userController.getUserReservations);

// Save new reservation
router.post('/:userId/reservations', userValidator.validateUserId, userValidator.validateReservation, userController.createUserReservation);

// Update an existing reservation
router.put('/:userId/reservations/:reservationId', userValidator.validateUserId, userValidator.validateReservationId, userValidator.validateReservationUpdate, userController.updateUserReservation);

// Delete an existing reservation
router.delete('/:userId/reservations/:reservationId', userValidator.validateUserId, userValidator.validateReservationId, userController.deleteUserReservation);

// new guest reservation
router.post('/guest-reservation', userValidator.validateReservation, userController.createNewGuestReservation);

// existing guest login
router.post('/login/guest', userValidator.validateGuest, userController.readUser);

// EventSource activate notification
router.get('/:userId/notification', userValidator.validateUserId, userController.reservationNotification)

module.exports = router;