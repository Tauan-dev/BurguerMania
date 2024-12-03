import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5299/api';

  constructor() {}

  // Obter todas as categorias usando Axios
  async getCategories(): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/Category`);
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      throw error;
    }
  }

  // Obter uma categoria por ID
  async getCategoryById(id: number): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/Category/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao carregar categoria:', error);
      throw error;
    }
  }

  // Criar uma nova categoria
  async createCategory(category: any): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/Category`, category);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      throw error;
    }
  }

  // Atualizar uma categoria
  async updateCategory(id: number, category: any): Promise<any> {
    try {
      const response = await axios.put(
        `${this.apiUrl}/Category/${id}`,
        category
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error);
      throw error;
    }
  }

  // Deletar uma categoria
  async deleteCategory(id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.apiUrl}/Category/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar categoria:', error);
      throw error;
    }
  }

  async getProductsByCategory(categoryId: number): Promise<any> {
    try {
      const response = await axios.get(
        `${this.apiUrl}/Product/category/${categoryId}`
      );
      return response.data; // Retorna os dados dos produtos para a categoria específica
    } catch (error) {
      console.error('Erro ao carregar produtos por categoria:', error);
      throw error;
    }
  }

  // Obter todos os produtos
  async getAllProducts(): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/Product`);
      return response.data; // Retorna todos os produtos
    } catch (error) {
      console.error('Erro ao carregar todos os produtos:', error);
      throw error;
    }
  }

  // Obter um produto específico por ID
  async getProductById(id: number): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/Product/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao carregar produto:', error);
      throw error;
    }
  }



  // Criar um novo produto
  async createProduct(product: any): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/Product`, product);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw error;
    }
  }

  // Atualizar um produto existente
  async updateProduct(id: number, product: any): Promise<any> {
    try {
      const response = await axios.put(`${this.apiUrl}/Product/${id}`, product);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      throw error;
    }
  }

  // Deletar um produto
  async deleteProduct(id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.apiUrl}/Product/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      throw error;
    }
  }
}
