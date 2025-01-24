"use strict";
// export class PaymentService {
//     initiatePayment(amount: number, currency: string): { success: boolean; message: string } {
//         // Logic for processing the payment
//         if (amount <= 0) {
//             return { success: false, message: "Invalid payment amount." };
//         }
//         // Simulate payment processing
//         return { success: true, message: "Payment processed successfully." };
//     }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentStatus = exports.createPayment = void 0;
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
const axios_1 = __importDefault(require("axios"));
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const createPayment = (email, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post('https://api.paystack.co/transaction/initialize', {
        email,
        amount: amount * 100, // Paystack expects amount in kobo
    }, {
        headers: {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
});
exports.createPayment = createPayment;
const getPaymentStatus = (reference) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
});
exports.getPaymentStatus = getPaymentStatus;
