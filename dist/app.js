"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const paymentRoutes_1 = require("./v1/routes/paymentRoutes");
const paymentRoutes_2 = require("./v2/routes/paymentRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
(0, paymentRoutes_1.setPaymentRoutes)(app);
(0, paymentRoutes_2.setPaymentRoutes)(app);
app.listen(PORT, () => {
    console.log(`Payment API is running on http://localhost:${PORT}`);
});
exports.default = app;
