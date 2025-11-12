
import org from '../assets/caradom_organic.png'
import deluxe from '../assets/caradom_deluxe.jpg'
import premium from '../assets/cardamom_premium.jpg'


export const products = [
{
    id: 'cardamom-1',
    name: 'Cardamom - Premium',
    summary: 'Aromatic green cardamom from Idukki hills, carefully processed.',
    grades: ['A', 'B'],
    image: {premium}
},
  {
    id: 'cardamom-2',
    name: 'Cardamom - Deluxe',
    summary: 'Hand-picked cardamom pods offering a strong aroma and bold flavor, ideal for premium export.',
    grades: ['A+', 'A'],
    image: {deluxe}
  },
  {
    id: 'cardamom-3',
    name: 'Cardamom - Organic',
    summary: 'Cultivated using sustainable and chemical-free methods, preserving natural aroma and purity.',
    grades: ['Organic', 'Premium'],
    image: {org}
  }
]