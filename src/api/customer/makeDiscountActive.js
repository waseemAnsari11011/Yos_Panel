import axiosInstance from "../../utils/axiosConfig";


const activeDiscountApi = async(id, isDiscountVisible) => {
 // Function to make a banner active
    try {
      const response = await axiosInstance.put(`/discount-active-customer/${id}`, { isDiscountVisible });
      console.log(id)
      return response.data;
    } catch (error) {
      console.error('Failed to activate banner:', error);
      throw error;
    }
  };


export default activeDiscountApi