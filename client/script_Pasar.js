$(document).ready(function (){
    $("#form").show()

    $("#user-input").hide()
    $("#user-zodiac").hide()
    $('#btn-kembali').hide()
    
    $('#btn-kembali').on('click', ()=>{
        $("#user-zodiac").fadeOut(1000)
        $("#field-user").fadeOut(1000)
        $('#btn-kembali').fadeOut(1000)
        $("#user-input").fadeIn(1000)
    })

    // $("#user-input").hide()

    $('#btn-submit-nama').on('click',function(){
        $("#user-input").fadeOut(1000)
        let nama = $("#input-nama").val()
        let tgl = $("#input-tgl-lahir").val()
        // $.post('http://localhost:3000/pasaran/',{
        //     nama,
        //     tgl
        // })
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/pasaran/",
            data: {
                nama,
                tgl
            },
            headers: {
                token: localStorage.getItem('token')
            },
            dataType: "json"
        })
        .then(response =>{
            $("#user-zodiac").fadeIn(1000)
            $("#field-user").empty()
            $("#field-ramalan").empty()
            console.log(response)
            $("#field-user").append(`
                <h1 id="nama-user" class="text-white" style="font-size: 80px;text-shadow: 4px 4px 4px #262626;">${response.data.nama}</h1>
                <h4 class="text-white pt-5" style="font-size: 40px;text-shadow: 4px 4px 4px #262626;">Hari/Tanggal Lahir : </h4>
                <h4 id="tgl-lahir-user" class="text-white pt-3" style="font-size: 30px;text-shadow: 4px 4px 4px #262626;">${response.data.lahir}</h4>
                <h4 class="text-white pt-5" style="font-size: 40px;text-shadow: 4px 4px 4px #262626;">Usia :</h4>
                <h4 id="umur-user" class="text-white pt-3" style="font-size: 30px;text-shadow: 4px 4px 4px #262626;">${response.data.usia}</h4>
                <h4 class="text-white pt-5" style="font-size: 40px;text-shadow: 4px 4px 4px #262626;">Ulang Tahun :</h4>
                <h4 id="ultah-user" class="text-white pt-3" style="font-size: 30px;text-shadow: 4px 4px 4px #262626;">${response.data.ultah}</h4>
                <h4 id="zodiac-user" class="text-white pt-5" style="font-size: 80px;text-shadow: 4px 4px 4px #262626;">${response.data.zodiak}</h4>
                <div id="btn-ramalan" class="btn btn-light mt-3">Lihat Ramalan</div>
        `).hide().fadeIn(500)
        $('#btn-kembali').fadeIn(500)
        })
    })
})
