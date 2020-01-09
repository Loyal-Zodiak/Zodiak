const axios = require('axios')

class controller {
    static getPasar(req,res,next){
        let nama = req.body.nama
        let tgl = req.body.tgl
        console.log(nama+" "+tgl)
        axios.get(`https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=${nama}&tanggal=${tgl}`)
        .then(response =>{
            console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = controller