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

// Configuración para Heroku
//app.use(express.static(path.join(__dirname, '/frontend/build')));
//app.get('*', (req, res) =>
//  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
//);

// Configuración por Bassir
//const port = process.env.PORT || 5000;
//app.listen(port, () => {
//  console.log(`Serve at http://localhost:${port}`);
//});

// Configuración por Fazt
//Settings
app.set('port', process.env.PORT || 5000);
//Starting Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});