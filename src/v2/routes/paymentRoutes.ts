import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';

const router = Router();
const paymentController = new PaymentController();

export const setPaymentRoutes = (app) => {
    app.post('/api/v2/payments', paymentController.processPayment);
    app.get('/api/v2/payments/:id/status', paymentController.getPaymentStatus);
};