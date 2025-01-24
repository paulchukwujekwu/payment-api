// export class PaymentController {
//     private paymentService: PaymentService;

//     constructor() {
//         this.paymentService = new PaymentService();
//     }

//     public async processPayment(req: Request, res: Response): Promise<void> {
//         try {
//             const paymentData = req.body;
//             const result = await this.paymentService.initiatePayment(paymentData);
//             res.status(200).json({ message: "Payment processed successfully", data: result });
//         } catch (error) {
//             res.status(500).json({ message: "Error processing payment", error: error.message });
//         }
//     }

//     public async getPaymentStatus(req: Request, res: Response): Promise<void> {
//         try {
//             const paymentId = req.params.id;
//             const status = await this.paymentService.checkPaymentStatus(paymentId);
//             res.status(200).json({ message: "Payment status retrieved successfully", status });
//         } catch (error) {
//             res.status(500).json({ message: "Error retrieving payment status", error: error.message });
//         }
//     }
// }

// filepath: /c:/payment-gateway-api/payment-api/src/v1/controllers/paymentController.ts
// import { Request, Response } from 'express';
// import { createPayment, getPaymentStatus } from '../services/paymentService';
// export const processPayment = (req: Request, res: Response) => {
// // export const initiatePayment = async (req: Request, res: Response) => {
//     try {
//         const { customer_name, customer_email, amount } = req.body;
//         const payment = await createPayment(customer_email, amount);
//         res.status(200).json({
//             payment,
//             status: 'success',
//             message: 'Payment initiated successfully.',
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Payment initiation failed.',
//         });
//     }
// // };
// };
// export const getPaymentStatus = (req: Request, res: Response) => {
// // export const retrievePaymentStatus = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const payment = await getPaymentStatus(id);
//         res.status(200).json({
//             payment,
//             status: 'success',
//             message: 'Payment details retrieved successfully.',
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: 'error',
//             message: 'Failed to retrieve payment details.',
//         });
//     }
// // };
// };
import { Request, Response } from 'express';
import { createPayment, getPaymentStatus as getPaymentStatusService } from '../services/paymentService';

export const initiatePayment = async (req: Request, res: Response) => {
    try {
        const { customer_name, customer_email, amount } = req.body;
        const payment = await createPayment(customer_email, amount);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment initiated successfully.',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Payment initiation failed.',
        });
    }
};

export const getPaymentStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payment = await getPaymentStatusService(id);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment details retrieved successfully.',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve payment details.',
        });
    }
};