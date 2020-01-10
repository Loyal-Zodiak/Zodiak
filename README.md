# Loyal Zodiak

link heroku : https://api-zodiak.herokuapp.com/

#### Sign-in : 
Returns JSON containing json web token

* URL 
    * 

#### Pasaran : 
Returns JSON containing birthday, age, and zodiac

* URL 
    * https://api-zodiak.herokuapp.com/pasaran

* Method : 
    `POST`
    * Body : 
        * nama `string` : user's name , e.g : `Jovi`
        * tgl `string` : user's date of birth, e.g `15-08-1997`

* Success : 
    * Code : 200
    * Response :
    ```
    {
        "status": "success",
        "data": {
            "nama": "jovi",
            "lahir": "Jumat Pon, 15 Agustus 1997",
            "usia": "22 Tahun 4 Bulan 26 Hari",
            "ultah": "7 Bulan 8 Hari",
            "zodiak": "Leo"
        }
    }
    ```

* Fail : 
    * Code : 500
    * Response :
    ```
    {
        "status": "error"
    }
    ```

#### Zodiak : 
Returns JSON containing details of the zodiac sign

* URL 
    * https://api-zodiak.herokuapp.com/pasaran
    * Routes : 
        * /tomorrow?sign=`zodiac-sign` => returns tomorrow's zodiac details 
        * /yesterday?sign=`zodiac-sign` => returns yesterday's zodiac details 
        * /?sign=`zodiac-sign` => returns today's zodiac details 

* Method :  `POST`

* Success : 
    * Code : 200
    * Response : (aries)
    ```
    {
        "date_range": "Jul 23 - Aug 22",
        "current_date": "January 10, 2020",
        "description": "Still working way too many hours -- and not at all worried about being compensated for them? Well, isn't it time to make sure you're at least appreciated for what you're doing? Sure it is. Put your foot down.",
        "compatibility": "Aries",
        "mood": "Productive",
        "color": "Yellow",
        "lucky_number": "42",
        "lucky_time": "10pm"
    }
    ```

* Fail : 
    * Code : 500
    * Response :
    ```
    {
        "message": "Internal server error"
    }
    ```
#### Translate : 
Returns JSON containing translated text

* URL 
    * https://api-zodiak.herokuapp.com/translate

* Method :  `POST`
    * Body : 
        * text `arrays` : 
        ```
            [text]

            examples: 
            ["eat"] / ["makan"]
        ``` 
        * language `string` : 
        ```
            [language codes] 

            examples: 
            [en] / [id]
        ```

* Success : 
    * Code : 200
    * Response : 
    ```
    [{ translatedText: 'Makan', originalText: 'Eat' }, ...]
    ```

* Fail : 
    * Code : 500
    * Response :
    ```
    {
        "message": "Internal server error"
    }
    ```

#### Languages : 
Returns JSON containing list of languanges

* URL 
    * https://api-zodiak.herokuapp.com/languanges

* Method :  `GET`

* Success : 
    * Code : 200
    * Response : 
    ```
    [{ language: "en", name: "Englisch" }, ...]
    ```

* Fail : 
    * Code : 500
    * Response :
    ```
    {
        "message": "Internal server error"
    }
    ```

#### Made By : team loyal-zodiac :alien:
* Amil (boss) :libra:
* Dzakki :broken_heart:
* Okka :taurus:
* Jovi :leo: