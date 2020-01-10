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
  if(sign=='sagitarius'){
    sign = 'sagittarius'
  }
  $('#field-ramalan').fadeOut(400).html('').show()
  $.ajax({
        url: `http://localhost:3000/zodiak?sign=${sign}`,
        type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
        success: function (result) {
          console.log(result)
          zodiak = result
          zodiak.name = sign
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
                  <button type="button" class="btn btn-outline-primary" id="btn-translate" style="width:100%;">Translate</button>
                </div>
              </div>
                `).hide().fadeIn(400)

        },
        fail: function(error){
          alert(error)
        }
    })
}

function getTomorrow(sign){
  if(sign=='sagitarius'){
    sign = 'sagittarius'
  }
  $('#field-ramalan').empty()
  $.ajax({
    url: `http://localhost:3000/zodiak/tomorrow?sign=${sign}`,
    type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
    success: function (result) {
      zodiak = result
      zodiak.name = sign
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
                <button type="button" class="btn btn-outline-primary" id="btn-translate" style="width:100%;">Translate</button>
              </div>
              `).hide().fadeIn(400)
              zodiak = result
        },
        fail: function(error){
          alert(error)
        }
    })
}


function getYesterday(sign){
  if(sign=='sagitarius'){
    sign = 'sagittarius'
  }
  $('#field-ramalan').empty()
    $.ajax({
        url: `http://localhost:3000/zodiak/yesterday?sign=${sign}`,
        type: 'post', // Untuk img src dan h5 , kata "taurus" diganti ke => ${parameter}
        success: function (result) {
          zodiak = result
          zodiak.name = sign
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
                <button type="button" class="btn btn-outline-primary" id="btn-translate" style="width:100%;">Translate</button>
              </div>
              `).hide().fadeIn(400)

        },
        fail: function(error){
          alert(error)
        }
    })
}