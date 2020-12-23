import { createContext } from 'react';

const AppContext = createContext({
  isOpenSidebar: false,
});

export const ProductContext = createContext({});
export const PurchaseContext = createContext({});

export default AppContext;
