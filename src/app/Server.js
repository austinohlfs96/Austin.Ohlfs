const express = require('express');
const axios = require('axios');

const app = express();

// Proxy endpoint to forward requests to the Hashnode API
app.get('/api/blogs', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.hashnode.com/',
      req.query,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
