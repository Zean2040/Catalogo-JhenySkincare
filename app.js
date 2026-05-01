/* ==========================
   app.js (COMPLETO)
   - Carrito NO se esconde al hacer clic dentro
   - Cierra SOLO tocando el backdrop
   - Variantes UND/DUO visibles y seleccionables
   - Características (bullets) alineadas al PDF JhenSkincare
========================== */

const BRAND = "Jhen Skincare";
const CITY  = "Trujillo – Perú";
const SHIP  = "Envíos a todo el Perú";

const PHONE_LOCAL = "915113423";
const PHONE_E164  = "51" + PHONE_LOCAL;

/* ==========================
   Productos (BULLETS segun PDF)
========================== */
const products = [
  // BLOQUEADORES
  {
    id: "bloq-skin1004-hyalu-cica",
    category: "Bloqueadores",
    name: "Bloqueador SKIN1004 Hyalu-Cica",
    bullets: [
      "Ácido hialurónico y centella asiática.",
      "Todo tipo de piel.",
      "Iluminador y antiarrugas.",
      "Contiene ingredientes calmantes."
    ],
    price: 75,
    variants: [
      { label: "UND", price: 70 },
      { label: "DUO", price: 120 }
    ],
   
    image: "assets/products/BloqueadorSKIN1004Hyalu-Cica.webp"
  },

  {
    id:"bloq-skin1004-sun-stick",
    category:"Bloqueadores",
    name:"SKIN1004 Madagascar Centella Hyalu-Cica Silky-Fit Sun Stick",
    bullets:[
      "Hidratación instantánea.",
      "Efecto piel mate.",
      "Ideal para piel sensible, normal y seca.",
      "Protección de rayos UV.",
      "Disminuye el sebo facial.",
      "Contiene extracto de centella."
    ],
    price:70,
    image:"assets/products/SKIN1004 Madagascar Centella Hyalu-Cica Silky-Fit Sun Stick.webp"
  },
  {
    id:"bloq-celimax-mattify-stick",
    category:"Bloqueadores",
    name:"CELIMAX Oil Control Mattifying Sun Stick",
    bullets:[
      "Controla el brillo al instante.",
      "Fácil de aplicar en cualquier momento.",
      "Protección solar potente.",
      "No deja residuo blanco ni sensación pegajosa.",
      "Ideal para piel grasa o mixta."
    ],
    price:75,
    image:"assets/products/celimax-mattify-stick.webp"
  },

  {
    id:"bloq-celimax-light",
    category:"Bloqueadores",
    name:"CELIMAX Oil Control Light Sunscreen",
    bullets:[
      "Controla el exceso de grasa.",
      "Textura ligera y no pegajosa.",
      "Protección solar efectiva.",
      "Ideal para piel mixta o grasa.",
      "No obstruye los poros."
    ],
    status:"Agotado",
    price:75,
    image:"assets/products/celimax-light.webp"
  },

  {
    id:"bloq-celimax-pore-darkspot",
    category:"Bloqueadores",
    name:"CELIMAX Pore+Dark Spot Brightening Care Sunscreen",
    bullets:[
      "Ayuda a unificar el tono de la piel, manchas.",
      "Minimiza los poros visiblemente.",
      "Aporta luminosidad natural.",
      "Fórmula suave pero eficaz.",
      "Mejora la claridad general de la piel."
    ],
    status:"Agotado",
    price:80,
    image:"assets/products/celimax-pore-darkspot.webp"
  },

  {
    id:"bloq-cosrx-aloe",
    category:"Bloqueadores",
    name:"COSRX Aloe Soothing Sun Cream SPF50+ PA+++",
    bullets:[
      "Hidrata y calma la piel.",
      "Textura ligera y no pegajosa.",
      "Apto para pieles sensibles.",
      "Ideal para uso diario.",
      "Hidratante y calmante de la piel.",
      "Aporta frescura inmediata."
    ],
    status:"Agotado",
    price:70,
    image:"assets/products/cosrx-aloe.webp"
  },
    {
    id:"bloq-beauty-of-joseon-relief-sun",
    category:"Bloqueadores",
    name:"COTTON SOFT SUN STICK SPF50+ PA+++",
    bullets:[
      "Controla el exceso de sebo y deja la piel mate",
      "Textura ligera y suave.",
      "Protección solar efectiva.",
      "Ideal para piel mixta o grasa.",
      "No obstruye los poros."
    ],
    status:"Agotado",
    price:70,
    image:"assets/products/boj-relief-sun.webp"
  },

  {
    id:"bloq-anua-heartleaf-suncream",
    category:"Bloqueadores",
    name:"SKIN1004 MADAGASCAR CENTELLA TONE BRIGHTENING ",
    bullets:[
      "Reduce las manchas y aporta un brillo saludable.",
      "Calma, repara y fortalece la barrera cutánea.",
      "Hidrata y suaviza la piel.",
      "Contiene propiedades antioxidantes.",
      "Protector solar con color."
    ],
    price:80,
    image:"assets/products/anua-heartleaf-suncream.webp"
  },
  {
    id:"Medipeel",
    category:"Bloqueadores",
    name:"MEDIPEEL Protector solar con péptidos en barra",
    bullets:[
      "Ideal para pieles maduras o secas que buscan combatir manchas y arrugas.",
      "Hidrata profundamente.",
      "Sin sensación pegajosa."
    ],
    price:75,
    image:"assets/products/medipeel.jpg"
  },
  {
    id:"Abib",
    name:"ABIB Protector solar Quick Sunstick",
    category:"Bloqueadores",
    bullets:[
      "Textura ligera y transparente.",
      "Acabado luminoso (glowy) e hidratante",
      "ideal para pieles secas, normales o quienes buscan un aspecto freso.",
      "Resistente al agua y sudor",
      "No deja residuos blancos ni sensación grasa"
    ],
    price:80,
    image:"assets/products/abib_sincolor.webp"
  },
  {
    id:"Abib",
    name:"ABIB Protector solar en barra Airy sunstick ",
    category:"Bloqueadores",
    bullets:[
      "Textura ligera y transparente .",
      "Ideal para pieles mixta a grasa .",
      "Acabado mate, semi-mate y sedoso.",+
      "Controla el exceso de sebo",
      "Resistente al agua y al sudor"
    ],
    price:80,
    image:"assets/products/abib_color.webp"
  },
  {
    id:"SKIN1004",
    name:"SKIN1004 Madagascar Centella Air Fit Suncream lite",
    category:"Bloqueadores",
    bullets:[
    "Ideal para pieles sensibles",
    "Protector mineral (físico)",
    "Regenera y fortalece la barrera cutánea",
    ],
    price:75,
    image:"assets/products/AirFit_Centella.webp"
  }, 
 {   
  id:"Derma B",
  name:"DERMA B Protector solar corporal",
  bullets:[
    "Para pieles secas o sensibles",
    "Fórmula no pegajosa",
    "Hidrata intensamente"
  ],
  price:85,
  category:"Bloqueadores",
  image:"assets/products/dermaB.webp"

 },

  // SÉRUMS
  {
    id:"serum-ksecret-1988-cream",
    category:"Sérums",
    name:"KSECRET - Seoul 1988 Cream Retinal Liposome 1% + Fermented Rice",
    bullets:[
      "Unifica el tono y aporta luminosidad.",
      "Textura suave y ligera.",
      "Apta para piel sensible.",
      "Estimula la regeneración cutánea.",
      "Nutre y fortalece la barrera cutánea."
    ],
    price:80,
    image:"assets/products/ksecret-1988-cream.webp"
  },


  {
    id:"serum-skin1004-retinol-02",
    category:"Sérums",
    name:"SKIN1004 Retinol 0.2 Boosting Shot Ampoule 30ml",
    bullets:[
      "Mejora la elasticidad y firmeza de la piel.",
      "Textura más suave y refinada.",
      "Fortalece la barrera cutánea.",
      "Reduce arrugas y líneas finas.",
      "Hidratación profunda y reparación.",
      "Regenera la piel desde el interior"
    ],
    price:90,
      image:"assets/products/skin1004-tone-brightening.webp"
  },

  {
    id:"serum-skin1004-matrixyl-10",
    category:"Sérums",
    name:"SKIN1004 Matrixyl 10 Boosting Shot Ampoule 30ml",
    bullets:[
      "Hidratación profunda y firmeza.",
      "Mejora la densidad y volumen de la piel.",
      "Reparación y fortalecimiento de la barrera cutánea.",
      "Absorción optimizada mediante microespículas.",
      "Textura ligera y no pegajosa.",
      "Regenera la piel desde el interior"
    ],
    price:90,
    image:"assets/products/skin1004-retinol-02.webp"
    
  },

  {
    id:"serum-dralthea-gentle-vitc",
    category:"Sérums",
    name:"DR.ALTHEA Gentle Vitamina C",
    bullets:[
      "Una opción ideal para iniciarse con la vitamina C.",
      "Ilumina y unifica el tono.",
      "Suave con piel sensible.",
      "Reduce manchas.",
      "Antioxidante contra el envejecimiento.",
      "Regenera y fortalece la piel."
    ],
    status:"Agotado",
    price:90,
   image:"assets/products/skin1004-matrixyl-10.webp"
  },

  {
    id:"serum-dralthea-vitc-boosting",
    category:"Sérums",
    name:"DR.ALTHEA Vitamina C Boosting",
    bullets:[
      "Ilumina y unifica el tono.",
      "Suave con piel sensible.",
      "Reduce manchas.",
      "Hidratación profunda.",
      "Antioxidante contra el envejecimiento.",
      "Regenera y fortalece la piel."
    ],
    price:90,
    image:"assets/products/dralthea-vitc-boosting.png"
  },

  {
    id:"serum-medicube-pdrn-pink-peptide",
    category:"Sérums",
    name:"MEDICUBE PDRN Pink Peptide",
    bullets:[
      "Ilumina y mejora el tono de la piel.",
      "Regenera la piel desde el interior.",
      "Reduce arrugas y signos de envejecimiento.",
      "Ofrece hidratación duradera y nutritiva.",
      "Aumenta la elasticidad de manera visible."
    ],
    price:110,
    image:"assets/products/medicube-pdrn-serum.webp"
  },

  {
    id:"serum-celimax-retinal-booster",
    category:"Sérums",
    name:"CELIMAX Retinal Shot Tightening Booster",
    bullets:[
      "Ilumina y unifica el tono.",
      "Reafirmante y calmante de la piel.",
      "Disminuye la apariencia de los poros.",
      "Reduce arrugas y signos de envejecimiento.",
      "Regenera y fortalece la piel."
    ],
    price:85,
    image:"assets/products/celimax-retinal.webp"
  },

  {
    id:"serum-aplb-kojic-vitc",
    category:"Sérums",
    name:"APLB con Ácido Kójico y Vitamina C",
    bullets:[
      "Hidratante y calmante.",
      "Despigmentante ayuda a atenuar las manchas oscuras.",
      "Disminuye la apariencia de los poros.",
      "Mejora la elasticidad y revitaliza la piel."
    ],
    price:75,
    status:"Agotado",
    image:"assets/products/aplb-kojic-vitc.jpg"
  },

  {
    id:"serum-medicube-collagen-glow",
    category:"Sérums",
    name:"MEDICUBE Collagen Glow Booster",
    bullets:[
      "Hidratación profunda.",
      "Reduce la apariencia de líneas finas y arrugas.",
      "Ideal para piel sensible.",
      "Aporta brillo y luminosidad.",
      "Regenera la piel desde el interior."
    ],
    price:95,
    image:"assets/products/medicube-collagen-glow.png"
  },

  {
    id:"serum-koji-white-tranex",
    category:"Sérums",
    name:"KOJI WHITE (Dipalm. Ácido Kójico + Ácido Tranexámico)",
    bullets:[
      "Despigmentante ayuda a atenuar las manchas oscuras.",
      "Ayuda a corregir decoloraciones persistentes.",
      "Unifica la hiperpigmentación.",
      "Anti-acné.",
      "Disminuye la apariencia de los poros.",
      "Aporta brillo y luminosidad.",
      "Efecto anti-edad."
    ],
    price:110,
    image:"assets/products/koji-white.jpg"
  },

  {
    id:"cream-aplb-tranex-niac",
    category:"Sérums",
    name:"APLB Tranexamic Acid Niacinamide",
    bullets:[
      "Reduce y previene manchas.",
      "Reduce el enrojecimiento y calma la piel.",
      "Fortalece la barrera cutánea.",
      "Reduce imperfecciones e ilumina y unifica."
    ],
    price:75,
    status:"Agotado",
    image:"assets/products/aplb-tranex.webp"
  },
  {
   id:"Purito Seoul",
   name:"PURITO SEOUL serum de ácido tranexámico y retinal", 
    category:"Sérums",
    bullets:[
      "Reduce manchas oscuras y melasma",
      "Mejorar la luminosidad y el tono desigual",
      "Alisa líneas finas y mejora la textura general"
    ], 
    price: 90,
    image:"assets/products/purito_txa.webp"
  },
  {
    id:"Purito Seoul",
    name:"PURITO SEOUL ácido azelaico y ácido kójico",
    category:"Sérums",
    bullets:[
      "Combate brotes activos",
      "Desbanece manchas pos-acné y rojeces",
      "Controla el acné"
    ],
    price: 90,
    image:"assets/products/purito_azelaic.webp"
  },
  {
   id:"Sungboon editor",
   name:"SUNGBOON EDITOR ampolla antiarrugas con péptidos",
   category:"Sérums",
    bullets:[
      "Efecto lifting tensor en frente, ojos y mandibula",
      "Reduce líneas de expresión y arrugas profundas",
      "Aumenta la elasticidad y densidad en la piel"
    ],
    price: 105,
    image:"assets/products/sunboon_ampolla.webp"
  },
  {
  id:"centelian24",
  name:"CENTELIAN24 ampolla de PDRN Firming",
  category:"Sérums",
  bullets:[
    "Repara el téjido dañado",
    "Estímula fibroblastos para crear colágeno y elastina",
    "Reduce arrugas y mejora la densidad cutánea"
  ],
  price: 105,
  image:"assets/products/centellian_ampolla.webp"
  },
  {
 id:"anua",
 name:"ANUA Serum con ácido azelaico",
 category:"Sérums",
 bullets:[
  "Reducir rojeces y calmar la piel irritada",
  "Hidrata profundamente",
  "Controla el acné"
 ],
   price: 105,
   image:"assets/products/anua_verde.webp"
   },
   {
 id:"anua",
 name:"ANUA Serum facial con niacinamida y ácido tranexámico",
 category:"Sérums",
 bullets:[
  "Despigmenta y atenua marcas de acné",
  "Unifica el tono de la piel",
  "Ilumina la piel cansada"
 ],
   price: 105,
   image:"assets/products/anua_rojo.jpg"
   },
   {
  id:"Medicube",
  name:"MEDICUBE serum de ácido succínico red",
  category:"Sérums",
  bullets:[
    "Controla el acné",
    "Reduce puntos negros/blancos",
    "Calma brotes activos sin resecar"
  ],
  price:105,
  image:"assets/products/medicube_serum.webp"
   },
   {
    id:"DR althea",
    name:"Dr.Althea suero de infusión de acción multiple",
    category:"Sérums",
    bullets:[
      "Hidrata profundamente",
      "Fortalece la barrera cutánea",
      "Revitaliza pieles secas y opacas"
    ],
    price:95,
    image:"assets/products/althea_serum.webp"
   },
   {
    id:"Eqqual",
    name:"EQQUALBERRY sérum de vitamina C",
    category:"Sérums",
    bullets:[
      "Iluminacion intensiva",
      "Reduce manchas y previene la hiperpigmentación",
      "Acto para todo tipo de piel incluyendo sensibles"
    ],
    price:95,
    image:"assets/products/eqqual.webp"
   },
  // CREMAS FACIALES
  {
    id:"cream-centelian-24-madeca",
    category:"Cremas faciales",
    name:"CENTELIAN24 Madeca Cream",
    bullets:[
      "Hidrata profundamente y aporta elasticidad luminosa.",
      "Reduce arrugas y mejora la firmeza de la piel.",
      "Aclara manchas.",
      "Calma y protege la piel sensible.",
      "Deja la piel suave y sin sensación pegajosa."
    ],
    price:90,
    status:"Agotado",
    image:"assets/products/centelian-24.webp"
  },

  {
    id:"cream-medicube-deep-vita-c",
    category:"Cremas faciales",
    name:"MEDICUBE Deep Vita C Capsule Cream",
    bullets:[
      "Ilumina la piel.",
      "Atenúa manchas y tono desigual.",
      "Previene el envejecimiento.",
      "Hidrata intensamente.",
      "Refuerza la barrera cutánea."
    ],
    status:"Agotado",
    price:110,
    image:"assets/products/medicube-deep-vita-c.webp"
  },

  {
    id:"cream-medicube-pink-collagen",
    category:"Cremas faciales",
    name:"MEDICUBE Pink Collagen Capsule Cream",
    bullets:[
      "Hidratación profunda.",
      "Mejora la firmeza de la piel y aporta brillo.",
      "Ayuda a suavizar líneas finas y arrugas.",
      "Restaura la elasticidad de la piel."
    ],
    price:110,
    image:"assets/products/medicube-pink-collagen.webp"
  },

  {
    id:"cream-celimax-oil-control",
    category:"Cremas faciales",
    name:"CELIMAX Oil Control Moisturizing Cream",
    bullets:[
      "Ideal para piel grasa y excelente para la hidratación.",
      "Minimiza la apariencia de poros.",
      "Hidrata profundamente.",
      "Reduce el brillo.",
      "Se absorbe rápidamente sin dejar residuos."
    ],
    price:85,
    image:"assets/products/celimax-oil-control-cream.png"
  },

  {
    id:"cream-mixsoon-bean",
    category:"Cremas faciales",
    name:"MIXSOON Bean Cream",
    bullets:[
      "Nutrición intensa para una piel saludable.",
      "Hidratación prolongada y barrera de humedad.",
      "Calma la piel y reduce la irritación.",
      "Mejora la textura y aumenta la elasticidad de la piel.",
      "Fórmula suave apta para pieles sensibles y secas."
    ],
    status:"Agotado",
    price:85,
    image:"assets/products/mixsoon-bean-cream.png"
  },

  {
    id:"cream-dralthea-345-relief",
    category:"Cremas faciales",
    name:"DR.ALTHEA 345 Relief Crema",
    bullets:[
      "Repara y fortalece la barrera cutánea.",
      "Mejora la elasticidad y reduce arrugas.",
      "Calma la piel irritada y sensible.",
      "Hidrata intensamente sin obstruir los poros.",
      "Ilumina el tono y revitaliza la piel apagada."
    ],
    status:"Agotado",
    price:85,
    image:"assets/products/dralthea-345.png"
  },

  {
    id:"cream-celimax-pore-darkspot",
    category:"Cremas faciales",
    name:"CELIMAX Pore+Dark Spot Brightening Cream",
    bullets:[
      "Reduce la apariencia de las manchas y marcas.",
      "Suaviza la apariencia de los poros.",
      "Hidratación ligera.",
      "Fortalece la barrera cutánea."
    ],
    price:90,
    image:"assets/products/celimax-pore-darkspot-cream.webp"
  },
  {
    id:"tranexamic-acid",
    category:"Cremas faciales",
    name:"Tranexamic Acic Niacinamide facial cream",
    bullets:[
      "Reduce y previene manchas.",
      "Reduce el enrojecimiento y calma la piel.",
      "Fortalece la barrera cutánea.",
      "Reduce imperfecciones e ilumina y unifica.",
      
    ],
    price:75,
    image:"assets/products/tranexamic.jpg"
  },
  {
  id:"sungboon",
  category:"Cremas faciales",
  name:"SUNGBOON EDITOR crema en cápsulas con colágeno y retinol",
  bullets:[
    "Micro-espículas que ayudan a los ingredientes áctivos a penetrar profundamente",
    "Suaviza arrugas y reafirma la piel",
    "Ideal para pieles maduras o con pérdida de elasticidad"
  ],
  price:95,
  image:"assets/products/sunboon_capsulas.webp"
  },
   {
  id:"centelian24",
  category:"Cremas faciales",
  name:"CENTELLIAN24 Crema intensiva anti-edad con PDRN y centella asiática",
  bullets:[
    "Estimula la regeneración célular",
    "Reduce arrugas y mejora la firmeza de la piel",
    "Mejora la elasticidad con ADN de salmón"
  ],
  price:100,
  image:"assets/products/centelian_crema.jpg"
  },
    {
  id:"centelian24",
  category:"Cremas faciales",
  name:"CENTELLIAN24 Crema antimanchas mela capture",
  bullets:[
    "Reduce manchas y melasma",
    "Mezcla de PDRN y centella para reparar mientras aclara",
    "Ilumina la piel opaca"
  ],
  price:105,
  image:"assets/products/centelian24_capsulas.webp"
  },
    {
  id:"purito",
  category:"Cremas faciales",
  name:"PURITO SEOUL Crema de pantenol y bambú",
  bullets:[
    "Alivia irritación y rojeces",
    "Repara la barrera cutánea ",
    "gel-crema no comedogénica",
    "Ideal para pieles mixtas,grasa y sensibles"
  ],
  price:90,
  image:"assets/products/purito_crema.webp"
  },

  // CREMAS CORPORALES
  {
    id:"body-aplb-retinol-vitc-e",
    category:"Cremas y Exfoliantes corporales",
    name:"APLB Retinol Vitamina C + Vitamina E",
    bullets:[
      "Ilumina y unifica el tono.",
      "Suave con piel sensible.",
      "Reduce manchas.",
      "Hidratación profunda.",
      "Regenera, fortalece la piel y reduce líneas finas y arrugas.",
      "Reduce y atenúa estrías de la piel."
    ],
    status:"Agotado",
    price:85,
    image:"assets/products/aplb-body-retinol.png"
  },

  {
    id:"body-aplb-tranex-niac",
    category:"Cremas y Exfoliantes corporales",
    name:"APLB Tranexamic Acid Niacinamide (Corporal)",
    bullets:[
      "Reduce y previene manchas.",
      "Reduce el enrojecimiento y calma la piel.",
      "Fortalece la barrera cutánea.",
      "Reduce imperfecciones e ilumina y unifica."
    ],
    price:85,
    image:"assets/products/aplb-body-tranex.webp"
  },
   {
    id:"medicube",
    category:"Cremas y Exfoliantes corporales",
    name:"MEDICUBE Exfoliante corporal para el acné",
    bullets:[
      "Controla la grasa.",
      "Exfolia suavemente.",
      "Alivia la irritación.",
      "trata el acné corporal."
    ],
    price:110,
    image:"assets/products/medicube_exfoliante.webp"
  },
  {
    id:"medicube",
    category:"Cremas y Exfoliantes corporales",
    name:"MEDICUBE Exfoliante natural de ácido kójico y cúrcuma",
    bullets:[
      "Aclara zonas hiperpigmentadas.",
      "Exfolia suavemente.",
      "Suaviza textura rugosa.",
      "Hidrata la piel."
    ],
    price:110,
    image:"assets/products/medicube_corporal.webp"
  },
  {
    id:"eqqualberry",
    category:"Cremas y Exfoliantes corporales",
    name:"EQQUALBERRY Iluminadora de vitaminas",
    bullets:[
      "Reduce manchas.",
      "Ilumina piel opaca.",
      "Refuerza barrera cutánea.",
      "Hidratación profunda."
    ],
    price:120,
    image:"assets/products/eqqual_corporal.webp"
  },
   {
    id:"parnell",
    category:"Cremas y Exfoliantes corporales",
    name:"PARNELL Bruma corporal cicamanu de pH equilibrado",
    bullets:[
      "Combate acné corporal (pecho, espalda).",
      "Calma la irritación post-ducha.",
      "Hidrata sin ser pegajosa."
    ],
    price:110,
    image:"assets/products/parnell.webp"
  },
   {
    id:"novo",
    category:"Cremas y Exfoliantes corporales",
    name:"NOVO Crema de manos",
    bullets:[
      "Hidratación profunda.",
      "Nutre las uñas.",
      "Suavidad inmediata.",
    ],
    price:65,
    image:"assets/products/novo.webp"
  },
  // CONTORNO DE OJOS
  {
    id:"eye-skin1004-bakuchiol",
    category:"Contorno de ojos",
    name:"SKIN1004 Probio-Cica Bakuchiol Eye Cream",
    bullets:[
      "Reduce visiblemente arrugas y líneas finas.",
      "Calma y fortalece la piel del contorno de ojos.",
      "Aporta firmeza y elasticidad.",
      "Nutre profundamente sin ser pesada.",
      "Aclara el tono oscuro del contorno de ojos."
    ],
    price:80,
    image:"assets/products/eye-skin1004-bakuchiol.webp"
  },

  {
    id:"eye-ksecret-1988",
    category:"Contorno de ojos",
    name:"KSECRET - Seoul 1988 Eye Cream Retinal Liposome 4% + Fermented Bean",
    bullets:[
      "Protección antioxidante.",
      "Reduce líneas finas y arrugas.",
      "Aporta iluminación y mejora el contorno.",
      "Firmeza y elasticidad."
    ],
    price:85,
    image:"assets/products/eye-ksecret-1988.webp"
  },

  {
    id:"eye-tocobo-collagen",
    category:"Contorno de ojos",
    name:"TOCOBO Collagen Brightening Eye Gel Cream",
    bullets:[
      "Reduce la apariencia de líneas finas.",
      "Aclara y disminuye las ojeras.",
      "Proporciona firmeza y elasticidad a la piel.",
      "Hidrata e ilumina."
    ],
    price:80,
    image:"assets/products/eye-tocobo.webp"
  },

  {
    id:"eye-tocobo-collagen",
    category:"Contorno de ojos",
    name:"CENTELLIAN24-360° Shot PDRN crema reafirmante para ojos",
    bullets:[
      "Fomenta la regeneración célular.",
      "Mejora la elasticidad de la piel.",
      "Ideal para arrugas intensas.",
    ],
    price:95,
    image:"assets/products/360shot1.webp"
  }, 


  {
    id:"eye-medicube-pdrn",
    category:"Contorno de ojos",
    name:"MEDICUBE PDRN Pink Peptide Eye",
    bullets:[
      "Hidrata y nutre la piel.",
      "Mejora la firmeza y líneas de expresión del contorno de los ojos.",
      "Hace que la piel luzca joven y suave.",
      "Aclara y disminuye las ojeras."
    ],
    status:"Agotado",
    price:90,
    image:"assets/products/eye-medicube-pdrn.webp"
  },

 {
    id:"medicube",
    category:"Contorno de ojos",
    name:"MEDICUBE crema de ojos de péptidos para lifting profundo",
    bullets:[
      "Reafirma la piel con péptidos.",
      "Efecto lifting.",
      "Adecuado para piel madura.",
      "revitaliza la piel cansada."
    ],
    price:95,
    image:"assets/products/medicube_ojos.jpg"
  },
  
 {
    id:"VT",
    category:"Contorno de ojos",
    name:"VT crema reafirmante para ojos",
    bullets:[
      "Aplicador brivatorio que estimula la circulación facial.",
      "Desinflama bolsas y reduce ojeras.",
      "Reduce la apariencia de arrugas y líneas de expresión",
      "Efecto lifting y firmeza"
    ],
    price:95,
    image:"assets/products/reedle.webp"
  },
  
  // EXFOLIANTES / ESENCIA
  {
    id:"exo-mixsoon-bean-essence",
    category:"Exfoliantes y esencias faciales",
    name:"MIXSOON Bean Essence",
    bullets:[
      "Elimina células muertas y mejora la textura de la piel.",
      "Nutre y regenera la piel.",
      "Control de sebo y cuidado de poros.",
      "Ayuda a mejorar el acné.",
      "Fórmula suave y sin irritación.",
      "Formulado con vitaminas C y E para una piel más luminosa y saludable."
    ],
    price:90,
    image:"assets/products/mixsoon-bean-essence.jpg"
  },

  {
    id:"exo-skin1004-quick-stick-mask",
    category:"Exfoliantes y esencias faciales",
    name:"SKIN1004 Poremizing Quick Stick Mask",
    bullets:[
      "Elimina eficazmente el sebo y las impurezas de los poros.",
      "Efecto calmante con extracto de centella asiática.",
      "Mejora el tono apagado de la piel.",
      "Cuidado efectivo desde casa en solo 1-2 veces por semana."
    ],
    status:"agotado",
    price:75,
    image:"assets/products/skin1004-stick-mask.webp"
  },

  {
    id:"exo-mixsoon-centella-essence",
    category:"Exfoliantes y esencias faciales",
    name:"MIXSOON Soondy Centella Essence",
    bullets:[
      "Limpia profundamente los poros.",
      "Alivia piel enrojecida.",
      "Calma piel sensible y reduce la irritación.",
      "Revitaliza piel apagada.",
      "Ayuda a mejorar el acné."
    ],
    price:90,
    image:"assets/products/mixsoon-centella.png"
  },
   {
    id:"medicube",
    category:"Exfoliantes y esencias faciales",
    name:"MEDICUBE Pads contónico Zero",
    bullets:[
      "Limpia poros y controla la grasa.",
      "Remueve células muertas.",
      "Suaviza la textura de la piel."
    ],
    price:105,
    image:"assets/products/medicube_limpiador.webp"
  },
  

  // LIMPIADORES
  {
    id:"clean-skin1004-oil-cleanser",
    category:"Limpiadores faciales",
    name:"SKIN1004 Madagascar Centella Aceite Limpiador",
    bullets:[
      "Limpia poros y elimina sebo facial.",
      "Desmaquillante.",
      "No irrita la piel.",
      "Mantiene la piel hidratada.",
      "Efecto calmante facial."
    ],
    price:75,
    status:"Agotado",
    image:"assets/products/skin1004-aceite-limpiador.jpg"
  },

  {
    id:"clean-skin1004-foam",
    category:"Limpiadores faciales",
    name:"SKIN1004 Espuma de Ampolla Centella Madagascar",
    bullets:[
      "Limpia poros y elimina sebo facial.",
      "No irrita la piel.",
      "Mantiene la piel hidratada.",
      "Efecto calmante facial."
    ],
    price:65,
    image:"assets/products/skin1004-espuma.jpg"
  },
  {
    id:"arencia",
    category:"Limpiadores faciales",
    name:"ARENCIA limpiador facial",
    bullets:[
      "Elimina impurezas, puntos negros y maquillajes sin resecar.",
      "Exfolia suavemente.",
      "Efectivo contra el acné.",
      "Suave con la piel sensible."
    ],
    price:80,
    image:"assets/products/arencia.webp"
  },

  /* Maquillaje */
  {
   id:"tirtir",
   category:"Maquillaje",
   name:"TIRTIR - Base en formato cushion",
   bullets:[
     "Ofrece un acabado mate de larga duración (72h)",
     "cubre imperfecciones,  rojeces y poros con alta cobertura.", 
    "Incluye protección solar SPF40-50"
   ],
   price:105,
   tag:"Disponible en tono 17C",
   images:[
     "assets/products/tirtir.jpeg",
     "assets/products/tirtir_17.jpeg"
   ] 
  },
  {
    id:"mixsoon_labial",
  category:"Maquillaje",
  name:"MIXSOON  - Bálsamo labial",
  bullets:[
    "Tono dry rose",
  ],
  price:50,
  image:"assets/products/mixsoon_labial.jpeg"
  },
  {
    id:"sace_lady",
    category:"Maquillaje",
    name:"SACE LADY - Tinte labial mate",
    bullets:[
      "Disponible en el tono k16"
    ],
   price:35,
   images:[
       "assets/products/labial_k16.jpeg",
       "assets/products/sace_lady_k16.jpeg"
   ]
  },
  {
    id:"uoram",
  category:"Maquillaje",
  name:"UORAM - Bálsamo labial",
  bullets:[
    "Disponible en el tono R03"
  ],
  price:35,
  image:"assets/products/Uoram_labial.jpeg"
  },
  {
  id:"black rouge",
  category:"Maquillaje",
  name:"BLACK ROUGE - Tinte aterciopelado",
  bullets:[
    "Disponible en el tono DL03 Fauve Layer"
  ],
  price:50,
  images:[
    "assets/products/black_tinte.jpeg",
    "assets/products/black_rouge.jpeg"
  ],
  },
  {
    id:"shobido",
    category:"Maquillaje",
    name:"SHOBIDO - Bálsamo labial Disney Frozen",
    price:50,
    image:"assets/products/shobido.jpeg"
  },
   {
   id:"gege_bear",
  category:"Maquillaje",
  name:"GEGE BEAR - Tinte labial bunny",
  price:35,
  tag:"Disponible en el tono #05",
  images:[
    "assets/products/gege_bear.jpeg",
    "assets/products/gege_bear2.jpeg",
    "assets/products/gege_tono.jpeg"
  ],
   },
   {
    id:"bioaqua",
    category:"Maquillaje",
    name:"BIOAQUA - Sakura Fragance",
    bullets:[
      "Bálsamo labial"
    ],
    price:35,
    image:"assets/products/bioaqua.jpeg"
   },   
  {
   id:"handaiyan",
  category:"Maquillaje",
  name:"HANDAIYAN - Rubor en barra con Tinte",
  price:40,
  tag:"Disponible en el tono #04",
  images:[
    "assets/products/Handaiyan.jpeg",
    "assets/products/Handaiyan2.jpeg",
    "assets/products/Handaiyan_tono.jpeg"
  ],
   },
  {
  id:"pudaier",
  category:"Maquillaje",
  name:"PUDAIER - Mascarilla labial hidratante con color",
   price:40,
   tag:"Disponible en el tono #01",
   images:[
    "assets/products/pudaier.jpeg",
    "assets/products/pudaier_tono.png",
   ],
  },
  {
    id:"MACK ANDY ",
  category:"Maquillaje",
  name:"MACK ANDY - Rubor con relieve de flores aterciopeladas",
  price:45,
  tag:"Disponible en el tono M03 lavender",
  images:[
    "assets/products/Mack_Andy.jpeg",
    "assets/products/Mack_tono.jpeg"
  ]
  },
  {
    id:"leemember",
  category:"Maquillaje",
  name:"LEEMEMBER  - Rubor e Iluminador en polvo",
  price:50,
  tag:"Disponible en el tono #PU02",
  images:[
    "assets/products/Leemember.jpeg",
    "assets/products/leemember_tono.jpeg"
  ]
  },
  {
    id: "Fwee",
  category: "Maquillaje",
  name: "FWEE - Tinte labial rose obsession",
  price: 50,
  tag:"Tono plum rose",
  images: [
    "assets/products/Fwee.jpeg",
    "assets/products/Fwee_tono.jpeg"
  ],
  },
  {
  id:"tirtir_labial",
  category:"Maquillaje",
  name:"TIRTIR - Tinte labial mini",
  price:40,
  tag:"Tono #30 Mauve blush",
  images:[
    "assets/products/Tirtir_labial_mini.jpeg",
    "assets/products/Tirtir_labial_tono.jpeg"
  ],
  },
  {
  id: "Lip-y-Eye",
  category: "otros",
  name: "AXIX-Y-Set de labial y Sérum de Lip y EYE",
  price: 110,
  status: "Agotado",
  image: "assets/products/LipyEye.jpg",
  features: [
    {
      title: "Labial",
      bullets: [
        "Acabado brillante y fresco",
        "Ideal para preparar el maquillaje de labios",
        "Contiene vitamina E",
        "Perfecto como mascarrilla de noche",
        "48 horas de hidratación"
      ]
    },
    {
      title: "Sérum",
      bullets: [
        "Reduce bolsas y aclara el tono en las ojeras",
        "Mejora la elasticidad de la piel",
        "Colágeno y triple ácido hialurónico",
        "Ilumina e hidrata intensamente"
      ]
    }
  ]
}
];

const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

const els = {
  grid: document.getElementById("grid"),
  chips: document.getElementById("chips"),
  q: document.getElementById("q"),
  resultCount: document.getElementById("resultCount"),
  sectionTitle: document.getElementById("sectionTitle"),

  btnCart: document.getElementById("btnCart"),
  btnCloseCart: document.getElementById("btnCloseCart"),
  drawer: document.getElementById("drawer"),
  backdrop: document.getElementById("backdrop"),
  cartBadge: document.getElementById("cartBadge"),
  cartList: document.getElementById("cartList"),
  cartTotal: document.getElementById("cartTotal"),
  cartSubtitle: document.getElementById("cartSubtitle"),
  btnCheckout: document.getElementById("btnCheckout"),
  btnClear: document.getElementById("btnClear"),

  btnContactTop: document.getElementById("btnContactTop"),
  waDirect: document.getElementById("waDirect"),
  phoneText: document.getElementById("phoneText"),
  btnCopyPhone: document.getElementById("btnCopyPhone"),
};

const panelEl = document.querySelector(".drawer__panel");

let state = {
  category: "Todos",
  q: "",
  cart: loadCart(), // { [key]: { id, variantLabel, qty } }
};

/* ==========================
   Init
========================== */
renderChips();
render();
setupContact();
renderCart();
syncBadges();

/* ==========================
   UI Events
========================== */
if (els.q){
  els.q.addEventListener("input", () => {
    state.q = els.q.value.trim().toLowerCase();
    render();
  });
}

if (els.btnCart) els.btnCart.addEventListener("click", () => { renderCart(); openCart(); });
if (els.btnCloseCart) els.btnCloseCart.addEventListener("click", closeCart);

/* ✅ Fix: no cerrar por clicks dentro del panel */
if (panelEl){
  panelEl.addEventListener("click", (e) => e.stopPropagation());
}

/* ✅ Fix: cerrar SOLO si el click fue en el backdrop */
if (els.drawer && els.backdrop){
  els.drawer.addEventListener("click", (e) => {
    if (e.target === els.backdrop) closeCart();
  });
}

if (els.btnClear){
  els.btnClear.addEventListener("click", () => {
    state.cart = {};
    persistCart();
    renderCart();
    syncBadges();
  });
}

if (els.btnContactTop){
  els.btnContactTop.addEventListener("click", () => {
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  });
}

if (els.btnCopyPhone){
  els.btnCopyPhone.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(PHONE_LOCAL);
      els.btnCopyPhone.textContent = "¡Copiado!";
      setTimeout(() => els.btnCopyPhone.textContent = "Copiar número", 1200);
    }catch{
      alert("No se pudo copiar. Número: " + PHONE_LOCAL);
    }
  });
}

/* Escape para cerrar carrito */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCart();
});

/* ==========================
   Render
========================== */
function renderChips(){
  if (!els.chips) return;
  els.chips.innerHTML = "";
  categories.forEach(cat => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (state.category === cat ? " is-active" : "");
    b.textContent = cat;
    b.addEventListener("click", () => {
      state.category = cat;
      Array.from(els.chips.children).forEach(x => x.classList.remove("is-active"));
      b.classList.add("is-active");
      render();
    });
    els.chips.appendChild(b);
  });
}

function render(){
  if (!els.grid) return;

  const filtered = products.filter(p => {
    const okCat = state.category === "Todos" ? true : p.category === state.category;
    const featureText = (p.features || [])
  .flatMap(s => [s.title, ...(s.bullets || [])])
  .filter(Boolean)
  .join(" ");
    const hay = (p.name + " " + (p.bullets||[]).join(" ") + " " + featureText + " " + p.category).toLowerCase();
    const okQ = state.q ? hay.includes(state.q) : true;
    return okCat && okQ;
  });

  if (els.sectionTitle){
    els.sectionTitle.textContent = state.category === "Todos" ? "Productos" : state.category;
  }
  if (els.resultCount){
    els.resultCount.textContent = `${filtered.length} producto(s)`;
  }

  els.grid.innerHTML = "";
  filtered.forEach(p => els.grid.appendChild(productCard(p)));

  renderCart();
  syncBadges();
}

function productCard(p){
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("div");
  img.className = "card__img";

  const imageList = p.images || (p.image ? [p.image] : []);
  let currentImg = 0;

  if (imageList.length){
    const im = document.createElement("img");
    im.src = imageList[0];
    im.alt = p.name;
    im.loading = "lazy";
    im.onerror = () => im.remove();
    img.appendChild(im);

    if (imageList.length > 1){
      const prevBtn = document.createElement("button");
      prevBtn.className = "imgNav imgNav--prev";
      prevBtn.innerHTML = "&#10094;";
      prevBtn.type = "button";
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentImg = (currentImg - 1 + imageList.length) % imageList.length;
        im.src = imageList[currentImg];
        counter.textContent = `${currentImg + 1} / ${imageList.length}`;
      });

      const nextBtn = document.createElement("button");
      nextBtn.className = "imgNav imgNav--next";
      nextBtn.innerHTML = "&#10095;";
      nextBtn.type = "button";
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentImg = (currentImg + 1) % imageList.length;
        im.src = imageList[currentImg];
        counter.textContent = `${currentImg + 1} / ${imageList.length}`;
      });

      const counter = document.createElement("span");
      counter.className = "imgCounter";
      counter.textContent = `1 / ${imageList.length}`;

      /* Swipe táctil para móvil */
      let touchStartX = 0;
      let touchEndX = 0;
      img.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      img.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40){
          if (diff > 0){
            currentImg = (currentImg + 1) % imageList.length;
          } else {
            currentImg = (currentImg - 1 + imageList.length) % imageList.length;
          }
          im.src = imageList[currentImg];
          counter.textContent = `${currentImg + 1} / ${imageList.length}`;
        }
      }, { passive: true });

      img.appendChild(prevBtn);
      img.appendChild(nextBtn);
      img.appendChild(counter);
    }
  }

  if (p.status){
    const tag = document.createElement("div");
    tag.className = "badgeTag";
    tag.textContent = p.status;
    img.appendChild(tag);
  } else if (p.tag){
    const tag = document.createElement("div");
    tag.className = "badgeTag";
    tag.textContent = p.tag;
    img.appendChild(tag);
  }

  const body = document.createElement("div");
  body.className = "card__body";

  const title = document.createElement("h3");
  title.className = "card__title";
  title.textContent = p.name;

  let detailsEl = null;

if (p.features && Array.isArray(p.features) && p.features.length) {
  detailsEl = document.createElement("div");
  detailsEl.className = "features";

  p.features.forEach(sec => {
    const h = document.createElement("div");
    h.className = "featureTitle";
    h.textContent = sec.title || "";

    const ul = document.createElement("ul");
    ul.className = "bullets";

    (sec.bullets || []).slice(0, 6).forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });

    detailsEl.append(h, ul);
  });
}
else {
  const ul = document.createElement("ul");
  ul.className = "bullets";
  (p.bullets || []).slice(0, 6).forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
  detailsEl = ul;
}


  const row = document.createElement("div");
  row.className = "card__row";

  // ✅ Precio + variantes
  const leftBox = document.createElement("div");
  leftBox.className = "priceBox";

  const price = document.createElement("div");
  price.className = "price";

  if (p.variants && p.variants.length){
    price.textContent = p.variants.map(v => `${v.label} ${formatPrice(v.price)}`).join(" • ");
  } else {
    price.textContent = formatPrice(p.price);
  }

  let variantSel = null;
  if (p.variants && p.variants.length){
    variantSel = document.createElement("select");
    variantSel.className = "variantSel";
    p.variants.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v.label;
      opt.textContent = `${v.label} (${formatPrice(v.price)})`;
      variantSel.appendChild(opt);
    });
  }

  leftBox.appendChild(price);
  if (variantSel) leftBox.appendChild(variantSel);

  const btn = document.createElement("button");
  btn.className = "btn btn--primary";
  btn.type = "button";

  const isDisabled = (p.status || "").toLowerCase().includes("agotado");
  btn.disabled = isDisabled;
  btn.textContent = isDisabled ? "Agotado" : "Agregar";

  btn.addEventListener("click", () => {
    if (isDisabled) return;

    const chosenVariant = variantSel ? variantSel.value : null;
    addToCart(p.id, chosenVariant);

    renderCart();
    openCart();
  });

  row.append(leftBox, btn);
  body.append(title, detailsEl, row);
  card.append(img, body);
  return card;
}

/* ==========================
   Cart
========================== */
function addToCart(id, variantLabel){
  const key = variantLabel ? `${id}__${variantLabel}` : id;
  state.cart[key] = state.cart[key] || { id, variantLabel: variantLabel || null, qty: 0 };
  state.cart[key].qty += 1;
  persistCart();
}

function decItem(key){
  if (!state.cart[key]) return;
  state.cart[key].qty -= 1;
  if (state.cart[key].qty <= 0) delete state.cart[key];
  persistCart();
  renderCart();
  syncBadges();
}

function incItem(key){
  if (!state.cart[key]) return;
  state.cart[key].qty += 1;
  persistCart();
  renderCart();
  syncBadges();
}

function removeItem(key){
  delete state.cart[key];
  persistCart();
  renderCart();
  syncBadges();
}

function renderCart(){
  if (!els.cartList || !els.cartTotal || !els.cartSubtitle || !els.btnCheckout) return;

  const entries = Object.entries(state.cart);
  const count = entries.reduce((a,[,v]) => a + v.qty, 0);

  els.cartSubtitle.textContent = `${count} item(s)`;
  els.cartList.innerHTML = "";

  if (!entries.length){
    const empty = document.createElement("div");
    empty.className = "muted";
    empty.style.padding = "8px 2px";
    empty.textContent = "Tu carrito está vacío.";
    els.cartList.appendChild(empty);
  }

  let total = 0;

  entries.forEach(([key, item]) => {
    const p = products.find(x => x.id === item.id);
    if (!p) return;

    const unit = getUnitPrice(p, item.variantLabel);
    total += unit * item.qty;

    const row = document.createElement("div");
    row.className = "cartItem";

    const left = document.createElement("div");
    const name = document.createElement("div");
    name.className = "cartItem__name";
    name.textContent = p.name + (item.variantLabel ? ` (${item.variantLabel})` : "");

    const meta = document.createElement("div");
    meta.className = "cartItem__meta";
    meta.textContent = `${formatPrice(unit)} c/u • ${p.category}`;

    const remove = document.createElement("button");
    remove.className = "remove";
    remove.type = "button";
    remove.textContent = "Quitar";
    remove.addEventListener("click", () => removeItem(key));

    left.append(name, meta, remove);

    const right = document.createElement("div");
    const qty = document.createElement("div");
    qty.className = "qty";

    const bDec = document.createElement("button");
    bDec.type = "button";
    bDec.textContent = "–";
    bDec.addEventListener("click", () => decItem(key));

    const n = document.createElement("span");
    n.textContent = item.qty;

    const bInc = document.createElement("button");
    bInc.type = "button";
    bInc.textContent = "+";
    bInc.addEventListener("click", () => incItem(key));

    qty.append(bDec, n, bInc);
    right.appendChild(qty);

    row.append(left, right);
    els.cartList.appendChild(row);
  });

  els.cartTotal.textContent = formatPrice(total);
  els.btnCheckout.href = buildWhatsAppLink(total);

  const enabled = entries.length > 0;
  els.btnCheckout.style.pointerEvents = enabled ? "auto" : "none";
  els.btnCheckout.style.opacity = enabled ? "1" : ".55";

  if (els.cartBadge) els.cartBadge.textContent = count;
}

function getUnitPrice(p, variantLabel){
  if (variantLabel && p.variants){
    const v = p.variants.find(x => x.label === variantLabel);
    if (v) return v.price;
  }
  return p.price;
}

function buildWhatsAppLink(total){
  const entries = Object.entries(state.cart);
  const lines = entries.map(([, item]) => {
    const p = products.find(x => x.id === item.id);
    if (!p) return null;
    const unit = getUnitPrice(p, item.variantLabel);
    const sub = unit * item.qty;
    return `• ${p.name}${item.variantLabel ? ` (${item.variantLabel})` : ""} x${item.qty} = ${formatPrice(sub)}`;
  }).filter(Boolean);

  const msg =
`Hola 👋 Quiero hacer un pedido en ${BRAND}.

📍 ${CITY}
🚚 ${SHIP}

🧴 Pedido:
${lines.join("\n")}

💰 Total: ${formatPrice(total)}

💳 Pago: Yape / Plin / Efectivo (coordinar)
¿Me confirmas disponibilidad y costo de envío por favor?`;

  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(msg)}`;
}

/* ==========================
   Drawer
========================== */
function openCart(){
  if (!els.drawer) return;
  els.drawer.classList.add("is-open");
  els.drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCart(){
  if (!els.drawer) return;
  els.drawer.classList.remove("is-open");
  els.drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function syncBadges(){
  if (!els.cartBadge) return;
  const count = Object.values(state.cart).reduce((a,v) => a + v.qty, 0);
  els.cartBadge.textContent = count;
}

/* ==========================
   Contact
========================== */
function setupContact(){
  if (els.phoneText) els.phoneText.textContent = PHONE_LOCAL;
  if (els.waDirect) els.waDirect.href = `https://wa.me/${PHONE_E164}`;
}

/* ==========================
   Storage
========================== */
function loadCart(){
  try{
    const raw = localStorage.getItem("jhen_cart_v1");
    return raw ? JSON.parse(raw) : {};
  }catch{
    return {};
  }
}
function persistCart(){
  localStorage.setItem("jhen_cart_v1", JSON.stringify(state.cart));
}

/* ==========================
   Helpers
========================== */
function formatPrice(n){
  const num = Number(n || 0);
  return `S/.${num.toFixed(0)}`;
}
