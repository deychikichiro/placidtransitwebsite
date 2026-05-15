export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  details: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: "local-moving",
    title: "Local Moving",
    shortTitle: "Local Moving",
    icon: "🏠",
    tagline: "Seamless moves across Chicago and suburbs.",
    description:
      "Whether you're moving a studio apartment or a 5-bedroom house across town, Placid Transit handles every detail — furniture protection, careful loading, and safe delivery.",
    features: [
      "Same-city & suburb moves",
      "Apartments, condos & houses",
      "Furniture protection & wrapping",
      "Professional loading & unloading",
      "On-time, every time",
      "Free handyman service included",
    ],
    details: [
      "Our local moving team is based in the Chicago area and knows the neighborhoods — traffic patterns, building rules, elevator reservations — so your move goes smoothly from the first box to the last.",
      "We bring all the equipment: moving blankets, dollies, floor protection, and straps. Your belongings are wrapped and secured before they ever touch the truck.",
      "We service all of Chicago's neighborhoods and suburbs, including the Indiana and Wisconsin border areas.",
    ],
    cta: "Get a Local Moving Quote",
  },
  {
    slug: "regional-moving",
    title: "Regional Moving",
    shortTitle: "Regional",
    icon: "🚛",
    tagline: "Chicago suburbs, Indiana & Wisconsin borders.",
    description:
      "Moving to the suburbs or across state lines into Indiana or Wisconsin? We cover the full Chicagoland region and border areas with the same care as a local move.",
    features: [
      "All Chicago suburbs",
      "Indiana border areas (Hammond, Gary, Merrillville)",
      "Wisconsin border areas (Kenosha, Racine, Pleasant Prairie)",
      "Full inventory documentation",
      "Furniture padding & blankets",
      "On-time delivery guaranteed",
    ],
    details: [
      "Placid Transit serves the greater Chicagoland area including all Illinois suburbs and the border regions of Indiana and Wisconsin.",
      "Every regional move includes furniture protection, careful loading, and a confirmed arrival window — no surprises.",
      "We communicate throughout the entire move, giving you updates at every stage.",
    ],
    cta: "Get a Regional Moving Quote",
  },
  {
    slug: "commercial-moving",
    title: "Commercial Moving",
    shortTitle: "Commercial",
    icon: "🏢",
    tagline: "Minimize downtime. Maximize efficiency.",
    description:
      "Office relocations, retail moves, warehouse transfers — we plan and execute commercial moves that minimize disruption and get your business back up and running fast.",
    features: [
      "Office & corporate relocations",
      "Retail & restaurant moves",
      "Warehouse & storage transfers",
      "After-hours & weekend moves",
      "Equipment & tech handling",
      "Modular furniture assembly",
    ],
    details: [
      "Every hour your business is down costs money. Our commercial team works around your schedule — including nights and weekends — to minimize disruption.",
      "We have experience moving offices of all sizes, from small suites to full-floor corporate headquarters. We handle workstations, servers, filing systems, and specialty equipment.",
      "Before the move, we develop a detailed plan with your team so everyone knows what to expect on move day.",
    ],
    cta: "Get a Commercial Moving Quote",
  },
  {
    slug: "specialty-moving",
    title: "Specialty Moving",
    shortTitle: "Specialty",
    icon: "🎹",
    tagline: "We move what others won't touch.",
    description:
      "Pianos, pool tables, safes, fine art, antiques — some items demand specialized knowledge and equipment. Our specialty team has both.",
    features: [
      "Piano moving (upright & grand)",
      "Pool table disassembly & moving",
      "Safe & vault moving",
      "Fine art & antiques",
      "Heavy equipment",
      "Museum-grade handling",
    ],
    details: [
      "Not every mover can safely move a grand piano or disassemble and reassemble a slate pool table. We invest in the right tools and training to do it properly.",
      "Our specialty moving team handles these items with purpose-built equipment — piano boards, slate dollies, artwork crates — to ensure zero damage.",
      "We take photos before and after every specialty item to document condition throughout the move.",
    ],
    cta: "Get a Specialty Moving Quote",
  },
  {
    slug: "packing-unpacking",
    title: "Packing & Unpacking",
    shortTitle: "Packing",
    icon: "📦",
    tagline: "Packed right. Delivered safe.",
    description:
      "Let our team handle the most time-consuming part of moving. Professional packing protects your belongings and saves you hours of stress.",
    features: [
      "Full home packing service",
      "Partial packing (kitchen, fragile, etc.)",
      "Professional packing materials",
      "Dish pack & glass wrapping",
      "Wardrobe boxes",
      "Unpacking & box removal",
    ],
    details: [
      "Our packers are trained to pack quickly without cutting corners. We use quality boxes, packing paper, bubble wrap, and foam for fragile items.",
      "We offer full-home packing, room-by-room packing, or just fragile-only packing — whatever fits your needs and budget.",
      "Unpacking service is available too — we unpack your boxes and take all the cardboard with us so you're settled in from day one.",
    ],
    cta: "Get a Packing Quote",
  },
  {
    slug: "demolition-junk-removal",
    title: "Demolition & Junk Removal",
    shortTitle: "Junk Removal",
    icon: "🗑️",
    tagline: "Clear it out. Clean slate guaranteed.",
    description:
      "From old furniture and appliances to light demo work, Placid Transit removes the unwanted so you can move forward with a clean space.",
    features: [
      "Furniture & appliance removal",
      "Estate cleanouts",
      "Construction debris removal",
      "Light interior demolition",
      "Same-day service available",
      "Responsible disposal & donation",
    ],
    details: [
      "Moving out and leaving items behind? Bought a house with junk in the garage? We handle full property cleanouts quickly and professionally.",
      "Our team can remove old furniture, broken appliances, general debris, and even do light demolition work like removing non-structural walls, flooring, or fixtures.",
      "We sort what can be donated vs. what goes to the dump — minimizing landfill waste where possible.",
    ],
    cta: "Get a Junk Removal Quote",
  },
  {
    slug: "handyman-services",
    title: "Handyman Services",
    shortTitle: "Handyman",
    icon: "🔧",
    tagline: "Settle in from day one. On us.",
    description:
      "TV mounting, furniture assembly, picture hanging — included free with your move. No extra charge, no scheduling hassle.",
    features: [
      "TV mounting (any size, any wall)",
      "Furniture assembly (IKEA & beyond)",
      "Artwork & picture hanging",
      "Curtain rod installation",
      "Shelf mounting",
      "Free with every move",
    ],
    details: [
      "Most movers drop your stuff and leave. We stay and help you get settled. Our handyman service is included at no extra cost with any moving service.",
      "Our team handles TV mounting on any wall type (drywall, brick, tile), furniture assembly from any brand, and precise picture/artwork hanging.",
      "We bring our own tools — you just tell us where you want things.",
    ],
    cta: "Book a Move + Handyman Service",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
