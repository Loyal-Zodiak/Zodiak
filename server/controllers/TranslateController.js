const googleTranslate = require('google-translate')(process.env.GOGLE_TRANSLATE_KEY);
class TranslateController{
    
    static findLanguages(req, res, next){
        const code = ["af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","en","eo","es","et","eu","fa","fi","fr","fy","ga","gd","gl","gu","ha","haw","hi","hmn","hr","ht","hu","hy","id","ig","is","it","iw","ja","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","my","ne","nl","no","ny","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","st","su","sv","sw","ta","te","tg","th","tl","tr","uk","ur","uz","vi","xh","yi","yo","zh","zh-TW","zu"]
        googleTranslate.getSupportedLanguages(code ,function(err, languageCodes) {
            if (err) {
                next(err)
            }else{
                res.status(200).json({
                    languageCodes
                })
            }
        });
    }
    static doTranslate(req, res, next){
        const text = req.body['text[]']
        const language = req.body.language
        googleTranslate.translate(text, language, function(err, translation) {
            if (err) {
                next(err)
            }else{
                res.status(200).json({
                    translation
                })
            }
        });
    }
}
module.exports = TranslateController