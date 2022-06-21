
console.log("welcome to apps app");
showNotes();

console.log("hi");

let addBtn = document.getElementById("addBtn")

addBtn.addEventListener('click', function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if(notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = " ";
    console.log(notesobj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if(notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function(element, index) {

        html += `
        <div class="notecard card  my-2 mx-2" style="width:18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1 } </h5>
                  <p class="card-text">${element }</p>
                  <a href="#" id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
                </div>
            </div>
        `;
        
    });

    let notesElm = document.getElementById('notes');
    if(notesobj.length != 0) {
        notesElm.innerHTML = html;
    }

    else {
        notesElm.innerHTML = 'nothing to show';
    }
}
function deleteNote(index) {
    console.log('i am deleting', index);
    let notes = localStorage.getItem("notes");

    if(notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let search = document.getElementById('searchtext');

search.addEventListener('input',function(){

    let inputText = search.value;
    let cardNode = document.getElementsByClassName("notecard");
    Array.from(cardNode).forEach(function(element){
        let textnote = element.getElementsByTagName("p")[0].innerText;

        if(textnote.includes(inputText)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })
})