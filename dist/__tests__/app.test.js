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
require("isomorphic-fetch");
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const nock_1 = __importDefault(require("nock"));
describe('Payment API', () => {
    it('should initiate a payment', (done) => {
        (0, nock_1.default)("https://api.paystack.co")
            .post("/transaction/initialize")
            .reply(200, {
            status: true,
            message: "Authorization URL created",
            data: {
                authorization_url: "https://checkout.paystack.com/authorize",
                reference: "PAY_123"
            },
        });
        (0, supertest_1.default)(app_1.default)
            .post('/api/v1/payments')
            .send({
            customer_name: 'John Doe',
            customer_email: 'john@example.com',
            amount: 50
        })
            .end((err, response) => {
            if (err)
                return done(err);
            (0, chai_1.expect)(response.status).to.equal(200);
            (0, chai_1.expect)(response.body.status).to.equal('success');
            (0, chai_1.expect)(response.body.payment.data).to.have.property("authorization_url", "https://checkout.paystack.com/authorize");
            done();
        });
    });
    it('should retrieve payment status', () => __awaiter(void 0, void 0, void 0, function* () {
        const paymentId = 'PAY-123';
        (0, nock_1.default)("https://api.paystack.co")
            .get(`/transaction/verify/${paymentId}`)
            .reply(200, {
            status: true,
            message: "Payment verified",
            data: {
                status: "success",
                reference: paymentId
            }
        });
        const response = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/payments/${paymentId}`);
        (0, chai_1.expect)(response.status).to.equal(200);
        (0, chai_1.expect)(response.body.status).to.equal('success');
    }));
});
//# sourceMappingURL=app.test.js.map