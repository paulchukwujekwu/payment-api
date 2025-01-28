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
exports.getPaymentStatus = exports.createPayment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const createPayment = (email, amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reference = (0, uuid_1.v4)(); // Generate a unique reference
        console.log('Generated reference:', reference);
        const headers = {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
        };
        console.log('Headers:', headers);
        const response = yield axios_1.default.post('https://api.paystack.co/transaction/initialize', {
            email,
            amount: amount * 100,
            reference, // Include the unique reference
        }, { headers });
        return response.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error creating payment:', error.response ? error.response.data : error.message);
        }
        else {
            console.error('Error creating payment:', error.message);
        }
        throw error;
    }
});
exports.createPayment = createPayment;
const getPaymentStatus = (reference) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headers = {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
        };
        console.log('Headers:', headers);
        const response = yield axios_1.default.get(`https://api.paystack.co/transaction/verify/${reference}`, { headers });
        return response.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error retrieving payment status:', error.response ? error.response.data : error.message);
        }
        else {
            console.error('Error retrieving payment status:', error.message);
        }
        throw error;
    }
});
exports.getPaymentStatus = getPaymentStatus;
//# sourceMappingURL=paymentService.js.map