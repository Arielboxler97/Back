const express = require('express');
const cors = require('cors');
const productsRouter = require('./src/router/product');
const placesRouter = require('./src/router/place')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'todo ok' });
});
app.use('/places', placesRouter);
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server on en http://localhost:${PORT}`);
});



