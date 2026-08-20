export type FieldNote = {
  ids: string[];
  label: string;
  detail: string;
};

export const officialMedia = {
  icon: {
    src: "https://tr.rbxcdn.com/180DAY-4a60cdb52ef5d06615a01f173cea7129/512/512/Image/Png/noFilter",
    alt: "Official Tap Squishies and Trade icon showing a calico cat-shaped squishy coming out of an orange box",
    source: "Official Roblox game icon",
    factId: "TSQ-057",
  },
  stretch: {
    src: "https://tr.rbxcdn.com/180DAY-573c53f375f9a99d6922a2115f46de43/768/432/Image/Png/noFilter",
    alt: "Official artwork of a purple and white squishy being stretched with coins around it",
    source: "Official Roblox media image 89305312129658",
    factId: "TSQ-059",
  },
  trade: {
    src: "https://tr.rbxcdn.com/180DAY-cd6a59d9d74be8632d969a63a9904384/768/432/Image/Png/noFilter",
    alt: "Official artwork of two players at a trade table with squishies and trade symbols",
    source: "Official Roblox media image 95263239299179",
    factId: "TSQ-060",
  },
};

export const snapshot = {
  observedAt: "August 20, 2026 at 02:37 UTC",
  stats: [
    { value: "622", label: "players online", id: "TSQ-064" },
    { value: "2,543,036", label: "cumulative visits", id: "TSQ-065" },
    { value: "10,807", label: "favorites", id: "TSQ-066" },
    { value: "96.3%", label: "rating snapshot", id: "TSQ-067" },
  ],
};

export const revealTape = [
  { name: "Sushi Triple Keycap", shown: "0.05%", id: "TSQ-145" },
  { name: "Neapolitan Triple Keycap", shown: "22%", id: "TSQ-146" },
  { name: "Red Gummy Bear", shown: "17%", id: "TSQ-147" },
  { name: "Mango Gummy Bear", shown: "5.00%", id: "TSQ-148" },
  { name: "Icy Triple Keycap", shown: "28%", id: "TSQ-149" },
  { name: "RGB Triple Keycap", shown: "17%", id: "TSQ-150" },
  { name: "Campfire Triple Keycap", shown: "5.00%", id: "TSQ-151" },
  { name: "Clover Triple Keycap", shown: "4.00%", id: "TSQ-152" },
  { name: "Grape Popsicle", shown: "22%", id: "TSQ-174" },
  { name: "Very Berry Popsicle", shown: "8.00%", id: "TSQ-175" },
  { name: "Watermelon Popsicle", shown: "5.00%", id: "TSQ-176" },
  { name: "Strawberry Lemonade Popsicle", shown: "13%", id: "TSQ-177" },
  { name: "Orange Creamsicle Popsicle", shown: "4.00%", id: "TSQ-178" },
  { name: "Blue Raspberry Popsicle", shown: "28%", id: "TSQ-179" },
  { name: "Spider Guy Popsicle", shown: "3.00%", id: "TSQ-180" },
  { name: "Mint Popsicle", shown: "17%", id: "TSQ-181" },
];

export const pageFactMap = {
  home: [
    "TSQ-001", "TSQ-004", "TSQ-009", "TSQ-013", "TSQ-022", "TSQ-026", "TSQ-027", "TSQ-033", "TSQ-034", "TSQ-035", "TSQ-036", "TSQ-037", "TSQ-038", "TSQ-040", "TSQ-057", "TSQ-058", "TSQ-059", "TSQ-060", "TSQ-061", "TSQ-062", "TSQ-063", "TSQ-064", "TSQ-065", "TSQ-066", "TSQ-067",
  ],
  beginner: [
    "TSQ-005", "TSQ-020", "TSQ-021", "TSQ-023", "TSQ-028", "TSQ-029", "TSQ-030", "TSQ-031", "TSQ-032", "TSQ-121", "TSQ-123", "TSQ-131", "TSQ-142", "TSQ-154", "TSQ-155", "TSQ-157", "TSQ-158", "TSQ-159", "TSQ-160", "TSQ-161", "TSQ-167", "TSQ-168", "TSQ-169",
  ],
  gameplay: [
    "TSQ-019", "TSQ-124", "TSQ-125", "TSQ-126", "TSQ-127", "TSQ-129", "TSQ-132", "TSQ-133", "TSQ-134", "TSQ-136", "TSQ-137", "TSQ-138", "TSQ-143", "TSQ-144", "TSQ-162", "TSQ-163", "TSQ-164", "TSQ-183",
  ],
  progression: [
    "TSQ-007", "TSQ-008", "TSQ-139", "TSQ-140", "TSQ-145", "TSQ-146", "TSQ-147", "TSQ-148", "TSQ-149", "TSQ-150", "TSQ-151", "TSQ-152", "TSQ-153", "TSQ-165", "TSQ-166", "TSQ-170", "TSQ-174", "TSQ-175", "TSQ-176", "TSQ-177", "TSQ-178", "TSQ-179", "TSQ-180", "TSQ-181",
  ],
  mistakes: [
    "TSQ-128", "TSQ-130", "TSQ-135", "TSQ-141", "TSQ-156", "TSQ-171", "TSQ-172", "TSQ-173", "TSQ-182",
  ],
  faq: ["TSQ-002", "TSQ-003", "TSQ-006", "TSQ-068", "TSQ-069", "TSQ-070", "TSQ-122"],
} as const;

export const homeLedger: FieldNote[] = [
  {
    ids: ["TSQ-001", "TSQ-004", "TSQ-009", "TSQ-013"],
    label: "Official identity",
    detail: "Tap Squishies and Trade is the official English title. Its Roblox listing belongs to Mango Matcha Studio and resolves to the canonical experience URL used by this guide.",
  },
  {
    ids: ["TSQ-022", "TSQ-026", "TSQ-027", "TSQ-040"],
    label: "Entry and classification",
    detail: "The official page listed entry at 0 Robux. Roblox classified it as a Simulation / Incremental Simulator with Minimal content maturity and a suitable-for-everyone descriptor when checked.",
  },
  {
    ids: ["TSQ-033", "TSQ-034", "TSQ-035", "TSQ-036", "TSQ-037", "TSQ-038"],
    label: "What the game advertises",
    detail: "The official description highlights satisfying squish effects and more than 80 collectibles, naming Dumplings, Needoh and Keycaps. Developer tags also frame the experience around unboxing, trading, fidgeting, ASMR and collecting.",
  },
  {
    ids: ["TSQ-057", "TSQ-058", "TSQ-059", "TSQ-060", "TSQ-061", "TSQ-062", "TSQ-063"],
    label: "Official visual language",
    detail: "Official artwork repeatedly shows squeezable toy forms, coins, blind-box packaging and shared trade-table actions. Those images inspire this guide’s tactile arcade treatment; they do not prove hidden mechanics.",
  },
  {
    ids: ["TSQ-064", "TSQ-065", "TSQ-066", "TSQ-067"],
    label: "One-time audience snapshot",
    detail: "At the dated API check, 622 players were online, visits were 2,543,036, favorites were 10,807, and the page summarized 7,646 ratings at about 96.3%. These are historical snapshot values, not live counters.",
  },
];

export const faqFacts: FieldNote[] = [
  {
    ids: ["TSQ-002", "TSQ-003", "TSQ-006"],
    label: "Which Roblox experience is this?",
    detail: "The research resolves Universe 10454734391 to root Place 85104270335777. At verification time, that universe listed one place.",
  },
  {
    ids: ["TSQ-068"],
    label: "How full were public servers?",
    detail: "Snapshot only: at August 20, 2026 02:37 UTC, the public-server endpoint returned 34 instances and 596 total occupants, with listed occupancy from 1 to 23 and capacity 30.",
  },
  {
    ids: ["TSQ-069", "TSQ-070"],
    label: "Were badges or game passes listed?",
    detail: "Snapshot only: the official endpoints returned zero badge records and zero game-pass records at the verification time. This is not a promise about the current catalog.",
  },
  {
    ids: ["TSQ-122"],
    label: "Is the experience localized?",
    detail: "At verification time Roblox returned 23 supported locale records, 17 with non-empty localized titles.",
  },
];
