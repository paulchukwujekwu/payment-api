"use strict";
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
exports.getPaymentStatus = exports.initiatePayment = void 0;
const axios_1 = __importDefault(require("axios"));
const paymentService_1 = require("../services/paymentService");
const initiatePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { customer_name, customer_email, amount } = req.body;
        console.log('Initiating payment with data:', { customer_name, customer_email, amount });
        const payment = yield (0, paymentService_1.createPayment)(customer_email, amount);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment initiated successfully.',
        });
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error initiating payment:', error.response ? error.response.data : error.message);
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                status: 'error',
                message: 'Payment initiation failed.',
                error: error.response ? error.response.data : error.message,
            });
        }
        else {
            console.error('Error initiating payment:', error.message);
            res.status(500).json({
                status: 'error',
                message: 'Payment initiation failed.',
                error: error.message,
            });
        }
    }
});
exports.initiatePayment = initiatePayment;
const getPaymentStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { id } = req.params;
        console.log('Retrieving payment status for ID:', id);
        const payment = yield (0, paymentService_1.getPaymentStatus)(id);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment details retrieved successfully.',
        });
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error retrieving payment status:', error.response ? error.response.data : error.message);
            res.status(((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) || 500).json({
                status: 'error',
                message: 'Failed to retrieve payment details.',
                error: error.response ? error.response.data : error.message,
            });
        }
        else {
            console.error('Error retrieving payment status:', error.message);
            res.status(500).json({
                status: 'error',
                message: 'Failed to retrieve payment details.',
                error: error.message,
            });
        }
    }
});
exports.getPaymentStatus = getPaymentStatus;
//# sourceMappingURL=paymentController.js.map