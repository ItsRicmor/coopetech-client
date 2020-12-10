import { createContext } from 'react';

const AppContext = createContext({
  isOpenSidebar: false,
});

export const ProductContext = createContext({});

export default AppContext;
