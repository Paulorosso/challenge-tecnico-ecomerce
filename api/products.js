const products = [
    {
        "sku": "CEL12345",
        "name": "Smartphone Samsung Galaxy S21",
        "description": "Smartphone de última generación con pantalla AMOLED de 6.2 pulgadas, 128GB de almacenamiento y cámara de 64MP.",
        "image": "/images/samsung_galaxy_s21.webp",
        "category": {
            "id": "cat1",
            "name": "Celulares"
        },
        "brand": "Samsung",
        "price": 3500,
        "stock": 3,
        "specifications": [
            {
                "name": "Marca",
                "value": "Samsung"
            },
            {
                "name": "Memoria",
                "value": "128GB"
            },
            {
                "name": "Peso",
                "value": "220g"
            }
        ]
    },
    {
        "sku": "LAP54321",
        "name": "Laptop HP Pavilion 15",
        "description": "Laptop con procesador Intel Core i7, 16GB RAM, 512GB SSD y pantalla de 15.6 pulgadas.",
        "image": "/images/hp-pavilon.webp",
        "category": {
            "id": "cat2",
            "name": "Laptops"
        },
        "brand": "HP",
        "price": 4500,
        "stock": 1,
        "specifications": [
            {
                "name": "Marca",
                "value": "HP"
            },
            {
                "name": "Procesador",
                "value": "Intel Core i7"
            },
            {
                "name": "Memoria RAM",
                "value": "16GB"
            }
        ]
    },
    {
        "sku": "TV67890",
        "name": "Televisor LG 55' 4K UHD",
        "description": "Televisor de 55 pulgadas con resolución 4K UHD, Smart TV y conectividad Wi-Fi.",
        "image": "/images/lg_tv_55.webp",
        "category": {
            "id": "cat3",
            "name": "Televisores"
        },
        "brand": "LG",
        "price": 2800,
        "stock": 10,
        "specifications": [
            {
                "name": "Marca",
                "value": "LG"
            },
            {
                "name": "Pantalla",
                "value": "55 pulgadas"
            },
            {
                "name": "Resolución",
                "value": "4K UHD"
            }
        ]
    },
    {
        "sku": "REF09876",
        "name": "Refrigeradora Samsung 320L No Frost",
        "description": "Refrigeradora con capacidad de 320 litros, tecnología No Frost y eficiencia energética A+.",
        "image": "/images/samsung_refrigeradora_320l.webp",
        "category": {
            "id": "cat4",
            "name": "Electrohogar"
        },
        "brand": "Samsung",
        "price": 2200,
        "stock": 0,
        "specifications": [
            {
                "name": "Marca",
                "value": "Samsung"
            },
            {
                "name": "Capacidad",
                "value": "320L"
            },
            {
                "name": "Tecnología",
                "value": "No Frost"
            }
        ]
    },
    {
        "sku": "MIC11223",
        "name": "Microondas LG Smart Inverter 42L",
        "description": "Microondas con tecnología Smart Inverter, capacidad de 42 litros y múltiples funciones de cocción.",
        "image": "/images/lg_microondas_42l.webp",
        "category": {
            "id": "cat4",
            "name": "Electrohogar"
        },
        "brand": "LG",
        "price": 600,
        "stock": 20,
        "specifications": [
            {
                "name": "Marca",
                "value": "LG"
            },
            {
                "name": "Capacidad",
                "value": "42L"
            },
            {
                "name": "Tecnología",
                "value": "Smart Inverter"
            }
        ]
    },
    {
        "sku": "CAM44556",
        "name": "Cámara Canon EOS Rebel T7i",
        "description": "Cámara réflex digital con sensor de 24.2MP, grabación de video Full HD y conectividad Wi-Fi.",
        "image": "/images/canon_eos_rebel_t7i.webp",
        "category": {
            "id": "cat5",
            "name": "Cámaras"
        },
        "brand": "Canon",
        "price": 3200,
        "stock": 12,
        "specifications": [
            {
                "name": "Marca",
                "value": "Canon"
            },
            {
                "name": "Sensor",
                "value": "24.2MP"
            },
            {
                "name": "Video",
                "value": "Full HD"
            }
        ]
    },
    {
        "sku": "AUD77889",
        "name": "Audífonos Sony WH-1000XM4",
        "description": "Audífonos inalámbricos con cancelación de ruido activa, hasta 30 horas de batería y control táctil.",
        "image": "/images/sony_wh1000xm4.webp",
        "category": {
            "id": "cat6",
            "name": "Audio"
        },
        "brand": "Sony",
        "price": 1200,
        "stock": 30,
        "specifications": [
            {
                "name": "Marca",
                "value": "Sony"
            },
            {
                "name": "Cancelación de Ruido",
                "value": "Activa"
            },
            {
                "name": "Batería",
                "value": "Hasta 30 horas"
            }
        ]
    },
    {
        "sku": "CON99001",
        "name": "Consola PlayStation 5",
        "description": "Consola de videojuegos de nueva generación con soporte para juegos en 4K y SSD de ultra alta velocidad.",
        "image": "/images/playstation_5.webp",
        "category": {
            "id": "cat7",
            "name": "Consolas"
        },
        "brand": "Sony",
        "price": 5000,
        "stock": 5,
        "specifications": [
            {
                "name": "Marca",
                "value": "Sony"
            },
            {
                "name": "Resolución",
                "value": "4K"
            },
            {
                "name": "Almacenamiento",
                "value": "SSD ultra rápido"
            }
        ]
    },
    {
        "sku": "BIC22334",
        "name": "Bicicleta Montañera Aro 29",
        "description": "Bicicleta de montaña con marco de aluminio, 21 velocidades y frenos de disco.",
        "image": "/images/bicicleta_montanera_aro29.webp",
        "category": {
            "id": "cat8",
            "name": "Deportes"
        },
        "brand": "Monark",
        "price": 1500,
        "stock": 18,
        "specifications": [
            {
                "name": "Marca",
                "value": "Monark"
            },
            {
                "name": "Tamaño de Aro",
                "value": "29"
            },
            {
                "name": "Velocidades",
                "value": "21"
            }
        ]
    },
    {
        "sku": "COL55667",
        "name": "Colchón Rosen King Size",
        "description": "Colchón King Size con tecnología de resortes Pocket y acolchado de alta densidad para mayor confort.",
        "image": "/images/colchon_rosen_king.webp",
        "category": {
            "id": "cat9",
            "name": "Hogar"
        },
        "brand": "Rosen",
        "price": 3500,
        "stock": 7,
        "specifications": [
            {
                "name": "Marca",
                "value": "Rosen"
            },
            {
                "name": "Tamaño",
                "value": "King Size"
            },
            {
                "name": "Tecnología",
                "value": "Resortes Pocket"
            }
        ]
    },
    {
        "sku": "CEL98765",
        "name": "Celular Xiaomi Redmi Note 13 Pro 6.67” 8GB 256GB",
        "description": "Smartphone con pantalla AMOLED de 6.81 pulgadas, 128GB de almacenamiento, cámara de 108MP y procesador Snapdragon 888.",
        "image": "/images/xiaomi_note13.webp",
        "category": {
            "id": "cat1",
            "name": "Celulares"
        },
        "brand": "Xiaomi",
        "price": 899,
        "stock": 5,
        "specifications": [
            {
                "name": "Marca",
                "value": "Xiaomi"
            },
            {
                "name": "Memoria",
                "value": "128GB"
            },
            {
                "name": "Cámara",
                "value": "200MP"
            }
        ]
    },
    {
        "sku": "LAP87654",
        "name": "Laptop Dell XPS 13",
        "description": "Laptop con procesador Intel Core i7, 16GB RAM, 1TB SSD y pantalla de 13.3 pulgadas Full HD.",
        "image": "/images/dell_xps13.webp",
        "category": {
            "id": "cat2",
            "name": "Laptops"
        },
        "brand": "Dell",
        "price": 3800,
        "stock": 2,
        "specifications": [
            {
                "name": "Marca",
                "value": "Dell"
            },
            {
                "name": "Procesador",
                "value": "Intel Core i7"
            },
            {
                "name": "Memoria RAM",
                "value": "16GB"
            }
        ]
    },
    {
        "sku": "TV34567",
        "name": "Televisor Samsung 50' 4K UHD",
        "description": "Televisor de 50 pulgadas con resolución 4K UHD, Smart TV y soporte para HDR.",
        "image": "/images/samsung_tv_50.webp",
        "category": {
            "id": "cat3",
            "name": "Televisores"
        },
        "brand": "Samsung",
        "price": 2500,
        "stock": 8,
        "specifications": [
            {
                "name": "Marca",
                "value": "Samsung"
            },
            {
                "name": "Pantalla",
                "value": "50 pulgadas"
            },
            {
                "name": "Resolución",
                "value": "4K UHD"
            }
        ]
    },
    {
        "sku": "REF11223",
        "name": "Refrigeradora LG 341L No Frost",
        "description": "Refrigeradora con capacidad de 341 litros, tecnología No Frost y clasificación energética A+.",
        "image": "/images/lg_refrigeradora_341l.webp",
        "category": {
            "id": "cat4",
            "name": "Electrohogar"
        },
        "brand": "LG",
        "price": 1900,
        "stock": 10,
        "specifications": [
            {
                "name": "Marca",
                "value": "LG"
            },
            {
                "name": "Capacidad",
                "value": "341L"
            },
            {
                "name": "Tecnología",
                "value": "No Frost"
            }
        ]
    },
    {
        "sku": "CAM22334",
        "name": "Cámara Nikon D3500",
        "description": "Cámara réflex digital con sensor de 24.2MP, video Full HD y conectividad Bluetooth.",
        "image": "/images/nikon_d3500.webp",
        "category": {
            "id": "cat5",
            "name": "Cámaras"
        },
        "brand": "Nikon",
        "price": 2700,
        "stock": 15,
        "specifications": [
            {
                "name": "Marca",
                "value": "Nikon"
            },
            {
                "name": "Sensor",
                "value": "24.2MP"
            },
            {
                "name": "Video",
                "value": "Full HD"
            }
        ]
    },
    {
        "sku": "BIC99887",
        "name": "Bicicleta Monark City Aro 26",
        "description": "Bicicleta Monark City con marco de acero, 18 velocidades y frenos de cantilever.",
        "image": "/images/bicicleta_city_aro26.webp",
        "category": {
            "id": "cat8",
            "name": "Deportes"
        },
        "brand": "Monark",
        "price": 1200,
        "stock": 22,
        "specifications": [
            {
                "name": "Marca",
                "value": "Monark"
            },
            {
                "name": "Tamaño de Aro",
                "value": "26"
            },
            {
                "name": "Velocidades",
                "value": "18"
            }
        ]
    }
];

export default function handler(req, res) {
    const { sku } = req.query;

    if (sku) {
        const filteredProducts = products.filter(product => product.sku === sku);
        if (filteredProducts.length === 0) {
            res.status(404).json({ error: 'Producto no encontrado'});
        } else {
            res.status(200).json(filteredProducts);
        }
    } else {
        res.status(200).json(products);
    }
}