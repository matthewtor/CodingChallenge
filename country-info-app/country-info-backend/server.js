const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/countries', async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags');

        if (response.status === 200) {
            res.json(response.data);
        } else {
            throw new Error('Failed to fetch country data');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/country/:name', async (req, res) => {
    try {
        const countryName = req.params.name;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);

        if (response.status === 200) {
            res.json(response.data);
        } else {
            throw new Error(`Failed to fetch data for ${countryName}`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
