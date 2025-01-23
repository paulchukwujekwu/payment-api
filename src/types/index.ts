export interface PaymentRequest {
    amount: number;
    currency: string;
    paymentMethod: string;
    description?: string;
}

export interface PaymentResponse {
    transactionId: string;
    status: string;
    message: string;
}