export interface CoffeeShop {
  id: number;
  name: string;
  location: string;
  coffeeBeans: string;
  commentary: string;
}

export const coffeeShops: CoffeeShop[] = [
  {
    id: 1,
    name: "Brown Bean Café",
    location: "Downtown Seattle",
    coffeeBeans: "Ethiopian Yirgacheffe",
    commentary:
      "A cozy neighborhood spot with excellent pour-over coffee. The baristas really know their craft, and the warm ambiance makes it perfect for a leisurely morning.",
  },
  {
    id: 2,
    name: "Roasted & Co.",
    location: "Capitol Hill, Denver",
    coffeeBeans: "Colombian Geisha",
    commentary:
      "Stunning latte art and a rotating selection of single-origin beans. The espresso has a smooth, buttery finish that keeps me coming back.",
  },
  {
    id: 3,
    name: "Morning Grind",
    location: "Pearl District, Portland",
    coffeeBeans: "Kenyan AA",
    commentary:
      "A minimalist space that celebrates quality over everything else. Their filter coffee is crisp and bright—exactly what I needed for a productive work session.",
  },
];
