export class PaymentController {
    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    public async processPayment(req: Request, res: Response): Promise<void> {
        try {
            const paymentData = req.body;
            const result = await this.paymentService.initiatePayment(paymentData);
            res.status(200).json({ message: "Payment processed successfully", data: result });
        } catch (error) {
            res.status(500).json({ message: "Error processing payment", error: error.message });
        }
    }

    public async getPaymentStatus(req: Request, res: Response): Promise<void> {
        try {
            const paymentId = req.params.id;
            const status = await this.paymentService.checkPaymentStatus(paymentId);
            res.status(200).json({ message: "Payment status retrieved successfully", status });
        } catch (error) {
            res.status(500).json({ message: "Error retrieving payment status", error: error.message });
        }
    }
}