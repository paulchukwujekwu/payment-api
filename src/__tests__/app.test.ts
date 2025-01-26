import request from 'supertest';
import app from '../app';
import nock from 'nock';
async function testSetup() {
    const chai = await import("chai");
    const { expect } = chai;


// const chai = await import("chai")
// const { expect } = chai


describe('Payment API', () => {
    it('should initiate a payment',  (done) => {
        nock("https://api.paystack.co")
            .post("/transaction/initialize")
            .reply(200,{
                status: true,
                message: "Authorization URL created",
                data: {
                    authorization_url: "https://checkout.paystack.com/authorize",
                    reference: "PAY_123"
                },
            })

          request(app)
            .post('/api/v1/payments')
            .send({
                customer_name: 'John Doe',
                customer_email: 'john@example.com',
                amount: 50
            })
            .end((err, response) => {
                expect(response.status).to.equal(200);
                expect(response.body.status).to.equal('success');
                expect(response.body.payment.data).to.have.property(
                    "authorization_url",
                    "https://checkout.paystack.com/authorize"
                )
            })
        done();
    });

    it('should retrieve payment status', async () => {
        const paymentId = 'PAY-123';
        const response = await request(app).get(`/api/v1/payments/${paymentId}`);
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
    });
});

function end(arg0: (err: any, response: any) => void) {
    throw new Error('Function not implemented.');
}
}
testSetup();