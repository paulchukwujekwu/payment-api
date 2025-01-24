// export class PaymentService {
//     initiatePayment(amount: number, currency: string): { success: boolean; message: string } {
//         // Logic for processing the payment
//         if (amount <= 0) {
//             return { success: false, message: "Invalid payment amount." };
//         }
//         // Simulate payment processing
//         return { success: true, message: "Payment processed successfully." };
//     }

//     checkPaymentStatus(paymentId: string): { success: boolean; status: string } {
//         // Logic for checking payment status
//         if (!paymentId) {
//             return { success: false, status: "Payment ID is required." };
//         }
//         // Simulate payment status check
//         return { success: true, status: "Payment is completed." };
//     }
// }
// filepath: /c:/payment-gateway-api/payment-api/src/v1/services/paymentService.ts
import axios from 'axios';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export const createPayment = async (email: string, amount: number) => {
    const response = await axios.post(
        'https://api.paystack.co/transaction/initialize',
        {
            email,
            amount: amount * 100, // Paystack expects amount in kobo
        },
        {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        }
    );
    return response.data;
};

export const getPaymentStatus = async (reference: string) => {
    const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        }
    );
    return response.data;
};
