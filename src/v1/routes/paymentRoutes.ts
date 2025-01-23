import { Router } from 'express';
import PaymentController from '../controllers/paymentController';

const router = Router();
const paymentController = new PaymentController();

export function setPaymentRoutes(app: Router) {
    app.post('/v1/payments', paymentController.processPayment);
    app.get('/v1/payments/:id/status', paymentController.getPaymentStatus);
}