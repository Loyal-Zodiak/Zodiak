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
    static generateSelectLanguage(){
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
    }
    static doTranslate(e){
        const language = $('#language option:selected').val() || 'id'
        if (!language) {
            alert('please, choose language fisrt');
        }else{
            const text = ['date range', 'current date', "description", "compatibility", "mood", "color", "lucky_number", "lucky time"]
            for (const key in zodiak) {
                if (zodiak.hasOwnProperty(key)) {
                    text.push(zodiak[key]);
                }
            }
            Translation.$translate({
                text,
                language
            })
            .done(({translation}) => {
                Translation.generateHtmlOfTranslate(translation)
                $('#modal-language').modal('hide')
            })
            .fail(errs => {
                console.log(errs);
            })
        }
    }

    static generateHtmlOfTranslate(arrays) {
        const elFieldRamalan = $('#field-ramalan')
        elFieldRamalan.empty()
        let html = `
            <div id="yesterday-btn" class="btn btn-white" style="background-color: whitesmoke;">Yesterday</div>
            <div id="today-btn" class="btn btn-white" style="background-color: whitesmoke;">Today</div>
            <div id="tomorrow-btn" class="btn btn-white" style="background-color: whitesmoke;">Tomorrow</div>
            <div class="card m-5 mx-auto" style="width: 40rem; background-color : rgba(30, 36, 41, 0.363) ;" height="400px">
                <img src="https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_${zodiak.compatibility.toLowerCase()}.png" class="card-img-top">
                <div class="card-body text-white" style="font-size: 25px;">
                <p class="card-text">${arrays[10].translatedText}</p>
                <table class="table table-borderless text-white table-responsive">
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
                        <td>${arrays[11].translatedText}</td>
                        <td>${arrays[12].translatedText}</td>
                        <td>${arrays[13].translatedText}</td>
                        <td>${arrays[14].translatedText}</td>
                        <td>${arrays[15].translatedText}</td>
                    </tr>
                    </tbody>
                </table>
                <a id="btn-translate" href="#" class="btn btn-primary">Translate</a>
                </div>
            </div>
        `
        elFieldRamalan.append(html).hide().show('slow')
    }
}

$(document).ready(function () {
    Translation.generateSelectLanguage()
    $(document).on('click', '#doTranslate', Translation.doTranslate)
    $(document).on('click', '#btn-translate', function (e) {
        $('#modal-language').modal('show')
    })
});

