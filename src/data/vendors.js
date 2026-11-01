export const DIETARY_TAGS = ['vegan', 'halal', 'gluten-free']

export const tagLabel = (t) => t.replace(/(^|-)\w/g, (m) => m.toUpperCase())

const img = (name) => `/food/${name}.webp`

export const vendors = [
  {
    id: 'burger-shack',
    name: 'Burger Shack',
    image: img('classic-smash-burger'),
    tagline: 'Smashed, stacked, served fast.',
    items: [
      { id: 'bs-1', name: 'Classic Smash Burger', image: img('classic-smash-burger'), price: 650, tags: ['halal'] },
      { id: 'bs-2', name: 'Crispy Chicken Burger', image: img('crispy-chicken-burger'), price: 600, tags: ['halal'] },
      { id: 'bs-3', name: 'Veggie Bean Burger', image: img('veggie-bean-burger'), price: 550, tags: ['vegan', 'halal'] },
      { id: 'bs-4', name: 'Loaded Fries', image: img('loaded-fries'), price: 350, tags: ['vegan', 'halal'] },
    ],
  },
  {
    id: 'brew-beans',
    name: 'Brew & Beans',
    image: img('iced-latte'),
    tagline: 'Coffee, chai and quick bites.',
    items: [
      { id: 'bb-1', name: 'Iced Latte', image: img('iced-latte'), price: 450, tags: ['halal', 'gluten-free'] },
      { id: 'bb-2', name: 'Karak Chai', image: img('karak-chai'), price: 200, tags: ['halal', 'gluten-free'] },
      { id: 'bb-3', name: 'Oat Milk Cappuccino', image: img('oat-milk-cappuccino'), price: 500, tags: ['vegan', 'halal', 'gluten-free'] },
      { id: 'bb-4', name: 'Chocolate Muffin', image: img('chocolate-muffin'), price: 300, tags: ['halal'] },
    ],
  },
  {
    id: 'desi-bites',
    name: 'Desi Bites',
    image: img('chicken-biryani-box'),
    tagline: 'Street food, campus style.',
    items: [
      { id: 'db-1', name: 'Chicken Biryani Box', image: img('chicken-biryani-box'), price: 500, tags: ['halal', 'gluten-free'] },
      { id: 'db-2', name: 'Chana Chaat', image: img('chana-chaat'), price: 250, tags: ['vegan', 'halal', 'gluten-free'] },
      { id: 'db-3', name: 'Samosa Plate', image: img('samosa-plate'), price: 200, tags: ['vegan', 'halal'] },
      { id: 'db-4', name: 'Chicken Roll', image: img('chicken-roll'), price: 350, tags: ['halal'] },
    ],
  },
]