const { default: axios } = require("axios");
const categoriesService = require("../services/category");


exports.fetchCategory = async (req, res) => {
    const response = await categoriesService.fetch();
    res.send(response);
};

exports.fetchSingleCategory = async (req, res) => {
    const response = await categoriesService.fetchSingleCategory(req.params.id);
        res.send(response);
};
