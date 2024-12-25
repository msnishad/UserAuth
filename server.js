const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use(cors())

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});