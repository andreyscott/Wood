
import { Category, Product } from './types';

export const BUSINESS_NAME = "Sam Standard Furniture";
export const FOCAL_PERSON = "Mr. Sam ";
export const WHATSAPP_NUMBER = "+234";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Sheesham Sofa Set',
    category: Category.LivingRoom,
    description: 'Hand-carved premium Sheesham wood sofa set with high-density foam and luxury fabric.',
    priceStart: 145000,
    materials: ['Sheesham Wood', 'Velvet Fabric', 'High-Density Foam'],
    dimensions: { l: 84, w: 32, h: 36, unit: 'inches' },
    deliveryWeeks: 4,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800'
    ],
    videoUrl: 'https://cdn.static.amplience.net/boconcept/_vid/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/5208e9ff-38cd-4382-82de-c0cbaad6b483/video/8dff8854-dadc-4990-8b57-498ced314ac5.mp4'
  },
  {
    id: '2',
    name: 'Modern Minimalist Bed Frame',
    category: Category.Bedroom,
    description: 'Sleek, modern bed frame made from solid oak with integrated bedside drawers.',
    priceStart: 85000,
    materials: ['Solid Oak', 'Steel Accents'],
    dimensions: { l: 78, w: 72, h: 42, unit: 'inches' },
    deliveryWeeks: 3,
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800',

    ],
    videoUrl: 'https://cdn.static.amplience.net/boconcept/_vid/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/5208e9ff-38cd-4382-82de-c0cbaad6b483/video/8dff8854-dadc-4990-8b57-498ced314ac5.mp4'
  },
  {
    id: '3',
    name: 'Executive Walnut Desk',
    category: Category.Office,
    description: 'Solid walnut desk with live edge and cable management. Perfect for small offices.',
    priceStart: 45000,
    materials: ['Walnut Wood', 'Powder-coated Iron'],
    dimensions: { l: 60, w: 30, h: 30, unit: 'inches' },
    deliveryWeeks: 2,
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800'
    ],
    videoUrl: 'https://cdn.static.amplience.net/boconcept/_vid/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/5208e9ff-38cd-4382-82de-c0cbaad6b483/video/8dff8854-dadc-4990-8b57-498ced314ac5.mp4'
  },
  {
    id: '4',
    name: 'Mahogany Dining Table (6 Seater)',
    category: Category.Dining,
    description: 'Traditional mahogany dining table with detailed polish and sturdy build.',
    priceStart: 110000,
    materials: ['Mahogany Wood', 'Tempered Glass Top'],
    dimensions: { l: 72, w: 36, h: 30, unit: 'inches' },
    deliveryWeeks: 5,
    images: [
      'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&q=80&w=800'
    ],
    videoUrl: 'https://cdn.static.amplience.net/boconcept/_vid/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/5208e9ff-38cd-4382-82de-c0cbaad6b483/video/8dff8854-dadc-4990-8b57-498ced314ac5.mp4'
  },
  {
    id: '5',
    name: 'Scandinavian Coffee Table',
    category: Category.LivingRoom,
    description: 'Lightweight and stylish coffee table made from Ash wood.',
    priceStart: 12000,
    materials: ['Ash Wood', 'Matte Finish'],
    dimensions: { l: 36, w: 24, h: 18, unit: 'inches' },
    deliveryWeeks: 1,
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800'
    ],
    videoUrl: 'https://cdn.static.amplience.net/boconcept/_vid/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/5208e9ff-38cd-4382-82de-c0cbaad6b483/video/8dff8854-dadc-4990-8b57-498ced314ac5.mp4'

  },
  {
    id: '6',
    name: 'Modern Open Shelving Unit',
    category: Category.Interiors,
    description: 'A versatile floor-to-ceiling shelving unit with modular compartments for a complete interior solution.',
    priceStart: 185000,
    materials: ['Matte Black Steel', 'Walnut Veneer', 'LED Lighting'],
    dimensions: { l: 96, w: 16, h: 108, unit: 'inches' },
    deliveryWeeks: 6,
    images: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    ],
    videoUrl: 'https://cdn.static.amplience.net/boconcept/_vid/a3bc902a-c3ac-4d31-a2c1-b39f00bcdfe9/5208e9ff-38cd-4382-82de-c0cbaad6b483/video/8dff8854-dadc-4990-8b57-498ced314ac5.mp4'
  }
];
