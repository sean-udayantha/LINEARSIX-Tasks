const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//  Google API 
const API_KEY = 'AIzaSyC0rGdy7KScu_F3_RcLlTnX7EV0feYSPpc';

// Free/Busy endpoint
app.post('/api/freebusy', async (req, res) => {
  const { calendarId, timeMin, timeMax } = req.body;

  if (!calendarId || !timeMin || !timeMax) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const url = `https://www.googleapis.com/calendar/v3/freeBusy?key=${API_KEY}`;

    const response = await axios.post(url, {
      timeMin,
      timeMax,
      items: [{ id: calendarId }],
    });

    const busyIntervals = response.data.calendars[calendarId].busy;

    res.json({ busyIntervals });
  } catch (error) {
    console.error('Error fetching free/busy data:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error fetching free/busy data' });
  }
});

// Start in server assign port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
