const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Here you can log, send emails, or save data to a database
  console.log(`Contact Form Submitted: Name: ${name}, Email: ${email}, Message: ${message}`);

  // Respond with success or error
  res.status(200).send('Message received!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
