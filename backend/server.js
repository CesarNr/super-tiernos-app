import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find( x => x._id === req.params.id);
  if(product){
    res.send(product);
  } else {
    res.status(404).send({message: 'Producto no encontrado' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

//app.get('/', (req, res) => {
//  res.send('Server is ready');
//});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'))
);