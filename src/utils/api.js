const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://88.222.212.13:3000/api';

export const loginAdmin = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const createProduct = async (formData) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData, // FormData for file upload
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to create product');
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch products');
  }
};

export const updateProduct = async (id, formData) => {
  const token = localStorage.getItem('adminToken');
  try {
    // Check if formData is already FormData object or needs conversion
    const isFormDataObject = formData instanceof FormData;
    let requestBody = formData;
    
    // If not FormData, we need to create the right headers
    const headers = {
      'Authorization': `Bearer ${token}`,
    };
    
    if (!isFormDataObject) {
      headers['Content-Type'] = 'application/json';
      requestBody = JSON.stringify(formData);
    }
    
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers,
      body: requestBody,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to update product');
  }
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to delete product');
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return data; // Return the full response object which includes 'success' and 'data' fields
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch product');
  }
};
