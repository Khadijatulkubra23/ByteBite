export const STAGES = ['prepping', 'ready', 'picked-up']

export const initialOrders = [
  { id: 101, vendorId: 'burger-shack', items: ['Classic Smash Burger', 'Loaded Fries'], stage: 'prepping', prepTime: 90 },
  { id: 102, vendorId: 'brew-beans', items: ['Iced Latte'], stage: 'prepping', prepTime: 45 },
  { id: 103, vendorId: 'desi-bites', items: ['Chana Chaat', 'Samosa Plate'], stage: 'ready', prepTime: 60 },
  { id: 104, vendorId: 'burger-shack', items: ['Veggie Bean Burger'], stage: 'picked-up', prepTime: 75 },
]