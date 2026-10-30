export const DIETARY_TAGS = ['vegan', 'halal', 'gluten-free']

export const vendors = [
  {
    id: 'burger-shack',
    name: 'Burger Shack',
    tagline: 'Smashed, stacked, served fast.',
    color: '#ff4d2e',
    items: [
      { id: 'bs-1', name: 'Classic Smash Burger', price: 650, tags: ['halal'] },
      { id: 'bs-2', name: 'Crispy Chicken Burger', price: 600, tags: ['halal'] },
      { id: 'bs-3', name: 'Veggie Bean Burger', price: 550, tags: ['vegan', 'halal'] },
      { id: 'bs-4', name: 'Loaded Fries', price: 350, tags: ['halal', 'vegan'] },
    ],
  },
  {
    id: 'brew-beans',
    name: 'Brew & Beans',
    tagline: 'Coffee, chai and quick bites.',
    color: '#ffc531',
    items: [
      { id: 'bb-1', name: 'Iced Latte', price: 450, tags: ['halal', 'gluten-free'] },
      { id: 'bb-2', name: 'Karak Chai', price: 200, tags: ['halal', 'gluten-free'] },
      { id: 'bb-3', name: 'Oat Milk Cappuccino', price: 500, tags: ['vegan', 'halal', 'gluten-free'] },
      { id: 'bb-4', name: 'Chocolate Muffin', price: 300, tags: ['halal'] },
    ],
  },
  {
    id: 'desi-bites',
    name: 'Desi Bites',
    tagline: 'Street food, campus style.',
    color: '#2bb673',
    items: [
      { id: 'db-1', name: 'Chicken Biryani Box', price: 500, tags: ['halal', 'gluten-free'] },
      { id: 'db-2', name: 'Chana Chaat', price: 250, tags: ['vegan', 'halal', 'gluten-free'] },
      { id: 'db-3', name: 'Samosa Plate', price: 200, tags: ['vegan', 'halal'] },
      { id: 'db-4', name: 'Chicken Roll', price: 350, tags: ['halal'] },
    ],
  },
]