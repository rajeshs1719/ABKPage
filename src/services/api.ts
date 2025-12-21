/**
 * Central API Control File
 * Path: src/services/api.ts
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

// Generic API Response Wrapper
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

/**
 * Generic Fetch Wrapper with Error Handling
 * This ensures that if the API is down, the component receives 'null' 
 * and can default to hardcoded data.
 */
async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(`API Call Failed [${endpoint}]:`, error);
    return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * PAGE INTERFACES
 */

export interface BookData {
  id: number;
  title: string;
  subtitle: string;
  shortDesc: string;
  summary: string;
  content: string;
}

/**
 * API SERVICE METHODS
 */

export const API = {
  books: {
    getAll: () => apiRequest<BookData[]>('/books'),
  },
};