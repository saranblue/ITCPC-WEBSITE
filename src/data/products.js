import cardamomPremium from '../assets/cardamom_Premium.jpg';
import cardamomDeluxe from '../assets/caradom_deluxe.jpg';
import cardamomOrganic from '../assets/caradom_organic.png';

export const products = [
  {
    id: 'cardamom-1',
    name: 'Cardamom - Premium',
    summary: 'Aromatic green cardamom from Idukki hills, carefully processed.',
    grades: ['A', 'B'],
    image: cardamomPremium
  },
  {
    id: 'cardamom-2',
    name: 'Cardamom - Deluxe',
    summary: 'Hand-picked cardamom pods offering a strong aroma and bold flavor, ideal for premium export.',
    grades: ['A+', 'A'],
    image: cardamomDeluxe
  },
  {
    id: 'cardamom-3',
    name: 'Cardamom - Organic',
    summary: 'Cultivated using sustainable and chemical-free methods, preserving natural aroma and purity.',
    grades: ['Organic', 'Premium'],
    image: cardamomOrganic
  }
];
