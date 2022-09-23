const errorMiddleware = (err, req, res, _next) => {
const { status, type, message } = err;

if (status) return res.status(status).json({ type, message });

return res.status(500).json({ message: 'Internal Server Error', error: err.message });
};

module.exports = errorMiddleware;