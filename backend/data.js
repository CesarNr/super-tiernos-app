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
    ],
};
export default data;