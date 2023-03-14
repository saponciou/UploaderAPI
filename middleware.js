function middleware(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    const expectedApiKey = process.env.API_KEY;
    if (!apiKey) {
        return res.status(401).json({ message: 'No auth' });
    }
    if (apiKey !== expectedApiKey) {
        return res.status(401).json({ message: 'No auth' });
    }
    next();
}

module.exports = middleware;