let currentBlank = 1;

function setName(word){
    let blank = document.getElementById("blank" + currentBlank);
    if (blank) {
        blank.innerHTML = word;
        currentBlank++;
    }
}