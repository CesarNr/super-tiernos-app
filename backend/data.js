import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name:'Cesar',
            email: 'cesarn@supertiernos.com',
            password: bcrypt.hashSync('usertest', 8),
            isAdmin: true,
        },
        {
            name:'Alana',
            email: 'alanac@supertiernos.com',
            password: bcrypt.hashSync('usertest', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name:'Capa impermeable para perritos Talla S',
            category:'Perros',
            image: '/images/capa1.jpeg',
            price:'0',
            countInStock: 12,
            brand: 'Super Tiernos',
            rating:5,
            numReviews:10,
            description:'Elaboradas en plástico PVC, 💧Tallas disponibles de la XS a la XXL, 💧Información al WhatsApp 📲 3123121485, 💧Envíos Nacionales',
        },
        {
            name:'Forro para carro',
            category:'Perros',
            image: '/images/forro1.jpeg',
            price:'50000',
            countInStock: 20,
            brand: 'Super Tiernos',
            rating:5,
            numReviews:11,
            description:'🚗Forro protector en lona impermeable con recubrimiento en PVC. 🚗Ajustable a todo tipo de vehículos. 🚗Diferentes colores y estampados. 🚗Incluye silla trasera y copiloto 🚗Información al WhatsApp 📲 3123121485 🚗Envíos Nacionales',
        },
    ],
};
export default data;