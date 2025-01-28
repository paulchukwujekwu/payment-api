import fetch, { Response, Request, Headers } from 'node-fetch';

(global as any).Response = Response;
(global as any).Request = Request;
(global as any).Headers = Headers;
(global as any).fetch = fetch;

import request from 'supertest';
import app from '../app';
import nock from 'nock';
import { expect } from 'chai';

describe('Payment API', () => {
    it('should initiate a payment', (done) => {
        nock("https://api.paystack.co")
            .post("/transaction/initialize")
            .reply(200, {
                status: true,
                message: "Authorization URL created",
                data: {
                    authorization_url: "https://checkout.paystack.com/authorize",
                    reference: "PAY_123"
                },
            });

        request(app)
            .post('/api/v1/payments')
            .send({
                customer_name: 'John Doe',
                customer_email: 'john@example.com',
                amount: 50
            })
            .end((err, response) => {
                if (err) return done(err);
                expect(response.status).to.equal(200);
                expect(response.body.status).to.equal('success');
                expect(response.body.payment.data).to.have.property(
                    "authorization_url",
                    "https://checkout.paystack.com/authorize"
                );
                done();
            });
    });

    it('should retrieve payment status', async () => {
        const paymentId = 'PAY-123';
        
        nock("https://api.paystack.co")
            .get(`/transaction/verify/${paymentId}`)
            .reply(200, {
                status: true,
                message: "Payment verified",
                data: {
                    status: "success",
                    reference: paymentId
                }
            });

        const response = await request(app).get(`/api/v1/payments/${paymentId}`);
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
    });
});
