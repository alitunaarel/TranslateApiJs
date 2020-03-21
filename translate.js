function Translate(word, language) {
    this.apikey = "trnsl.1.1.20200321T201754Z.0c12b44968048d46.2561569621b136515fa0e12931c3bdb47d4a2dc6"
    this.word = word;
    this.language = language;

    //XHR object

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function (callback) {
    // Ajax...
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);

        } else {
            callback("an Error occured", null);
        }

    }

    this.xhr.send();

}

Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.word = newWord,
        this.language = newLanguage;
}