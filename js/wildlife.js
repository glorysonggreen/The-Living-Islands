document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.fauna-card, .flora-card');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModalBtn = document.getElementById('closeModal');

  const data = {
    // ==================== FAUNA ====================
    "Binturong": {
      description: "The Binturong (Arctictis binturong) belongs to the kingdom Animalia and the family Viverridae. Known as the “bearcat,” it has a prehensile tail and a scent similar to buttered popcorn. It plays an essential role in seed dispersal in tropical forests.",
      habitat: "Tropical forests of Palawan",
      habitatFact: "Tree-dwelling and highly nocturnal.",
      lifespan: "15-20 years",
      lifespanFact: "Can live up to 20 years in captivity.",
      diet: "Fruits, small animals",
      dietFact: "Has a fondness for ripe durian.",
      status: "Vulnerable",
      statusFact: "Habitat loss is the primary threat.",
      size: "60-97 cm body length",
      sizeFact: "Tail length can match its body.",
      reproduction: "1-2 offspring per year",
      reproductionFact: "Gestation lasts around 91 days."
    },
    "Draco Rizali": {
      description: "Draco rizali, a gliding lizard in the family Agamidae, is endemic to the Philippines. It uses wing-like flaps of skin to glide between trees, conserving energy while escaping predators.",
      habitat: "Lowland and montane forests",
      habitatFact: "Glides from tree to tree with ease.",
      lifespan: "5-8 years",
      lifespanFact: "Lives mostly among treetops.",
      diet: "Insects",
      dietFact: "Feeds mainly on ants and termites.",
      status: "Least Concern",
      statusFact: "Common but reliant on forest habitats.",
      size: "15-20 cm",
      sizeFact: "Small yet agile flier.",
      reproduction: "Lays 2-5 eggs",
      reproductionFact: "Eggs are buried under bark or soil."
    },
    "Philippine Eagle": {
      description: "The Philippine Eagle (Pithecophaga jefferyi), in family Accipitridae, is the national bird of the Philippines. It is among the largest eagles in the world and symbolizes the nation’s biodiversity.",
      habitat: "Primary forests of Luzon, Leyte, Mindanao",
      habitatFact: "Nests in tall dipterocarp trees.",
      lifespan: "30-60 years",
      lifespanFact: "Lives decades in protected environments.",
      diet: "Monkeys, birds, small mammals",
      dietFact: "Also known as the 'monkey-eating eagle'.",
      status: "Critically Endangered",
      statusFact: "Fewer than 500 pairs remain.",
      size: "86-102 cm; wingspan 2 meters",
      sizeFact: "Wingspan among the largest in the world.",
      reproduction: "1 chick every 2 years",
      reproductionFact: "Parents care for young extensively."
    },
    "Pilandok": {
      description: "The Philippine Mouse-deer or Pilandok (Tragulus nigricans) is a small, shy ungulate found in Palawan. Despite its name, it is not a true deer but belongs to the family Tragulidae.",
      habitat: "Forest floors of Palawan",
      habitatFact: "Prefers dense undergrowth.",
      lifespan: "8-10 years",
      lifespanFact: "Lives longer in quiet forest areas.",
      diet: "Fruits, leaves, insects",
      dietFact: "Feeds at night while avoiding predators.",
      status: "Vulnerable",
      statusFact: "Threatened by hunting and habitat loss.",
      size: "40-45 cm long",
      sizeFact: "Weighs only about 2-3 kg.",
      reproduction: "1 offspring per year",
      reproductionFact: "Usually gives birth during wet seasons."
    },
    "Sulu Hornbill": {
      description: "The Sulu Hornbill (Anthracoceros montani) is one of the rarest birds on Earth, endemic to the Sulu Archipelago. Its curved bill and vibrant plumage make it a symbol of conservation urgency.",
      habitat: "Lowland forests of Sulu",
      habitatFact: "Restricted to tiny islands with remaining forests.",
      lifespan: "20-25 years",
      lifespanFact: "Known to pair for life.",
      diet: "Fruits, small insects",
      dietFact: "Helps in seed dispersal.",
      status: "Critically Endangered",
      statusFact: "Fewer than 40 individuals remain.",
      size: "55-60 cm",
      sizeFact: "Has a distinct casque on its bill.",
      reproduction: "1-2 eggs per year",
      reproductionFact: "Females seal themselves inside tree cavities while nesting."
    },
    "Samar Cobra": {
      description: "The Samar Cobra (Naja samarensis) is a venomous snake endemic to the Visayas and Mindanao. It displays an impressive hood and plays an important ecological role as a rodent predator.",
      habitat: "Lowland forests and plantations",
      habitatFact: "Prefers humid forest floors.",
      lifespan: "10-15 years",
      lifespanFact: "Active both day and night.",
      diet: "Rodents, frogs, small animals",
      dietFact: "Prevents overpopulation of small mammals.",
      status: "Vulnerable",
      statusFact: "Threatened by deforestation and killing.",
      size: "1-1.5 m",
      sizeFact: "Slender yet powerful.",
      reproduction: "12-20 eggs per clutch",
      reproductionFact: "Eggs incubate for about 2 months."
    },
    "Tamaraw": {
      description: "The Tamaraw (Bubalus mindorensis), a dwarf buffalo endemic to Mindoro, is the only wild bovine native to the Philippines. Its horns curve into a 'V' shape, making it distinct from the carabao.",
      habitat: "Grasslands and forest edges of Mindoro",
      habitatFact: "Prefers highland grasslands.",
      lifespan: "15-20 years",
      lifespanFact: "Lives longer under conservation programs.",
      diet: "Grasses and shrubs",
      dietFact: "Feeds early in the morning and late afternoon.",
      status: "Critically Endangered",
      statusFact: "Population below 500.",
      size: "102-110 cm shoulder height",
      sizeFact: "Compact, muscular build.",
      reproduction: "1 calf every 2 years",
      reproductionFact: "Gestation period lasts 10-11 months."
    },
    "Tarsier": {
      description: "The Philippine Tarsier (Carlito syrichta) is one of the world’s smallest primates. Its enormous eyes and elongated fingers allow it to hunt insects at night with extraordinary precision.",
      habitat: "Forests of Bohol, Leyte, and Samar",
      habitatFact: "Prefers secondary and dense forests.",
      lifespan: "12-20 years",
      lifespanFact: "Can live up to two decades in care.",
      diet: "Insects and small vertebrates",
      dietFact: "Catches prey using quick leaps.",
      status: "Near Threatened",
      statusFact: "Protected in sanctuaries in Bohol.",
      size: "10-15 cm",
      sizeFact: "Tiny but with huge eyes.",
      reproduction: "1 offspring per year",
      reproductionFact: "Gestation lasts about 6 months."
    },

    // ==================== FLORA ====================
    "Banaba": {
      description: "Banaba (Lagerstroemia speciosa) is a flowering tree known for its purple blossoms. Its leaves are used in traditional medicine to treat diabetes and kidney ailments.",
      habitat: "Lowland forests, coastal areas",
      habitatFact: "Thrives in warm, humid environments.",
      lifespan: "50-70 years",
      lifespanFact: "A long-lived tropical tree.",
      diet: "Photosynthetic plant",
      dietFact: "Converts sunlight into energy.",
      status: "Least Concern",
      statusFact: "Common and cultivated widely.",
      size: "Up to 15 m tall",
      sizeFact: "Medium-sized deciduous tree.",
      reproduction: "Seeds from flowers",
      reproductionFact: "Dispersed by wind and animals."
    },
    "Gumamela": {
      description: "Gumamela (Hibiscus rosa-sinensis) is a tropical shrub admired for its colorful flowers. It belongs to the Malvaceae family and is used in herbal medicine and ornamentation.",
      habitat: "Gardens and urban areas",
      habitatFact: "Thrives in sunny environments.",
      lifespan: "1-5 years",
      lifespanFact: "Short-lived ornamental shrub.",
      diet: "Photosynthetic plant",
      dietFact: "Requires daily sunlight exposure.",
      status: "Least Concern",
      statusFact: "Common across tropical countries.",
      size: "1-3 m tall",
      sizeFact: "Bushy shrub form.",
      reproduction: "Seeds and cuttings",
      reproductionFact: "Easily propagated through stem cuttings."
    },
    "Ilang-Ilang": {
      description: "Ilang-Ilang (Cananga odorata) produces highly fragrant flowers used in world-famous perfumes. Its essential oils are prized for relaxation and natural healing.",
      habitat: "Lowland tropical forests",
      habitatFact: "Native to humid, fertile soils.",
      lifespan: "50 years",
      lifespanFact: "A slow-growing but long-living tree.",
      diet: "Photosynthetic plant",
      dietFact: "Produces oil-rich petals.",
      status: "Least Concern",
      statusFact: "Common in Southeast Asia.",
      size: "10-20 m tall",
      sizeFact: "Graceful, tall tree with drooping flowers.",
      reproduction: "Seeds from flowers",
      reproductionFact: "Pollinated by nocturnal moths."
    },
    "Narra": {
      description: "The Narra (Pterocarpus indicus) is the national tree of the Philippines. Valued for its strong, reddish wood, it symbolizes resilience and strength.",
      habitat: "Lowland forests and riverbanks",
      habitatFact: "Thrives in both dry and moist soil.",
      lifespan: "100+ years",
      lifespanFact: "Can live for centuries.",
      diet: "Photosynthetic plant",
      dietFact: "Hardwood tree with nitrogen-fixing roots.",
      status: "Vulnerable",
      statusFact: "Overharvested for timber.",
      size: "30-40 m tall",
      sizeFact: "Large canopy tree.",
      reproduction: "Seeds from pods",
      reproductionFact: "Pods float on water for dispersal."
    },
    "Rafflesia": {
      description: "Rafflesia (Rafflesia philippensis) produces the world’s largest flower. It is a parasitic plant with no leaves or roots, depending on a host vine for survival.",
      habitat: "Rainforests of Luzon and Mindanao",
      habitatFact: "Requires undisturbed forests.",
      lifespan: "Few days (flower lifespan)",
      lifespanFact: "Flowers bloom briefly then decay.",
      diet: "Parasitic plant",
      dietFact: "Absorbs nutrients from host vine.",
      status: "Endangered",
      statusFact: "Threatened by forest disturbance.",
      size: "Up to 65 cm diameter",
      sizeFact: "One of the world’s largest flowers.",
      reproduction: "Pollinated by flies",
      reproductionFact: "Emits odor of decaying flesh."
    },
    "Sampaguita": {
      description: "Sampaguita (Jasminum sambac) is the national flower of the Philippines, known for its pure white blooms and sweet fragrance, symbolizing purity and humility.",
      habitat: "Lowland and urban gardens",
      habitatFact: "Flourishes in sunny areas.",
      lifespan: "5-10 years",
      lifespanFact: "Perennial flowering shrub.",
      diet: "Photosynthetic plant",
      dietFact: "Produces fragrant oils in petals.",
      status: "Least Concern",
      statusFact: "Commonly cultivated.",
      size: "1-2 m tall",
      sizeFact: "Compact vine-like shrub.",
      reproduction: "Seeds and cuttings",
      reproductionFact: "Propagated easily by stem cuttings."
    },
    "Rosal": {
      description: "Rosal (Gardenia jasminoides) is a fragrant white-flowered shrub belonging to the Rubiaceae family. It is admired for its beauty and is often used in gardens, ceremonies, and perfumes.",
      habitat: "Tropical and subtropical regions",
      habitatFact: "Prefers warm, moist, and sunny locations.",
      lifespan: "10-15 years",
      lifespanFact: "Can bloom for years with proper care.",
      diet: "Photosynthetic plant",
      dietFact: "Needs regular watering and sunlight.",
      status: "Least Concern",
      statusFact: "Widely cultivated as an ornamental plant.",
      size: "1-3 m tall",
      sizeFact: "Compact, dense shrub with glossy leaves.",
      reproduction: "Seeds and cuttings",
      reproductionFact: "Commonly propagated by stem cuttings."
    },
    "Waling-Waling": {
      description: "Waling-Waling (Vanda sanderiana) is a rare Philippine orchid known as the 'Queen of Orchids.' It is prized for its vibrant purple and pink flowers.",
      habitat: "Rainforests of Mindanao",
      habitatFact: "Grows on tall trees as an epiphyte.",
      lifespan: "Several decades",
      lifespanFact: "Can bloom annually for years.",
      diet: "Epiphytic plant",
      dietFact: "Absorbs moisture from the air.",
      status: "Endangered",
      statusFact: "Threatened by overcollection.",
      size: "30-60 cm tall",
      sizeFact: "Has thick leaves and aerial roots.",
      reproduction: "Seeds and tissue culture",
      reproductionFact: "Rarely reproduces naturally."
    }
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').innerText;
      const info = data[title];
      if (!info) return;

      modalTitle.innerText = title;
      modalDescription.innerText = info.description;

      document.getElementById('habitat').innerText = info.habitat || "-";
      document.getElementById('habitatFact').innerText = info.habitatFact || "-";
      document.getElementById('lifespan').innerText = info.lifespan || "-";
      document.getElementById('lifespanFact').innerText = info.lifespanFact || "-";
      document.getElementById('diet').innerText = info.diet || "-";
      document.getElementById('dietFact').innerText = info.dietFact || "-";
      document.getElementById('status').innerText = info.status || "-";
      document.getElementById('statusFact').innerText = info.statusFact || "-";
      document.getElementById('size').innerText = info.size || "-";
      document.getElementById('sizeFact').innerText = info.sizeFact || "-";
      document.getElementById('reproduction').innerText = info.reproduction || "-";
      document.getElementById('reproductionFact').innerText = info.reproductionFact || "-";

      modal.style.display = 'flex';
    });
  });

  closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
});