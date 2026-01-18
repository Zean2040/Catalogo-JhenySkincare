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
    // ✅ pon aquí la ruta real + extensión correcta (jpg/png/webp)
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
    price:70,
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
    status:"Agotado",
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
    image:"assets/products/medicube-pdrn-serum.jpg"
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
    price:80,
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
    price:80,
    status:"Agotado",
    image:"assets/products/aplb-tranex.webp"
  },

  // CREMAS FACIALES
  {
    id:"cream-centelian-24-madeca",
    category:"Cremas faciales",
    name:"CENTELIAN 24 Madeca Cream",
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

  // CREMAS CORPORALES
  {
    id:"body-aplb-retinol-vitc-e",
    category:"Cremas corporales",
    name:"APLB Retinol Vitamina C + Vitamina E",
    bullets:[
      "Ilumina y unifica el tono.",
      "Suave con piel sensible.",
      "Reduce manchas.",
      "Hidratación profunda.",
      "Regenera, fortalece la piel y reduce líneas finas y arrugas."
    ],
    price:110,
    image:"assets/products/aplb-body-retinol.png"
  },

  {
    id:"body-aplb-tranex-niac",
    category:"Cremas corporales",
    name:"APLB Tranexamic Acid Niacinamide (Corporal)",
    bullets:[
      "Reduce y previene manchas.",
      "Reduce el enrojecimiento y calma la piel.",
      "Fortalece la barrera cutánea.",
      "Reduce imperfecciones e ilumina y unifica."
    ],
    price:110,
    image:"assets/products/aplb-body-tranex.webp"
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
    id:"eye-torriden-firming",
    category:"Contorno de ojos",
    name:"TORRIDEN Cellmazing Firming Eye Cream",
    bullets:[
      "Reafirma la piel del contorno de los ojos.",
      "Aclara las ojeras.",
      "Fortalece la elasticidad y suaviza arrugas leves.",
      "Reduce irritaciones."
    ],
    price:80,
    status:"Agotado",
    image:"assets/products/eye-torriden.webp"
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
    price:90,
    image:"assets/products/eye-medicube-pdrn.webp"
  },

  // EXFOLIANTES / ESENCIA
  {
    id:"exo-mixsoon-bean-essence",
    category:"Exfoliantes y esencia",
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
    status:"Agotado",
    image:"assets/products/mixsoon-bean-essence.jpg"
  },

  {
    id:"exo-skin1004-quick-stick-mask",
    category:"Exfoliantes y esencia",
    name:"SKIN1004 Poremizing Quick Stick Mask",
    bullets:[
      "Elimina eficazmente el sebo y las impurezas de los poros.",
      "Efecto calmante con extracto de centella asiática.",
      "Mejora el tono apagado de la piel.",
      "Cuidado efectivo desde casa en solo 1-2 veces por semana."
    ],
    price:75,
    image:"assets/products/skin1004-stick-mask.webp"
  },

  {
    id:"exo-mixsoon-centella-essence",
    category:"Exfoliantes y esencia",
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
  id: "Lip-y-Eye",
  category: "otros",
  name: "AXIX-Y-Set de labial y Sérum de Lip y EYE",
  price: 110,
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

  if (p.image){
    const im = document.createElement("img");
    im.src = p.image;
    im.alt = p.name;
    im.loading = "lazy";
    im.onerror = () => im.remove(); // si no existe, queda el placeholder bonito
    img.appendChild(im);
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
