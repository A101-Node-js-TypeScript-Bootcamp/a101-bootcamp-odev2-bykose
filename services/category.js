const axios = require("axios");

//sent to "get" request to pull categories
//if there is no incoming data, it returns an error message.
exports.fetch = async () => {
    try {
        const response = await axios.get(
            "https://api.trendyol.com/sapigw/product-categories"
        );
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return {
            status: false,
            message: "Data not available",
        };
     }
};

//sent to "get" request to pull categories
//if there is no incoming data, it returns an error message.
exports.fetchSingleCategory = async (categoryId) => {
    try {
        const response = await axios.get(
            `https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`
        );
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return {
            status: false,
            message: "Data not available",
        };
    }
};
