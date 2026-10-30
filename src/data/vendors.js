export const DIETARY_TAGS = ['vegan', 'halal', 'gluten-free']

export const tagLabel = (t) => t.replace(/(^|-)\w/g, (m) => m.toUpperCase())

export const vendors = [
  {
    id: 'burger-shack',
    name: 'Burger Shack',
    icon: '🍔',
    tagline: 'Smashed, stacked, served fast.',
    items: [
      { id: 'bs-1', name: 'Classic Smash Burger', emoji: '🍔', price: 650, tags: ['halal'] },
      { id: 'bs-2', name: 'Crispy Chicken Burger', emoji: '🍗', price: 600, tags: ['halal'] },
      { id: 'bs-3', name: 'Veggie Bean Burger', emoji: '🥬', price: 550, tags: ['vegan', 'halal'] },
      { id: 'bs-4', name: 'Loaded Fries', emoji: '🍟', price: 350, tags: ['vegan', 'halal'] },
    ],
  },
  {
    id: 'brew-beans',
    name: 'Brew & Beans',
    icon: '☕',
    tagline: 'Coffee, chai and quick bites.',
    items: [
      { id: 'bb-1', name: 'Iced Latte', emoji: '🧊', price: 450, tags: ['halal', 'gluten-free'] },
      { id: 'bb-2', name: 'Karak Chai', emoji: '🫖', price: 200, tags: ['halal', 'gluten-free'] },
      { id: 'bb-3', name: 'Oat Milk Cappuccino', emoji: '☕', price: 500, tags: ['vegan', 'halal', 'gluten-free'] },
      { id: 'bb-4', name: 'Chocolate Muffin', emoji: '🧁', price: 300, tags: ['halal'] },
    ],
  },
  {
    id: 'desi-bites',
    name: 'Desi Bites',
    icon: '🍛',
    tagline: 'Street food, campus style.',
    items: [
      { id: 'db-1', name: 'Chicken Biryani Box', emoji: '🍛', price: 500, tags: ['halal', 'gluten-free'] },
      { id: 'db-2', name: 'Chana Chaat', emoji: '🥗', price: 250, tags: ['vegan', 'halal', 'gluten-free'] },
      { id: 'db-3', name: 'Samosa Plate', emoji: '🥟', price: 200, tags: ['vegan', 'halal'] },
      { id: 'db-4', name: 'Chicken Roll', emoji: '🌯', price: 350, tags: ['halal'] },
    ],
  },
]