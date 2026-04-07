import img1 from "../assets/pictures/img1.jpg";
import img2 from "../assets/pictures/img2.jpg";
import img3 from "../assets/pictures/img3.jpg";
import img4 from "../assets/pictures/img4.jpg";
import img5 from "../assets/pictures/img5.jpg";
import img6 from "../assets/pictures/img6.jpg";
import img7 from "../assets/pictures/img7.jpg";
import img8 from "../assets/pictures/img8.jpg";

export const menuCategories = [
  { id: "all", label: "All blends" },
  { id: "signature", label: "Signature" },
  { id: "creamy", label: "Creamy" },
  { id: "matcha", label: "Matcha" },
  { id: "refreshers", label: "Refreshers" },
];

export const menuItems = [
  {
    id: "brown-sugar-velvet",
    name: "Brown Sugar Velvet",
    price: "P145",
    rating: "4.9",
    badge: "Best seller",
    note: "Warm pearls and caramel ribbons",
    description:
      "A silky black tea base folded with fresh milk and slow-cooked brown sugar for that glossy dessert finish.",
    categories: ["signature", "creamy"],
    image: img1,
    overlay:
      "linear-gradient(135deg, rgba(111, 64, 32, 0.82), rgba(189, 128, 73, 0.45), rgba(247, 224, 192, 0.18))",
    tags: ["Caramel-rich", "Soft pearls"],
    featured: true,
  },
  {
    id: "matcha-cloud-latte",
    name: "Matcha Cloud Latte",
    price: "P155",
    rating: "4.8",
    badge: "New favorite",
    note: "Smooth green tea with a creamy lift",
    description:
      "Premium matcha meets velvety milk foam for a bright, earthy cup that still feels rich and comforting.",
    categories: ["signature", "matcha"],
    image: img2,
    overlay:
      "linear-gradient(135deg, rgba(90, 120, 86, 0.82), rgba(173, 190, 133, 0.42), rgba(241, 236, 212, 0.18))",
    tags: ["Earthy", "Creamy"],
    featured: true,
  },
  {
    id: "taro-moon-cream",
    name: "Taro Moon Cream",
    price: "P150",
    rating: "4.8",
    badge: "Cozy pick",
    note: "Nutty, mellow, and soft on the finish",
    description:
      "A pastel taro blend with creamy texture and mellow sweetness that lands somewhere between playful and luxe.",
    categories: ["creamy"],
    image: img3,
    overlay:
      "linear-gradient(135deg, rgba(120, 93, 126, 0.78), rgba(193, 165, 204, 0.4), rgba(252, 243, 239, 0.18))",
    tags: ["Nutty", "Pastel"],
    featured: false,
  },
  {
    id: "strawberry-jasmine-sparkle",
    name: "Strawberry Jasmine Sparkle",
    price: "P140",
    rating: "4.7",
    badge: "Bright sip",
    note: "Fruity layers with a floral finish",
    description:
      "Jasmine tea steeped with strawberry notes for a refreshing cup that feels clean, playful, and lightly sweet.",
    categories: ["refreshers"],
    image: img4,
    overlay:
      "linear-gradient(135deg, rgba(176, 79, 86, 0.78), rgba(248, 176, 173, 0.38), rgba(255, 241, 236, 0.18))",
    tags: ["Fresh", "Floral"],
    featured: false,
  },
  {
    id: "wintermelon-silk",
    name: "Wintermelon Silk",
    price: "P135",
    rating: "4.8",
    badge: "House blend",
    note: "Toasty sweetness with a clean milk finish",
    description:
      "A soft wintermelon profile balanced with fresh milk and black tea for a round, mellow sweetness.",
    categories: ["signature", "creamy"],
    image: img5,
    overlay:
      "linear-gradient(135deg, rgba(138, 90, 43, 0.8), rgba(211, 165, 116, 0.38), rgba(249, 234, 211, 0.2))",
    tags: ["Toasty", "Balanced"],
    featured: true,
  },
  {
    id: "lychee-rose-cooler",
    name: "Lychee Rose Cooler",
    price: "P145",
    rating: "4.7",
    badge: "Fresh pick",
    note: "Soft floral aroma with fruit brightness",
    description:
      "Lychee and rose bring a polished, airy finish to this tea-forward refresher made for warm afternoons.",
    categories: ["refreshers"],
    image: img6,
    overlay:
      "linear-gradient(135deg, rgba(173, 106, 114, 0.78), rgba(241, 196, 193, 0.35), rgba(255, 245, 239, 0.2))",
    tags: ["Light", "Aromatic"],
    featured: false,
  },
  {
    id: "hojicha-honey-foam",
    name: "Hojicha Honey Foam",
    price: "P160",
    rating: "4.9",
    badge: "Premium roast",
    note: "Roasted tea depth with sweet cream",
    description:
      "Toasty hojicha layered with honey cream for a deeper, smoother cup that feels extra polished.",
    categories: ["creamy", "matcha"],
    image: img7,
    overlay:
      "linear-gradient(135deg, rgba(88, 65, 51, 0.82), rgba(181, 136, 104, 0.42), rgba(246, 227, 206, 0.18))",
    tags: ["Roasted", "Honeyed"],
    featured: false,
  },
  {
    id: "mango-green-glow",
    name: "Mango Green Glow",
    price: "P138",
    rating: "4.6",
    badge: "Weekend mood",
    note: "Juicy mango with a crisp tea base",
    description:
      "A bright green tea refresher touched with mango for a juicy sip that still feels clean and elegant.",
    categories: ["refreshers"],
    image: img8,
    overlay:
      "linear-gradient(135deg, rgba(175, 120, 31, 0.8), rgba(238, 193, 103, 0.4), rgba(255, 247, 225, 0.18))",
    tags: ["Juicy", "Light"],
    featured: false,
  },
];
