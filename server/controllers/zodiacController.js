const axios = require('axios')

class ZodiacController{
    static getHoroscope(req, res, next){
        // console.log(req.query.sign)
        axios.post(`https://aztro.sameerkumar.website/?sign=${req.query.sign}&day=today`)
        .then(result=>{
            // console.log('RESULT===>',result.data)
            res.status(200).json(result.data)
        })
        .catch(err=>{
            // console.log(err)
            res.status(500).json(err)
        })
    }

    static getYesterdayHoroscope(req, res, next){
        axios.post(`https://aztro.sameerkumar.website/?sign=${req.query.sign}&day=yesterday`)
        .then(result=>{
            // console.log('RESULT===>',result.data)
            res.status(200).json(result.data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getTomorrowHoroscope(req, res, next){
        // console.log(req.query.sign)
        axios.post(`https://aztro.sameerkumar.website/?sign=${req.query.sign}&day=tomorrow`)
        .then(result=>{
            // console.log('RESULT===>',result.data)
            res.status(200).json(result.data)
        })
        .catch(err=>{
            // console.log(err)
            res.status(500).json(err)
        })
    }

}

module.exports = ZodiacController