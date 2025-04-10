const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

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
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch product');
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch product');
    }

    return {
      success: true,
      data: data.data
    };
  } catch (error) {
    console.error('Error in getProductById:', error);
    return {
      success: false,
      error: error.message || 'Failed to fetch product'
    };
  }
};

export const submitContactForm = async (formData) => {
  try {
    // Validate mobile number format
    const mobileNumberRegex = /^[+]?[\d]{10,14}$/;
    if (!mobileNumberRegex.test(formData.mobileNumber)) {
      throw new Error('Invalid mobile number format');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Invalid email format');
    }

    // Validate message length
    if (formData.message.length < 10) {
      throw new Error('Message must be at least 10 characters long');
    }

    const response = await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        message: formData.message.trim()
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Failed to submit form');
    }

    return data;
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error(error.message || 'Failed to submit form');
  }
};
