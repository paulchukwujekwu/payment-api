"use strict";
// import { Router } from 'express';
// import PaymentController from '../controllers/paymentController';
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPaymentRoutes = void 0;
const paymentController_1 = require("../controllers/paymentController");
const setPaymentRoutes = (app) => {
    app.post('/api/v1/payments', paymentController_1.initiatePayment);
    app.get('/api/v1/payments/:id', paymentController_1.getPaymentStatus);
};
exports.setPaymentRoutes = setPaymentRoutes;
//# sourceMappingURL=paymentRoutes.js.map