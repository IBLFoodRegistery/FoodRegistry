
import { Order } from './order';

export const OrdersList: Order[] = [
  { id: 1, name: 'Order One', list: ['milk','sugar',], status:'pending'},
  { id: 2, name: 'Order Two', list: ['eggs','milk','bananas'], status:'processed' },
  { id: 3, name: 'Order Three', list: ['sugar','cereal',], status:'pending'},
  { id: 4, name: 'Order Four', list: ['bananas','oranges','apples'], status:'pending' },
  { id: 5, name: 'Order Five' , list: ['bananas','oranges','apples'], status:'pending'},
  { id: 6, name: 'Order Six' , list: ['eggs','bananas'], status:'pending'},
  { id: 7, name: 'Order Seven', list: ['cereal','apples','milk','beer'], status:'processed'},
  { id: 8, name: 'Order Eight' , list: ['honey','apples','chips'], status:'pending'},
  { id: 9, name: 'Order Nine' , list: ['chips','beer','cookies'], status:'pending'},
  { id: 10, name: 'Order Ten', list: ['ham','soda',],status:'processed' }
];