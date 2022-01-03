import bcrypt from 'bcryptjs';

const data = {

    candidates : [
        {
            name: 'Lukas Skywalker',
            category: 'Canino',
            image: '/images/p1.jpeg',
            age:'100',
            sponsor:'Obi-Wan Kenobi',
            sponsorNumber:'3003004444',
            genre: 'Macho',
            health: 'buena',
            sterilized: 'Si',
            description:'Un amigo de una galaxia muy muy lejana ha venido a rescatarte del malvado imperio galactico',
        },
        {
            name: 'Chewbacca',
            category: 'Canino',
            image: '/images/p2.jpeg',
            age:'60',
            sponsor:'Han Solo',
            sponsorNumber:'3003004445',
            genre: 'Macho',
            health: 'buena',
            sterilized: 'No',
            description:'Un amigo parte de la rebelion quien conoce la ubicación de la base secreta',
        }
    ],
    users: [
        {
            name:'Cesar',
            email: 'cesar.inuncira@gmail.com',
            number: '3184217361',
            password: bcrypt.hashSync('SuperTiern0s2022', 8),
            isAdmin: true,
        },
        {
            name:'Alana',
            email: 'mapis_046@hotmail.com',
            number: '3123121485',
            password: bcrypt.hashSync('SuperTiern0s2022', 8),
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