export const runDocumentScreening = async (file) => {
    if (!file) throw new Error("No file provided");

    // ==========================================
    // 🔗 FUTURE NODE.JS BACKEND CONNECTION
    // ==========================================
    // When your backend is ready, delete the mock code below and uncomment this:
    /*
    const formData = new FormData();
    formData.append("document", file);
    
    try {
      const response = await fetch("http://localhost:5000/api/screen-document", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) throw new Error("Server error during scanning");
      return await response.json(); // Must return { status, confidenceScore, tamperingScore, ocrData }
    } catch (error) {
      console.error("Backend connection failed:", error);
      throw error;
    }
    */

    // ==========================================
    // 🛑 CURRENT MOCK DATA (Till backend is live)
    // ==========================================
    return new Promise((resolve) => {
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