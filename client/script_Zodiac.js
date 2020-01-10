$(document).ready(function () {
    $('#today').on('click', function(){
        getToday($('#sign').val())
    })
    $('#tomorrow').on('click', function(){
        getTomorrow($('#sign').val())
    })
    $('#yesterday').on('click', function(){
        getYesterday($('#sign').val())
    })
    
})

function getToday(sign){
    $.ajax({
        url: `http://localhost:3000/zodiak?sign=${sign}`,
        type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
        success: function (result) {
          console.log(result)
            $('.horoscopeData').html(`
            <div class="card">
            <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign}.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${sign}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${result.date_range}</h6>
              <p class="card-text">${result.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><h6>compatibility: ${result.compatibility}</h6></li>
              <li class="list-group-item"><h6>mood: ${result.mood}</h6></li>
              <li class="list-group-item"><h6>color: ${result.color}</h6></li>
              <li class="list-group-item"><h6>lucky number: ${result.lucky_number}</h6></li>
              <li class="list-group-item"><h6>lucky time: ${result.lucky_time}</h6></li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-outline-primary" style="width:100%;">Translate</button>
            </div>
          </div>
                `).hide().fadeIn(400)
        }
    })
}

function getTomorrow(sign){
    $.ajax({
        url: `http://localhost:3000/zodiak/tomorrow?sign=${sign}`,
        type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
        success: function (result) {
            $('.horoscopeData').html(`
            <div class="card">
            <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign}.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${sign}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${result.date_range}</h6>
              <p class="card-text">${result.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><h6>compatibility: ${result.compatibility}</h6></li>
              <li class="list-group-item"><h6>mood: ${result.mood}</h6></li>
              <li class="list-group-item"><h6>color: ${result.color}</h6></li>
              <li class="list-group-item"><h6>lucky number: ${result.lucky_number}</h6></li>
              <li class="list-group-item"><h6>lucky time: ${result.lucky_time}</h6></li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-outline-primary" style="width:100%;">Translate</button>
            </div>
          </div>
                `)
        }
    })
}

function getYesterday(sign){
    $.ajax({
        url: `http://localhost:3000/zodiak/yesterday?sign=${sign}`,
        type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
        success: function (result) {
            $('.horoscopeData').html(`
            <div class="card">
            <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign}.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Taurus</h5>
              <h6 class="card-subtitle mb-2 text-muted">${result.date_range}</h6>
              <p class="card-text">${result.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><h6>compatibility: ${result.compatibility}</h6></li>
              <li class="list-group-item"><h6>mood: ${result.mood}</h6></li>
              <li class="list-group-item"><h6>color: ${result.color}</h6></li>
              <li class="list-group-item"><h6>lucky number: ${result.lucky_number}</h6></li>
              <li class="list-group-item"><h6>lucky time: ${result.lucky_time}</h6></li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-outline-primary" style="width:100%;">Translate</button>
            </div>
          </div>
                `)
        }
    })
}