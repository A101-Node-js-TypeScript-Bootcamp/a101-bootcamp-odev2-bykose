const brandService=require('../services/brand')

//service kısmında oluşturulan fetchleri bir değişkene atar
//gelen isteğe serviceten gelen datayı döner
exports.fetchBrand  = async (req,res) => {
    const response= await brandService.fetch()
    res.send(response)
}

exports.fetchBrandWithName  = async (req,res) => {
    const response= await brandService.fetchBrandWithName(req.params.name)
    res.send(response)
}