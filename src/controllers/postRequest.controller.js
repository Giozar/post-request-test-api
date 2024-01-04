export async function postRequest(req, res) {
    const data = req.body;


    const allowedOrigins = ['http://localhost:4321'];

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin); // Permitir el origen que está en la solicitud
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    

    try {
        res.send({
            success: true, message: "Message sent succesfully!!", data: data
        })
    } catch (error) {
        console.error("An error has occurred in the request: ",error)
        res.status(500).json({ success: false, message: "Message Could not be Sent" });
    }
}