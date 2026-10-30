// Catálogo NEIMCSA - carga ampliada
const WHATSAPP = "51967365219";

const productos = [
  {
    "categoria": "Seguridad industrial",
    "marca": "MSA",
    "nombre": "Super-V Tipo II",
    "sku": "607225",
    "descripcion": "Casco de seguridad MSA Super-V Tipo II.",
    "imagen": "imagenes/epp/msa-super-v-tipo-ii.png"
  },
  {
    "categoria": "Seguridad industrial",
    "marca": "MSA",
    "nombre": "V-Gard Tipo Sombrero",
    "sku": "600865",
    "descripcion": "Casco de seguridad MSA V-Gard Tipo Sombrero.",
    "imagen": "imagenes/epp/msa-v-gard-tipo-sombrero.png"
  },
  {
    "categoria": "Seguridad industrial",
    "marca": "MSA",
    "nombre": "V-Gard Tipo Jockey",
    "sku": "600411",
    "descripcion": "Casco de seguridad MSA V-Gard Tipo Jockey.",
    "imagen": "imagenes/epp/msa-v-gard-tipo-jockey.png"
  },
  {
    "categoria": "Seguridad industrial",
    "marca": "MSA",
    "nombre": "V-Gard Tipo Sombrero con Portalámpara",
    "sku": "600920",
    "descripcion": "Casco MSA V-Gard Tipo Sombrero con Portalámpara.",
    "imagen": "imagenes/epp/msa-v-gard-sombrero-portalamp.png"
  },
  {
    "categoria": "Seguridad industrial",
    "marca": "MSA",
    "nombre": "V-Gard Tipo Jockey con Portalámpara",
    "sku": "601302",
    "descripcion": "Casco MSA V-Gard Tipo Jockey con Portalámpara.",
    "imagen": "imagenes/epp/msa-v-gard-jockey-portalamp.png"
  },
  {
    "categoria": "Seguridad industrial",
    "marca": "MSA",
    "nombre": "Jockey para Temperaturas Elevadas",
    "sku": "601570",
    "descripcion": "Casco MSA Jockey para Temperaturas Elevadas.",
    "imagen": "imagenes/epp/msa-jockey-temperaturas-elevadas.png"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Tacho Killa #35 con tapa mejorado",
    "sku": "PTASETAC0001",
    "descripcion": "35 L. Tapa plana.",
    "imagen": "imagenes/limpieza/sumac-tacho-killa-35.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Tacho Saywa #80 mejorado con tapa oso",
    "sku": "PTASETAC0004",
    "descripcion": "60 L. Abertura en tapa.",
    "imagen": "imagenes/limpieza/sumac-tacho-saywa-60-oso.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Tacho Wayqui #150 con tapa plana mejorado",
    "sku": "PTASETAC0002",
    "descripcion": "135 L. Tapa plana.",
    "imagen": "imagenes/limpieza/sumac-tacho-wayqui-135-plana.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Tacho Wayqui #150 mejorado con tapa oso",
    "sku": "PTASETAC0007",
    "descripcion": "135 L. Abertura en tapa.",
    "imagen": "imagenes/limpieza/sumac-tacho-wayqui-135-oso.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Papelera Chuspa #16 con tapa vaivén",
    "sku": "PTASEPAP0014",
    "descripcion": "16 L. Bicolor / color entero.",
    "imagen": "imagenes/limpieza/sumac-papelera-chuspa-16.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Papelera Chuspa #9 con tapa vaivén",
    "sku": "PTASEPAP0002-5",
    "descripcion": "8.5 L. Bicolor / color entero.",
    "imagen": "imagenes/limpieza/sumac-papelera-chuspa-9.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Recogedor Pallay con tapa vaivén",
    "sku": "PTASEREC0001",
    "descripcion": "Con colgador y borde anti-pelusa.",
    "imagen": "imagenes/limpieza/sumac-recogedor-pallay.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Papelera Rumi #35 con tapa vaivén",
    "sku": "PTASEPAP0003-01",
    "descripcion": "35 L. Ecológica. Tapa vaivén.",
    "imagen": "imagenes/limpieza/sumac-papelera-rumi-35.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Papelera Sami #90 con tapa vaivén mejorado",
    "sku": "PTASEPAP0009",
    "descripcion": "60 L. Tapa vaivén.",
    "imagen": "imagenes/limpieza/sumac-papelera-sami-60.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Papelera Sami #90 con tapa vaivén, logo ecológico",
    "sku": "PTECOPAP0001",
    "descripcion": "60 L. Tapa vaivén.",
    "imagen": "imagenes/limpieza/sumac-papelera-sami-60-eco.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Mesa Wiñay (Para Siempre)",
    "sku": "PTMESMES0001",
    "descripcion": "Desarmable y resistente. 70.5 × 85 × 70 cm.",
    "imagen": "imagenes/limpieza/sumac-mesa-winay.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Mesa Educativa Niño",
    "sku": "PTMESMES0002",
    "descripcion": "Desarmable y resistente. 49.7 × 74.4 × 60 cm.",
    "imagen": "imagenes/limpieza/sumac-mesa-educativa-nino.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Mesa Educativa Niño con Cajón",
    "sku": "PTMESMES0003",
    "descripcion": "Desarmable y resistente. 49.7 × 74.4 × 60 cm.",
    "imagen": "imagenes/limpieza/sumac-mesa-educativa-con-cajon.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "SUMAC PLAST",
    "nombre": "Banco Multicolor Qella - Mejorado",
    "sku": "PTMUEBAN0001",
    "descripcion": "27.8 × 27.8 × 23 cm.",
    "imagen": "imagenes/limpieza/sumac-banco-multicolor-qella.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Escoba Hogareña",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Escoba Hude para limpieza del hogar.",
    "imagen": "imagenes/limpieza/hude-escoba-hogarena.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Escoba Doña Flor",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Escoba con capucha, material resistente y suaves fibras.",
    "imagen": "imagenes/limpieza/hude-escoba-dona-flor.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Escoba Exteriores",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Fibra gruesa sin desplumar, para superficies exteriores.",
    "imagen": "imagenes/limpieza/hude-escoba-exteriores.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Escoballín Limpiatecho",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Cerdas en forma de erizo y mango telescópico hasta 1.80 m.",
    "imagen": "imagenes/limpieza/hude-escoballin-limpiatecho.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Lavatodo",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Escoba para lavado y limpieza de superficies.",
    "imagen": "imagenes/limpieza/hude-lavatodo.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Recogedor",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Recogedor Hude super resistente.",
    "imagen": "imagenes/limpieza/hude-recogedor.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Recogedor Flip",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Diseño práctico y apilable.",
    "imagen": "imagenes/limpieza/hude-recogedor-flip.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Recogedor Mega Flip",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Recogedor con diseño reforzado.",
    "imagen": "imagenes/limpieza/hude-recogedor-mega-flip.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Desatorador Zopapo Deluxe",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Desatorador para mayor succión.",
    "imagen": "imagenes/limpieza/hude-zopapo-deluxe.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Desatorador Zopapo",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Desatorador compacto y práctico.",
    "imagen": "imagenes/limpieza/hude-zopapo.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Hude",
    "nombre": "Desatorador Mini Zopapo",
    "sku": "No indicado en la ficha consultada",
    "descripcion": "Desatorador de ducha y cocina.",
    "imagen": "imagenes/limpieza/hude-mini-zopapo.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Basa Hogar",
    "nombre": "Hisopo Sanitario",
    "sku": "8002",
    "descripcion": "37.5 × 16.3 × 12.0 cm.",
    "imagen": "imagenes/limpieza/basa-hisopo-sanitario.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Basa Hogar",
    "nombre": "Caja Organizadora Utilísima Alta 12 L",
    "sku": "8225",
    "descripcion": "25.0 × 22.8 × 33.7 cm.",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-alta-12l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Basa Hogar",
    "nombre": "Caja Organizadora Utilísima Alta 19 L",
    "sku": "8022",
    "descripcion": "28.1 × 24.5 × 40.2 cm.",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-alta-19l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Basa Hogar",
    "nombre": "Caja Organizadora Utilísima Baja 5 L",
    "sku": "8224",
    "descripcion": "25.0 × 10.9 × 33.7 cm.",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-baja-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Basa Hogar",
    "nombre": "Caja Organizadora Utilísima Baja 8.5 L",
    "sku": "8021",
    "descripcion": "28.1 × 12.5 × 40.0 cm.",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-baja-8-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "Basa Hogar",
    "nombre": "Balde Portamopa 16.5 L",
    "sku": "7919",
    "descripcion": "40.0 × 31.0 × 32.5 cm.",
    "imagen": "imagenes/limpieza/basa-balde-portamopa-16-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática #1",
    "sku": "1201",
    "descripcion": "10.4 L",
    "imagen": "imagenes/limpieza/basa-papelera-automatica-1-10-4l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática #2",
    "sku": "0097",
    "descripcion": "32 L",
    "imagen": "imagenes/limpieza/basa-papelera-automatica-2-32l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Redonda Vaivén 8 L",
    "sku": "7685",
    "descripcion": "8 L",
    "imagen": "imagenes/limpieza/basa-papelera-redonda-vaiven-8l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Redonda Vaivén 12 L",
    "sku": "7686",
    "descripcion": "12 L",
    "imagen": "imagenes/limpieza/basa-papelera-redonda-vaiven-12l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Redonda Vaivén 14 L",
    "sku": "8695",
    "descripcion": "14 L",
    "imagen": "imagenes/limpieza/basa-papelera-redonda-vaiven-14l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Redonda Vaivén 18 L",
    "sku": "8696",
    "descripcion": "18 L",
    "imagen": "imagenes/limpieza/basa-papelera-redonda-vaiven-18l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Clásica 600",
    "sku": "8289",
    "descripcion": "6 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-clasica-6l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Clásica 900",
    "sku": "8290",
    "descripcion": "9 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-clasica-9l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Clásica 1400",
    "sku": "8342",
    "descripcion": "14 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-clasica-14l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Clásica 2000",
    "sku": "8343",
    "descripcion": "20 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-clasica-20l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Clásica 2800",
    "sku": "8344",
    "descripcion": "28 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-clasica-28l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Clásica 4000",
    "sku": "8345",
    "descripcion": "40 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-clasica-40l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática Ahorra Espacio Homy 10 L",
    "sku": "9447",
    "descripcion": "10 L",
    "imagen": "imagenes/limpieza/basa-papelera-homy-10l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática Ahorra Espacio Homy 15 L",
    "sku": "9448",
    "descripcion": "15 L",
    "imagen": "imagenes/limpieza/basa-papelera-homy-15l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática Ahorra Espacio Homy 25 L",
    "sku": "9449",
    "descripcion": "25 L",
    "imagen": "imagenes/limpieza/basa-papelera-homy-25l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática Ahorra Espacio Homy Slim 10 L",
    "sku": "10109",
    "descripcion": "10 L",
    "imagen": "imagenes/limpieza/basa-papelera-homy-slim-10l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática Ahorra Espacio Homy Slim 15 L",
    "sku": "10110",
    "descripcion": "15 L",
    "imagen": "imagenes/limpieza/basa-papelera-homy-slim-15l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Automática Ahorra Espacio Homy Slim 25 L",
    "sku": "10111",
    "descripcion": "25 L",
    "imagen": "imagenes/limpieza/basa-papelera-homy-slim-25l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Elite 10.5 L",
    "sku": "10532",
    "descripcion": "10.5 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-elite-10-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Vaivén Elite 22 L",
    "sku": "10533",
    "descripcion": "22 L",
    "imagen": "imagenes/limpieza/basa-papelera-vaiven-elite-22l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Bodeguita Vaivén Ahorra Espacio 18 L",
    "sku": "8045",
    "descripcion": "18 L",
    "imagen": "imagenes/limpieza/basa-papelera-bodeguita-vaiven-ahorra-18l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Bodeguita Vaivén Ahorra Espacio 25 L",
    "sku": "8046",
    "descripcion": "25 L",
    "imagen": "imagenes/limpieza/basa-papelera-bodeguita-vaiven-ahorra-25l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Bodeguita Vaivén Ahorra Espacio 35 L",
    "sku": "8146",
    "descripcion": "35 L",
    "imagen": "imagenes/limpieza/basa-papelera-bodeguita-vaiven-ahorra-35l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Bodeguita Vaivén 35 L",
    "sku": "7624",
    "descripcion": "35 L",
    "imagen": "imagenes/limpieza/basa-papelera-bodeguita-vaiven-35l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Bodeguita Vaivén 50 L",
    "sku": "7751",
    "descripcion": "50 L",
    "imagen": "imagenes/limpieza/basa-papelera-bodeguita-vaiven-50l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Bodeguita Vaivén 75 L",
    "sku": "9279",
    "descripcion": "75 L",
    "imagen": "imagenes/limpieza/basa-papelera-bodeguita-vaiven-75l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Torito Vaivén 60 L",
    "sku": "8164",
    "descripcion": "60 L",
    "imagen": "imagenes/limpieza/basa-papelera-torito-vaiven-60l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Torito Vaivén 80 L",
    "sku": "8084",
    "descripcion": "80 L",
    "imagen": "imagenes/limpieza/basa-papelera-torito-vaiven-80l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Rino Vaivén 100 L",
    "sku": "7960",
    "descripcion": "100 L",
    "imagen": "imagenes/limpieza/basa-papelera-rino-vaiven-100l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Papelera Rino Vaivén 140 L",
    "sku": "7962",
    "descripcion": "140 L",
    "imagen": "imagenes/limpieza/basa-papelera-rino-vaiven-140l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Torito 60 L",
    "sku": "8168",
    "descripcion": "60 L",
    "imagen": "imagenes/limpieza/basa-tacho-torito-60l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Torito 80 L",
    "sku": "8113",
    "descripcion": "80 L",
    "imagen": "imagenes/limpieza/basa-tacho-torito-80l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Torito con Ruedas 80 L",
    "sku": "8545",
    "descripcion": "80 L",
    "imagen": "imagenes/limpieza/basa-tacho-torito-ruedas-80l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Torito con Ruedas 110 L",
    "sku": "8546",
    "descripcion": "110 L",
    "imagen": "imagenes/limpieza/basa-tacho-torito-ruedas-110l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Super Rino con Ruedas 100 L",
    "sku": "10414",
    "descripcion": "100 L",
    "imagen": "imagenes/limpieza/basa-tacho-super-rino-ruedas-100l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Super Rino con Ruedas 180 L",
    "sku": "10463",
    "descripcion": "180 L",
    "imagen": "imagenes/limpieza/basa-tacho-super-rino-ruedas-180l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Automático Hunter Pro 30 L",
    "sku": "9894",
    "descripcion": "30 L",
    "imagen": "imagenes/limpieza/basa-tacho-hunter-pro-30l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Automático Hunter Pro 50 L",
    "sku": "9895",
    "descripcion": "50 L",
    "imagen": "imagenes/limpieza/basa-tacho-hunter-pro-50l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Automático Hunter Pro 80 L",
    "sku": "9896",
    "descripcion": "80 L",
    "imagen": "imagenes/limpieza/basa-tacho-hunter-pro-80l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Automático Hunter Pro SF 30 L",
    "sku": "10136",
    "descripcion": "30 L",
    "imagen": "imagenes/limpieza/basa-tacho-hunter-pro-sf-30l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Automático Hunter Pro SF 50 L",
    "sku": "10137",
    "descripcion": "50 L",
    "imagen": "imagenes/limpieza/basa-tacho-hunter-pro-sf-50l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Automático Hunter Pro SF 80 L",
    "sku": "10138",
    "descripcion": "80 L",
    "imagen": "imagenes/limpieza/basa-tacho-hunter-pro-sf-80l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Gorila con Ruedas #120 Automático",
    "sku": "8720",
    "descripcion": "120 L",
    "imagen": "imagenes/limpieza/basa-tacho-gorila-ruedas-120-automatico.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Gorila con Ruedas #240 Automático",
    "sku": "8829",
    "descripcion": "240 L",
    "imagen": "imagenes/limpieza/basa-tacho-gorila-ruedas-240-automatico.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Gorila con Ruedas #120",
    "sku": "8559",
    "descripcion": "120 L",
    "imagen": "imagenes/limpieza/basa-tacho-gorila-ruedas-120.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Gorila con Ruedas #240",
    "sku": "8633",
    "descripcion": "240 L",
    "imagen": "imagenes/limpieza/basa-tacho-gorila-ruedas-240.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho City 60 L",
    "sku": "9982",
    "descripcion": "60 L",
    "imagen": "imagenes/limpieza/basa-tacho-city-60l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho City 90 L",
    "sku": "9983",
    "descripcion": "90 L",
    "imagen": "imagenes/limpieza/basa-tacho-city-90l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tacho Mega City 136 L",
    "sku": "9984",
    "descripcion": "136 L",
    "imagen": "imagenes/limpieza/basa-tacho-mega-city-136l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Alta 12 L",
    "sku": "8225",
    "descripcion": "12 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-alta-12l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Alta 19 L",
    "sku": "8022",
    "descripcion": "19 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-alta-19l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Alta 34 L",
    "sku": "8104",
    "descripcion": "34 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-alta-34l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Alta 55 L",
    "sku": "8485",
    "descripcion": "55 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-alta-55l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Baja 5 L",
    "sku": "8224",
    "descripcion": "5 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-baja-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Baja 8.5 L",
    "sku": "8021",
    "descripcion": "8.5 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-baja-8-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Baja 17 L",
    "sku": "8105",
    "descripcion": "17 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-baja-17l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Baja 28 L",
    "sku": "8483",
    "descripcion": "28 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-baja-28l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Domo 17 L",
    "sku": "8717",
    "descripcion": "17 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-domo-17l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Caja Organizadora Utilísima Domo 34 L",
    "sku": "8716",
    "descripcion": "34 L",
    "imagen": "imagenes/limpieza/basa-caja-utilisima-domo-34l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Set de Limpieza Kubox 16.5 L",
    "sku": "7920",
    "descripcion": "16.5 L",
    "imagen": "imagenes/limpieza/basa-balde-set-limpieza-kubox-16-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Set de Limpieza Esquiz 18 L",
    "sku": "8654",
    "descripcion": "18 L",
    "imagen": "imagenes/limpieza/basa-balde-set-limpieza-esquiz-18l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Esquiz 18 L",
    "sku": "8757",
    "descripcion": "18 L",
    "imagen": "imagenes/limpieza/basa-balde-esquiz-18l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Portamopa 16.5 L",
    "sku": "7919",
    "descripcion": "16.5 L",
    "imagen": "imagenes/limpieza/basa-balde-portamopa-16-5l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Joy 13 L",
    "sku": "0090",
    "descripcion": "13 L",
    "imagen": "imagenes/limpieza/basa-balde-joy-13l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Super Joy 17 L",
    "sku": "5086",
    "descripcion": "17 L",
    "imagen": "imagenes/limpieza/basa-balde-super-joy-17l.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Industrial 20 L con Asa Metálica",
    "sku": "8921",
    "descripcion": "20 L",
    "imagen": "imagenes/limpieza/basa-balde-industrial-20l-asa-metalica.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Industrial 20 L con Asa Plástica",
    "sku": "8904",
    "descripcion": "20 L",
    "imagen": "imagenes/limpieza/basa-balde-industrial-20l-asa-plastica.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Balde Industrial Cuadrado 16 L Asa Plástica",
    "sku": "8640",
    "descripcion": "16 L",
    "imagen": "imagenes/limpieza/basa-balde-industrial-cuadrado-16l-asa-plastica.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tapers GYG Cuadrados – varios tamaños",
    "sku": "8072 / 7091 / 7092",
    "descripcion": "430 mL, 900 mL y 1.25 L.",
    "imagen": "imagenes/limpieza/basa-tapers-gyg-cuadrados.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tapers GYG Cuadrados con Rejilla",
    "sku": "8110",
    "descripcion": "1.6 L.",
    "imagen": "imagenes/limpieza/basa-tapers-gyg-cuadrados-con-rejilla.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tapers GYG Rectangulares – varios tamaños",
    "sku": "7532 / 7470 / 7471 / 7093 / 7094 / 7097 / 8270 / 8111 / 7701",
    "descripcion": "180 mL, 260 mL, 400 mL, 500 mL, 800 mL, 1.1 L, 1.5 L, 2.3 L y 8 L.",
    "imagen": "imagenes/limpieza/basa-tapers-gyg-rectangulares.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tapers Tritex – varios modelos",
    "sku": "8802 / 8804 / 8806 / 8807",
    "descripcion": "Modelos cuadrados y rectangulares de distintos tamaños.",
    "imagen": "imagenes/limpieza/basa-tapers-tritex.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tapers Crystal Glass – varios modelos",
    "sku": "9424 / 10247 / 10285 / 10286 / 10287 / 10289",
    "descripcion": "Modelos rectangulares con distintas capacidades y opciones de funda/válvula.",
    "imagen": "imagenes/limpieza/basa-tapers-crystal-glass.jpg"
  },
  {
    "categoria": "Limpieza e higiene",
    "marca": "BASA",
    "nombre": "Tapers Food Click – varios modelos",
    "sku": "9355 / 9356 / 9357 / 9358 / 9360",
    "descripcion": "Modelos rectangulares y con divisiones.",
    "imagen": "imagenes/limpieza/basa-tapers-food-click.jpg"
},
  {
    "categoria": "Material didáctico",
    "marca": "NEIMCSA",
    "nombre": "Fracciones de madera",
    "sku": "MD1",
    "descripcion": "Material didáctico de madera para aprender jugando con las fracciones. Desarrolla el pensamiento lógico y facilita la comprensión matemática.",
    "imagen": "imagenes/didacticos/Fracciones de madera NEIMCSA divertido y educativo.png"
  },
  {
    "categoria": "Material didáctico",
    "marca": "NEIMCSA",
    "nombre": "Cubo Soma",
    "sku": "W145-340",
    "descripcion": "Juego didáctico de construcción que desarrolla la creatividad, la coordinación, la concentración y el pensamiento espacial.",
    "imagen": "https://neimcsa.com/imagenes/didacticos/Cubo%20Soma_Creatividad.png"
  },
  {
    "categoria": "Material didáctico",
    "marca": "NEIMCSA",
    "nombre": "Geoplano magnético",
    "sku": "ML113",
    "descripcion": "Material educativo para explorar figuras geométricas, desarrollar la creatividad y aprender mediante actividades prácticas.",
    "imagen": "imagenes/didacticos/Geoplano Magnético_ Creatividad y Aprendizaje.png"
  },
  {
    "categoria": "Material didáctico",
    "marca": "NEIMCSA",
    "nombre": "Yupana de madera",
    "sku": "QQ-7009",
    "descripcion": "Material didáctico para el aprendizaje de las matemáticas, el razonamiento lógico y las operaciones de conteo.",
    "imagen": "imagenes/didacticos/Yupana de madera_ aprende jugando (1).png"
  }
];
