// Catalogue Data & Overlay Engine
const catalogueData = {
  'raw-oud': {
    nameAr: "عود خام",
    nameEn: "Raw Oud Wood",
    heroCopy: "Taken from ancient trees. Aged by nature. Chosen by hand.\nThis is not a purchase — it is an inheritance.",
    pricePill: "200 – 2,000 AED",
    products: [
      { id: "oud-1", nameAr: "عود هندي فاخر", nameEn: "Premium Indian Oud", desc: "Warm. Deep. Timeless. The scent of an old majlis at midnight.", stars: 5, price: "1,200", unit: "AED / 10g", badge: "Rare", options: [{weight: "5g", price: 650}, {weight: "10g", price: 1200}, {weight: "25g", price: 2800}], profiles: ["Deep", "Earthy", "Warm"], story: "Some things cannot be rushed. The Indian oud tree takes decades to form this resin — this liquid history carried in wood. When you burn it, you are not filling a room with fragrance. You are connecting to something ancient, something that was here long before us, and will remain long after." },
      { id: "oud-2", nameAr: "عود كمبودي أصيل", nameEn: "Authentic Cambodian Oud", desc: "Smooth, sweet, endlessly complex.\nNature's most patient creation.", stars: 5, price: "2,000", unit: "AED / 10g", badge: "Rare", options: [{weight: "5g", price: 1100}, {weight: "10g", price: 2000}, {weight: "25g", price: 4800}], profiles: ["Sweet", "Smooth", "Complex"], story: "From the deepest forests of Cambodia comes a scent profile that has captivated royalty for centuries. The sweetness is naturally derived, unfolding slowly as the chip is gently heated." },
      { id: "oud-3", nameAr: "عود عربي كلاسيكي", nameEn: "Classic Arabian Oud", desc: "The scent of Eid morning. Of grandmother's prayer room.\nOf everything you love about home.", stars: 5, price: "600", unit: "AED / 10g", options: [{weight: "5g", price: 320}, {weight: "10g", price: 600}, {weight: "25g", price: 1350}], profiles: ["Classic", "Woody", "Nostalgic"], story: "This is the signature scent of Gulf hospitality. Unapologetically traditional, it evokes memories of family gatherings, celebrations, and the comforting embrace of heritage." },
      { id: "oud-4", nameAr: "عود ملكي مُعتَّق", nameEn: "Aged Royal Oud", desc: "Aged over decades. A depth that unfolds slowly —\nlike a story told with no rush.", stars: 5, price: "1,800", unit: "AED / 10g", badge: "Limited", options: [{weight: "5g", price: 950}, {weight: "10g", price: 1800}, {weight: "25g", price: 4200}], profiles: ["Aged", "Rich", "Resinous"], story: "Time is the ultimate luxury. This specific batch has been carefully aged to round off any harsh edges, resulting in a microscopic resin density that burns cleaner and lasts infinitely longer." },
      { id: "oud-5", nameAr: "عود خليجي أصيل", nameEn: "Pure Gulf Oud", desc: "Grounded. Earthy. Honest.\nThe raw soul of the Arabian peninsula.", stars: 4, price: "450", unit: "AED / 10g", options: [{weight: "5g", price: 250}, {weight: "10g", price: 450}, {weight: "25g", price: 1000}], profiles: ["Earthy", "Honest", "Grounding"], story: "A daily luxury. Perfect for scenting garments or the home after cleaning. It provides a robust, woody foundation that lingers in fabrics for days." },
      { id: "oud-6", nameAr: "عود بنغالي نادر", nameEn: "Rare Bengali Oud", desc: "Floral. Unexpected. For those who seek\nthe extraordinary in every breath.", stars: 5, price: "1,500", unit: "AED / 10g", badge: "New", options: [{weight: "5g", price: 800}, {weight: "10g", price: 1500}, {weight: "25g", price: 3500}], profiles: ["Floral", "Unique", "Rare"], story: "Bengali agarwood is notoriously difficult to source at this grade. It surprises the senses with a delicate almost-floral top note before settling into the deep, dark woodiness expected from prime resin." }
    ]
  },
  'oil-perfumes': {
    nameAr: "عطور دهنية",
    nameEn: "Oud Oil Perfumes",
    heroCopy: "Alcohol-free. Concentrated. Intimate.\nApplied to your skin, it becomes part of you.",
    pricePill: "150 – 800 AED",
    products: [
      { id: "oil-1", nameAr: "نجم سهيل", nameEn: "Najm Suhail", desc: "Warm amber and deep oud — your skin, elevated forever.", stars: 5, price: "380", unit: "AED / 12ml", badge: "Bestseller", options: [{weight: "6ml", price: 200}, {weight: "12ml", price: 380}, {weight: "24ml", price: 700}], profiles: ["Amber", "Warm", "Magnetic"], story: "Named after the guiding star of the desert, this oil is a compass to Arabian heritage. It melts into the skin, radiating a quiet warmth that draws people closer rather than announcing your arrival." },
      { id: "oil-2", nameAr: "مسك الخليج", nameEn: "Gulf Musk", desc: "Soft, clean, addictive.\nThe scent people ask you about all day.", stars: 5, price: "280", unit: "AED / 12ml", options: [{weight: "6ml", price: 150}, {weight: "12ml", price: 280}, {weight: "24ml", price: 500}], profiles: ["Clean", "Soft", "Musk"], story: "The ultimate skin scent. It enhances your natural aroma with a phenomenally clean, white musk base that feels like freshly washed linen drying in a desert breeze." },
      { id: "oil-3", nameAr: "عنبر ملكي", nameEn: "Royal Amber", desc: "Rich amber with a whisper of rose.\nLuxury that lasts from Fajr to midnight.", stars: 5, price: "450", unit: "AED / 12ml", badge: "Rare", options: [{weight: "6ml", price: 240}, {weight: "12ml", price: 450}, {weight: "24ml", price: 850}], profiles: ["Rich", "Resinous", "Royal"], story: "A masterclass in blending. The dense, sticky sweetness of fossilized amber is perfectly counterbalanced by the sharp, ethereal beauty of a single drop of Taif rose absolute." },
      { id: "oil-4", nameAr: "ورد الطائف", nameEn: "Taif Rose", desc: "The most coveted rose in Arabia.\nLiquid poetry on your pulse points.", stars: 5, price: "520", unit: "AED / 12ml", badge: "Limited", options: [{weight: "3ml", price: 280}, {weight: "6ml", price: 520}], profiles: ["Floral", "Precious", "Pure"], story: "Cultivated in the high-altitude mountains of Taif, these roses are picked at dawn before the sun evaporates their dew. It takes tens of thousands of petals to yield a single tola of this liquid gold." },
      { id: "oil-5", nameAr: "صندل الهند", nameEn: "Indian Sandalwood", desc: "Creamy. Meditative. Timeless.\nFor those who wear their calm like armor.", stars: 4, price: "320", unit: "AED / 12ml", options: [{weight: "6ml", price: 180}, {weight: "12ml", price: 320}, {weight: "24ml", price: 600}], profiles: ["Creamy", "Woody", "Calm"], story: "Sourced from the Mysore region, this sandalwood oil is buttery and smooth. It is known historically for its grounding properties, centering the mind in a chaotic world." },
      { id: "oil-6", nameAr: "زعفران وعود", nameEn: "Saffron & Oud", desc: "Saffron's fire. Oud's depth.\nThe combination that defines Arabian luxury.", stars: 5, price: "680", unit: "AED / 12ml", badge: "Exclusive", options: [{weight: "6ml", price: 360}, {weight: "12ml", price: 680}], profiles: ["Spicy", "Deep", "Luxurious"], story: "The two most expensive ingredients in perfumery, married in perfect harmony. The metallic, fiery bite of Persian saffron cuts beautifully through the dark, brooding base of aged Assami oud." }
    ]
  },
  'spray-perfumes': {
    nameAr: "عطور إسبري",
    nameEn: "Spray Perfumes",
    heroCopy: "The Arabian soul in modern form.\nEvery spray is a declaration of where you come from.",
    pricePill: "100 – 500 AED",
    products: [
      { id: "spray-1", nameAr: "صحراء الذهب", nameEn: "Desert Gold", desc: "Dry woods, amber, and a trail that turns heads.\nModern Gulf confidence.", stars: 5, price: "320", unit: "AED / 100ml", badge: "Bestseller", options: [{weight: "50ml", price: 180}, {weight: "100ml", price: 320}], profiles: ["Dry Woods", "Amber", "Confident"], story: "Designed for the modern professional. It projects an aura of absolute competence and refined taste, leaving a sillage that lingers respectfully in the boardroom long after you've left." },
      { id: "spray-2", nameAr: "ليل أبوظبي", nameEn: "Abu Dhabi Night", desc: "Dark florals and deep oud.\nThe city at its most glamorous.", stars: 5, price: "380", unit: "AED / 100ml", options: [{weight: "50ml", price: 210}, {weight: "100ml", price: 380}], profiles: ["Glamorous", "Dark Florals", "Oud"], story: "Inspired by the glittering skyline against the pitch-black Gulf water. It starts bright and ostentatious, drying down into something profoundly elegant and mysterious." },
      { id: "spray-3", nameAr: "فجر", nameEn: "Fajr", desc: "Fresh citrus and soft musk.\nThe promise of a new day, bottled.", stars: 4, price: "220", unit: "AED / 100ml", options: [{weight: "50ml", price: 130}, {weight: "100ml", price: 220}], profiles: ["Fresh", "Citrus", "Musk"], story: "A masterfully balanced fresh scent that does not rely on synthetic aquatic notes. Instead, it uses tart Omani lime and crisp white musk to create an awakening experience." },
      { id: "spray-4", nameAr: "ملكة", nameEn: "Maleeka", desc: "Powdery rose and white oud.\nFor the woman who needs no introduction.", stars: 5, price: "420", unit: "AED / 100ml", badge: "New", options: [{weight: "50ml", price: 240}, {weight: "100ml", price: 420}], profiles: ["Powdery", "Rose", "Regal"], story: "A fragrance of undeniable presence. 'Maleeka' means Queen, and this composition of velvety Turkish rose over a delicate, non-animalic white oud base demands absolute respect." },
      { id: "spray-5", nameAr: "القصر", nameEn: "Al Qasr", desc: "Oud, leather, and spice.\nPresence without a word spoken.", stars: 5, price: "480", unit: "AED / 100ml", badge: "Limited", options: [{weight: "50ml", price: 280}, {weight: "100ml", price: 480}], profiles: ["Leather", "Spice", "Commanding"], story: "Heavy, dark, and intoxicating. Real Russian leather accords wrapped in smoke and cardamom. It is not for the faint of heart, but for those who are entirely comfortable in their own power." },
      { id: "spray-6", nameAr: "نسيم", nameEn: "Naseem", desc: "Light, fresh, effortless.\nLike the first Gulf breeze of morning.", stars: 4, price: "180", unit: "AED / 100ml", options: [{weight: "50ml", price: 100}, {weight: "100ml", price: 180}], profiles: ["Light", "Breezy", "Effortless"], story: "An everyday signature that offends no one but delights everyone. Perfect for intense summer heat, it cuts through humidity with a crisp, airy botanical profile." }
    ]
  },
  'bakhoor': {
    nameAr: "بخور",
    nameEn: "Bakhoor",
    heroCopy: "Your home has a scent. Make it unforgettable.\nHospitality is not just generosity — it is memory.",
    pricePill: "80 – 400 AED",
    products: [
      { id: "bakh-1", nameAr: "بخور دهن العود", nameEn: "Oud Oil Bakhoor", desc: "The purest bakhoor experience.\nOne chip fills an entire home.", stars: 5, price: "280", unit: "AED / 40g", badge: "Bestseller", options: [{weight: "40g", price: 280}, {weight: "80g", price: 500}], profiles: ["Pure", "Oud", "Intense"], story: "Hand-kneaded wood powders soaked in pure oud oil for 90 days before drying. When placed on warm charcoal, it releases a thick, fragrant smoke that clings to furnishings for days." },
      { id: "bakh-2", nameAr: "بخور الورد", nameEn: "Rose Bakhoor", desc: "Floral, soft, and unmistakably feminine.\nFor bedrooms and bridal suites.", stars: 5, price: "180", unit: "AED / 40g", options: [{weight: "40g", price: 180}, {weight: "80g", price: 320}], profiles: ["Floral", "Soft", "Romantic"], story: "A beautiful, romantic blend focusing on Damask rose and light ambergris. It burns with an incredibly soft, rounded profile that never turns acrid or smoky." },
      { id: "bakh-3", nameAr: "بخور العنبر", nameEn: "Amber Bakhoor", desc: "Warm amber resin that lingers\nlong after guests leave. That is the point.", stars: 5, price: "220", unit: "AED / 40g", options: [{weight: "40g", price: 220}, {weight: "80g", price: 400}], profiles: ["Warm", "Resinous", "Welcoming"], story: "The ultimate hospitality scent. Amber emits a golden, sweet warmth when heated, creating an atmosphere of absolute comfort and luxury in your living spaces." },
      { id: "bakh-4", nameAr: "بخور المسك", nameEn: "Musk Bakhoor", desc: "Clean and enveloping.\nThe scent of a home that is truly cared for.", stars: 4, price: "160", unit: "AED / 40g", options: [{weight: "40g", price: 160}, {weight: "80g", price: 290}], profiles: ["Clean", "Musk", "Comforting"], story: "Designed for purifying the home's atmosphere. The white musk base burns remarkably clean, neutralizing odors and leaving a lingering scent of expensive soap and fresh linens." },
      { id: "bakh-5", nameAr: "بخور ملكي", nameEn: "Royal Bakhoor", desc: "Reserved for special occasions.\nEid. Weddings. Moments that matter.", stars: 5, price: "380", unit: "AED / 40g", badge: "Limited", options: [{weight: "40g", price: 380}, {weight: "80g", price: 700}], profiles: ["Complex", "Spicy", "Royal"], story: "The recipe for this blend has been guarded for three generations. It comprises 14 different ingredients including frankincense, myrrh, saffron, and premium Cambodian oud chips." },
      { id: "bakh-6", nameAr: "بخور الرياض", nameEn: "Riyadh Bakhoor", desc: "Bold, spiced, and deeply traditional.\nFor those who never compromise on heritage.", stars: 5, price: "240", unit: "AED / 40g", badge: "New", options: [{weight: "40g", price: 240}, {weight: "80g", price: 440}], profiles: ["Bold", "Spiced", "Traditional"], story: "A homage to the Najd region. Heavy on the spices, incorporating cloves, cardamom, and dark woods to create a robust, uncompromisingly authentic Arabian atmosphere." }
    ]
  },
  'gift-collections': {
    nameAr: "مجموعات الهدايا",
    nameEn: "Gift Collections",
    heroCopy: "In our culture, a gift of perfume is a gift of respect.\nCurated for every occasion that deserves to be remembered.",
    pricePill: "300 – 1,500 AED",
    products: [
      { id: "gift-1", nameAr: "طقم العيد الملكي", nameEn: "Royal Eid Set", desc: "Three iconic fragrances.\nOne unforgettable presentation.", stars: 5, price: "850", unit: "AED", badge: "Limited", options: [{weight: "Standard", price: 850}], profiles: ["Iconic", "Celebratory", "Curated"], story: "The perfect expression of Eid joy. Encased in a handcrafted velvet and wood box, containing our finest spray perfume, a quarter tola of royal oud oil, and premium grade bakhoor." },
      { id: "gift-2", nameAr: "هدية العروس", nameEn: "Bridal Gift Set", desc: "Rose, musk, and oud — curated for\nthe most important day of her life.", stars: 5, price: "1,200", unit: "AED", badge: "Exclusive", options: [{weight: "Standard", price: 1200}], profiles: ["Feminine", "Luxurious", "Romantic"], story: "A traditional bridal trousseau essential. Including Taif Rose body oil, white musk for the hair, and our most delicate floral spray perfumes to accompany her on her journey." },
      { id: "gift-3", nameAr: "طقم الرجل الكلاسيكي", nameEn: "Classic Men's Set", desc: "Oud oil, raw wood chips, and bakhoor.\nThe complete Arabian fragrance ritual.", stars: 5, price: "680", unit: "AED", badge: "Bestseller", options: [{weight: "Standard", price: 680}], profiles: ["Masculine", "Traditional", "Complete"], story: "Designed for the sophisticated gentleman's grooming routine. This set provides the essentials for layering: scenting the garments with smoke, and pulse points with oil." },
      { id: "gift-4", nameAr: "هدية الترحيب", nameEn: "Welcome Gift Set", desc: "The perfect corporate or hospitality gift.\nWrapped. Signed. Remembered.", stars: 4, price: "420", unit: "AED", options: [{weight: "Standard", price: 420}], profiles: ["Elegant", "Universal", "Refined"], story: "When you need to make an impression without knowing someone's exact taste. This universally appealing set contains our fresh 'Fajr' spray and clean Musk Bakhoor." },
      { id: "gift-5", nameAr: "طقم الزوجين", nameEn: "Couples Collection", desc: "His and hers. Designed to complement.\nMeant to be shared.", stars: 5, price: "980", unit: "AED", badge: "New", options: [{weight: "Standard", price: 980}], profiles: ["Complementary", "Shared", "Harmonious"], story: "Two spray perfumes formulated to be worn individually, but specifically designed to create a beautiful, unified third scent when the wearers stand closely together." },
      { id: "gift-6", nameAr: "طقم التجربة", nameEn: "Discovery Set", desc: "Six miniatures. Six stories.\nThe perfect introduction to Al Gharayaf.", stars: 5, price: "320", unit: "AED", options: [{weight: "Standard", price: 320}], profiles: ["Exploration", "Variety", "Introduction"], story: "For the undecided. A beautifully presented row of 10ml vials encompassing our entire main line of spray perfumes, allowing the recipient to live with each scent before committing." }
    ]
  },
  'bespoke': {
    nameAr: "تفصيل عطور",
    nameEn: "Bespoke Perfume",
    heroCopy: "One scent. Yours alone.\nNo one else on earth will ever wear what we create for you.",
    pricePill: "Consultation",
    products: [
      { id: "bes-1", nameAr: "الجلسة الخاصة", nameEn: "Private Consultation", desc: "A one-on-one session with our founder.\nWe listen. We understand. We create.", stars: 5, price: "500", unit: "AED (Starting)", badge: "Exclusive", options: [{weight: "Session", price: 500}], profiles: ["Intimate", "Personal", "Exploratory"], story: "The journey begins with a conversation. In our private atelier, over Arabic coffee, we explore your scent memories, preferences, and the exact aura you wish to project to the world." },
      { id: "bes-2", nameAr: "عطر الهوية", nameEn: "Identity Fragrance", desc: "Your memory, your personality,\nyour roots — translated into scent.", stars: 5, price: "1,200", unit: "AED (Starting)", badge: "Limited Slots", options: [{weight: "Formulation", price: 1200}], profiles: ["Signature", "Unique", "Formulated"], story: "After your consultation, our master perfumer spends weeks drafting variations of your formula. You will test these iterations until we achieve absolute perfection that perfectly captures 'you'." },
      { id: "bes-3", nameAr: "هدية التفصيل", nameEn: "Bespoke Gift Voucher", desc: "Give someone the rarest gift:\na scent created only for them.", stars: 5, price: "800", unit: "AED (Starting)", badge: "New", options: [{weight: "Voucher", price: 800}], profiles: ["Gift", "Ultimate", "Rare"], story: "Presented as a heavy, gold-embossed invitation card. The recipient is invited to our atelier for the full bespoke experience, fully paid for by you. The ultimate luxury gift." },
      { id: "bes-4", nameAr: "عطر الشركة", nameEn: "Corporate Signature Scent", desc: "A unique scent for your brand,\nhotel, or workspace. Identity through fragrance.", stars: 5, price: "3,000", unit: "AED (Starting)", badge: "Exclusive", options: [{weight: "Commercial", price: 3000}], profiles: ["Brand", "Atmospheric", "Scaleable"], story: "Scent marketing is the most powerful memory trigger. We design custom environmental fragrances for luxury retail, hospitality, and corporate spaces to ensure clients never forget your brand." },
      { id: "bes-5", nameAr: "تجديد العطر", nameEn: "Fragrance Renewal", desc: "Already have a bespoke scent with us?\nRefresh and evolve your formula.", stars: 5, price: "400", unit: "AED (Starting)", options: [{weight: "Reformulation", price: 400}], profiles: ["Evolution", "Refined", "Update"], story: "As you change, your scent can change with you. For returning bespoke clients securely stored in our physical ledgers, we can adjust the formula—adding depth for winter or freshness for summer." },
      { id: "bes-6", nameAr: "طقم التفصيل الكامل", nameEn: "Full Bespoke Package", desc: "Consultation, creation, luxury packaging,\nand lifetime reformulation rights.", stars: 5, price: "2,500", unit: "AED (Starting)", badge: "Ultimate", options: [{weight: "Full Experience", price: 2500}], profiles: ["Comprehensive", "Lifetime", "Luxury"], story: "The absolute pinnacle of our offering. Includes the consultation, three iterations, a 100ml crystal flacon engraved with your name, a travel size, and your formula permanently archived." }
    ]
  }
};

let overlayHistory = [];

window.openCatalogue = function(categoryId) {
  overlayHistory = [categoryId];
  renderCategoryListing(categoryId);
  showOverlay();
};

window.openProduct = function(categoryId, productId) {
  overlayHistory.push(productId);
  const content = document.getElementById('catalogue-content');
  content.style.opacity = '0';
  
  setTimeout(() => {
    renderProductPage(categoryId, productId);
    content.style.opacity = '1';
    document.getElementById('catalogue-overlay').scrollTo({top:0, behavior:'smooth'});
  }, 250);
};

window.goBack = function() {
  overlayHistory.pop();
  if (overlayHistory.length === 0) {
    closeOverlay();
  } else {
    // If it's a category id (currently only depth of 2 so item 0 is cat)
    const prevId = overlayHistory[overlayHistory.length - 1];
    const content = document.getElementById('catalogue-content');
    content.style.opacity = '0';
    setTimeout(() => {
      renderCategoryListing(prevId);
      content.style.opacity = '1';
      document.getElementById('catalogue-overlay').scrollTo({top:0, behavior:'smooth'});
    }, 250);
  }
};

window.closeOverlay = function() {
  const overlay = document.getElementById('catalogue-overlay');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    // scroll back to collections
    document.getElementById('collections').scrollIntoView({behavior: 'smooth'});
  }, 400);
};

window.showOverlay = function() {
  const overlay = document.getElementById('catalogue-overlay');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // Trigger reflow
  void overlay.offsetWidth;
  overlay.style.opacity = '1';
  overlay.scrollTo({top:0});
};

function renderCategoryListing(categoryId) {
  const data = catalogueData[categoryId];
  const content = document.getElementById('catalogue-content');
  const breadcrumb = document.getElementById('overlay-breadcrumb');
  
  breadcrumb.innerHTML = `<span onclick="closeOverlay()" class="cursor-pointer hover:text-brand-gold transition-colors">Collections</span> <span class="mx-2 text-brand-gold">/</span> <span>${data.nameEn}</span>`;
  
  document.getElementById('overlay-back-btn').style.display = 'none';

  let productsHTML = data.products.map(p => `
    <div class="reveal group border border-brand-gold/20 hover:border-brand-gold bg-brand-dark rounded-sm transition-all duration-500 overflow-hidden relative cursor-pointer" onclick="openProduct('${categoryId}', '${p.id}')">
      ${p.badge ? `<span class="absolute top-4 left-4 bg-brand-gold text-brand-dark text-[10px] font-bold px-2 py-0.5 z-10 uppercase tracking-widest">${p.badge}</span>` : ''}
      
      <div class="relative w-full aspect-[3/4] bg-[radial-gradient(circle_at_center,rgba(184,150,46,0.1),transparent)] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-brand-gold/10 to-transparent transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full" style="transition-duration: 1.5s;"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-12 h-12 text-brand-gold opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
      </div>
      
      <div class="p-6 flex flex-col items-center text-center border-t border-brand-gold/10">
        <h3 class="font-arabic text-2xl mb-1">${p.nameAr}</h3>
        <h4 class="font-display italic text-brand-gold text-sm mb-3">${p.nameEn}</h4>
        <p class="text-brand-text-muted text-xs leading-relaxed mb-4 h-10 line-clamp-2">${p.desc}</p>
        
        <div class="flex text-brand-gold mb-4">
          ${[...Array(5)].map((_, i) => `<svg class="w-3 h-3 ${i<p.stars?'fill-current':''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join('')}
        </div>
        
        <div class="font-mono font-bold text-brand-gold mb-6">${p.price} <span class="text-[10px] font-modern text-brand-cream/50">${p.unit}</span></div>
        
        <div class="w-full grid grid-cols-2 gap-2 text-xs font-modern uppercase tracking-widest">
            <button class="border border-brand-gold text-brand-gold py-3 hover:bg-brand-gold hover:text-brand-dark transition-colors" onclick="event.stopPropagation(); window.open('https://wa.me/971547411813?text=السلام عليكم، أرغب في طلب: ${encodeURIComponent(p.nameAr)}', '_blank')">اطلب الآن</button>
            <button class="bg-brand-gold/10 text-brand-cream py-3 hover:bg-brand-gold hover:text-brand-dark transition-colors" onclick="openProduct('${categoryId}', '${p.id}')">Details</button>
        </div>
      </div>
    </div>
  `).join('');

  content.innerHTML = `
    <!-- Hero -->
    <div class="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden border-b border-brand-gold/20">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,150,46,0.1)_0%,transparent_60%)]"></div>
      
      <div class="relative z-10 px-6 max-w-3xl reveal active">
        <h1 class="font-arabic text-6xl md:text-7xl mb-2 text-brand-cream drop-shadow-lg">${data.nameAr}</h1>
        <h2 class="font-display italic text-2xl md:text-3xl text-brand-gold mb-8">${data.nameEn}</h2>
        
        <div class="flex items-center justify-center gap-4 mb-8">
            <div class="h-[1px] w-12 bg-brand-gold/30"></div>
            <span class="text-brand-gold text-[10px]">◆</span>
            <div class="h-[1px] w-12 bg-brand-gold/30"></div>
        </div>

        <p class="font-body text-lg md:text-xl text-brand-cream/90 whitespace-pre-line leading-relaxed mb-10 max-w-2xl mx-auto">${data.heroCopy}</p>
        
        <div class="inline-block border border-brand-gold/50 px-6 py-2 rounded-full font-mono text-sm tracking-widest text-brand-gold mb-16 shadow-[0_0_20px_rgba(184,150,46,0.1)]">
            ${data.pricePill}
        </div>

        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-brand-gold animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="max-w-7xl mx-auto px-6 py-12">
        <div class="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            <button class="px-6 py-2 rounded-full border border-brand-gold bg-brand-gold text-brand-dark text-xs uppercase tracking-widest font-modern font-bold">All</button>
            <button class="px-6 py-2 rounded-full border border-brand-gold/30 text-brand-cream/70 hover:border-brand-gold hover:text-brand-cream text-xs uppercase tracking-widest font-modern transition-all">Light</button>
            <button class="px-6 py-2 rounded-full border border-brand-gold/30 text-brand-cream/70 hover:border-brand-gold hover:text-brand-cream text-xs uppercase tracking-widest font-modern transition-all">Deep</button>
            <button class="px-6 py-2 rounded-full border border-brand-gold/30 text-brand-cream/70 hover:border-brand-gold hover:text-brand-cream text-xs uppercase tracking-widest font-modern transition-all">Aged</button>
            <button class="px-6 py-2 rounded-full border border-brand-gold/30 text-brand-cream/70 hover:border-brand-gold hover:text-brand-cream text-xs uppercase tracking-widest font-modern transition-all">Gift Grade</button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${productsHTML}
        </div>
    </div>
  `;
  
  setTimeout(initReveals, 50);
}

window.selectOption = function(btn, price) {
    const parent = btn.parentElement;
    parent.querySelectorAll('button').forEach(b => {
        b.classList.remove('bg-brand-gold', 'text-brand-dark', 'font-bold');
        b.classList.add('text-brand-cream/80', 'hover:border-brand-gold');
    });
    btn.classList.add('bg-brand-gold', 'text-brand-dark', 'font-bold');
    btn.classList.remove('text-brand-cream/80', 'hover:border-brand-gold');
    document.getElementById('dynamic-price').innerText = price;
}

function renderProductPage(categoryId, productId) {
  const catData = catalogueData[categoryId];
  const p = catData.products.find(x => x.id === productId);
  const content = document.getElementById('catalogue-content');
  const breadcrumb = document.getElementById('overlay-breadcrumb');
  
  breadcrumb.innerHTML = `<span onclick="closeOverlay()" class="cursor-pointer hover:text-brand-gold transition-colors">Collections</span> <span class="mx-2 text-brand-gold/50">/</span> <span onclick="goBack()" class="cursor-pointer hover:text-brand-gold transition-colors">${catData.nameEn}</span> <span class="mx-2 text-brand-gold/50">/</span> <span class="text-brand-gold">${p.nameEn}</span>`;
  
  document.getElementById('overlay-back-btn').style.display = 'flex';

  let optionsHTML = p.options.map((opt, i) => `
    <button onclick="selectOption(this, '${opt.price}')" class="flex-1 py-3 border border-brand-gold/30 text-xs font-modern tracking-widest uppercase transition-all ${i===0 ? 'bg-brand-gold text-brand-dark font-bold' : 'text-brand-cream/80 hover:border-brand-gold'}">
        ${opt.weight}
    </button>
  `).join('');

  content.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Left: Visual -->
        <div class="reveal active flex flex-col gap-6">
            <div class="relative w-full aspect-[3/4] border border-brand-gold/20 bg-gradient-to-br from-[#1A1408] to-[#0D0A05] flex items-center justify-center overflow-hidden group">
                ${p.badge ? `<span class="absolute top-6 left-6 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 z-10 uppercase tracking-widest">${p.badge}</span>` : ''}
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,150,46,0.15),transparent_70%)]"></div>
                
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-brand-gold/10 to-transparent transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full" style="transition-duration: 1.5s;"></div>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-32 h-32 text-brand-gold drop-shadow-[0_0_30px_rgba(184,150,46,0.3)] group-hover:scale-105 transition-transform duration-700" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
            </div>
            <div class="flex justify-center gap-3">
                <div class="w-2 h-2 rounded-full bg-brand-gold cursor-pointer"></div>
                <div class="w-2 h-2 rounded-full bg-brand-gold/30 hover:bg-brand-gold/60 cursor-pointer transition-colors"></div>
                <div class="w-2 h-2 rounded-full bg-brand-gold/30 hover:bg-brand-gold/60 cursor-pointer transition-colors"></div>
            </div>
        </div>

        <!-- Right: Info -->
        <div class="reveal active flex flex-col font-body">
            
            <div class="block md:hidden mb-6 text-xs font-display italic text-brand-cream/60">
                Collections <span class="mx-1">/</span> ${catData.nameEn} <span class="mx-1">/</span> <span class="text-brand-gold">${p.nameEn}</span>
            </div>

            <h1 class="font-arabic text-5xl md:text-6xl mb-2 text-brand-cream">${p.nameAr}</h1>
            <h2 class="font-display italic text-2xl text-brand-gold mb-4">${p.nameEn}</h2>
            
            <div class="flex items-center gap-2 mb-8">
                <div class="flex text-brand-gold">
                    ${[...Array(5)].map((_, i) => `<svg class="w-4 h-4 ${i<p.stars?'fill-current':''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join('')}
                </div>
                <span class="text-brand-cream/60 text-sm font-arabic-sans">47 تقييم</span>
            </div>

            <div class="flex items-center gap-4 mb-8">
                <div class="h-[1px] flex-grow bg-brand-gold/10"></div>
                <span class="text-brand-gold text-[10px]">◆</span>
                <div class="h-[1px] flex-grow bg-brand-gold/10"></div>
            </div>

            <p class="text-brand-cream/90 text-lg leading-relaxed mb-8 whitespace-pre-line">${p.story}</p>

            <div class="flex items-center gap-4 mb-10">
                <div class="h-[1px] flex-grow bg-brand-gold/10"></div>
                <span class="text-brand-gold text-[10px]">◆</span>
                <div class="h-[1px] flex-grow bg-brand-gold/10"></div>
            </div>

            <div class="flex flex-wrap gap-3 mb-10">
                ${p.profiles.map(prof => `<span class="border border-brand-gold/40 px-4 py-1.5 rounded-full text-xs font-modern uppercase tracking-widest text-brand-gold">${prof}</span>`).join('')}
            </div>

            <div class="flex gap-4 mb-8">
                ${optionsHTML}
            </div>

            <div class="mb-10 flex flex-col">
                <div class="font-mono text-4xl font-bold text-brand-gold mb-1"><span id="dynamic-price">${p.options[0].price}</span> <span class="text-lg text-brand-cream/50">AED</span></div>
                <div class="text-[#8A7550] text-sm italic font-display">Free delivery above 300 AED</div>
            </div>

            <div class="flex flex-col gap-4">
                <button onclick="window.open('https://wa.me/971547411813?text=السلام عليكم، أرغب في طلب: ${encodeURIComponent(p.nameAr)}', '_blank')" class="relative overflow-hidden w-full bg-brand-gold text-brand-dark py-5 rounded-sm font-bold text-lg hover:bg-brand-gold-light transition-colors flex justify-center items-center gap-3">
                    <span class="absolute inset-0 bg-white/20 animate-pulse opacity-0 hover:opacity-100 transition-opacity"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                    <span class="font-arabic-sans text-xl">اطلب عبر واتساب</span>
                    <span class="font-modern font-normal uppercase text-sm opacity-60">|</span>
                    <span class="font-modern uppercase text-sm tracking-wider">Order via WhatsApp</span>
                </button>
                
                <button onclick="window.open('https://wa.me/971547411813?text=السلام عليكم، لدي استفسار عن: ${encodeURIComponent(p.nameAr)}', '_blank')" class="w-full border border-brand-gold py-4 rounded-sm hover:bg-brand-gold/10 transition-colors flex justify-center items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-brand-gold"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                    <span class="font-arabic-sans text-brand-gold text-lg">استفسر عن المنتج</span>
                    <span class="font-modern font-normal uppercase text-brand-gold/60 text-xs">|</span>
                    <span class="font-modern uppercase text-xs tracking-wider text-brand-gold">Ask a Question</span>
                </button>
            </div>
            
            ${p.badge === 'Rare' || p.badge === 'Limited' || p.badge === 'Limited Slots' ? `
              <div class="mt-6 text-center text-[#8A7550] text-sm italic font-display">
                  ⚡ Only 3 pieces remaining at this grade
              </div>
            ` : ''}

        </div>
      </div>
    </div>
    
    <!-- Below The Fold -->
    <div class="border-t border-brand-gold/20 bg-[#080603] py-20">
        <div class="max-w-3xl mx-auto px-6 text-center reveal">
            <h3 class="font-arabic text-4xl md:text-5xl text-brand-gold mb-4 leading-relaxed">"رائحة تحكي ما لا تستطيع الكلمات قوله"</h3>
            <p class="font-display italic text-xl text-brand-cream/80 mb-10">"A scent that speaks what words cannot."</p>
            <p class="font-body text-lg text-brand-cream leading-relaxed">${p.desc} We source only the finest raw ingredients globally, refining them in the Emirates to create an unparalleled sensory signature.</p>
        </div>
    </div>

    <div class="max-w-4xl mx-auto px-6 py-20 border-t border-brand-gold/10">
        <div class="space-y-4">
            <details class="group bg-brand-dark border border-brand-gold/20 p-6 cursor-pointer">
                <summary class="flex justify-between items-center outline-none">
                    <span class="font-arabic text-2xl text-brand-cream">طريقة الاستخدام <span class="font-modern text-sm uppercase tracking-widest text-brand-gold ml-2 font-normal">How to Use</span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-brand-gold group-open:rotate-180 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <p class="mt-6 text-brand-cream/70 leading-relaxed font-body text-lg">Apply directly to clean, dry pulse points: wrists, inner elbows, and neck. Do not rub the oil into the skin, allow it to absorb naturally for maximum longevity.</p>
            </details>
            <details class="group bg-brand-dark border border-brand-gold/20 p-6 cursor-pointer">
                <summary class="flex justify-between items-center outline-none">
                    <span class="font-arabic text-2xl text-brand-cream">ملاحظات العطر <span class="font-modern text-sm uppercase tracking-widest text-brand-gold ml-2 font-normal">Scent Notes</span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-brand-gold group-open:rotate-180 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div class="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div class="p-4 bg-[rgba(184,150,46,0.05)] border border-brand-gold/10">
                        <div class="font-modern text-xs text-brand-gold uppercase tracking-widest mb-2">Top</div>
                        <div class="font-body text-brand-cream">${p.profiles[0] || 'Spicy'} Notes</div>
                    </div>
                    <div class="p-4 bg-[rgba(184,150,46,0.05)] border border-brand-gold/10">
                        <div class="font-modern text-xs text-brand-gold uppercase tracking-widest mb-2">Heart</div>
                        <div class="font-body text-brand-cream">${p.profiles[1] || 'Floral'} Woods</div>
                    </div>
                    <div class="p-4 bg-[rgba(184,150,46,0.05)] border border-brand-gold/10">
                        <div class="font-modern text-xs text-brand-gold uppercase tracking-widest mb-2">Base</div>
                        <div class="font-body text-brand-cream">${p.profiles[2] || 'Deep'} Resin</div>
                    </div>
                </div>
            </details>
            <details class="group bg-brand-dark border border-brand-gold/20 p-6 cursor-pointer">
                <summary class="flex justify-between items-center outline-none">
                    <span class="font-arabic text-2xl text-brand-cream">المنشأ والتقييم <span class="font-modern text-sm uppercase tracking-widest text-brand-gold ml-2 font-normal">Origin & Grade</span></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-brand-gold group-open:rotate-180 transition-transform"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <p class="mt-6 text-brand-cream/70 leading-relaxed font-body text-lg">Sourced exclusively from ethically managed forests and curated by our master perfumers in the UAE. Certified Grade A premium composition.</p>
            </details>
        </div>
    </div>
  `;
  
  setTimeout(initReveals, 50);
}

function initReveals() {
  const reveals = document.querySelectorAll('#catalogue-overlay .reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => {
    el.classList.remove('active');
    observer.observe(el);
  });
}
