const { default: axios } = require("axios");
const categoriesService = require("../services/category");

//service kısmında oluşturulan fetchleri bir değişkene atar
//gelen isteğe serviceten gelen datayı döner
exports.fetchCategory = async (req, res) => {
    const response = await categoriesService.fetch();
    res.send(response);
};

exports.fetchSingleCategory = async (req, res) => {
    const response = await categoriesService.fetchSingleCategory(req.params.id);
        res.send(response);
};
