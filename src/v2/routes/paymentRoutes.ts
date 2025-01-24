
import { Express } from 'express';
import { processPayment, getPaymentStatus } from '../controllers/paymentController';

export const setPaymentRoutes = (app: Express) => {
    app.post('/api/v2/payments', processPayment);
    app.get('/api/v2/payments/:id', getPaymentStatus);
};