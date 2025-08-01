import { Product, User } from '../types';

const API_BASE_URL = 'https://fakestoreapi.com';

export class ApiService {
  /**
   * Obtiene todos los productos de la API
   */
  static async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('No se pudieron cargar los productos');
    }
  }

  /**
   * Obtiene un producto específico por ID
   */
  static async getProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error('No se pudo cargar el producto');
    }
  }

  /**
   * Obtiene un usuario específico por ID
   */
  static async getUserById(id: number): Promise<User> {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      throw new Error('No se pudo cargar el usuario');
    }
  }
}
