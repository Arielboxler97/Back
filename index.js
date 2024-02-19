const express = require('express');
const cors = require('cors');
const productsRouter = require('./src/router/product.routes');
const placesRouter = require('./src/router/place.routes')
const usersRouter = require('./src/router/user.routes')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'todo ok' });
});
app.use('/places', placesRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server on en http://localhost:${PORT}`);
});



