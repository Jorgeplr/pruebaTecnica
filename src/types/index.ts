// Tipos basados en la API de Fake Store
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface User {
  id: number;
  email: string;
  username: string;
  password?: string; // No mostraremos esto en la UI
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Array<{
    productId: number;
    quantity: number;
  }>;
}

// Tipos para navegación
export type RootStackParamList = {
  MainTabs: undefined;
  ProductDetail: { productId: number };
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};
