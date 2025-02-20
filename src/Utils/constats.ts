import img1 from '../Assets/Product/img1.png';
import img2 from '../Assets/Product/img2.png';
import img3 from '../Assets/Product/img3.png';
import img4 from '../Assets/Product/img4.png';
import img5 from '../Assets/Product/img5.png';  
import img6 from '../Assets/Product/img6.png';
import img7 from '../Assets/Product/img7.png';
import img8 from '../Assets/Product/img8.png';  
import img9 from '../Assets/Product/img9.png';
import img10 from '../Assets/Product/img10.png';  
import img11 from '../Assets/Product/img11.avif';
import img12 from '../Assets/Product/img12.avif';
import img13 from '../Assets/Product/img13.avif';
import img14 from '../Assets/Product/img14.avif';
import img15 from '../Assets/Product/img15.avif';
import img16 from '../Assets/Product/img16.avif';
import img17 from '../Assets/Product/img17.avif';
import img18 from '../Assets/Product/img18.avif';
import img19 from '../Assets/Product/img19.avif';
import img20 from '../Assets/Product/img20.avif';
import img21 from '../Assets/Product/img21.avif';
import img22 from '../Assets/Product/img22.avif';
import img23 from '../Assets/Product/img23.avif';
import img24 from '../Assets/Product/img24.jpg';
import img25 from '../Assets/Product/img25.jpg';
import img26 from '../Assets/Product/img26.jpg';
import img27 from '../Assets/Product/img27.jpg';
import img28 from '../Assets/Product/img28.jpg';
import img29 from '../Assets/Product/img29.avif';
import img30 from '../Assets/Product/img30.avif';

export const languages: { id: number; name: string; code: string; lname: string }[] = [
    { id: 1, name: "English", code: "en", lname: "English" }, //
    { id: 2, name: "Spanish", code: "es", lname: "Español" }, //
    { id: 3, name: "French", code: "fr", lname: "Français" }, //
    { id: 4, name: "German", code: "de", lname: "Deutsch" }, //
    { id: 5, name: "Chinese", code: "zh", lname: "中文" }, //
    { id: 6, name: "Japanese", code: "ja", lname: "日本語" }, //
    { id: 7, name: "Arabic", code: "ar", lname: "العربية" }, //
    { id: 8, name: "Russian", code: "ru", lname: "Русский" }, //
    { id: 9, name: "Portuguese", code: "pt", lname: "Português" }, //
    { id: 10, name: "Hindi", code: "hi", lname: "हिन्दी" }, //
    { id: 11, name: "Korean", code: "ko", lname: "한국어" }, //
    { id: 12, name: "Italian", code: "it", lname: "Italiano" }
];

  export const currencies: { id: number; symbol: string; name: string; currencySymbol: string } [] = [
    { id: 100, symbol: "USD", name: "United States Dollar", currencySymbol: "$" },
    { id: 101, symbol: "EUR", name: "Euro", currencySymbol: "€" },
    { id: 102, symbol: "GBP", name: "British Pound Sterling", currencySymbol: "£" },
    { id: 103, symbol: "JPY", name: "Japanese Yen", currencySymbol: "¥" },
    { id: 104, symbol: "INR", name: "Indian Rupee", currencySymbol: "₹" },
    { id: 105, symbol: "AUD", name: "Australian Dollar", currencySymbol: "$" },
    { id: 106, symbol: "CAD", name: "Canadian Dollar", currencySymbol: "$" },
    { id: 107, symbol: "CHF", name: "Swiss Franc", currencySymbol: "CHF" },
    { id: 108, symbol: "CNY", name: "Chinese Yuan", currencySymbol: "¥" },
    { id: 109, symbol: "RUB", name: "Russian Ruble", currencySymbol: "₽" },
    { id: 110, symbol: "KRW", name: "South Korean Won", currencySymbol: "₩" },
    { id: 111, symbol: "BRL", name: "Brazilian Real", currencySymbol: "R$" }
  ];



  export const translationsEnglish = {
    meta: {
      available: 'Available',
      sold: 'Sold',
    },
    products: [
      {
        name: "Nike Dunk Low Retro",
        description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "Nike Dunk Low Retro SE",
        description: "You can always count on a classic. The Dunk Low Retro pairs a monochromatic look with premium materials and plush padding for game-changing comfort that lasts. The possibilities are endless—how will you wear your Dunks?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "Nike Dunk Low Retro SE S2",
        description: "You can always count on a classic. The Dunk Low Retro pairs a monochromatic look with premium materials and plush padding for game-changing comfort that lasts. The possibilities are endless—how will you wear your Dunks?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "Nike Dunk Low SE A#",
        description: "Wildly versatile, strikingly clean and oh-so classic. The Dunk Low mixes suede and leather for a flawless finish. It comes complete with a padded collar, lightweight cushioning and a gum sole. Lace up and bring the beach vibes with you.",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "Nike SB Dunk Low Pro",
        description: "An '80s b-ball icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets, its padded low-cut collar lets you comfortably take your game anywhere.",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "Nike Dunk Low",
        isSpecial: true,
        description: "The '80s icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets, its padded collar lets you take your game anywhere—in comfort.",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "Nike Dunk Low 34",
        description: "Recognising the Dunk's roots as the top-ranking university-team sneaker, the Be True To Your School Pack looks to the original ad campaign for inspiration. Colours represent top-flight universities, while crisp leather has the perfect amount of sheen to make 'em a hands-down win. So lace up and show off that varsity spirit. Are you game?",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "Nike Hilander Pro Man",
        description: "You can always count on a classic. This colour-blocked design combines leather and suede with plush padding for game-changing comfort that lasts. The possibilities are endless—how will you wear your Dunks?",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "Nike Retro Premium 1980",
        description: "You can always count on a classic. This premium version of the Dunk Low pairs mixed materials with an all-black upper for a wearable look and comfort that lasts. The possibilities are endless—how will you wear your Dunks?",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "Nike Jordans Limited Edition",
        description: "You can always count on a classic. The Dunk Low pairs its iconic colour-blocking with premium materials and plush padding for game-changing comfort that lasts. The possibilities are endless—how will you wear your Dunks?",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "Samba OG",
        description: "Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "Fair Run 4",
        description: "Shoes for the fun you. These adidas Torsion system shoes pack a lot of personality. The smooth upper provides comfort and flexibility, while the textile lining and rubber outsole offer the perfect blend of cushioning and stability. Go for bold in these stand-out sneakers.",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "Vent Shoot '96",
        description: "This product is made with 100% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make.",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "Shoes for the fun you. These adidas Torsion system shoes pack a lot of personality. The smooth upper provides comfort and flexibility, while the textile lining and rubber outsole offer the perfect blend of cushioning and stability. Go for bold in these stand-out sneakers.",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "Keep it clean - no matter how much you love our product, don't use any words you wouldn't use with your grandmother. Focus on the product - if you have an issue not related to the product itself (e.g. delivery time, price), please direct this to our customer service team to ensure they can help you.",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "Grand Court",
        description: "Made with a series of recycled materials, this upper features at least 50% recycled content.",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "From a walk in the park to a weekend run with friends, these adidas Ultraboost 1.0 shoes are designed to keep you comfortable. An adidas PRIMEKNIT upper gently hugs your feet while BOOST on the midsole cushions from the first step to the last mile.",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "Cloud Foam 18 Retro",
        description: "Your go-to option on busy days. These adidas sneakers are sleek and stylish, teaming easily with everything from workout gear to jeans. The lightweight upper is lined for comfort while Cloudfoam cushioning keeps you moving comfortably.",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "Slip into these Mercedes - AMG Petronas Formula One Team shoes from adidas to take your racing fandom with you wherever you go. A blend of suede and nylon gives the upper a unique texture and style that's built to last. The 3-Stripes on the upper in team colours and a team logo on the heel tab keep the look official.",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "Switch Run Cyan",
        description: "Blending style with distraction-free details, the latest range of adidas running staples will keep you looking as good as you feel while you put in the kms. So you can focus on what matters most: having fun as you stride.",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "Balenciaga disclaims all liability in the event of consumer non-compliance with the care and handling instructions set forth above or any improper use. Please contact Balenciaga customer service for additional information or assistance.",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "Product 22",
        isSpecial: true,
        description: "Free returns and exchanges within 30 days from the date of delivery. You may exchange your item for a different size or color only. Product exclusions apply. For more information.",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "In the Spring Summer 2025 collection, this Gucci cub3d sneaker blends innovative materials and construction. The upper is a mix of Demetra and mesh, featuring details created with a high frequency technique, while the sole combines an EVA-filled interior and TPU on the outside, complete with a 3D Interlocking G pattern.",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca Mens 6253BA",
        description: "Strong Suspension For Reduced Impact Uni-Body Suspension Balancing Patch.; Stronger Grip With Excellent Forward Momentum With A Solid Grip, You Don’t Have To Worry About Abrasion.",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "Lightweight & Breathable: These men's running shoes are designed with durable materials and easy-to-wear lace-up technology, making them ideal for jogging, walking, and sports. The breathable upper fabric and lightweight Phylon outsole ensure comfort for running.",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE MENS",
        description: "Memory foam insole to provide more cushioning and comfort.",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "EASY TO MATCH - This Shoes for men have classic color matching designed, easy to match clothing. You can worn this shoes with jeans, casual pants, cropped pants and shorts. Perfect for any occasions.",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Mens 28",
        description: "Comfort: Flexible Derby construction gives you the freedom to move comfortably. Lightly cushioned foam insole for comfort and shock absorption.",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "Gucci products are made with carefully selected materials. Please handle with care for longer product life. Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth.",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "In the Spring Summer 2025 collection, this Gucci cub3d sneaker blends innovative materials and construction. The upper is a mix of Demetra and mesh, featuring details created with a high frequency technique, while the sole combines an EVA-filled interior and TPU on the outside, complete with a 3D Interlocking G pattern.",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

  export const translationsSpanish = {
    meta: {
      available: 'Disponible',
      sold: 'Venta',
    },
    products: [
      {
        name: "Nike Dunk Bajo Retro",
        description: "Creado para la cancha de baloncesto pero llevado a las calles, el Nike Dunk Bajo Retro regresa con superposiciones nítidas y colores de equipo originales. Este ícono del baloncesto canaliza las vibras de los años 80 con cuero premium en la parte superior que se ve bien y se adapta aún mejor. La tecnología moderna de calzado ayuda a llevar la comodidad al siglo XXI.",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "Nike Dunk Bajo Retro SE",
        description: "Siempre puedes contar con un clásico. El Dunk Bajo Retro combina un aspecto monocromático con materiales premium y un acolchado lujoso para una comodidad que cambia el juego y dura. Las posibilidades son infinitas: ¿cómo usarás tus Dunks?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "Nike Dunk Bajo Retro SE S2",
        description: "Siempre puedes contar con un clásico. El Dunk Bajo Retro combina un aspecto monocromático con materiales premium y un acolchado lujoso para una comodidad que cambia el juego y dura. Las posibilidades son infinitas: ¿cómo usarás tus Dunks?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "Nike Dunk Bajo SE A#",
        description: "Extremadamente versátil, sorprendentemente limpio y oh tan clásico. El Dunk Bajo mezcla ante y cuero para un acabado impecable. Viene completo con un collar acolchado, amortiguación ligera y una suela de goma. Átate los cordones y lleva las vibras de la playa contigo.",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "Nike SB Dunk Bajo Pro",
        description: "Un ícono del baloncesto de los años 80 regresa con detalles clásicos y un estilo retro. Canalizando el estilo vintage de vuelta a las calles, su collar bajo acolchado te permite llevar tu juego cómodamente a cualquier lugar.",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "Nike Dunk Bajo",
        isSpecial: true,
        description: "El ícono de los años 80 regresa con detalles clásicos y un estilo retro. Canalizando el estilo vintage de vuelta a las calles, su collar acolchado te permite llevar tu juego a cualquier lugar, con comodidad.",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "Nike Dunk Bajo 34",
        description: "Reconociendo las raíces del Dunk como la zapatilla de equipo universitario de más alto rango, el Paquete Be True To Your School busca inspiración en la campaña publicitaria original. Los colores representan universidades de primer nivel, mientras que el cuero nítido tiene la cantidad perfecta de brillo para hacer de ellos un triunfo indiscutible. Así que átalos y muestra ese espíritu universitario. ¿Estás listo?",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "Nike Hilander Pro Hombre",
        description: "Siempre puedes contar con un clásico. Este diseño de bloques de color combina cuero y ante con un acolchado lujoso para una comodidad que cambia el juego y dura. Las posibilidades son infinitas: ¿cómo usarás tus Dunks?",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "Nike Retro Premium 1980",
        description: "Siempre puedes contar con un clásico. Esta versión premium del Dunk Bajo combina materiales mixtos con una parte superior completamente negra para un aspecto usable y una comodidad que dura. Las posibilidades son infinitas: ¿cómo usarás tus Dunks?",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "Nike Jordans Edición Limitada",
        description: "Siempre puedes contar con un clásico. El Dunk Bajo combina su icónica combinación de colores con materiales premium y un acolchado lujoso para una comodidad que cambia el juego y dura. Las posibilidades son infinitas: ¿cómo usarás tus Dunks?",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "Samba OG",
        description: "Nacido en el campo, el Samba es un ícono atemporal del estilo urbano. Esta silueta se mantiene fiel a su legado con una parte superior de cuero suave, discreta y de bajo perfil, superposiciones de ante y suela de goma, convirtiéndola en un básico en el armario de todos, dentro y fuera del campo.",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "Fair Run 4",
        description: "Zapatos para la diversión que tienes. Estas zapatillas del sistema Torsion de adidas tienen mucha personalidad. La parte superior suave proporciona comodidad y flexibilidad, mientras que el forro textil y la suela de goma ofrecen la mezcla perfecta de amortiguación y estabilidad. Atrévete con estas zapatillas destacadas.",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "Vent Shoot '96",
        description: "Este producto está hecho con materiales 100% reciclados. Al reutilizar materiales que ya se han creado, ayudamos a reducir el desperdicio y nuestra dependencia de recursos finitos y a reducir la huella de los productos que fabricamos.",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "Zapatos para la diversión que tienes. Estas zapatillas del sistema Torsion de adidas tienen mucha personalidad. La parte superior suave proporciona comodidad y flexibilidad, mientras que el forro textil y la suela de goma ofrecen la mezcla perfecta de amortiguación y estabilidad. Atrévete con estas zapatillas destacadas.",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "Manténlo limpio: no importa cuánto ames nuestro producto, no uses palabras que no usarías con tu abuela. Concéntrate en el producto: si tienes un problema que no está relacionado con el producto en sí (por ejemplo, tiempo de entrega, precio), dirígete a nuestro equipo de servicio al cliente para asegurarte de que puedan ayudarte.",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "Grand Court",
        description: "Hecho con una serie de materiales reciclados, esta parte superior presenta al menos un 50% de contenido reciclado.",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "Desde un paseo en el parque hasta una carrera de fin de semana con amigos, estas zapatillas adidas Ultraboost 1.0 están diseñadas para mantenerte cómodo. Una parte superior adidas PRIMEKNIT abraza suavemente tus pies mientras que BOOST en la entresuela amortigua desde el primer paso hasta la última milla.",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "Cloud Foam 18 Retro",
        description: "Tu opción preferida en días ocupados. Estas zapatillas adidas son elegantes y con estilo, combinándose fácilmente con todo, desde ropa de entrenamiento hasta jeans. La parte superior ligera está forrada para mayor comodidad, mientras que la amortiguación Cloudfoam te mantiene en movimiento cómodamente.",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "Póntelas y lleva tu pasión por las carreras contigo dondequiera que vayas. Una mezcla de ante y nylon le da a la parte superior una textura y estilo únicos que están hechos para durar. Las 3 Rayas en la parte superior en colores del equipo y un logotipo del equipo en la etiqueta del talón mantienen el aspecto oficial.",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "Switch Run Cyan",
        description: "Combinando estilo con detalles sin distracciones, la última gama de básicos de running de adidas te mantendrá luciendo tan bien como te sientes mientras recorres los kilómetros. Así que puedes concentrarte en lo que más importa: divertirte mientras avanzas.",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "Balenciaga renuncia a toda responsabilidad en caso de que el consumidor no cumpla con las instrucciones de cuidado y manejo establecidas anteriormente o cualquier uso indebido. Comuníquese con el servicio al cliente de Balenciaga para obtener información adicional o asistencia.",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "Producto 22",
        isSpecial: true,
        description: "Devoluciones y cambios gratuitos dentro de los 30 días a partir de la fecha de entrega. Solo puede cambiar su artículo por un tamaño o color diferente. Se aplican exclusiones de productos. Para más información.",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "En la colección de primavera-verano 2025, esta zapatilla Gucci cub3d combina materiales y construcción innovadores. La parte superior es una mezcla de Demetra y malla, con detalles creados con una técnica de alta frecuencia, mientras que la suela combina un interior relleno de EVA y TPU en el exterior, completado con un patrón de G entrelazado en 3D.",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca Hombre 6253BA",
        description: "Suspensión fuerte para reducir el impacto. Parche de suspensión unibody equilibrado; mayor agarre con excelente impulso hacia adelante con un agarre sólido, no tienes que preocuparte por la abrasión.",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "Ligero y transpirable: estos zapatos de running para hombres están diseñados con materiales duraderos y tecnología de cordones fáciles de usar, lo que los hace ideales para trotar, caminar y hacer deporte. La parte superior de tela transpirable y la suela de Phylon ligera aseguran comodidad al correr.",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE HOMBRES",
        description: "Plantilla de espuma viscoelástica para proporcionar más amortiguación y comodidad.",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "FÁCIL DE COMBINAR - Estos zapatos para hombres tienen un diseño clásico de combinación de colores, fácil de combinar con la ropa. Puedes usar estos zapatos con jeans, pantalones casuales, pantalones cortos y bermudas. Perfecto para cualquier ocasión.",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Hombres 28",
        description: "Comodidad: la construcción Derby flexible te da la libertad de moverte cómodamente. Plantilla de espuma ligeramente acolchada para comodidad y absorción de impactos.",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "Los productos de Gucci están hechos con materiales cuidadosamente seleccionados. Maneja con cuidado para una mayor vida útil del producto. Protege de la luz directa, el calor y la lluvia. Si se moja, sécalo inmediatamente con un paño suave.",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "En la colección de primavera-verano 2025, esta zapatilla Gucci cub3d combina materiales y construcción innovadores. La parte superior es una mezcla de Demetra y malla, con detalles creados con una técnica de alta frecuencia, mientras que la suela combina un interior relleno de EVA y TPU en el exterior, completado con un patrón de G entrelazado en 3D.",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

export const translationsFrench = {
  meta: {
    available: 'Disponible',
    sold: 'Vendue',
  },
  products: [
    {
      name: "Nike Dunk Bas Retro",
      description: "Créé pour le parquet mais emmené dans les rues, le Nike Dunk Bas Retro revient avec des superpositions nettes et des couleurs d'équipe originales. Cet icône du basketball canalise les vibrations des années 80 avec un cuir premium sur le dessus qui a fière allure et se forme encore mieux. La technologie moderne de la chaussure aide à apporter le confort au XXIe siècle.",
      price: {
        amount: 8295,
        currency: "INR"
      },
      image: img1,
      inventory: {
        available: 100,
        sold: 10
      }
    },
    {
      name: "Nike Dunk Bas Retro SE",
      description: "Vous pouvez toujours compter sur un classique. Le Dunk Bas Retro associe un look monochromatique avec des matériaux premium et un rembourrage moelleux pour un confort révolutionnaire qui dure. Les possibilités sont infinies : comment allez-vous porter vos Dunks ?",
      price: {
        amount: 10795,
        currency: "INR"
      },
      image: img2,
      inventory: {
        available: 200,
        sold: 20
      }
    },
    {
      name: "Nike Dunk Bas Retro SE S2",
      description: "Vous pouvez toujours compter sur un classique. Le Dunk Bas Retro associe un look monochromatique avec des matériaux premium et un rembourrage moelleux pour un confort révolutionnaire qui dure. Les possibilités sont infinies : comment allez-vous porter vos Dunks ?",
      price: {
        amount: 10795,
        currency: "INR"
      },
      image: img3,
      inventory: {
        available: 150,
        sold: 15
      }
    },
    {
      name: "Nike Dunk Bas SE A#",
      description: "Extrêmement polyvalent, d'une propreté frappante et oh si classique. Le Dunk Bas mélange le daim et le cuir pour une finition impeccable. Il est complet avec un col rembourré, un amorti léger et une semelle en caoutchouc. Lacez vos chaussures et apportez les vibrations de la plage avec vous.",
      price: {
        amount: 11899,
        currency: "INR"
      },
      image: img4,
      inventory: {
        available: 80,
        sold: 5
      }
    },
    {
      name: "Nike SB Dunk Bas Pro",
      description: "Un icône du basketball des années 80 revient avec des détails classiques et une touche rétro. Canaliser le style vintage dans les rues, son col bas rembourré vous permet d'emporter votre jeu confortablement partout.",
      price: {
        amount: 5999,
        currency: "USD"
      },
      image: img5,
      inventory: {
        available: 60,
        sold: 2
      }
    },
    {
      name: "Nike Dunk Bas",
      isSpecial: true,
      description: "L'icône des années 80 revient avec des détails classiques et une touche rétro. Canaliser le style vintage dans les rues, son col rembourré vous permet d'emporter votre jeu partout, avec confort.",
      price: {
        amount: 6999,
        currency: "INR"
      },
      image: img6,
      inventory: {
        available: 90,
        sold: 8
      }
    },
    {
      name: "Nike Dunk Bas 34",
      description: "Reconnaissant les racines du Dunk en tant que sneaker de l'équipe universitaire de haut rang, le Pack Be True To Your School s'inspire de la campagne publicitaire originale. Les couleurs représentent les universités de premier plan, tandis que le cuir net a la quantité parfaite de brillance pour en faire un gagnant incontesté. Alors lacez-vous et montrez cet esprit universitaire. Êtes-vous prêt ?",
      price: {
        amount: 7999,
        currency: "INR"
      },
      image: img7,
      inventory: {
        available: 110,
        sold: 12
      }
    },
    {
      name: "Nike Hilander Pro Homme",
      description: "Vous pouvez toujours compter sur un classique. Ce design à blocs de couleurs combine cuir et daim avec un rembourrage moelleux pour un confort révolutionnaire qui dure. Les possibilités sont infinies : comment allez-vous porter vos Dunks ?",
      price: {
        amount: 8999,
        currency: "INR"
      },
      image: img8,
      inventory: {
        available: 70,
        sold: 3
      }
    },
    {
      name: "Nike Retro Premium 1980",
      description: "Vous pouvez toujours compter sur un classique. Cette version premium du Dunk Bas associe des matériaux mixtes avec une partie supérieure entièrement noire pour un look portable et un confort qui dure. Les possibilités sont infinies : comment allez-vous porter vos Dunks ?",
      price: {
        amount: 9999,
        currency: "INR"
      },
      image: img9,
      inventory: {
        available: 50,
        sold: 1
      }
    },
    {
      name: "Nike Jordans Édition Limitée",
      description: "Vous pouvez toujours compter sur un classique. Le Dunk Bas associe son blocage de couleurs emblématique avec des matériaux premium et un rembourrage moelleux pour un confort révolutionnaire qui dure. Les possibilités sont infinies : comment allez-vous porter vos Dunks ?",
      price: {
        amount: 10999,
        currency: "INR"
      },
      image: img10,
      inventory: {
        available: 40,
        sold: 0
      }
    },
    {
      name: "Samba OG",
      description: "Né sur le terrain, le Samba est un icône intemporel du style urbain. Cette silhouette reste fidèle à son héritage avec une partie supérieure en cuir souple, à profil bas, des superpositions en daim et une semelle en caoutchouc, en faisant un incontournable dans le placard de tout le monde - sur et hors du terrain.",
      price: {
        amount: 11999,
        currency: "INR"
      },
      image: img11,
      inventory: {
        available: 30,
        sold: 1
      }
    },
    {
      name: "Fair Run 4",
      description: "Des chaussures pour le plaisir que vous avez. Ces chaussures du système Torsion d'adidas ont beaucoup de personnalité. La partie supérieure lisse offre confort et flexibilité, tandis que la doublure textile et la semelle en caoutchouc offrent le mélange parfait d'amortissement et de stabilité. Osez avec ces baskets remarquables.",
      price: {
        amount: 12999,
        currency: "INR"
      },
      image: img12,
      inventory: {
        available: 20,
        sold: 0
      }
    },
    {
      name: "Vent Shoot '96",
      description: "Ce produit est fabriqué avec 100 % de matériaux recyclés. En réutilisant des matériaux qui ont déjà été créés, nous aidons à réduire les déchets et notre dépendance aux ressources finies et à réduire l'empreinte des produits que nous fabriquons.",
      price: {
        amount: 799,
        currency: "INR"
      },
      image: img13,
      inventory: {
        available: 10,
        sold: 2
      }
    },
    {
      name: "MPM 78",
      description: "Des chaussures pour le plaisir que vous avez. Ces chaussures du système Torsion d'adidas ont beaucoup de personnalité. La partie supérieure lisse offre confort et flexibilité, tandis que la doublure textile et la semelle en caoutchouc offrent le mélange parfait d'amortissement et de stabilité. Osez avec ces baskets remarquables.",
      price: {
        amount: 4499,
        currency: "INR"
      },
      image: img14,
      inventory: {
        available: 5,
        sold: 0
      }
    },
    {
      name: "Asturned Run",
      description: "Gardez-le propre - peu importe à quel point vous aimez notre produit, n'utilisez pas de mots que vous n'utiliseriez pas avec votre grand-mère. Concentrez-vous sur le produit - si vous avez un problème non lié au produit lui-même (par exemple, le temps de livraison, le prix), veuillez diriger cela vers notre équipe de service client pour vous assurer qu'ils peuvent vous aider.",
      price: {
        amount: 4040,
        currency: "INR"
      },
      image: img15,
      inventory: {
        available: 15,
        sold: 3
      }
    },
    {
      name: "Grand Court",
      description: "Fabriqué avec une série de matériaux recyclés, cette partie supérieure contient au moins 50 % de contenu recyclé.",
      price: {
        amount: 16999,
        currency: "INR"
      },
      image: img16,
      inventory: {
        available: 25,
        sold: 4
      }
    },
    {
      name: "ULTRA BOOST 1.0",
      description: "D'une promenade au parc à une course de week-end avec des amis, ces chaussures adidas Ultraboost 1.0 sont conçues pour vous garder à l'aise. Une partie supérieure adidas PRIMEKNIT étreint doucement vos pieds tandis que BOOST dans la semelle intermédiaire amortit depuis le premier pas jusqu'à la dernière mile.",
      price: {
        amount: 9999,
        currency: "INR"
      },
      image: img17,
      inventory: {
        available: 35,
        sold: 5
      }
    },
    {
      name: "Cloud Foam 18 Retro",
      description: "Votre option préférée lors des jours chargés. Ces baskets adidas sont élégantes et stylées, s'associant facilement avec tout, des vêtements de sport aux jeans. La partie supérieure légère est doublée pour le confort tandis que l'amortissement Cloudfoam vous garde en mouvement confortablement.",
      price: {
        amount: 5555,
        currency: "INR"
      },
      image: img18,
      inventory: {
        available: 45,
        sold: 6
      }
    },
    {
      name: "DECODE ME",
      description: "Enfilez ces chaussures de l'équipe Mercedes - AMG Petronas de Formule 1 d'adidas pour emporter votre passion pour la course avec vous où que vous alliez. Un mélange de daim et de nylon donne à la partie supérieure une texture et un style uniques qui sont conçus pour durer. Les 3 Rayures sur la partie supérieure dans les couleurs de l'équipe et un logo de l'équipe sur l'étiquette du talon gardent le look officiel.",
      price: {
        amount: 6666,
        currency: "INR"
      },
      image: img19,
      inventory: {
        available: 55,
        sold: 7
      }
    },
    {
      name: "Switch Run Cyan",
      description: "Mélangeant style et détails sans distraction, la dernière gamme de basiques de course d'adidas vous fera paraître aussi bien que vous vous sentez pendant que vous parcourez les kilomètres. Ainsi, vous pouvez vous concentrer sur ce qui compte le plus : vous amuser en marchant.",
      price: {
        amount: 20999,
        currency: "INR"
      },
      image: img20,
      inventory: {
        available: 65,
        sold: 8
      }
    },
    {
      name: "Eazy Beleciaga",
      isSpecial: true,
      description: "Balenciaga décline toute responsabilité en cas de non-respect par le consommateur des instructions de soin et de manipulation énoncées ci-dessus ou de tout usage inapproprié. Veuillez contacter le service client de Balenciaga pour toute information ou assistance supplémentaire.",
      price: {
        amount: 81999,
        currency: "INR"
      },
      image: img21,
      inventory: {
        available: 75,
        sold: 9
      }
    },
    {
      name: "Produit 22",
      isSpecial: true,
      description: "Retours et échanges gratuits dans les 30 jours suivant la date de livraison. Vous pouvez échanger votre article uniquement pour une taille ou une couleur différente. Des exclusions de produits s'appliquent. Pour plus d'informations.",
      price: {
        amount: 92999,
        currency: "INR"
      },
      image: img22,
      inventory: {
        available: 85,
        sold: 10
      }
    },
    {
      name: "GUCCI B3D",
      description: "Dans la collection printemps-été 2025, cette sneaker Gucci cub3d mélange des matériaux et une construction innovants. La partie supérieure est un mélange de Demetra et de maille, avec des détails créés avec une technique de haute fréquence, tandis que la semelle combine un intérieur rempli d'EVA et du TPU à l'extérieur, complété par un motif de G entrelacé en 3D.",
      price: {
        amount: 23999,
        currency: "INR"
      },
      image: img23,
      inventory: {
        available: 95,
        sold: 11
      }
    },
    {
      name: "Becca Hommes 6253BA",
      description: "Suspension forte pour réduire l'impact. Patch de suspension uni-corps ; meilleure adhérence avec un excellent élan vers l'avant avec une prise solide, vous n'avez pas à vous soucier de l'abrasion.",
      price: {
        amount: 10000,
        currency: "INR"
      },
      image: img24,
      inventory: {
        available: 105,
        sold: 12
      }
    },
    {
      name: "Dominator C.10",
      description: "Léger et respirant : ces chaussures de course pour hommes sont conçues avec des matériaux durables et une technologie de laçage facile à porter, ce qui les rend idéales pour le jogging, la marche et le sport. Le tissu supérieur respirant et la semelle Phylon légère assurent du confort lors de la course.",
      price: {
        amount: 7990,
        currency: "INR"
      },
      image: img25,
      inventory: {
        available: 115,
        sold: 13
      }
    },
    {
      name: "CEMENTIVE HOMMES",
      description: "Semelle en mousse à mémoire pour fournir plus d'amortissement et de confort.",
      price: {
        amount: 8001,
        currency: "INR"
      },
      image: img26,
      inventory: {
        available: 125,
        sold: 14
      }
    },
    {
      name: "Red Chiesf Genune ATAG",
      description: "FACILE À ASSORTIR - Ces chaussures pour hommes ont un design classique de combinaison de couleurs, facile à assortir avec des vêtements. Vous pouvez porter ces chaussures avec des jeans, des pantalons décontractés, des pantalons courts et des shorts. Parfait pour toutes les occasions.",
      price: {
        amount: 2799,
        currency: "INR"
      },
      image: img27,
      inventory: {
        available: 135,
        sold: 15
      }
    },
    {
      name: "Criterian Hommes 28",
      description: "Confort : la construction Derby flexible vous donne la liberté de vous déplacer confortablement. Semelle en mousse légèrement rembourrée pour le confort et l'absorption des chocs.",
      price: {
        amount: 28966,
        currency: "INR"
      },
      image: img28,
      inventory: {
        available: 145,
        sold: 16
      }
    },
    {
      name: "Sneaker 6783",
      description: "Les produits Gucci sont fabriqués avec des matériaux soigneusement sélectionnés. Manipulez avec soin pour prolonger la durée de vie du produit. Protéger de la lumière directe, de la chaleur et de la pluie. S'il devient humide, séchez-le immédiatement avec un chiffon doux.",
      price: {
        amount: 45699,
        currency: "INR"
      },
      image: img29,
      inventory: {
        available: 155,
        sold: 17
      }
    },
    {
      name: "GUCCI 3DR CUB",
      description: "Dans la collection printemps-été 2025, cette sneaker Gucci cub3d mélange des matériaux et une construction innovants. La partie supérieure est un mélange de Demetra et de maille, avec des détails créés avec une technique de haute fréquence, tandis que la semelle combine un intérieur rempli d'EVA et du TPU à l'extérieur, complété par un motif de G entrelacé en 3D.",
      price: {
        amount: 30999,
        currency: "INR"
      },
      image: img30,
      inventory: {
        available: 165,
        sold: 18
      }
    }
  ]
};

export const translationsGerman = {
  meta: {
    available: 'Verfügbar',
    sold: 'verkauft',
  },
  products: [
    {
      name: "Nike Dunk Niedrig Retro",
      description: "Für das Parkett geschaffen, aber auf die Straßen gebracht, kehrt der Nike Dunk Niedrig Retro mit klaren Überlagerungen und originalen Teamfarben zurück. Dieses Basketball-Icon kanalisiert die Vibes der 80er mit hochwertigem Leder im Obermaterial, das gut aussieht und sich noch besser einläuft. Moderne Schuhtechnologie hilft, den Komfort ins 21. Jahrhundert zu bringen.",
      price: {
        amount: 8295,
        currency: "INR"
      },
      image: img1,
      inventory: {
        available: 100,
        sold: 10
      }
    },
    {
      name: "Nike Dunk Niedrig Retro SE",
      description: "Auf einen Klassiker kann man immer zählen. Der Dunk Niedrig Retro kombiniert einen monochromatischen Look mit hochwertigen Materialien und weicher Polsterung für einen komfortablen Sitz, der das Spiel verändert. Die Möglichkeiten sind endlos – wie wirst du deine Dunks tragen?",
      price: {
        amount: 10795,
        currency: "INR"
      },
      image: img2,
      inventory: {
        available: 200,
        sold: 20
      }
    },
    {
      name: "Nike Dunk Niedrig Retro SE S2",
      description: "Auf einen Klassiker kann man immer zählen. Der Dunk Niedrig Retro kombiniert einen monochromatischen Look mit hochwertigen Materialien und weicher Polsterung für einen komfortablen Sitz, der das Spiel verändert. Die Möglichkeiten sind endlos – wie wirst du deine Dunks tragen?",
      price: {
        amount: 10795,
        currency: "INR"
      },
      image: img3,
      inventory: {
        available: 150,
        sold: 15
      }
    },
    {
      name: "Nike Dunk Niedrig SE A#",
      description: "Extrem vielseitig, auffallend sauber und oh-so klassisch. Der Dunk Niedrig mischt Wildleder und Leder für ein makelloses Finish. Er kommt mit einem gepolsterten Kragen, leichtem Dämpfungsmaterial und einer Gummisohle. Schnür dich an und bring die Strandvibes mit dir.",
      price: {
        amount: 11899,
        currency: "INR"
      },
      image: img4,
      inventory: {
        available: 80,
        sold: 5
      }
    },
    {
      name: "Nike SB Dunk Niedrig Pro",
      description: "Ein Basketball-Icon der 80er kehrt mit klassischen Details und nostalgischem Flair zurück. Der Vintage-Stil wird zurück auf die Straßen gebracht, sein gepolsterter, niedriger Kragen lässt dich dein Spiel überall bequem spielen.",
      price: {
        amount: 5999,
        currency: "USD"
      },
      image: img5,
      inventory: {
        available: 60,
        sold: 2
      }
    },
    {
      name: "Nike Dunk Niedrig",
      isSpecial: true,
      description: "Das Icon der 80er kehrt mit klassischen Details und nostalgischem Flair zurück. Der Vintage-Stil wird zurück auf die Straßen gebracht, sein gepolsterter Kragen lässt dich dein Spiel überall bequem spielen.",
      price: {
        amount: 6999,
        currency: "INR"
      },
      image: img6,
      inventory: {
        available: 90,
        sold: 8
      }
    },
    {
      name: "Nike Dunk Niedrig 34",
      description: "Die Wurzeln des Dunks als Sneaker der besten Universitätsmannschaft werden anerkannt, das Be True To Your School Pack orientiert sich an der ursprünglichen Werbekampagne. Farben repräsentieren Spitzenuniversitäten, während das klare Leder den perfekten Glanz hat, um sie zu einem sicheren Gewinn zu machen. Also schnür dich an und zeig diesen Universitätsgeist. Bist du bereit?",
      price: {
        amount: 7999,
        currency: "INR"
      },
      image: img7,
      inventory: {
        available: 110,
        sold: 12
      }
    },
    {
      name: "Nike Hilander Pro Mann",
      description: "Auf einen Klassiker kann man immer zählen. Dieses farblich blockierte Design kombiniert Leder und Wildleder mit weicher Polsterung für einen komfortablen Sitz, der das Spiel verändert. Die Möglichkeiten sind endlos – wie wirst du deine Dunks tragen?",
      price: {
        amount: 8999,
        currency: "INR"
      },
      image: img8,
      inventory: {
        available: 70,
        sold: 3
      }
    },
    {
      name: "Nike Retro Premium 1980",
      description: "Auf einen Klassiker kann man immer zählen. Diese Premium-Version des Dunk Niedrig kombiniert gemischte Materialien mit einem komplett schwarzen Obermaterial für einen tragbaren Look und Komfort, der anhält. Die Möglichkeiten sind endlos – wie wirst du deine Dunks tragen?",
      price: {
        amount: 9999,
        currency: "INR"
      },
      image: img9,
      inventory: {
        available: 50,
        sold: 1
      }
    },
    {
      name: "Nike Jordans Limitierte Edition",
      description: "Auf einen Klassiker kann man immer zählen. Der Dunk Niedrig kombiniert sein ikonisches Farbblockdesign mit hochwertigen Materialien und weicher Polsterung für einen komfortablen Sitz, der das Spiel verändert. Die Möglichkeiten sind endlos – wie wirst du deine Dunks tragen?",
      price: {
        amount: 10999,
        currency: "INR"
      },
      image: img10,
      inventory: {
        available: 40,
        sold: 0
      }
    },
    {
      name: "Samba OG",
      description: "Geboren auf dem Platz, ist die Samba ein zeitloses Icon des Streetstyles. Diese Silhouette bleibt ihrem Erbe treu mit einem geschmackvollen, niedrig-profilierten, weichen Lederoberteil, Wildlederüberlagerungen und einer Gummisohle, was sie zu einem Grundpfeiler in jedem Kleiderschrank macht – auf und abseits des Platzes.",
      price: {
        amount: 11999,
        currency: "INR"
      },
      image: img11,
      inventory: {
        available: 30,
        sold: 1
      }
    },
    {
      name: "Fair Run 4",
      description: "Schuhe für den Spaß, den du hast. Diese adidas Torsion-System-Schuhe haben viel Persönlichkeit. Das glatte Obermaterial bietet Komfort und Flexibilität, während das textile Futter und die Gummisohle die perfekte Mischung aus Dämpfung und Stabilität bieten. Wage es in diesen herausragenden Sneakers.",
      price: {
        amount: 12999,
        currency: "INR"
      },
      image: img12,
      inventory: {
        available: 20,
        sold: 0
      }
    },
    {
      name: "Vent Shoot '96",
      description: "Dieses Produkt besteht aus 100 % recycelten Materialien. Durch die Wiederverwendung von Materialien, die bereits erstellt wurden, helfen wir, Abfall und unsere Abhängigkeit von endlichen Ressourcen zu reduzieren und den Fußabdruck der Produkte, die wir herstellen, zu verringern.",
      price: {
        amount: 799,
        currency: "INR"
      },
      image: img13,
      inventory: {
        available: 10,
        sold: 2
      }
    },
    {
      name: "MPM 78",
      description: "Schuhe für den Spaß, den du hast. Diese adidas Torsion-System-Schuhe haben viel Persönlichkeit. Das glatte Obermaterial bietet Komfort und Flexibilität, während das textile Futter und die Gummisohle die perfekte Mischung aus Dämpfung und Stabilität bieten. Wage es in diesen herausragenden Sneakers.",
      price: {
        amount: 4499,
        currency: "INR"
      },
      image: img14,
      inventory: {
        available: 5,
        sold: 0
      }
    },
    {
      name: "Asturned Run",
      description: "Halte es sauber – egal wie sehr du unser Produkt liebst, benutze keine Worte, die du nicht mit deiner Großmutter verwenden würdest. Konzentriere dich auf das Produkt – wenn du ein Problem hast, das nicht mit dem Produkt selbst zu tun hat (z.B. Lieferzeit, Preis), wende dich bitte an unser Kundenserviceteam, um sicherzustellen, dass sie dir helfen können.",
      price: {
        amount: 4040,
        currency: "INR"
      },
      image: img15,
      inventory: {
        available: 15,
        sold: 3
      }
    },
    {
      name: "Grand Court",
      description: "Hergestellt aus einer Reihe von recycelten Materialien, enthält dieses Obermaterial mindestens 50 % recycelten Inhalt.",
      price: {
        amount: 16999,
        currency: "INR"
      },
      image: img16,
      inventory: {
        available: 25,
        sold: 4
      }
    },
    {
      name: "ULTRA BOOST 1.0",
      description: "Von einem Spaziergang im Park bis zu einem Wochenendlauf mit Freunden sind diese adidas Ultraboost 1.0-Schuhe so konzipiert, dass sie dich bequem halten. Ein adidas PRIMEKNIT-Obermaterial umschließt sanft deine Füße, während BOOST in der Zwischensohle vom ersten Schritt bis zur letzten Meile dämpft.",
      price: {
        amount: 9999,
        currency: "INR"
      },
      image: img17,
      inventory: {
        available: 35,
        sold: 5
      }
    },
    {
      name: "Cloud Foam 18 Retro",
      description: "Deine bevorzugte Option an geschäftigen Tagen. Diese adidas Sneakers sind schlank und stylisch und lassen sich leicht mit allem kombinieren, von Sportbekleidung bis zu Jeans. Das leichte Obermaterial ist gefüttert für Komfort, während die Cloudfoam-Dämpfung dich bequem in Bewegung hält.",
      price: {
        amount: 5555,
        currency: "INR"
      },
      image: img18,
      inventory: {
        available: 45,
        sold: 6
      }
    },
    {
      name: "DECODE ME",
      description: "Schlüpfe in diese Schuhe des Mercedes - AMG Petronas Formel 1 Teams von adidas, um deine Rennleidenschaft überallhin mitzunehmen. Eine Mischung aus Wildleder und Nylon verleiht dem Obermaterial eine einzigartige Textur und einen Stil, der für die Ewigkeit gemacht ist. Die 3-Streifen auf dem Obermaterial in Teamfarben und ein Teamlogo auf der Fersenschlaufe halten den Look offiziell.",
      price: {
        amount: 6666,
        currency: "INR"
      },
      image: img19,
      inventory: {
        available: 55,
        sold: 7
      }
    },
    {
      name: "Switch Run Cyan",
      description: "Stil mit ablenkungsfreien Details kombinieren, die neueste Reihe von adidas-Laufschuhen lässt dich so gut aussehen, wie du dich fühlst, während du die Kilometer zurücklegst. So kannst du dich auf das Wesentliche konzentrieren: Spaß beim Laufen.",
      price: {
        amount: 20999,
        currency: "INR"
      },
      image: img20,
      inventory: {
        available: 65,
        sold: 8
      }
    },
    {
      name: "Eazy Beleciaga",
      isSpecial: true,
      description: "Balenciaga lehnt jegliche Haftung ab, falls der Verbraucher die oben genannten Pflege- und Handhabungsanweisungen nicht befolgt oder unsachgemäße Verwendung. Bitte kontaktiere den Kundenservice von Balenciaga für weitere Informationen oder Unterstützung.",
      price: {
        amount: 81999,
        currency: "INR"
      },
      image: img21,
      inventory: {
        available: 75,
        sold: 9
      }
    },
    {
      name: "Produkt 22",
      isSpecial: true,
      description: "Kostenlose Rücksendungen und Umtausch innerhalb von 30 Tagen nach dem Lieferdatum. Du kannst deinen Artikel nur gegen eine andere Größe oder Farbe umtauschen. Produktbeschränkungen gelten. Für weitere Informationen.",
      price: {
        amount: 92999,
        currency: "INR"
      },
      image: img22,
      inventory: {
        available: 85,
        sold: 10
      }
    },
    {
      name: "GUCCI B3D",
      description: "In der Kollektion Frühjahr/Sommer 2025 verbindet dieser Gucci cub3d Sneaker innovative Materialien und Konstruktionen. Das Obermaterial ist eine Mischung aus Demetra und Mesh, mit Details, die mit einer Hochfrequenztechnik erstellt wurden, während die Sohle ein EVA-gefülltes Innere und TPU auf der Außenseite kombiniert, ergänzt durch ein 3D-verschlungenes G-Muster.",
      price: {
        amount: 23999,
        currency: "INR"
      },
      image: img23,
      inventory: {
        available: 95,
        sold: 11
      }
    },
    {
      name: "Becca Herren 6253BA",
      description: "Starke Federung zur Reduzierung von Stößen. Uni-Body-Federungsausgleichs-Patch.; Stärkerer Grip mit hervorragendem Vorwärtsmomentum und solidem Grip, du musst dir keine Sorgen um Abrieb machen.",
      price: {
        amount: 10000,
        currency: "INR"
      },
      image: img24,
      inventory: {
        available: 105,
        sold: 12
      }
    },
    {
      name: "Dominator C.10",
      description: "Leicht und atmungsaktiv: Diese Laufschuhe für Männer sind mit strapazierfähigen Materialien und einer einfach zu tragenden Schnürtechnologie ausgestattet, die sie ideal zum Joggen, Gehen und für Sportarten macht. Das atmungsaktive Obermaterial und die leichte Phylon-Außensohle sorgen für Komfort beim Laufen.",
      price: {
        amount: 7990,
        currency: "INR"
      },
      image: img25,
      inventory: {
        available: 115,
        sold: 13
      }
    },
    {
      name: "CEMENTIVE HERREN",
      description: "Memory-Schaum-Einlegesohle für mehr Dämpfung und Komfort.",
      price: {
        amount: 8001,
        currency: "INR"
      },
      image: img26,
      inventory: {
        available: 125,
        sold: 14
      }
    },
    {
      name: "Red Chiesf Genune ATAG",
      description: "EINFACH ZU KOMBINIERNEN - Diese Schuhe für Männer haben ein klassisches Farbmuster, das leicht mit Kleidung kombiniert werden kann. Du kannst diese Schuhe mit Jeans, lässigen Hosen, kurzen Hosen und Shorts tragen. Perfekt für jeden Anlass.",
      price: {
        amount: 2799,
        currency: "INR"
      },
      image: img27,
      inventory: {
        available: 135,
        sold: 15
      }
    },
    {
      name: "Criterian Herren 28",
      description: "Komfort: Flexible Derby-Konstruktion gibt dir die Freiheit, dich bequem zu bewegen. Leicht gepolsterte Schaum-Einlegesohle für Komfort und Stoßdämpfung.",
      price: {
        amount: 28966,
        currency: "INR"
      },
      image: img28,
      inventory: {
        available: 145,
        sold: 16
      }
    },
    {
      name: "Sneaker 6783",
      description: "Gucci-Produkte werden aus sorgfältig ausgewählten Materialien hergestellt. Bitte mit Sorgfalt behandeln, um die Lebensdauer des Produkts zu verlängern. Vor direkter Sonneneinstrahlung, Wärme und Regen schützen. Sollte es nass werden, sofort mit einem weichen Tuch trocknen.",
      price: {
        amount: 45699,
        currency: "INR"
      },
      image: img29,
      inventory: {
        available: 155,
        sold: 17
      }
    },
    {
      name: "GUCCI 3DR CUB",
      description: "In der Kollektion Frühjahr/Sommer 2025 verbindet dieser Gucci cub3d Sneaker innovative Materialien und Konstruktionen. Das Obermaterial ist eine Mischung aus Demetra und Mesh, mit Details, die mit einer Hochfrequenztechnik erstellt wurden, während die Sohle ein EVA-gefülltes Innere und TPU auf der Außenseite kombiniert, ergänzt durch ein 3D-verschlungenes G-Muster.",
      price: {
        amount: 30999,
        currency: "INR"
      },
      image: img30,
      inventory: {
        available: 165,
        sold: 18
      }
    }
  ]
};

  export const translationsChinese = {
    meta:{
      available: "可用的",
      sold: '销售',
    },
    products: [
      {
        name: "耐克低帮复古鞋",
        description: "为篮球场而生，却被带到了街头，耐克低帮复古鞋以清晰的叠层和原始的球队颜色回归。这款篮球经典以优质皮革上部展现80年代的氛围，既好看又舒适。现代鞋类技术帮助将舒适性带入21世纪。",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "耐克低帮复古鞋SE",
        description: "你总是可以依靠经典。低帮复古鞋将单色外观与优质材料和柔软衬垫相结合，提供持久舒适。可能性无穷无尽——你会如何穿着你的鞋子？",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "耐克低帮复古鞋SE S2",
        description: "你总是可以依靠经典。低帮复古鞋将单色外观与优质材料和柔软衬垫相结合，提供持久舒适。可能性无穷无尽——你会如何穿着你的鞋子？",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "耐克低帮SE A#",
        description: "极具多样性，外观干净且经典。低帮鞋混合了绒面革和皮革，呈现完美的效果。它配备了加厚领口、轻量缓震和胶底。系上鞋带，带上海滩气息。",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "耐克SB低帮专业版",
        description: "一款80年代的篮球经典以经典细节和复古风格回归。将复古风格重新带回街头，其加厚低领设计让你舒适地将游戏带到任何地方。",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "耐克低帮",
        isSpecial: true,
        description: "这款80年代的经典以经典细节和复古风格回归。将复古风格重新带回街头，其加厚领口让你舒适地将游戏带到任何地方。",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "耐克低帮34",
        description: "认识到低帮的根源作为顶级大学队的运动鞋，Be True To Your School Pack以原始广告活动为灵感。颜色代表顶级大学，而清脆的皮革则具有完美的光泽，使其成为绝对的赢家。系好鞋带，展示你的大学精神。你准备好了吗？",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "耐克Hilander专业男款",
        description: "你总是可以依靠经典。这种色块设计结合了皮革和绒面革，配有柔软的衬垫，提供持久的舒适。可能性无穷无尽——你会如何穿着你的鞋子？",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "耐克1980年复古高档版",
        description: "你总是可以依靠经典。这款优质版本的低帮鞋将混合材料与全黑的上部相结合，提供可穿戴的外观和持久的舒适感。可能性无穷无尽——你会如何穿着你的鞋子？",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "耐克乔丹限量版",
        description: "你总是可以依靠经典。低帮鞋将其标志性的色块与优质材料和柔软衬垫相结合，提供持久的舒适感。可能性无穷无尽——你会如何穿着你的鞋子？",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "桑巴OG",
        description: "出生于球场，桑巴是街头风格的永恒象征。这种轮廓忠实于其遗产，采用低调的柔软皮革上部、绒面革覆盖和胶底，使其成为每个人衣橱中的必备单品 - 无论是在球场上还是场外。",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "公平跑步4",
        description: "为你带来乐趣的鞋子。这些阿迪达斯Torsion系统鞋子充满个性。光滑的上部提供舒适性和灵活性，而纺织内衬和橡胶外底则提供完美的缓冲和稳定性。在这些引人注目的运动鞋中大胆出击。",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "通风射击'96",
        description: "该产品由100%回收材料制成。通过重用已经创建的材料，我们有助于减少浪费，减少对有限资源的依赖，并降低我们制造产品的足迹。",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "为你带来乐趣的鞋子。这些阿迪达斯Torsion系统鞋子充满个性。光滑的上部提供舒适性和灵活性，而纺织内衬和橡胶外底则提供完美的缓冲和稳定性。在这些引人注目的运动鞋中大胆出击。",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "保持干净 - 无论你多么喜欢我们的产品，都不要使用你不会对祖母使用的任何词语。专注于产品 - 如果你有与产品本身无关的问题（例如交货时间、价格），请将其直接告知我们的客户服务团队，以确保他们能够帮助你。",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "大法院",
        description: "由一系列回收材料制成，这种上部具有至少50%的回收内容。",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "超BOOST 1.0",
        description: "从公园散步到与朋友的周末跑步，这些阿迪达斯Ultraboost 1.0鞋子旨在让你保持舒适。阿迪达斯PRIMEKNIT上部轻柔地贴合你的双脚，而BOOST中底从第一步到最后一公里都提供缓冲。",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "云泡沫18复古",
        description: "在忙碌的日子里，你的首选。这些阿迪达斯运动鞋外形优雅，风格时尚，轻松搭配从运动装备到牛仔裤的所有服装。轻量上部衬里提供舒适感，而云泡沫缓冲让你舒适地移动。",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "解码我",
        description: "穿上这些梅赛德斯 - AMG佩特龙斯一级方程式车队的鞋子，将你的赛车热情带到任何地方。绒面革和尼龙的混合为上部提供独特的质感和风格，耐用。上部的三条条纹采用车队颜色，鞋跟标签上的车队标志保持外观官方。",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "切换跑步青色",
        description: "将风格与无干扰细节相结合，最新系列的阿迪达斯跑步必备单品将让你在跑步时看起来和感觉一样好。所以你可以专注于最重要的事情：在迈步时享受乐趣。",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "Balenciaga在消费者不遵守上述护理和处理说明或任何不当使用的情况下不承担任何责任。请联系Balenciaga客户服务以获取更多信息或帮助。",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "产品22",
        isSpecial: true,
        description: "自交货之日起30天内免费退换货。您可以仅将商品更换为不同的尺码或颜色。适用产品排除。有关更多信息，请咨询。",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "古驰 3DR 立方体",
        description: "在2025年春夏系列中，这款古驰 cub3d 运动鞋融合了创新材料和结构。上部由 Demetra 和网眼材料混合而成，采用高频技术制作的细节，而鞋底则结合了填充 EVA 的内部和外部的 TPU，配有 3D 交错 G 图案。",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca男款6253BA",
        description: "强力悬挂以减少冲击，单体悬挂平衡补丁；更强的抓地力，优秀的前进动力和坚固的抓地力，让你不必担心磨损。",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "轻便透气：这些男士跑步鞋采用耐用材料和易穿的系带技术设计，非常适合慢跑、步行和运动。透气的上部面料和轻量的Phylon外底确保跑步的舒适性。",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE男款",
        description: "记忆泡沫鞋垫提供更多缓冲和舒适。",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "易于搭配 - 这款男士鞋具有经典的配色设计，易于搭配服装。你可以将这双鞋与牛仔裤、休闲裤、短裤等搭配，适合任何场合。",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian男款28",
        description: "舒适：灵活的德比结构让你自由舒适地移动。轻微衬垫的泡沫鞋垫提供舒适感和减震效果。",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "古驰产品采用精心挑选的材料制成。请小心处理，以延长产品的使用寿命。防止直接光照、热量和雨水。如果变湿，请立即用软布擦干。",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      }
    ]
  };

  export const translationsArabic = {
    meta:{
      available: "متاح",
      sold: 'مُباع',
    },
    products: [
      {
        name: "نايكي دانك لو ريترو",
        description: "صُمم للملعب لكن تم أخذه إلى الشوارع، يعود Nike Dunk Low Retro مع طبقات نظيفة وألوان فريق أصلية. هذا الأيقونة في كرة السلة يجسد أجواء الثمانينات مع جلد فاخر في الجزء العلوي يبدو جيدًا ويتكيف بشكل أفضل. تساعد تقنيات الأحذية الحديثة في جلب الراحة إلى القرن الحادي والعشرين.",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "نايكي دانك لو ريترو SE",
        description: "يمكنك دائمًا الاعتماد على الكلاسيكية. يجمع Dunk Low Retro بين مظهر أحادي اللون ومواد فاخرة ووسادة ناعمة لراحة غير مسبوقة تدوم. الاحتمالات لا حصر لها - كيف سترتدي Dunks الخاصة بك؟",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "نايكي دانك لو ريترو SE S2",
        description: "يمكنك دائمًا الاعتماد على الكلاسيكية. يجمع Dunk Low Retro بين مظهر أحادي اللون ومواد فاخرة ووسادة ناعمة لراحة غير مسبوقة تدوم. الاحتمالات لا حصر لها - كيف سترتدي Dunks الخاصة بك؟",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "نايكي دانك لو SE A#",
        description: "متعدد الاستخدامات بشكل مذهل، نظيف بشكل لافت وكلاسيكي للغاية. يمزج Dunk Low بين الجلد المدبوغ والجلد لإنهاء مثالي. يأتي مع طوق مبطن، ووسادة خفيفة ونعل مطاطي. اربط حذائك واجلب أجواء الشاطئ معك.",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "نايكي SB دانك لو برو",
        description: "يعود أيقونة كرة السلة من الثمانينات مع تفاصيل كلاسيكية وأسلوب رجعي. يجلب الأسلوب القديم مرة أخرى إلى الشوارع، حيث يتيح لك طوقه المنخفض المبطّن اللعب براحة في أي مكان.",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "نايكي دانك لو",
        isSpecial: true,
        description: "يعود أيقونة الثمانينات مع تفاصيل كلاسيكية وأسلوب رجعي. يجلب الأسلوب القديم مرة أخرى إلى الشوارع، حيث يتيح لك طوقه المبطّن اللعب براحة في أي مكان.",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "نايكي دانك لو 34",
        description: "معترفًا بجذور Dunk كأعلى حذاء لفريق جامعي، يستلهم Be True To Your School Pack من الحملة الإعلانية الأصلية. تمثل الألوان الجامعات الراقية، بينما يحتوي الجلد النقي على اللمعان المثالي لجعله فوزًا مؤكدًا. لذا اربط حذائك وأظهر روح الجامعة. هل أنت مستعد؟",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "نايكي هيلاندر برو مان",
        description: "يمكنك دائمًا الاعتماد على الكلاسيكية. يجمع هذا التصميم الملون بين الجلد والجلد المدبوغ مع وسادة ناعمة لراحة غير مسبوقة تدوم. الاحتمالات لا حصر لها - كيف سترتدي Dunks الخاصة بك؟",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "نايكي ريترو بريميوم 1980",
        description: "يمكنك دائمًا الاعتماد على الكلاسيكية. هذه النسخة الفاخرة من Dunk Low تجمع بين المواد المختلطة مع الجزء العلوي الأسود بالكامل لمظهر يمكن ارتداؤه وراحة تدوم. الاحتمالات لا حصر لها - كيف سترتدي Dunks الخاصة بك؟",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "نايكي جوردانز ليمتد إيديشن",
        description: "يمكنك دائمًا الاعتماد على الكلاسيكية. يجمع Dunk Low بين تلوين الألوان الأيقوني ومواد فاخرة ووسادة ناعمة لراحة غير مسبوقة تدوم. الاحتمالات لا حصر لها - كيف سترتدي Dunks الخاصة بك؟",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "سامبا OG",
        description: "ولد في الملعب، Samba هو رمز خالد لأسلوب الشارع. تبقى هذه السيلويت وفية لإرثها مع الجزء العلوي من الجلد الناعم، والتراكبات من الجلد المدبوغ ونعل مطاطي، مما يجعلها عنصرًا أساسيًا في خزانة كل شخص - داخل وخارج الملعب.",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "فير رن 4",
        description: "أحذية للمتعة. هذه الأحذية من نظام Torsion من أديداس مليئة بالشخصية. توفر الجزء العلوي الناعم الراحة والمرونة، بينما يوفر بطانة النسيج والنعل المطاطي المزيج المثالي من التبطين والثبات. تجرأ مع هذه الأحذية المميزة.",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "فينت شوت '96",
        description: "هذا المنتج مصنوع من مواد معاد تدويرها بنسبة 100%. من خلال إعادة استخدام المواد التي تم إنشاؤها بالفعل، نساعد في تقليل النفايات واعتمادنا على الموارد المحدودة وتقليل بصمة المنتجات التي نصنعها.",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "أحذية للمتعة. هذه الأحذية من نظام Torsion من أديداس مليئة بالشخصية. توفر الجزء العلوي الناعم الراحة والمرونة، بينما يوفر بطانة النسيج والنعل المطاطي المزيج المثالي من التبطين والثبات. تجرأ مع هذه الأحذية المميزة.",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "أستورنيد رن",
        description: "احتفظ به نظيفًا - بغض النظر عن مدى حبك لمنتجنا، لا تستخدم كلمات لن تستخدمها مع جدتك. ركز على المنتج - إذا كان لديك مشكلة غير متعلقة بالمنتج نفسه (مثل وقت التسليم، السعر)، يرجى توجيه ذلك إلى فريق خدمة العملاء لدينا لضمان قدرتهم على مساعدتك.",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "غراند كورت",
        description: "مصنوع من مجموعة من المواد المعاد تدويرها، يحتوي هذا الجزء العلوي على الأقل على 50% من المحتوى المعاد تدويره.",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "من نزهة في الحديقة إلى جري في عطلة نهاية الأسبوع مع الأصدقاء، تم تصميم هذه الأحذية adidas Ultraboost 1.0 لتبقيك مرتاحًا. يحيط الجزء العلوي من adidas PRIMEKNIT برفق قدميك بينما يمتص BOOST في النعل الأوسط من الخطوة الأولى إلى آخر ميل.",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "كلاود فوم 18 ريترو",
        description: "خيارك المفضل في الأيام المزدحمة. هذه الأحذية adidas أنيقة وعصرية، وتتناسب بسهولة مع كل شيء بدءًا من ملابس التمرين إلى الجينز. الجزء العلوي الخفيف مبطن للراحة بينما يبقيك Cloudfoam في حركة مريحة.",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "ديكود مي",
        description: "ارتدِ هذه الأحذية من Mercedes - AMG Petronas Formula One Team من adidas لأخذ شغفك بالسباق معك أينما ذهبت. مزيج من الجلد المدبوغ والنايلون يمنح الجزء العلوي نسيجًا فريدًا وأسلوبًا مصممًا ليبقى. تحافظ 3-Stripes على الجزء العلوي بألوان الفريق وشعار الفريق على لسان الكعب على الشكل الرسمي.",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "سويتش رن سيان",
        description: "مزيج من الأسلوب مع تفاصيل خالية من الإلهاء، ستبقيك أحدث مجموعة من الأساسيات الجارية من adidas تبدو جيدة كما تشعر أثناء وضع الكيلومترات. لذا يمكنك التركيز على ما يهم أكثر: الاستمتاع أثناء المشي.",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "إيزي بالينسياغا",
        isSpecial: true,
        description: "بالينسياغا تنفي أي مسؤولية في حالة عدم امتثال المستهلك لتعليمات العناية والمعالجة المذكورة أعلاه أو أي استخدام غير مناسب. يرجى الاتصال بخدمة العملاء في بالينسياغا للحصول على مزيد من المعلومات أو المساعدة.",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "منتج 22",
        isSpecial: true,
        description: "تكاليف الشحن المجانية والإرجاع خلال 30 يومًا من تاريخ التسليم. يمكنك استبدال منتجك بحجم أو لون مختلف فقط. تنطبق استثناءات على المنتجات. لمزيد من المعلومات.",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "غوتشي B3D",
        description: "في مجموعة ربيع صيف 2025، يمزج هذا الحذاء من غوتشي cub3d بين المواد المبتكرة والبناء. الجزء العلوي هو مزيج من Demetra والشبك، مع تفاصيل تم إنشاؤها بتقنية عالية التردد، بينما تجمع النعل بين الداخل المملوء بـ EVA و TPU في الخارج، مكتمل بنمط G متشابك ثلاثي الأبعاد.",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "بيكا مان 6253BA",
        description: "تعليق قوي لتقليل التأثير. رقعة تعليق فريدة. قبضة أفضل مع اندفاع أمامي ممتاز مع قبضة قوية، لن تقلق بشأن التآكل.",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "دوميناتور C.10",
        description: "خفيف وذو تنفس: تم تصميم هذه الأحذية الرياضية للرجال من مواد متينة وتقنية ربط سهلة الارتداء، مما يجعلها مثالية للجري، والمشي، والرياضة. يوفر الجزء العلوي القابل للتنفس والنعل الخفيف من Phylon الراحة أثناء الجري.",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE MENS",
        description: "نعل من رغوة الذاكرة لتوفير المزيد من التبطين والراحة.",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "ريد تشيسف جينون ATAG",
        description: "سهل التوافق - تتميز هذه الأحذية للرجال بتصميم مزيج الألوان الكلاسيكي، مما يجعل من السهل التوافق مع الملابس. يمكنك ارتداء هذه الأحذية مع الجينز، والسراويل غير الرسمية، والسراويل القصيرة، والشورتات. مثالي لجميع المناسبات.",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Mens 28",
        description: "راحة: تصميم ديربي مرن يمنحك حرية الحركة بشكل مريح. نعل داخلي خفيف مبطن للراحة وامتصاص الصدمات.",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "سنيكر 6783",
        description: "تُصنع منتجات غوتشي من مواد مختارة بعناية. يرجى التعامل معها بحذر لضمان عمر أطول للمنتج. احمِ من الضوء المباشر، والحرارة، والمطر. إذا أصبح رطبًا، جففه فورًا بقطعة قماش ناعمة.",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "غوتشي 3DR CUB",
        description: "في مجموعة ربيع صيف 2025، يمزج هذا الحذاء من غوتشي cub3d بين المواد المبتكرة والبناء. الجزء العلوي هو مزيج من Demetra والشبك، مع تفاصيل تم إنشاؤها بتقنية عالية التردد، بينما تجمع النعل بين الداخل المملوء بـ EVA و TPU في الخارج، مكتمل بنمط G متشابك ثلاثي الأبعاد.",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

  export const translationsJapanese = {
    meta:{
      available: "利用可能",
      sold: '販売済み',
    },
    products: [
      {
        name: "ナイキ ダンク ロー レトロ",
        description: "ハードウッド用に作られたが、ストリートに持ち込まれたナイキ ダンク ロー レトロは、シャープなオーバーレイとオリジナルのチームカラーで戻ってきます。このバスケットボールアイコンは、プレミアムレザーを使用したアッパーで80年代の雰囲気を表現し、見た目が良く、さらに履き心地が良くなります。現代のフットウェア技術は、快適さを21世紀に持ち込むのに役立ちます。",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "ナイキ ダンク ロー レトロ SE",
        description: "クラシックにいつでも頼れる。ダンク ロー レトロは、モノクロームのルックをプレミアム素材と柔らかいパディングで組み合わせ、ゲームを変える快適さを提供します。可能性は無限大です—あなたはどのようにダンクを履きますか？",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "ナイキ ダンク ロー レトロ SE S2",
        description: "クラシックにいつでも頼れる。ダンク ロー レトロは、モノクロームのルックをプレミアム素材と柔らかいパディングで組み合わせ、ゲームを変える快適さを提供します。可能性は無限大です—あなたはどのようにダンクを履きますか？",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "ナイキ ダンク ロー SE A#",
        description: "非常に多用途で、際立ってクリーンで、そしてとてもクラシックです。ダンク ローはスウェードとレザーを組み合わせて完璧な仕上がりを実現しています。パッド入りのカラー、軽量のクッション、ゴムソールが付いています。靴を履いてビーチの雰囲気を持ってきてください。",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "ナイキ SB ダンク ロー プロ",
        description: "80年代のバスケットボールアイコンがクラシックなディテールと懐かしいフレアで戻ってきます。ビンテージスタイルをストリートに戻し、パッド入りのローカットカラーがあれば、どこでも快適にゲームを楽しむことができます。",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "ナイキ ダンク ロー",
        isSpecial: true,
        description: "80年代のアイコンがクラシックなディテールと懐かしいフレアで戻ってきます。ビンテージスタイルをストリートに戻し、パッド入りのカラーがあれば、どこでも快適にゲームを楽しむことができます。",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "ナイキ ダンク ロー 34",
        description: "ダンクのルーツを大学チームのスニーカーとして認識し、Be True To Your School Packは元の広告キャンペーンにインスパイアされています。色はトップ大学を表し、クリスプなレザーは完璧な光沢を持ち、確実な勝利をもたらします。靴を履いて大学の精神を見せてください。準備はいいですか？",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "ナイキ ヒランダー プロ 男性用",
        description: "クラシックにいつでも頼れる。このカラーブロックデザインは、レザーとスウェードを組み合わせ、柔らかいパディングでゲームを変える快適さを提供します。可能性は無限大です—あなたはどのようにダンクを履きますか？",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "ナイキ レトロ プレミアム 1980",
        description: "クラシックにいつでも頼れる。このプレミアムバージョンのダンク ローは、混合素材と完全に黒いアッパーを組み合わせ、着やすいルックと快適さを提供します。可能性は無限大です—あなたはどのようにダンクを履きますか？",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "ナイキ ジョーダン 限定版",
        description: "クラシックにいつでも頼れる。ダンク ローは、そのアイコニックなカラーブロッキングをプレミアム素材と柔らかいパディングで組み合わせ、ゲームを変える快適さを提供します。可能性は無限大です—あなたはどのようにダンクを履きますか？",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "サンバ OG",
        description: "ピッチで生まれたサンバは、ストリートスタイルのタイムレスなアイコンです。このシルエットは、低プロファイルのソフトレザーアッパー、スウェードオーバーレイ、ゴムソールでその遺産に忠実であり、誰のクローゼットにも欠かせない存在です - ピッチの上でも下でも。",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "フェア ラン 4",
        description: "あなたの楽しみのための靴。これらのアディダス トーションシステムの靴は多くの個性を持っています。スムーズなアッパーは快適さと柔軟性を提供し、テキスタイルライニングとゴムアウトソールはクッションと安定性の完璧なブレンドを提供します。これらの目立つスニーカーで大胆に行こう。",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "ベント シュート '96",
        description: "この製品は100%リサイクル素材で作られています。すでに作成された材料を再利用することで、廃棄物と有限資源への依存を減らし、製品の足跡を減らすのに役立ちます。",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "あなたの楽しみのための靴。これらのアディダス トーションシステムの靴は多くの個性を持っています。スムーズなアッパーは快適さと柔軟性を提供し、テキスタイルライニングとゴムアウトソールはクッションと安定性の完璧なブレンドを提供します。これらの目立つスニーカーで大胆に行こう。",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "アスターニッド ラン",
        description: "クリーンに保ってください - あなたが私たちの製品をどれだけ愛していても、あなたの祖母と使わない言葉は使わないでください。製品に集中してください - 製品自体に関連しない問題（例：配達時間、価格）がある場合は、顧客サービスチームに連絡して、彼らが助けられるようにしてください。",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "グランド コート",
        description: "一連のリサイクル素材で作られており、このアッパーには少なくとも50%のリサイクル素材が含まれています。",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "公園での散歩から友達との週末ランまで、これらのアディダス Ultraboost 1.0 シューズは、あなたを快適に保つように設計されています。アディダス PRIMEKNIT アッパーはあなたの足を優しく包み、BOOST はミッドソールで最初のステップから最後のマイルまでクッションを提供します。",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "クラウド フォーム 18 レトロ",
        description: "忙しい日のためのあなたの選択肢。これらのアディダス スニーカーはスリムでスタイリッシュで、スポーツウェアからジーンズまで、すべてと簡単に組み合わせることができます。軽量のアッパーは快適さのために裏打ちされており、Cloudfoam のクッションがあなたを快適に動かし続けます。",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "これらのメルセデス - AMG ペトロナス フォーミュラ 1 チームのシューズに足を滑り込ませて、どこに行ってもレースファンを持ち運びましょう。スウェードとナイロンのブレンドがアッパーにユニークな質感とスタイルを与え、長持ちするように作られています。チームカラーのアッパーにある 3 ストライプと、ヒールタブのチームロゴが公式なルックを保ちます。",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "スイッチ ラン シアン",
        description: "スタイルを気を散らさない詳細と組み合わせ、アディダスの最新のランニング必需品は、あなたが感じるのと同じくらい良く見えるようにします。そうすれば、最も重要なことに集中できます: ストライドを楽しむこと。",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "イージー バレシアガ",
        isSpecial: true,
        description: "バレンシアガは、消費者が上記のケアおよび取り扱い指示に従わなかった場合、または不適切に使用した場合の責任を一切負いません。追加の情報や支援が必要な場合は、バレンシアガのカスタマーサービスにお問い合わせください。",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "製品 22",
        isSpecial: true,
        description: "配達日から30日以内の無料返品および交換。異なるサイズまたは色に交換できます。製品の制限が適用されます。詳細については、こちらをご覧ください。",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "2025年春夏コレクションでは、このグッチ cub3d スニーカーが革新的な素材と構造を融合させています。アッパーはデメトラとメッシュの混合であり、高周波技術で作成された詳細が特徴で、ソールは EVA 充填の内部と TPU を外側に組み合わせ、3D インターロッキング G パターンで完成しています。",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "ベッカ メンズ 6253BA",
        description: "衝撃を軽減するための強力なサスペンション。ユニボディサスペンションバランスパッチ。優れた前進モメンタムとしっかりとしたグリップで、摩耗について心配する必要はありません。",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "ドミネーター C.10",
        description: "軽量で通気性のあるこれらのメンズランニングシューズは、耐久性のある素材と簡単に着用できるレースアップ技術で設計されており、ジョギング、ウォーキング、スポーツに最適です。通気性のある上部生地と軽量のファイロンアウトソールは、ランニング中の快適さを確保します。",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE メンズ",
        description: "より多くのクッション性と快適さを提供するメモリーフォームインソール。",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "レッド チェイスフ ジェヌイン ATAG",
        description: "簡単に合わせられる - このメンズシューズは、クラシックなカラーマッチングデザインで、衣服と簡単に合わせられます。ジーンズ、カジュアルパンツ、クロップドパンツ、ショートパンツと合わせて履くことができます。あらゆる場面に最適です。",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "クリテリア メンズ 28",
        description: "快適さ: フレキシブルなダービー構造は、快適に動く自由を与えます。快適さと衝撃吸収のための軽くクッションされたフォームインソール。",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "スニーカー 6783",
        description: "グッチ製品は、慎重に選ばれた材料で製造されています。製品の寿命を延ばすために注意して取り扱ってください。直射日光、熱、雨から保護してください。濡れた場合は、すぐに柔らかい布で乾かしてください。",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "2025年春夏コレクションでは、このグッチ cub3d スニーカーが革新的な素材と構造を融合させています。アッパーはデメトラとメッシュの混合であり、高周波技術で作成された詳細が特徴で、ソールは EVA 充填の内部と TPU を外側に組み合わせ、3D インターロッキング G パターンで完成しています。",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

  export const translationsRussian = {
    meta:{
      available: "利用可能",
      sold: '販売済み',
    },
    products: [
      {
        name: "Nike Dunk Low Retro",
        description: "Созданный для паркета, но перенесенный на улицы, Nike Dunk Low Retro возвращается с четкими наложениями и оригинальными цветами команды. Этот баскетбольный иконка передает атмосферу 80-х с премиальной кожей в верхней части, которая выглядит хорошо и еще лучше носится. Современные технологии обуви помогают принести комфорт в 21-й век.",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "Nike Dunk Low Retro SE",
        description: "На классический стиль всегда можно положиться. Dunk Low Retro сочетает монохромный вид с премиальными материалами и мягкой подкладкой для комфорта, который меняет правила игры и длится долго. Возможности безграничны — как вы будете носить свои Dunks?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "Nike Dunk Low Retro SE S2",
        description: "На классический стиль всегда можно положиться. Dunk Low Retro сочетает монохромный вид с премиальными материалами и мягкой подкладкой для комфорта, который меняет правила игры и длится долго. Возможности безграничны — как вы будете носить свои Dunks?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "Nike Dunk Low SE A#",
        description: "Чрезвычайно универсальный, поразительно чистый и о-очень классический. Dunk Low сочетает замшу и кожу для безупречного завершения. Он идет с мягким воротником, легким амортизатором и резиновой подошвой. Завяжите шнурки и принесите пляжные вибрации с собой.",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "Nike SB Dunk Low Pro",
        description: "Иконка баскетбола 80-х возвращается с классическими деталями и ностальгическим стилем. Передавая винтажный стиль обратно на улицы, его мягкий низкий воротник позволяет вам комфортно брать свою игру куда угодно.",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "Nike Dunk Low",
        isSpecial: true,
        description: "Иконка 80-х возвращается с классическими деталями и ностальгическим стилем. Передавая винтажный стиль обратно на улицы, его мягкий воротник позволяет вам комфортно брать свою игру куда угодно.",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "Nike Dunk Low 34",
        description: "Признавая корни Dunk как топовый университетский сникер, пакет Be True To Your School вдохновляется оригинальной рекламной кампанией. Цвета представляют лучшие университеты, в то время как чистая кожа имеет идеальное количество блеска, чтобы сделать их безусловной победой. Так что завяжите шнурки и покажите этот университетский дух. Вы готовы?",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "Nike Hilander Pro Man",
        description: "На классический стиль всегда можно положиться. Этот дизайн с цветными блоками сочетает кожу и замшу с мягкой подкладкой для комфорта, который меняет правила игры и длится долго. Возможности безграничны — как вы будете носить свои Dunks?",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "Nike Retro Premium 1980",
        description: "На классический стиль всегда можно положиться. Эта премиум версия Dunk Low сочетает смешанные материалы с полностью черным верхом для носимого вида и комфорта, который длится долго. Возможности безграничны — как вы будете носить свои Dunks?",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "Nike Jordans Limited Edition",
        description: "На классический стиль всегда можно положиться. Dunk Low сочетает свою знаковую цветовую блокировку с премиальными материалами и мягкой подкладкой для комфорта, который меняет правила игры и длится долго. Возможности безграничны — как вы будете носить свои Dunks?",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "Samba OG",
        description: "Рожденный на поле, Samba является вечной иконой уличного стиля. Эта силуэт остается верным своему наследию с элегантным, низкопрофильным, мягким кожаным верхом, замшевыми накладками и резиновой подошвой, что делает его основным элементом в гардеробе каждого — на поле и вне его.",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "Fair Run 4",
        description: "Обувь для удовольствия. Эти обувь с системой Torsion от adidas имеют много индивидуальности. Гладкий верх обеспечивает комфорт и гибкость, в то время как текстильная подкладка и резиновая подошва предлагают идеальное сочетание амортизации и стабильности. Будьте смелыми в этих выделяющихся кроссовках.",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "Vent Shoot '96",
        description: "Этот продукт изготовлен из 100% переработанных материалов. Путем повторного использования материалов, которые уже были созданы, мы помогаем снизить количество отходов и нашу зависимость от конечных ресурсов и сократить углеродный след продуктов, которые мы производим.",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "Обувь для удовольствия. Эти обувь с системой Torsion от adidas имеют много индивидуальности. Гладкий верх обеспечивает комфорт и гибкость, в то время как текстильная подкладка и резиновая подошва предлагают идеальное сочетание амортизации и стабильности. Будьте смелыми в этих выделяющихся кроссовках.",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "Сохраняйте чистоту — независимо от того, насколько вы любите наш продукт, не используйте слова, которые вы не использовали бы с вашей бабушкой. Сосредоточьтесь на продукте — если у вас есть проблема, не связанная с самим продуктом (например, время доставки, цена), пожалуйста, направьте это в нашу службу поддержки клиентов, чтобы они могли помочь вам.",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "Grand Court",
        description: "Изготовлено из ряда переработанных материалов, этот верх содержит не менее 50% переработанного содержимого.",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "От прогулки в парке до забега с друзьями в выходные, эти кроссовки adidas Ultraboost 1.0 созданы, чтобы обеспечить вам комфорт. Верх из adidas PRIMEKNIT нежно обнимает ваши ноги, в то время как BOOST на промежуточной подошве амортизирует от первого шага до последней мили.",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "Cloud Foam 18 Retro",
        description: "Ваш идеальный выбор в загруженные дни. Эти кроссовки adidas стильные и элегантные, легко комбинируются с чем угодно, от спортивной одежды до джинсов. Легкий верх с подкладкой для комфорта, в то время как амортизация Cloudfoam обеспечивает вам комфортное движение.",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "Наденьте эти кроссовки от Mercedes - AMG Petronas Formula One Team от adidas, чтобы взять свою страсть к гонкам с собой куда бы вы ни пошли. Смесь замши и нейлона придает верхней части уникальную текстуру и стиль, созданные для долговечности. 3-строчки на верхней части в цветах команды и логотип команды на язычке пятки сохраняют официальный вид.",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "Switch Run Cyan",
        description: "Сочетая стиль с деталями без отвлечений, последняя линейка беговых основ adidas позволит вам выглядеть так же хорошо, как вы себя чувствуете, пока вы проходите километры. Так вы сможете сосредоточиться на самом важном: получать удовольствие от бега.",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "Balenciaga отказывается от какой-либо ответственности в случае несоответствия потребителя указанным выше инструкциям по уходу и обращению или неправильного использования. Пожалуйста, свяжитесь со службой поддержки клиентов Balenciaga для получения дополнительной информации или помощи.",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "Продукт 22",
        isSpecial: true,
        description: "Бесплатные возвраты и обмен в течение 30 дней с даты доставки. Вы можете обменять свой товар только на другой размер или цвет. Применяются исключения для продуктов. Для получения дополнительной информации.",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "В коллекции весна-лето 2025 этот кроссовок Gucci cub3d сочетает в себе инновационные материалы и конструкции. Верх сделан из смеси Деметры и сетки, с деталями, созданными с использованием высокочастотной техники, в то время как подошва сочетает в себе EVA-наполненный внутренний слой и TPU снаружи, дополненный 3D-взаимозамкнутым G-узором.",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca Mens 6253BA",
        description: "Сильная амортизация для уменьшения воздействия. Уникальный патч амортизации уни-борта. Более сильный захват с отличным впереди движением и надежным захватом, вам не нужно беспокоиться о стирании.",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "Легкие и дышащие: эти мужские беговые обуви разработаны с использованием прочных материалов и легкой в использовании технологии шнуровки, что делает их идеальными для бега, ходьбы и спорта. Дышащий верхний материал и легкая подошва Phylon обеспечивают комфорт во время бега.",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE MENS",
        description: "Вставка из мемори-фона для обеспечения большей амортизации и комфорта.",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "ЛЕГКО СОЧЕТАТЬ - Эти мужские обуви имеют классический дизайн цветового сочетания, легко сочетаются с одеждой. Вы можете носить эту обувь с джинсами, повседневными брюками, укороченными брюками и шортами. Идеально подходит для любых случаев.",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Mens 28",
        description: "Комфорт: Гибкая конструкция Derby дает вам свободу удобно двигаться. Легко амортизированная вставка из пены для комфорта и поглощения ударов.",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "Продукты Gucci изготовлены из тщательно отобранных материалов. Пожалуйста, обращайтесь с осторожностью, чтобы продлить срок службы продукта. Защищайте от прямого света, тепла и дождя. Если он намокнет, немедленно высушите его мягкой тканью.",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "В коллекции весна-лето 2025 этот кроссовок Gucci cub3d сочетает в себе инновационные материалы и конструкции. Верх сделан из смеси Деметры и сетки, с деталями, созданными с использованием высокочастотной техники, в то время как подошва сочетает в себе EVA-наполненный внутренний слой и TPU снаружи, дополненный 3D-взаимозамкнутым G-узором.",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

  export const translationsPortuguese = {
    meta:{
      available: "利用可能",
      sold: '販売済み',
    },
    products: [
      {
        name: "Nike Dunk Low Retro",
        description: "Criado para o parquet, mas levado para as ruas, o Nike Dunk Low Retro retorna com sobreposições nítidas e cores originais da equipe. Este ícone do basquete traz a atmosfera dos anos 80 com um cabedal em couro premium que parece bom e ainda melhor se ajusta. As tecnologias modernas de calçados ajudam a trazer conforto para o século 21.",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "Nike Dunk Low Retro SE",
        description: "Um clássico em que você sempre pode confiar. O Dunk Low Retro combina um visual monocromático com materiais premium e um acolchoamento macio para um conforto que muda o jogo. As possibilidades são infinitas — como você vai usar seu Dunk?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "Nike Dunk Low Retro SE S2",
        description: "Um clássico em que você sempre pode confiar. O Dunk Low Retro combina um visual monocromático com materiais premium e um acolchoamento macio para um conforto que muda o jogo. As possibilidades são infinitas — como você vai usar seu Dunk?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "Nike Dunk Low SE A#",
        description: "Extremamente versátil, impressionantemente limpo e muito clássico. O Dunk Low combina camurça e couro para um acabamento impecável. Vem com um colarinho acolchoado, amortecimento leve e uma sola de borracha. Amarre os cadarços e traga as vibrações da praia com você.",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "Nike SB Dunk Low Pro",
        description: "O ícone do basquete dos anos 80 retorna com detalhes clássicos e um toque nostálgico. Trazendo o estilo vintage de volta às ruas, seu colarinho baixo acolchoado permite que você leve seu jogo a qualquer lugar com conforto.",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "Nike Dunk Low",
        isSpecial: true,
        description: "O ícone dos anos 80 retorna com detalhes clássicos e um toque nostálgico. Trazendo o estilo vintage de volta às ruas, seu colarinho baixo acolchoado permite que você leve seu jogo a qualquer lugar com conforto.",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "Nike Dunk Low 34",
        description: "Reconhecendo as raízes do Dunk como um sneaker universitário de topo, o pacote Be True To Your School é inspirado na campanha publicitária original. As cores representam as melhores universidades, enquanto o couro limpo tem o brilho perfeito para garantir uma vitória. Então, amarre os cadarços e mostre esse espírito universitário. Você está pronto?",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "Nike Hilander Pro Masculino",
        description: "Um clássico em que você sempre pode confiar. Este design de bloco de cores combina couro e camurça com um acolchoamento macio para um conforto que muda o jogo. As possibilidades são infinitas — como você vai usar seu Dunk?",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "Nike Retro Premium 1980",
        description: "Um clássico em que você sempre pode confiar. Esta versão premium do Dunk Low combina materiais mistos com um cabedal totalmente preto para um visual fácil de usar e conforto que dura. As possibilidades são infinitas — como você vai usar seu Dunk?",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "Nike Jordans Edição Limitada",
        description: "Um clássico em que você sempre pode confiar. O Dunk Low combina seu bloqueio de cores icônico com materiais premium e um acolchoamento macio para um conforto que muda o jogo. As possibilidades são infinitas — como você vai usar seu Dunk?",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "Samba OG",
        description: "Nascido no campo, o Samba é um ícone atemporal do estilo de rua. Este silhueta permanece fiel ao seu legado com um cabedal de couro macio de perfil baixo, sobreposições de camurça e uma sola de borracha, tornando-o um item essencial no guarda-roupa de todos — em campo e fora dele.",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "Fair Run 4",
        description: "Calçado para diversão. Esses calçados com o sistema Torsion da adidas têm muita personalidade. O cabedal liso oferece conforto e flexibilidade, enquanto o forro têxtil e a sola de borracha oferecem a combinação perfeita de amortecimento e estabilidade. Seja ousado com esses tênis chamativos.",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "Vent Shoot '96",
        description: "Este produto é feito de 100% materiais reciclados. Ao reutilizar materiais que já foram criados, ajudamos a reduzir o desperdício e a dependência de recursos finitos, diminuindo a pegada de carbono dos produtos que fabricamos.",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "Calçado para diversão. Esses calçados com o sistema Torsion da adidas têm muita personalidade. O cabedal liso oferece conforto e flexibilidade, enquanto o forro têxtil e a sola de borracha oferecem a combinação perfeita de amortecimento e estabilidade. Seja ousado com esses tênis chamativos.",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "Mantenha limpo — não importa o quanto você ame nosso produto, não use palavras que você não usaria com sua avó. Concentre-se no produto — se você tiver um problema que não esteja relacionado ao próprio produto (por exemplo, tempo de entrega, preço), entre em contato com nossa equipe de atendimento ao cliente para que eles possam ajudar.",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "Grand Court",
        description: "Feito de uma variedade de materiais reciclados, este cabedal contém pelo menos 50% de conteúdo reciclado.",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "Desde passeios no parque até corridas de fim de semana com amigos, esses tênis adidas Ultraboost 1.0 são projetados para mantê-lo confortável. O cabedal de adidas PRIMEKNIT envolve suavemente seus pés, enquanto o BOOST na entressola fornece amortecimento desde o primeiro passo até a última milha.",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "Cloud Foam 18 Retro",
        description: "Sua escolha ideal para dias movimentados. Esses tênis adidas são elegantes e estilosos, combinando facilmente com tudo, desde roupas esportivas até jeans. O cabedal leve é forrado para conforto, enquanto o amortecimento Cloudfoam garante que você se mova confortavelmente.",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "Deslize seus pés nesses tênis da Mercedes - AMG Petronas Formula 1 Team e leve sua paixão por corridas com você aonde quer que vá. A mistura de camurça e nylon dá à parte superior uma textura e estilo únicos, feitos para durar. As 3 listras na parte superior em cores da equipe e o logotipo da equipe na aba do calcanhar mantêm o visual oficial.",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "Switch Run Cyan",
        description: "Combinando estilo com detalhes sem distrações, a última linha de essenciais para corrida da adidas fará você parecer tão bem quanto se sente enquanto percorre quilômetros. Assim, você pode se concentrar no mais importante: aproveitar a corrida.",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "A Balenciaga não se responsabiliza por qualquer responsabilidade em caso de não conformidade do consumidor com as instruções de cuidados e manuseio acima mencionadas ou uso inadequado. Para mais informações ou assistência, entre em contato com o atendimento ao cliente da Balenciaga.",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "Produto 22",
        isSpecial: true,
        description: "Devoluções e trocas gratuitas dentro de 30 dias a partir da data de entrega. Você pode trocar seu produto apenas por um tamanho ou cor diferente. Exceções se aplicam a produtos. Para mais informações.",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "Na coleção primavera-verão de 2025, este tênis Gucci cub3d combina materiais e estruturas inovadoras. O cabedal é feito de uma mistura de Demetra e malha, com detalhes criados usando tecnologia de alta frequência, enquanto a sola combina um interior preenchido com EVA e TPU do lado de fora, finalizado com um padrão G interligado em 3D.",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca Mens 6253BA",
        description: "Amortecimento forte para reduzir o impacto. Patch de suspensão unibody. Um impulso forte com excelente movimento para frente e aderência firme, você não precisa se preocupar com o desgaste.",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "Leves e respiráveis, esses tênis masculinos de corrida são projetados com materiais duráveis e uma tecnologia de amarração fácil de usar, tornando-os ideais para correr, caminhar e praticar esportes. O material superior respirável e a sola leve de Phylon garantem conforto durante a corrida.",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE MENS",
        description: "Sola de memória para maior amortecimento e conforto.",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "FÁCIL DE COMBINAR - Esses tênis masculinos têm um design clássico de combinação de cores, combinando facilmente com roupas. Você pode usar esses tênis com jeans, calças casuais, calças curtas e bermudas. Perfeito para qualquer ocasião.",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Mens 28",
        description: "Conforto: A construção flexível do Derby oferece a liberdade de se mover confortavelmente. Palmilha leve e acolchoada para conforto e absorção de impactos.",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "Os produtos Gucci são feitos de materiais cuidadosamente selecionados. Por favor, trate-os com cuidado para prolongar a vida útil do produto. Proteja-os da luz solar direta, calor e chuva. Se molhar, seque imediatamente com um pano macio.",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "Na coleção primavera-verão de 2025, este tênis Gucci cub3d combina materiais e estruturas inovadoras. O cabedal é feito de uma mistura de Demetra e malha, com detalhes criados usando tecnologia de alta frequência, enquanto a sola combina um interior preenchido com EVA e TPU do lado de fora, finalizado com um padrão G interligado em 3D.",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

  export const translationsHindi = {
    meta:{
      available: "उपलब्ध",
      sold: 'बिका हुआ',
    },
    products: [
      {
        name: "Nike Dunk Low Retro",
        description: "पार्केट के लिए बनाया गया, लेकिन सड़कों पर लाया गया, Nike Dunk Low Retro स्पष्ट ओवरले और मूल टीम रंगों के साथ लौटता है। यह बास्केटबॉल आइकन 80 के दशक के माहौल को प्रीमियम लेदर के ऊपरी भाग के साथ लाता है, जो देखने में अच्छा लगता है और पहनने में और भी अच्छा होता है। आधुनिक फुटवियर तकनीक 21वीं सदी में आराम लाने में मदद करती है।",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "Nike Dunk Low Retro SE",
        description: "क्लासिक पर हमेशा भरोसा किया जा सकता है। Dunk Low Retro एक मोनोक्रोम लुक को प्रीमियम सामग्री और नरम पैडिंग के साथ जोड़ता है, जो गेम-चेंजिंग आराम प्रदान करता है। संभावनाएं अनंत हैं — आप अपने डंक को कैसे पहनेंगे?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "Nike Dunk Low Retro SE S2",
        description: "क्लासिक पर हमेशा भरोसा किया जा सकता है। Dunk Low Retro एक मोनोक्रोम लुक को प्रीमियम सामग्री और नरम पैडिंग के साथ जोड़ता है, जो गेम-चेंजिंग आराम प्रदान करता है। संभावनाएं अनंत हैं — आप अपने डंक को कैसे पहनेंगे?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "Nike Dunk Low SE A#",
        description: "अत्यधिक बहुपरकारी, आश्चर्यजनक रूप से साफ और बहुत क्लासिक। Dunk Low को एक बेदाग खत्म करने के लिए सुडौल और चमड़े के साथ जोड़ा गया है। यह पैडेड कॉलर, हल्के कुशनिंग और रबर सोल के साथ आता है। लटकन बांधें और समुद्र तट की वाइब्स लाएं।",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "Nike SB Dunk Low Pro",
        description: "80 के दशक का बास्केटबॉल आइकन क्लासिक विवरण और नॉस्टैल्जिक फ्लेयर के साथ लौटता है। विंटेज स्टाइल को सड़कों पर लाते हुए, इसका पैडेड लो-कट कॉलर आपको कहीं भी अपने गेम का आनंद लेने की अनुमति देता है।",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "Nike Dunk Low",
        isSpecial: true,
        description: "80 के दशक का आइकन क्लासिक विवरण और नॉस्टैल्जिक फ्लेयर के साथ लौटता है। विंटेज स्टाइल को सड़कों पर लाते हुए, इसका पैडेड कॉलर आपको कहीं भी अपने गेम का आनंद लेने की अनुमति देता है।",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "Nike Dunk Low 34",
        description: "Dunk की जड़ें एक विश्वविद्यालय के स्नीकर्स के रूप में मान्यता प्राप्त करते हुए, Be True To Your School पैक मूल विज्ञापन अभियान से प्रेरित है। रंगों का प्रतिनिधित्व करते हैं शीर्ष विश्वविद्यालय, जबकि साफ चमड़ा सही चमक के साथ है, जो निश्चित जीत लाता है। जूते पहनें और विश्वविद्यालय की भावना दिखाएं। क्या आप तैयार हैं?",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "Nike Hilander Pro पुरुषों के लिए",
        description: "क्लासिक पर हमेशा भरोसा किया जा सकता है। यह रंग-ब्लॉक डिज़ाइन चमड़े और सुडौल को जोड़ता है, नरम पैडिंग के साथ गेम-चेंजिंग आराम प्रदान करता है। संभावनाएं अनंत हैं — आप अपने डंक को कैसे पहनेंगे?",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "Nike Retro Premium 1980",
        description: "क्लासिक पर हमेशा भरोसा किया जा सकता है। यह प्रीमियम संस्करण Dunk Low मिश्रित सामग्रियों के साथ पूरी तरह से काले ऊपरी भाग को जोड़ता है, जिसे पहनने में आसानी और आराम प्रदान करता है। संभावनाएं अनंत हैं — आप अपने डंक को कैसे पहनेंगे?",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "Nike Jordans सीमित संस्करण",
        description: "क्लासिक पर हमेशा भरोसा किया जा सकता है। Dunk Low अपने आइकॉनिक रंग-ब्लॉकिंग को प्रीमियम सामग्रियों और नरम पैडिंग के साथ जोड़ता है, जो गेम-चेंजिंग आराम प्रदान करता है। संभावनाएं अनंत हैं — आप अपने डंक को कैसे पहनेंगे?",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "Samba OG",
        description: "पिच पर जन्मा, Samba एक कालातीत स्टाइल आइकन है। यह सिल्हूट एक कम प्रोफाइल, नरम चमड़े के ऊपरी भाग, सुडौल ओवरले और रबर सोल के साथ अपने विरासत के प्रति वफादार है, जो हर किसी की अलमारी में एक अनिवार्य वस्तु बनाता है - पिच पर और बाहर।",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "Fair Run 4",
        description: "आपकी खुशी के लिए जूते। ये adidas Torsion सिस्टम वाले जूते बहुत सारी व्यक्तिगतता रखते हैं। चिकना ऊपरी भाग आराम और लचीलापन प्रदान करता है, जबकि टेक्सटाइल लाइनिंग और रबर आउटसोल कुशनिंग और स्थिरता का सही मिश्रण प्रदान करते हैं। इन ध्यान खींचने वाले स्नीकर्स में साहसिक बनें।",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "Vent Shoot '96",
        description: "यह उत्पाद 100% पुनर्नवीनीकरण सामग्री से बना है। पहले से बनाए गए सामग्रियों का पुन: उपयोग करके, हम अपशिष्ट और सीमित संसाधनों पर निर्भरता को कम करने में मदद करते हैं, और उत्पादों के कार्बन फुटप्रिंट को कम करते हैं।",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "आपकी खुशी के लिए जूते। ये adidas Torsion सिस्टम वाले जूते बहुत सारी व्यक्तिगतता रखते हैं। चिकना ऊपरी भाग आराम और लचीलापन प्रदान करता है, जबकि टेक्सटाइल लाइनिंग और रबर आउटसोल कुशनिंग और स्थिरता का सही मिश्रण प्रदान करते हैं। इन ध्यान खींचने वाले स्नीकर्स में साहसिक बनें।",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "स्वच्छता बनाए रखें - चाहे आप हमारे उत्पाद को कितना भी पसंद करें, उन शब्दों का उपयोग न करें जो आप अपनी दादी के साथ नहीं करेंगे। उत्पाद पर ध्यान केंद्रित करें - यदि आपके पास उत्पाद से संबंधित कोई समस्या है (जैसे डिलीवरी का समय, मूल्य), तो कृपया इसे हमारे ग्राहक सेवा टीम को भेजें ताकि वे आपकी मदद कर सकें।",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "Grand Court",
        description: "एक श्रृंखला पुनर्नवीनीकरण सामग्रियों से बनाई गई है, यह ऊपरी भाग कम से कम 50% पुनर्नवीनीकरण सामग्री शामिल करता है।",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "पार्क में टहलने से लेकर दोस्तों के साथ सप्ताहांत की दौड़ तक, ये adidas Ultraboost 1.0 जूते आपको आरामदायक बनाए रखने के लिए डिज़ाइन किए गए हैं। adidas PRIMEKNIT ऊपरी भाग आपके पैरों को कोमलता से लपेटता है, जबकि BOOST मध्य तल में पहले कदम से लेकर अंतिम मील तक कुशन प्रदान करता है।",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "Cloud Foam 18 Retro",
        description: "व्यस्त दिनों के लिए आपका आदर्श विकल्प। ये adidas स्नीकर्स स्टाइलिश और आधुनिक हैं, जो आसानी से किसी भी चीज़ के साथ मिल जाते हैं, खेल के कपड़ों से लेकर जींस तक। हल्का ऊपरी भाग आराम के लिए अस्तर किया गया है, जबकि Cloudfoam कुशनिंग आपको आराम से चलने में मदद करती है।",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "इन जूतों को पहनें जो Mercedes - AMG Petronas Formula 1 Team से हैं और अपनी रेसिंग की दीवानगी को अपने साथ ले जाएं। सुडौल और नायलॉन का मिश्रण ऊपरी भाग को अद्वितीय बनावट और शैली देता है, जो लंबे समय तक चलने के लिए बनाया गया है। टीम के रंगों में 3 धारियाँ और एड़ी के टैब पर टीम का लोगो इसे आधिकारिक लुक बनाए रखते हैं।",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "Switch Run Cyan",
        description: "शैली को अव्यवस्थित करने वाले विवरणों के साथ मिलाते हुए, adidas की नवीनतम रनिंग आवश्यकताएँ आपको उतना अच्छा दिखने के लिए डिज़ाइन की गई हैं जितना आप महसूस करते हैं। ताकि आप सबसे महत्वपूर्ण बात पर ध्यान केंद्रित कर सकें: दौड़ने का आनंद लेना।",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "Balenciaga किसी भी जिम्मेदारी से इनकार करता है यदि उपभोक्ता ऊपर दिए गए देखभाल और हैंडलिंग निर्देशों का पालन नहीं करता है या गलत तरीके से उपयोग करता है। अधिक जानकारी या सहायता के लिए, कृपया Balenciaga के ग्राहक सेवा से संपर्क करें।",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "उत्पाद 22",
        isSpecial: true,
        description: "डिलीवरी की तारीख से 30 दिनों के भीतर मुफ्त रिटर्न और एक्सचेंज। आप अपने उत्पाद को केवल एक अलग आकार या रंग के लिए बदल सकते हैं। उत्पादों के लिए अपवाद लागू होते हैं। अधिक जानकारी के लिए।",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "2025 की स्प्रिंग-समर कलेक्शन में, यह Gucci cub3d स्नीकर्स नवीनतम सामग्रियों और संरचनाओं को जोड़ता है। ऊपरी भाग Demetra और मेष का मिश्रण है, जिसमें उच्च-आवृत्ति तकनीक से बने विवरण हैं, जबकि सोल EVA भरे आंतरिक और TPU के बाहरी को जोड़ती है, 3D इंटरलॉकिंग G पैटर्न के साथ पूरा किया गया है।",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca Mens 6253BA",
        description: "प्रभाव को कम करने के लिए मजबूत कुशनिंग। यूनिबॉडी सस्पेंशन बैलेंस पैच। उत्कृष्ट आगे बढ़ने के साथ मजबूत पकड़, आपको घिसने की चिंता नहीं करनी चाहिए।",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "हल्के और सांस लेने योग्य, ये पुरुषों के दौड़ने वाले जूते टिकाऊ सामग्रियों और उपयोग में आसान लेसिंग तकनीक के साथ डिज़ाइन किए गए हैं, जो उन्हें दौड़ने, चलने और खेल के लिए आदर्श बनाते हैं। सांस लेने योग्य ऊपरी सामग्री और हल्की Phylon सोल दौड़ते समय आराम सुनिश्चित करती है।",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE MENS",
        description: "अधिक कुशनिंग और आराम के लिए मेमोरी फोम इनसोल।",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "मिलाने में आसान - ये पुरुषों के जूते एक क्लासिक रंग संयोजन डिजाइन के साथ हैं, जो कपड़ों के साथ आसानी से मिल जाते हैं। आप इन जूतों को जींस, कैजुअल पैंट, क्रॉप्ड पैंट और शॉर्ट्स के साथ पहन सकते हैं। किसी भी मौके के लिए आदर्श।",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Mens 28",
        description: "आराम: फ्लेक्सिबल डर्बी निर्माण आपको आराम से चलने की स्वतंत्रता देता है। आराम और प्रभाव अवशोषण के लिए हल्का कुशन वाला फोम इनसोल।",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "Gucci उत्पाद सावधानीपूर्वक चुने गए सामग्रियों से बने होते हैं। कृपया उत्पाद की उम्र बढ़ाने के लिए सावधानी से व्यवहार करें। सीधे धूप, गर्मी और बारिश से बचाएं। अगर गीला हो जाए, तो तुरंत एक नरम कपड़े से सुखाएं।",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "2025 की स्प्रिंग-समर कलेक्शन में, यह Gucci cub3d स्नीकर्स नवीनतम सामग्रियों और संरचनाओं को जोड़ता है। ऊपरी भाग Demetra और मेष का मिश्रण है, जिसमें उच्च-आवृत्ति तकनीक से बने विवरण हैं, जबकि सोल EVA भरे आंतरिक और TPU के बाहरी को जोड़ती है, 3D इंटरलॉकिंग G पैटर्न के साथ पूरा किया गया है।",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

  export const translationsKorean = {
    meta:{
      available: "사용 가능",
      sold: '판매된',
    },
    products: [
      {
        name: "Nike Dunk Low Retro",
        description: "하드우드용으로 제작되었지만 거리로 가져온 Nike Dunk Low Retro는 선명한 오버레이와 원래 팀 색상으로 돌아옵니다. 이 농구 아이콘은 프리미엄 가죽으로 된 상단으로 80년대의 분위기를 전달하며, 보기에도 좋고 착용감도 뛰어납니다. 현대의 신발 기술은 21세기에 편안함을 가져오는 데 도움을 줍니다.",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "Nike Dunk Low Retro SE",
        description: "클래식은 항상 믿을 수 있습니다. Dunk Low Retro는 모노크롬 룩을 프리미엄 소재와 부드러운 패딩으로 결합하여 게임을 바꾸는 편안함을 제공합니다. 가능성은 무한합니다 — 당신은 어떻게 덩크를 신을 건가요?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "Nike Dunk Low Retro SE S2",
        description: "클래식은 항상 믿을 수 있습니다. Dunk Low Retro는 모노크롬 룩을 프리미엄 소재와 부드러운 패딩으로 결합하여 게임을 바꾸는 편안함을 제공합니다. 가능성은 무한합니다 — 당신은 어떻게 덩크를 신을 건가요?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "Nike Dunk Low SE A#",
        description: "매우 다재다능하고, 놀랍도록 깨끗하며, 매우 클래식합니다. Dunk Low는 스웨이드와 가죽을 결합하여 완벽한 마감을 제공합니다. 패딩된 칼라, 가벼운 쿠션, 고무 밑창이 함께 제공됩니다. 신발끈을 묶고 해변의 분위기를 가져오세요.",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "Nike SB Dunk Low Pro",
        description: "80년대 농구 아이콘이 클래식한 디테일과 향수를 불러일으키는 스타일로 돌아옵니다. 빈티지 스타일을 거리로 가져오며, 패딩된 로우컷 칼라가 있으면 어디서든 편안하게 게임을 즐길 수 있습니다.",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "Nike Dunk Low",
        isSpecial: true,
        description: "80년대 아이콘이 클래식한 디테일과 향수를 불러일으키는 스타일로 돌아옵니다. 빈티지 스타일을 거리로 가져오며, 패딩된 칼라가 있으면 어디서든 편안하게 게임을 즐길 수 있습니다.",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "Nike Dunk Low 34",
        description: "Dunk의 뿌리를 대학 팀의 스니커즈로 인정하며, Be True To Your School 팩은 원래 광고 캠페인에서 영감을 받았습니다. 색상은 최고의 대학을 나타내며, 깨끗한 가죽은 완벽한 광택을 가지고 있어 확실한 승리를 가져옵니다. 신발을 신고 대학의 정신을 보여주세요. 준비되셨나요?",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "Nike Hilander Pro 남성용",
        description: "클래식은 항상 믿을 수 있습니다. 이 색상 블록 디자인은 가죽과 스웨이드를 결합하여 부드러운 패딩으로 게임을 바꾸는 편안함을 제공합니다. 가능성은 무한합니다 — 당신은 어떻게 덩크를 신을 건가요?",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "Nike Retro Premium 1980",
        description: "클래식은 항상 믿을 수 있습니다. 이 프리미엄 버전의 Dunk Low는 혼합 소재와 완전히 검은색 상단을 결합하여 착용하기 쉬운 모습과 편안함을 제공합니다. 가능성은 무한합니다 — 당신은 어떻게 덩크를 신을 건가요?",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "Nike Jordans 한정판",
        description: "클래식은 항상 믿을 수 있습니다. Dunk Low는 아이코닉한 색상 블로킹을 프리미엄 소재와 부드러운 패딩으로 결합하여 게임을 바꾸는 편안함을 제공합니다. 가능성은 무한합니다 — 당신은 어떻게 덩크를 신을 건가요?",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "Samba OG",
        description: "피치에서 태어난 Samba는 거리 스타일의 시대를 초월한 아이콘입니다. 이 실루엣은 낮은 프로필의 부드러운 가죽 상단, 스웨이드 오버레이 및 고무 밑창으로 그 유산에 충실하며, 모든 사람의 옷장에 필수 아이템이 됩니다 - 피치 위와 아래 모두에서.",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "Fair Run 4",
        description: "당신의 즐거움을 위한 신발. 이 아디다스 Torsion 시스템 신발은 많은 개성을 가지고 있습니다. 매끄러운 상단은 편안함과 유연성을 제공하며, 텍스타일 라이닝과 고무 아웃솔은 쿠셔닝과 안정성의 완벽한 조합을 제공합니다. 이 눈에 띄는 스니커즈로 대담하게 나아가세요.",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "Vent Shoot '96",
        description: "이 제품은 100% 재활용 소재로 만들어졌습니다. 이미 만들어진 소재를 재사용함으로써, 우리는 폐기물과 제한된 자원에 대한 의존도를 줄이고, 우리가 생산하는 제품의 탄소 발자국을 줄이는 데 도움을 줍니다.",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "당신의 즐거움을 위한 신발. 이 아디다스 Torsion 시스템 신발은 많은 개성을 가지고 있습니다. 매끄러운 상단은 편안함과 유연성을 제공하며, 텍스타일 라이닝과 고무 아웃솔은 쿠셔닝과 안정성의 완벽한 조합을 제공합니다. 이 눈에 띄는 스니커즈로 대담하게 나아가세요.",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "깨끗함을 유지하세요 - 당신이 우리의 제품을 얼마나 사랑하든, 당신의 할머니와 사용하지 않을 단어는 사용하지 마세요. 제품에 집중하세요 - 제품 자체와 관련이 없는 문제가 있다면(예: 배송 시간, 가격), 고객 서비스 팀에 연락하여 도움을 받을 수 있도록 하세요.",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "Grand Court",
        description: "재활용 소재로 제작된 이 상단은 최소 50%의 재활용 소재를 포함하고 있습니다.",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "공원에서의 산책부터 친구들과의 주말 달리기까지, 이 아디다스 Ultraboost 1.0 신발은 당신을 편안하게 유지하도록 설계되었습니다. 아디다스 PRIMEKNIT 상단은 당신의 발을 부드럽게 감싸고, BOOST는 중간 밑창에서 첫 발부터 마지막 마일까지 쿠션을 제공합니다.",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "Cloud Foam 18 Retro",
        description: "바쁜 날을 위한 완벽한 선택입니다. 이 아디다스 스니커즈는 스타일리시하고 현대적이며, 스포츠 의류부터 청바지까지 모든 것과 쉽게 조화를 이룹니다. 가벼운 상단은 편안함을 위해 안감 처리되어 있으며, Cloudfoam 쿠션이 당신을 편안하게 움직이게 합니다.",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "이 아디다스 Mercedes - AMG Petronas Formula 1 Team 신발을 신고 어디를 가든지 레이싱 팬의 열정을 가져가세요. 스웨이드와 나일론의 혼합이 상단에 독특한 질감과 스타일을 부여하며, 내구성을 위해 제작되었습니다. 팀 색상의 3줄과 힐탭의 팀 로고가 공식적인 룩을 유지합니다.",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "Switch Run Cyan",
        description: "스타일과 방해받지 않는 세부 사항을 결합하여 아디다스의 최신 러닝 필수품은 당신이 느끼는 것만큼 잘 보이도록 설계되었습니다. 그렇게 하면 가장 중요한 것에 집중할 수 있습니다: 달리는 것을 즐기는 것입니다.",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "Balenciaga는 소비자가 위에 언급된 관리 및 취급 지침을 따르지 않거나 부적절하게 사용한 경우 어떠한 책임도 지지 않습니다. 추가 정보나 도움이 필요하면 Balenciaga 고객 서비스에 문의하십시오.",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "제품 22",
        isSpecial: true,
        description: "배송일로부터 30일 이내 무료 반품 및 교환. 다른 사이즈나 색상으로 교환할 수 있습니다. 제품에 대한 예외가 적용됩니다. 자세한 내용은 여기를 참조하십시오.",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "2025년 봄-여름 컬렉션에서 이 구찌 cub3d 스니커즈는 혁신적인 소재와 구조를 결합합니다. 상단은 Demetra와 메쉬의 혼합으로 되어 있으며, 고주파 기술로 만들어진 세부 사항이 특징이며, 밑창은 EVA 충전 내부와 TPU 외부를 결합하여 3D 인터로킹 G 패턴으로 완성됩니다.",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca Mens 6253BA",
        description: "충격을 줄이기 위한 강력한 서스펜션. 유니바디 서스펜션 밸런스 패치. 뛰어난 전진 모멘텀과 확실한 그립으로 마모에 대해 걱정할 필요가 없습니다.",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "가볍고 통기성이 좋은 이 남성용 러닝화는 내구성 있는 소재와 쉽게 착용할 수 있는 레이스업 기술로 설계되어 조깅, 걷기 및 스포츠에 적합합니다. 통기성 있는 상단 소재와 가벼운 Phylon 아웃솔이 러닝 중 편안함을 보장합니다.",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE MENS",
        description: "더 많은 쿠셔닝과 편안함을 제공하는 메모리 폼 인솔.",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "쉽게 조합할 수 있는 - 이 남성 신발은 클래식한 색상 조합 디자인으로, 옷과 쉽게 조화를 이룹니다. 청바지, 캐주얼 바지, 크롭 바지, 반바지와 함께 신을 수 있습니다. 모든 경우에 적합합니다.",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Mens 28",
        description: "편안함: 유연한 더비 구조는 편안하게 움직일 수 있는 자유를 제공합니다. 편안함과 충격 흡수를 위한 가벼운 쿠션 폼 인솔.",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "구찌 제품은 신중하게 선택된 소재로 제작됩니다. 제품의 수명을 늘리기 위해 주의 깊게 취급하십시오. 직사광선, 열, 비로부터 보호하십시오. 젖은 경우 즉시 부드러운 천으로 말리십시오.",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "2025년 봄-여름 컬렉션에서 이 구찌 cub3d 스니커즈는 혁신적인 소재와 구조를 결합합니다. 상단은 Demetra와 메쉬의 혼합으로 되어 있으며, 고주파 기술로 만들어진 세부 사항이 특징이며, 밑창은 EVA 충전 내부와 TPU 외부를 결합하여 3D 인터로킹 G 패턴으로 완성됩니다.",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };

  export const translationsItalian = {
    meta:{
      available: "Disponibile",
      sold: 'venduto',
    },
    products: [
      {
        name: "Nike Dunk Low Retro",
        description: "Creato per il parquet ma portato per le strade, il Nike Dunk Low Retro torna con sovrapposizioni nitide e colori originali della squadra. Questo icona del basket porta l'atmosfera degli anni '80 con una tomaia in pelle premium che appare bella e si indossa ancora meglio. Le tecnologie moderne delle calzature aiutano a portare comfort nel 21° secolo.",
        price: {
          amount: 8295,
          currency: "INR"
        },
        image: img1,
        inventory: {
          available: 100,
          sold: 10
        }
      },
      {
        name: "Nike Dunk Low Retro SE",
        description: "Un classico su cui puoi sempre contare. Il Dunk Low Retro combina un look monocromatico con materiali premium e un'imbottitura morbida per un comfort che cambia le regole del gioco. Le possibilità sono infinite: come indosserai i tuoi Dunk?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img2,
        inventory: {
          available: 200,
          sold: 20
        }
      },
      {
        name: "Nike Dunk Low Retro SE S2",
        description: "Un classico su cui puoi sempre contare. Il Dunk Low Retro combina un look monocromatico con materiali premium e un'imbottitura morbida per un comfort che cambia le regole del gioco. Le possibilità sono infinite: come indosserai i tuoi Dunk?",
        price: {
          amount: 10795,
          currency: "INR"
        },
        image: img3,
        inventory: {
          available: 150,
          sold: 15
        }
      },
      {
        name: "Nike Dunk Low SE A#",
        description: "Estremamente versatile, sorprendentemente pulito e molto classico. Il Dunk Low combina scamosciato e pelle per un'eccellente finitura. Viene fornito con un colletto imbottito, ammortizzazione leggera e suola in gomma. Allaccia i lacci e porta con te le vibrazioni della spiaggia.",
        price: {
          amount: 11899,
          currency: "INR"
        },
        image: img4,
        inventory: {
          available: 80,
          sold: 5
        }
      },
      {
        name: "Nike SB Dunk Low Pro",
        description: "L'icona del basket degli anni '80 torna con dettagli classici e un tocco nostalgico. Riportando lo stile vintage per le strade, il suo colletto basso imbottito ti consente di goderti il tuo gioco ovunque.",
        price: {
          amount: 5999,
          currency: "USD"
        },
        image: img5,
        inventory: {
          available: 60,
          sold: 2
        }
      },
      {
        name: "Nike Dunk Low",
        isSpecial: true,
        description: "L'icona degli anni '80 torna con dettagli classici e un tocco nostalgico. Riportando lo stile vintage per le strade, il suo colletto imbottito ti consente di goderti il tuo gioco ovunque.",
        price: {
          amount: 6999,
          currency: "INR"
        },
        image: img6,
        inventory: {
          available: 90,
          sold: 8
        }
      },
      {
        name: "Nike Dunk Low 34",
        description: "Riconoscendo le radici del Dunk come sneaker universitaria di punta, il pacchetto Be True To Your School è ispirato alla campagna pubblicitaria originale. I colori rappresentano le migliori università, mentre la pelle pulita ha la lucentezza perfetta per garantire una vittoria sicura. Indossa le scarpe e mostra lo spirito universitario. Sei pronto?",
        price: {
          amount: 7999,
          currency: "INR"
        },
        image: img7,
        inventory: {
          available: 110,
          sold: 12
        }
      },
      {
        name: "Nike Hilander Pro Uomo",
        description: "Un classico su cui puoi sempre contare. Questo design a blocchi di colore combina pelle e scamosciato con un'imbottitura morbida per un comfort che cambia le regole del gioco. Le possibilità sono infinite: come indosserai i tuoi Dunk?",
        price: {
          amount: 8999,
          currency: "INR"
        },
        image: img8,
        inventory: {
          available: 70,
          sold: 3
        }
      },
      {
        name: "Nike Retro Premium 1980",
        description: "Un classico su cui puoi sempre contare. Questa versione premium del Dunk Low combina materiali misti con una tomaia completamente nera per un look facile da indossare e comfort che dura. Le possibilità sono infinite: come indosserai i tuoi Dunk?",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img9,
        inventory: {
          available: 50,
          sold: 1
        }
      },
      {
        name: "Nike Jordans Edizione Limitata",
        description: "Un classico su cui puoi sempre contare. Il Dunk Low combina il suo blocco di colori iconico con materiali premium e un'imbottitura morbida per un comfort che cambia le regole del gioco. Le possibilità sono infinite: come indosserai i tuoi Dunk?",
        price: {
          amount: 10999,
          currency: "INR"
        },
        image: img10,
        inventory: {
          available: 40,
          sold: 0
        }
      },
      {
        name: "Samba OG",
        description: "Nato sul campo, il Samba è un'icona senza tempo dello stile urbano. Questa silhouette rimane fedele al suo patrimonio con una tomaia in pelle morbida a profilo basso, sovrapposizioni in scamosciato e una suola in gomma, rendendola un elemento essenziale nel guardaroba di chiunque - sia sul campo che fuori.",
        price: {
          amount: 11999,
          currency: "INR"
        },
        image: img11,
        inventory: {
          available: 30,
          sold: 1
        }
      },
      {
        name: "Fair Run 4",
        description: "Scarpe per il tuo divertimento. Queste scarpe con il sistema Torsion di adidas hanno molta personalità. La tomaia liscia offre comfort e flessibilità, mentre la fodera in tessuto e la suola in gomma offrono la combinazione perfetta di ammortizzazione e stabilità. Sii audace con queste scarpe da ginnastica che attirano l'attenzione.",
        price: {
          amount: 12999,
          currency: "INR"
        },
        image: img12,
        inventory: {
          available: 20,
          sold: 0
        }
      },
      {
        name: "Vent Shoot '96",
        description: "Questo prodotto è realizzato al 100% in materiali riciclati. Riutilizzando materiali già creati, aiutiamo a ridurre i rifiuti e la dipendenza da risorse limitate, riducendo l'impronta di carbonio dei prodotti che produciamo.",
        price: {
          amount: 799,
          currency: "INR"
        },
        image: img13,
        inventory: {
          available: 10,
          sold: 2
        }
      },
      {
        name: "MPM 78",
        description: "Scarpe per il tuo divertimento. Queste scarpe con il sistema Torsion di adidas hanno molta personalità. La tomaia liscia offre comfort e flessibilità, mentre la fodera in tessuto e la suola in gomma offrono la combinazione perfetta di ammortizzazione e stabilità. Sii audace con queste scarpe da ginnastica che attirano l'attenzione.",
        price: {
          amount: 4499,
          currency: "INR"
        },
        image: img14,
        inventory: {
          available: 5,
          sold: 0
        }
      },
      {
        name: "Asturned Run",
        description: "Mantieni la pulizia - non importa quanto ami il nostro prodotto, non usare parole che non useresti con tua nonna. Concentrati sul prodotto - se hai un problema non correlato al prodotto stesso (ad esempio, tempi di consegna, prezzo), per favore contatta il nostro team di assistenza clienti affinché possano aiutarti.",
        price: {
          amount: 4040,
          currency: "INR"
        },
        image: img15,
        inventory: {
          available: 15,
          sold: 3
        }
      },
      {
        name: "Grand Court",
        description: "Realizzato con una serie di materiali riciclati, questa tomaia contiene almeno il 50% di contenuto riciclato.",
        price: {
          amount: 16999,
          currency: "INR"
        },
        image: img16,
        inventory: {
          available: 25,
          sold: 4
        }
      },
      {
        name: "ULTRA BOOST 1.0",
        description: "Dalla passeggiata nel parco alla corsa del fine settimana con gli amici, queste scarpe adidas Ultraboost 1.0 sono progettate per mantenerti comodo. La tomaia in adidas PRIMEKNIT avvolge delicatamente i tuoi piedi, mentre il BOOST nella suola intermedia fornisce ammortizzazione dal primo passo all'ultima miglio.",
        price: {
          amount: 9999,
          currency: "INR"
        },
        image: img17,
        inventory: {
          available: 35,
          sold: 5
        }
      },
      {
        name: "Cloud Foam 18 Retro",
        description: "La tua scelta ideale per le giornate impegnate. Queste scarpe adidas sono eleganti e moderne, si abbinano facilmente a qualsiasi cosa, dall'abbigliamento sportivo ai jeans. La tomaia leggera è foderata per il comfort, mentre l'ammortizzazione Cloudfoam ti aiuta a muoverti comodamente.",
        price: {
          amount: 5555,
          currency: "INR"
        },
        image: img18,
        inventory: {
          available: 45,
          sold: 6
        }
      },
      {
        name: "DECODE ME",
        description: "Indossa queste scarpe della Mercedes - AMG Petronas Formula 1 Team e porta la tua passione per le corse ovunque tu vada. La miscela di camoscio e nylon conferisce alla parte superiore una texture e uno stile unici, progettati per durare. Le 3 strisce sulla parte superiore nei colori della squadra e il logo della squadra sul tallone mantengono un aspetto ufficiale.",
        price: {
          amount: 6666,
          currency: "INR"
        },
        image: img19,
        inventory: {
          available: 55,
          sold: 7
        }
      },
      {
        name: "Switch Run Cyan",
        description: "Combinando stile con dettagli senza distrazioni, l'ultima linea di essenziali per la corsa di adidas ti farà apparire bene quanto ti senti. In questo modo, puoi concentrarti su ciò che è più importante: divertirti a correre.",
        price: {
          amount: 20999,
          currency: "INR"
        },
        image: img20,
        inventory: {
          available: 65,
          sold: 8
        }
      },
      {
        name: "Eazy Beleciaga",
        isSpecial: true,
        description: "Balenciaga non si assume alcuna responsabilità nel caso in cui il consumatore non segua le istruzioni di cura e gestione sopra menzionate o utilizzi in modo improprio. Per ulteriori informazioni o assistenza, contattare il servizio clienti Balenciaga.",
        price: {
          amount: 81999,
          currency: "INR"
        },
        image: img21,
        inventory: {
          available: 75,
          sold: 9
        }
      },
      {
        name: "Prodotto 22",
        isSpecial: true,
        description: "Resi e scambi gratuiti entro 30 giorni dalla data di consegna. Puoi scambiare il tuo prodotto solo con una taglia o un colore diverso. Si applicano eccezioni ai prodotti. Per ulteriori informazioni.",
        price: {
          amount: 92999,
          currency: "INR"
        },
        image: img22,
        inventory: {
          available: 85,
          sold: 10
        }
      },
      {
        name: "GUCCI B3D",
        description: "Nella collezione primavera-estate 2025, queste sneaker Gucci cub3d combinano materiali e strutture innovative. La tomaia è realizzata in una miscela di Demetra e rete, con dettagli creati utilizzando tecnologia ad alta frequenza, mentre la suola combina un interno riempito di EVA e TPU all'esterno, completato con un motivo G intrecciato in 3D.",
        price: {
          amount: 23999,
          currency: "INR"
        },
        image: img23,
        inventory: {
          available: 95,
          sold: 11
        }
      },
      {
        name: "Becca Mens 6253BA",
        description: "Ammortizzazione forte per ridurre l'impatto. Patch di sospensione unibody. Un forte impulso con un ottimo movimento in avanti e una presa sicura, non devi preoccuparti dell'usura.",
        price: {
          amount: 10000,
          currency: "INR"
        },
        image: img24,
        inventory: {
          available: 105,
          sold: 12
        }
      },
      {
        name: "Dominator C.10",
        description: "Leggeri e traspiranti, questi scarponi da corsa maschili sono progettati con materiali durevoli e una tecnologia di allacciatura facile da usare, rendendoli ideali per correre, camminare e praticare sport. Il materiale superiore traspirante e la suola leggera in Phylon garantiscono comfort durante la corsa.",
        price: {
          amount: 7990,
          currency: "INR"
        },
        image: img25,
        inventory: {
          available: 115,
          sold: 13
        }
      },
      {
        name: "CEMENTIVE MENS",
        description: "Sole in memory foam per maggiore ammortizzazione e comfort.",
        price: {
          amount: 8001,
          currency: "INR"
        },
        image: img26,
        inventory: {
          available: 125,
          sold: 14
        }
      },
      {
        name: "Red Chiesf Genune ATAG",
        description: "FACILE DA ABBINARE - Queste scarpe da uomo hanno un design classico di abbinamento dei colori, che si abbina facilmente ai vestiti. Puoi indossare queste scarpe con jeans, pantaloni casual, pantaloni cropped e pantaloni corti. Perfette per ogni occasione.",
        price: {
          amount: 2799,
          currency: "INR"
        },
        image: img27,
        inventory: {
          available: 135,
          sold: 15
        }
      },
      {
        name: "Criterian Mens 28",
        description: "Comfort: La costruzione flessibile del Derby ti offre la libertà di muoverti comodamente. Soletta leggera e imbottita per comfort e assorbimento degli urti.",
        price: {
          amount: 28966,
          currency: "INR"
        },
        image: img28,
        inventory: {
          available: 145,
          sold: 16
        }
      },
      {
        name: "Sneaker 6783",
        description: "I prodotti Gucci sono realizzati con materiali accuratamente selezionati. Si prega di trattarli con attenzione per prolungare la durata del prodotto. Proteggere dalla luce solare diretta, dal calore e dalla pioggia. Se si bagna, asciugare immediatamente con un panno morbido.",
        price: {
          amount: 45699,
          currency: "INR"
        },
        image: img29,
        inventory: {
          available: 155,
          sold: 17
        }
      },
      {
        name: "GUCCI 3DR CUB",
        description: "Nella collezione primavera-estate 2025, queste sneaker Gucci cub3d combinano materiali e strutture innovative. La tomaia è realizzata in una miscela di Demetra e rete, con dettagli creati utilizzando tecnologia ad alta frequenza, mentre la suola combina un interno riempito di EVA e TPU all'esterno, completato con un motivo G intrecciato in 3D.",
        price: {
          amount: 30999,
          currency: "INR"
        },
        image: img30,
        inventory: {
          available: 165,
          sold: 18
        }
      }
    ]
  };



