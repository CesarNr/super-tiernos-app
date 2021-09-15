import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/supertiernosdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

//app.get('/', (req, res) => {
//  res.send('Server is ready');
//});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
}); // esto nos permite recibir el mensaje de error cuando las API para creación de Usuario
// y Productos falla

// Configuración para Heroku
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

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

// Api para obtener products desde data.js

//app.get('/api/products/:id', (req, res) => {
//  const product = data.products.find(x => x._id === req.params.id);
//  if (product) {
//    res.send(product);
//  } else {
//    res.status(404).send({ message: 'Producto no encontrado' });
//  }
//});

//app.get('/api/products', (req, res) => {
//  res.send(data.products);
//});