const brandService=require('../services/brand')

exports.fetchBrand  = async (req,res) => {
    const response= await brandService.fetch()
    res.send(response)
}

exports.fetchBrandByName  = async (req,res) => {
    const response= await brandService.fetchBrandWithName(req.params.name)
    res.send(response)
}