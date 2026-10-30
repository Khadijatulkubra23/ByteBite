export const STAGES = ['prepping', 'ready', 'picked-up']

export const initialOrders = [
  { id: 101, vendorId: 'burger-shack', items: ['Classic Smash Burger', 'Loaded Fries'], stage: 'prepping', prepTime: 90, elapsed: 30 },
  { id: 102, vendorId: 'brew-beans', items: ['Iced Latte'], stage: 'prepping', prepTime: 45, elapsed: 12 },
  { id: 105, vendorId: 'desi-bites', items: ['Chicken Roll'], stage: 'prepping', prepTime: 60, elapsed: 5 },
  { id: 103, vendorId: 'desi-bites', items: ['Chana Chaat', 'Samosa Plate'], stage: 'ready', prepTime: 60, elapsed: 60 },
  { id: 106, vendorId: 'brew-beans', items: ['Karak Chai', 'Chocolate Muffin'], stage: 'ready', prepTime: 50, elapsed: 50 },
  { id: 104, vendorId: 'burger-shack', items: ['Veggie Bean Burger'], stage: 'picked-up', prepTime: 75, elapsed: 75 },
  { id: 107, vendorId: 'burger-shack', items: ['Crispy Chicken Burger'], stage: 'picked-up', prepTime: 70, elapsed: 70 },
]