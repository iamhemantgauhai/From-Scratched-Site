text = ['Exceptional', 'Ethical', '& Professional'];
item = 0;
function Typing() {
    for (var words in text) {
        document.getElementById('animated-text').innerHTML += text.charAt(words);
    }
    setTimeout(Typing, 50);
}
Typing();