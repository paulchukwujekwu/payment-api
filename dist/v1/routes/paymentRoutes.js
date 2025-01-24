"use strict";
// import { Router } from 'express';
// import PaymentController from '../controllers/paymentController';
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPaymentRoutes = void 0;
const paymentController_1 = require("../controllers/paymentController");
const setPaymentRoutes = (app) => {
    app.post('/api/v2/payments', paymentController_1.processPayment);
    app.get('/api/v2/payments/:id', paymentController_1.getPaymentStatus);
};
exports.setPaymentRoutes = setPaymentRoutes;
