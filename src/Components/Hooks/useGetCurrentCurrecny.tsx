import axios from "axios";

// Custom hook to Call apis
const useGetCurrentCurrency = () => {
    
    // Function to get current currency rate (API Call)
    const getCurrentCurrency = async (to: string) => {
        const res = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=INR&to=${to}`);
        
        if(res?.data?.rates) {
            return res.data.rates[to];
        } else {
           return 1;
        }
    }

    return { getCurrentCurrency };
};

export default useGetCurrentCurrency;