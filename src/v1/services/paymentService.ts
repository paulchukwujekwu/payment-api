import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export const createPayment = async (email: string, amount: number) => {
    try {
        const reference = uuidv4(); // Generate a unique reference
        console.log('Generated reference:', reference);

        const headers = {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
        };
        console.log('Headers:', headers);

        const response = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                email,
                amount: amount * 100, // Paystack expects amount in kobo
                reference, // Include the unique reference
            },
            { headers }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error creating payment:', error.response ? error.response.data : error.message);
        } else {
            console.error('Error creating payment:', (error as Error).message);
        }
        throw error;
    }
};

export const getPaymentStatus = async (reference: string) => {
    try {
        const headers = {
            Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
        };
        console.log('Headers:', headers);

        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            { headers }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error retrieving payment status:', error.response ? error.response.data : error.message);
        } else {
            console.error('Error retrieving payment status:', (error as Error).message);
        }
        throw error;
    }
};