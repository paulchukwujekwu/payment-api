//  export class PaymentController {
//      processPayment(req, res) {
//          // Logic for processing payment
//          const paymentData = req.body;
//          // Assume paymentService.initiatePayment is called here
//          res.status(200).json({ message: "Payment processed successfully", data: paymentData });
//      }

//      getPaymentStatus(req, res) {
//          const paymentId = req.params.id;
//          // Assume paymentService.checkPaymentStatus is called here
//          res.status(200).json({ message: "Payment status retrieved successfully", paymentId });
//      }
//  }

// export class PaymentController {

// import { Request, Response } from 'express';

// export const processPayment = (req: Request, res: Response) => {
//     processPayment(req, res) {
//         // Logic for processing payment
//         const paymentData = req.body;
//         // Assume paymentService.initiatePayment is called here
//         res.status(200).json({ message: "Payment processed successfully", data: paymentData });
//     }
// };

// export const getPaymentStatus = (req: Request, res: Response) => {
//     getPaymentStatus(req, res) {
//         const paymentId = req.params.id;
//         // Assume paymentService.checkPaymentStatus is called here
//         res.status(200).json({ message: "Payment status retrieved successfully", paymentId });
//     }
// };

//  }

import { Request, Response } from 'express';

export const processPayment = (req: Request, res: Response) => {
    // Logic for processing payment
    const paymentData = req.body;
    // Assume paymentService.initiatePayment is called here
    res.status(200).json({ message: "Payment processed successfully", data: paymentData });
};

export const getPaymentStatus = (req: Request, res: Response) => {
    const paymentId = req.params.id;
    // Assume paymentService.checkPaymentStatus is called here
    res.status(200).json({ message: "Payment status retrieved successfully", paymentId });
};
