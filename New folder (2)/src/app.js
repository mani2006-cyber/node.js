const express = require('express');
const app = express();

// Middleware to parse JSON

app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/' , (req ,res) => {
    res.send("hello brother");
})

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
