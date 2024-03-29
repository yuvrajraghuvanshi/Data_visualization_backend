const { getData, filterByYear, filterByTopic, filterByTitle, filterByCountry, filterByRegion, filterBySector, filterByPestle, filterBySource, filterByLikelyhood, filterByIntensity, filteredByAny } = require('../controllers/dataController')
const express=require('express')
const router=express.Router()

router.get('/all',getData)
router.get('/year/:year',filterByYear)
router.get('/topic/:topic',filterByTopic)
router.get('/title/:title',filterByTitle)
router.get('/country/:country',filterByCountry)
router.get('/region/:region',filterByRegion)
router.get('/sector/:sector',filterBySector)
router.get('/source/:source',filterBySource)
router.get('/pestle/:pestle',filterByPestle)
router.get('/likelihood/:likelihood',filterByLikelyhood)
router.get('/intensity/:intensity',filterByIntensity)
router.get("/any/:search", filteredByAny)


module.exports=router