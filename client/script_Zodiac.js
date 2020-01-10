let zodiak;

$(document).ready(function () {
    $(document).on('click',"#btn-ramalan", function(){
      let zodiac = $('#zodiac-user').text().toLowerCase()
      getToday(zodiac)
    })

    $(document).on('click',"#today-btn", function(){
      let zodiac = $('#zodiac-user').text().toLowerCase()
      getToday(zodiac)
    })

    $(document).on('click',"#yesterday-btn", function(){
      // alert("hey")
      let zodiac = $('#zodiac-user').text().toLowerCase()
      getYesterday(zodiac)
    })

    $(document).on('click',"#tomorrow-btn", function(){
      // alert('tomorrow')
      let zodiac = $('#zodiac-user').text().toLowerCase()
      getTomorrow(zodiac)
    })
    
})

function getToday(sign){
  $('#field-ramalan').fadeOut(400).html('').show()
  $.ajax({
        url: `http://localhost:3000/zodiak?sign=${sign}`,
        type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
        success: function (result) {
          console.log(result)
          zodiak = result
          // console.log(result)
            $('#field-ramalan').append(`
            <div id="yesterday-btn" class="btn btn-white" style="background-color: whitesmoke;">Yesterday</div>
            <div id="today-btn" class="btn btn-white" style="background-color: whitesmoke;">Today</div>
            <div id="tomorrow-btn" class="btn btn-white" style="background-color: whitesmoke;">Tomorrow</div>
            <div class="card m-5 mx-auto" style="width: 40rem; background-color : rgba(30, 36, 41, 0.363) ;">
                <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign}.png" class="card-img-top" alt="...">
                <div class="card-body text-white" style="font-size: 25px;">
                  <p class="card-text">${result.description}</p>
                  <table class="table table-borderless text-white">
                    <thead>
                      <tr>
                        <th scope="col">Compabilty</th>
                        <th scope="col">Mood</th>
                        <th scope="col">Colour</th>
                        <th scope="col">Lucky No.</th>
                        <th scope="col">Lucky Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${result.compatibility}</td>
                        <td>${result.mood}</td>
                        <td>${result.color}</td>
                        <td>${result.lucky_number}</td>
                        <td>${result.lucky_time}</td>
                      </tr>
                    </tbody>
                  </table>
                  <a id="btn-translate" href="#" class="btn btn-primary">Translate</a>
                </div>
              </div>
                `).hide().fadeIn(400)

            $('.horoscopeData').html(`
            <div class="card" style="width: 18rem;">
            <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign.toLowerCase()}.png" class="card-img-top" alt="...">
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
  $('#field-ramalan').empty()
  $.ajax({
    url: `http://localhost:3000/zodiak/tomorrow?sign=${sign}`,
    type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
    success: function (result) {
      zodiak = result

          $('#field-ramalan').append(`
          <div id="yesterday-btn" class="btn btn-white" style="background-color: whitesmoke;">Yesterday</div>
          <div id="today-btn" class="btn btn-white" style="background-color: whitesmoke;">Today</div>
          <div id="tomorrow-btn" class="btn btn-white" style="background-color: whitesmoke;">Tomorrow</div>
          <div class="card m-5 mx-auto" style="width: 40rem; background-color : rgba(30, 36, 41, 0.363) ;">
              <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign}.png" class="card-img-top" alt="...">
              <div class="card-body text-white" style="font-size: 25px;">
                <p class="card-text">${result.description}</p>
                <table class="table table-borderless text-white">
                  <thead>
                    <tr>
                      <th scope="col">Compabilty</th>
                      <th scope="col">Mood</th>
                      <th scope="col">Colour</th>
                      <th scope="col">Lucky No.</th>
                      <th scope="col">Lucky Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${result.compatibility}</td>
                      <td>${result.mood}</td>
                      <td>${result.color}</td>
                      <td>${result.lucky_number}</td>
                      <td>${result.lucky_time}</td>
                    </tr>
                  </tbody>
                </table>
                <a id="btn-translate" href="#" class="btn btn-primary">Translate</a>
              </div>
              `).hide().fadeIn(400)
              zodiak = result
            $('.horoscopeData').html(`
            <div class="card" style="width: 100%;">
            <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign.toLowerCase()}.png" class="card-img-top" alt="...">
            <div class="card-body" style="width:100%;">
              <h5 class="card-title">${sign}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${result.date_range}</h6>
              <p class="card-text">${result.description}</p>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"><h6></h6></li>
              <li class="list-group-item"><h3 style="text-align: center;">compatibility: <img src="https://www.horoscope.com/images-US/signs/${result.compatibility.toLowerCase()}.png" style="width:25px;margin-right:10px;margin-left:5px;">${result.compatibility}</h3></li>
              </ul>
              <div class="container">
              <div class="row" style="text-align:center;">
                <div class="col" style="height:250px;background-repeat: no-repeat;background-image: url(https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/f0/eb/a7/f0eba74b-d7fe-5011-eba6-77bc868d928c/source/256x256bb.jpg); background-size:cover;"><h3>mood:</h3><h5>${result.mood}</h5></div>
                <div class="col" style="height:250px;margin:0; background:${result.color.replace(/ /g)};"><h3>color</h3><h5>${result.color}</h5>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/BYR_color_wheel.svg/256px-BYR_color_wheel.svg.png" style="max-height: 160px;margin-top:5px">
                </div>
                <div class="w-100"></div>
                <div class="col" style="height:250px;background-repeat: no-repeat;background-image: url(https://planet-numbers.co.uk/wp-content/uploads/2018/03/01-02-numbers-icon.png); background-size:cover;"><h3>lucky number:</h3><h5> ${result.lucky_number}</h5></div>
                <div class="col" style="height:250px;background-repeat: no-repeat;background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBMTDIy-0U8RQr2cSC_Vcc61Ie-b6-nf5G0EYWBg1tGzJ4Lce&s); background-size:cover;"><h6>lucky time: ${result.lucky_time}</h6></div>
              </div>
            </div>
            <div class="card-body">
                <button type="button" class="btn btn-outline-primary" style="width:100%;">Translate</button>
            </div>
          </div>
                `).hide().fadeIn(400)
        }
    })
}


function getYesterday(sign){
  $('#field-ramalan').empty()
    $.ajax({
        url: `http://localhost:3000/zodiak/yesterday?sign=${sign}`,
        type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
        success: function (result) {
          zodiak = result
          $('#field-ramalan').append(`
          <div id="yesterday-btn" class="btn btn-white" style="background-color: whitesmoke;">Yesterday</div>
          <div id="today-btn" class="btn btn-white" style="background-color: whitesmoke;">Today</div>
          <div id="tomorrow-btn" class="btn btn-white" style="background-color: whitesmoke;">Tomorrow</div>
          <div class="card m-5 mx-auto" style="width: 40rem; background-color : rgba(30, 36, 41, 0.363) ;">
              <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign}.png" class="card-img-top" alt="...">
              <div class="card-body text-white" style="font-size: 25px;">
                <p class="card-text">${result.description}</p>
                <table class="table table-borderless text-white">
                  <thead>
                    <tr>
                      <th scope="col">Compabilty</th>
                      <th scope="col">Mood</th>
                      <th scope="col">Colour</th>
                      <th scope="col">Lucky No.</th>
                      <th scope="col">Lucky Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${result.compatibility}</td>
                      <td>${result.mood}</td>
                      <td>${result.color}</td>
                      <td>${result.lucky_number}</td>
                      <td>${result.lucky_time}</td>
                    </tr>
                  </tbody>
                </table>
                <a id="btn-translate" href="#" class="btn btn-primary">Bahasa Indonesia</a>
              </div>
              `).fadeIn(400)

            $('.horoscopeData').html(`
            <div class="card" style="width: 18rem;">
            <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${sign.toLowerCase()}.png" class="card-img-top" alt="...">
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
              `).hide().fadeIn(400)
        }
    })
}