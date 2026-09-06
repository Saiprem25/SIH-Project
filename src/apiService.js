export const runDocumentScreening = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) return reject("No file provided");

        setTimeout(() => {
            resolve({
                status: "FRAUD_DETECTED",
                confidenceScore: "14.2%",
                tamperingScore: "98.7% (High Anomaly)",
                ocrData: {
                    "Name": "John Doe",
                    "ID Number": "ABC1234567",
                    "DOB": "1990-01-01 (Tampered)",
                    "Document Type": "National ID"
                }
            });
        }, 2500);
    });
};