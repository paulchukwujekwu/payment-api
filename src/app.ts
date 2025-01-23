import express from 'express';
import { setPaymentRoutes as setV1PaymentRoutes } from './v1/routes/paymentRoutes';
import { setPaymentRoutes as setV2PaymentRoutes } from './v2/routes/paymentRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setV1PaymentRoutes(app);
setV2PaymentRoutes(app);

app.listen(PORT, () => {
    console.log(`Payment API is running on http://localhost:${PORT}`);
});