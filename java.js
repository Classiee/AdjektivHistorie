let currentBlank = 1;
const app = document.getElementById("app");

updateView();
function updateView(){
let html = `
        <header>
            <h1>Adjektiv Historie</h1>
        </header>
        
        <div class="wordList">
            <button onclick="setName('quick')">Quick</button>
            <button onclick="setName('brown')">Brown</button>
            <button onclick="setName('lazy')">Lazy</button>
            <button onclick="setName('clever')">Clever</button>
            <button onclick="setName('happy')">Happy</button>
            <button onclick="setName('fox')">Fox</button>
            <button onclick="setName('dog')">Dog</button>        
        </div>
        
        <p>The <span id="blank1" class="blank"></span> 
        <span id="blank2" class="blank"></span>
        jumps over the <span id="blank3" class="blank"></span>
        <span id="blank4" class="blank"></span>.</p>
        
        <footer>
            <p>Created by a numpty</p>
        </footer>`
        
        app.innerHTML = html;
}
        


function setName(word){
    let blank = document.getElementById("blank" + currentBlank);
    if (blank) {
        blank.innerHTML = word;
        currentBlank++;
    }
}