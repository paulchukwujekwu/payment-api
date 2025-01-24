"use strict";
// export class PaymentController {
//     private paymentService: PaymentService;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentStatus = exports.processPayment = void 0;
const paymentService_1 = require("../services/paymentService");
const processPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { customer_name, customer_email, amount } = req.body;
        const payment = yield (0, paymentService_1.createPayment)(customer_email, amount);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment initiated successfully.',
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Payment initiation failed.',
        });
    }
});
exports.processPayment = processPayment;
const getPaymentStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payment = yield (0, paymentService_1.getPaymentStatus)(id);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment details retrieved successfully.',
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve payment details.',
        });
    }
});
exports.getPaymentStatus = getPaymentStatus;
