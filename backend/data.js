import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name:'Cesar',
            email: 'cesarn@supertiernos.com',
            number: '3184217361',
            password: bcrypt.hashSync('usertest', 8),
            isAdmin: true,
        },
        {
            name:'Alana',
            email: 'alanac@supertiernos.com',
            number: '3123121485',
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
            description:'En lona impermeable con recubrimiento en PVC. 🚗Ajustable a todo tipo de vehículos. 🚗Diferentes colores y estampados. 🚗Incluye silla trasera y copiloto 🚗Información al WhatsApp 📲 3123121485 🚗Envíos Nacionales',
        },
        {
            name:'Forro para carro personalizado',
            category:'Perros',
            image: '/images/forro2.jpeg',
            price:'55000',
            countInStock: 20,
            brand: 'Super Tiernos',
            rating:5,
            numReviews:14,
            description:'Personaliza tu forro protector en lona impermeable con recubrimiento en PVC. 🚗Ajustable a todo tipo de vehículos. 🚗Diferentes colores y estampados. 🚗Incluye silla trasera y copiloto 🚗Información al WhatsApp 📲 3123121485 🚗Envíos Nacionales',
        },
        {
            name:'WallpaperST',
            category:'Accesorios',
            image: '/images/WallpaperST1.jpeg',
            price:'40000',
            countInStock: 20,
            brand: 'Super Tiernos',
            rating:5,
            numReviews:14,
            description:'Lleva el retrado de tu mascota en el fondo de tu celular y computador, El proceso sería muy sencillo, primero nos envías unas 2 o 3 foticos de tu mascota. Entonces te enviaremos avances de como va quedando la ilustración y cuando la apruebes, te las enviamos al correo. Más de uno: 35.000 c/u',
        },
    ],
};
export default data;