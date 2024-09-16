import axiosInstance from "../../utils/axiosConfig";

// Get total count of products
export const getTotalProducts = async () => {
    try {
        const response = await axiosInstance.get('/get-total-products');
        return response.data;
    } catch (error) {
        console.error('Error fetching total products count', error);
        throw error;
    }
};

// Get total count of categories
export const getTotalCategories = async () => {
    try {
        const response = await axiosInstance.get('/get-total-categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching total categories count', error);
        throw error;
    }
};

// Get total count of customers
export const getTotalCustomers = async () => {
    try {
        const response = await axiosInstance.get('/get-total-customers');
        return response.data;
    } catch (error) {
        console.error('Error fetching total customers count', error);
        throw error;
    }
};
