import request from 'supertest';
import app from '../app';

describe('Payment API', () => {
    it('should initiate a payment', async () => {
        const response = await request(app)
            .post('/api/v1/payments')
            .send({
                customer_name: 'John Doe',
                customer_email: 'john@example.com',
                amount: 50.00
            });
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
    });

    it('should retrieve payment status', async () => {
        const paymentId = 'PAY-123';
        const response = await request(app).get(`/api/v1/payments/${paymentId}`);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
    });
});