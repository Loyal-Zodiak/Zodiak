const apiUrl = 'http://localhost:3000'
const example = {
    "date_range":"Mar 21 - Apr 20",
    "current_date":"January 9, 2020",
    "description":"After the drama of the past week or so, it's time to get back to work. And if anyone is ready, it's you. Roll up your sleeves and dig in. It's time to make up for lost time.",
    "compatibility":"Scorpio",
    "mood":"Diligent",
    "color":"Rose Pink",
    "lucky_number":"38",
    "lucky_time":"4am"
}
class Translation {
    static $languages(){
        return $.ajax({
            url: apiUrl + '/translate/languages'
        });
    }
    static $translate(form){
        return $.ajax({
            type: "POST",
            url: apiUrl+"/translate",
            data: form,
            dataType: "json",
        })
    }
    static doTranslate(e){
        const language = $('#language option:selected').val() || 'id'
        if (!language) {
            alert('please, choose language fisrt');
        }else{
            const text = ['date range', 'current date', "description", "compatibility", "mood", "color", "lucky_number", "lucky time"]
            for (const key in example) {
                if (example.hasOwnProperty(key)) {
                    text.push(example[key]);
                }
            }
            Translation.$translate({
                text,
                language
            })
            .done(({translation}) => {
                Translation.generateHtmlOfTranslate(translation)
            })
            .fail(errs => {
                console.log(errs);
            })
        }
    }

    static generateHtmlOfTranslate(arrays) {
        const elHoroscopeData = $('.horoscopeData')
        let html = `
            <div class="card" id="horoscope">
                <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${arrays[11].translatedText.toLowerCase()}.png" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Taurus</h5>
                <h6 class="card-subtitle mb-2 text-muted">${arrays[11].translatedText}</h6>
                <p class="card-text">${arrays[10].translatedText}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><h6>${arrays[3].translatedText}: ${arrays[11].translatedText}</h6></li>
                <li class="list-group-item"><h6>${arrays[4].translatedText}: ${arrays[12].translatedText}</h6></li>
                <li class="list-group-item"><h6>${arrays[5].translatedText}: ${arrays[13].translatedText}</h6></li>
                <li class="list-group-item"><h6>${arrays[6].translatedText}: ${arrays[14].translatedText}</h6></li>
                <li class="list-group-item"><h6>${arrays[7].translatedText}: ${arrays[15].translatedText}</h6></li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-outline-primary" style="width:100%;">Translate</button>
                </div>
          </div>
        `
        elHoroscopeData.append(html)
        // elHoroscopeData.show('slow')
    }
}

$(document).ready(function () {
    
    Translation
        .$languages()
        .done( ({languageCodes}) => {
            // console.log(languageCodes)
            let name;
            const elLanguage = $('#language')
            languageCodes.forEach(language => {
                if (language.name.includes('isi-')) {
                    name = language.name.substring(4)
                }else if (language.name.includes('isi')) {
                    name = language.name.substring(3)
                }else{
                    name = language.name.substring(1)
                }
                let html = `<option value="${language.language}">${name}</option>`
                elLanguage.append(html)
            });
        })
        .fail(errs => {
            console.log(errs)
        })
    
    $(document).on('click', '#translate', Translation.doTranslate)
});

