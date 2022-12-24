import express from 'express';
import cors from 'cors';
import Chance from 'chance';

const app = express();

/**
 * Middleware
 */

// CORS
app.use(cors());

// JSON
app.use(express.json());

// Create some fake animals
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
});

// Endpoint for search
app.get('', (req, res) => {
    const query = req.query?.toLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));

    res.send(results);
})

app.listen(8080, () => console.log(`Listening on port http://localhost:8080`));

