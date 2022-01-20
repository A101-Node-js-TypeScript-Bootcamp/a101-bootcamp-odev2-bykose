const axios = require("axios")

//sent to "get" request to pull brands
//if there is no incoming data, it returns an error message.
exports.fetch = async () => {
    try {
        const response = await axios.get('https://api.trendyol.com/sapigw/brands')
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

}

//sent to "get" request to pull brands with name 
//if there is no incoming data, it returns an error message.
exports.fetchBrandWithName = async (brandName) => {
    try {
        const response = await axios.get(`https://api.trendyol.com/sapigw/brands/by-name?name=${brandName}`)
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
}