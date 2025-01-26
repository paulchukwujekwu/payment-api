import { Request, Response } from 'express';
import axios from 'axios';
import { createPayment, getPaymentStatus as getPaymentStatusService } from '../services/paymentService';

export const initiatePayment = async (req: Request, res: Response) => {
    try {
        const { customer_name, customer_email, amount } = req.body;
        console.log('Initiating payment with data:', { customer_name, customer_email, amount });
        const payment = await createPayment(customer_email, amount);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment initiated successfully.',
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error initiating payment:', error.response ? error.response.data : error.message);
            res.status(error.response?.status || 500).json({
                status: 'error',
                message: 'Payment initiation failed.',
                error: error.response ? error.response.data : error.message,
            });
        } else {
            console.error('Error initiating payment:', (error as Error).message);
            res.status(500).json({
                status: 'error',
                message: 'Payment initiation failed.',
                error: (error as Error).message,
            });
        }
    }
};

export const getPaymentStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log('Retrieving payment status for ID:', id);
        const payment = await getPaymentStatusService(id);
        res.status(200).json({
            payment,
            status: 'success',
            message: 'Payment details retrieved successfully.',
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error retrieving payment status:', error.response ? error.response.data : error.message);
            res.status(error.response?.status || 500).json({
                status: 'error',
                message: 'Failed to retrieve payment details.',
                error: error.response ? error.response.data : error.message,
            });
        } else {
            console.error('Error retrieving payment status:', (error as Error).message);
            res.status(500).json({
                status: 'error',
                message: 'Failed to retrieve payment details.',
                error: (error as Error).message,
            });
        }
    }
};