// import { Router } from 'express';
// import PaymentController from '../controllers/paymentController';

// const router = Router();
// const paymentController = new PaymentController();

// export function setPaymentRoutes(app: Router) {
//     app.post('/v1/payments', paymentController.processPayment);
//     app.get('/v1/payments/:id/status', paymentController.getPaymentStatus);
// }

// filepath: /c:/payment-gateway-api/payment-api/src/v1/routes/paymentRoutes.ts
// import { Express } from 'express';
// import { initiatePayment, retrievePaymentStatus } from '../controllers/paymentController';

// export const setPaymentRoutes = (app: Express) => {
//     app.post('/api/v1/payments', initiatePayment);
//     app.get('/api/v1/payments/:id', retrievePaymentStatus);
// };

// import { Express } from 'express';
// import { processPayment, getPaymentStatus } from '../controllers/paymentController';

// export const setPaymentRoutes = (app: Express) => {
//     app.post('/api/v2/payments', processPayment);
//     app.get('/api/v2/payments/:id', getPaymentStatus);
// };
import { Express } from 'express';
import { processPayment, getPaymentStatus } from '../controllers/paymentController';

export const setPaymentRoutes = (app: Express) => {
    app.post('/api/v1/payments', processPayment);
    app.get('/api/v1/payments/:id', getPaymentStatus);
};