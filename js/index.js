let searchBar = document.getElementById("searchBar");
if(searchBar){
    searchBar.addEventListener("keyup", search)
}
if(location.href.includes("KontaktSide")){
    questions = document.getElementsByClassName("faq-question");
    for(let i=0; i<questions.length; i++){
        let question = questions[i];
        question.addEventListener("click", openFAQ);
    }
}

function search(){
    console.log(searchBar);
    let elements = document.getElementsByClassName("container-searcheble");
    let arrangement = false
    for (i=0;i<elements.length;i++){
        element=elements[i];
        if(element.id.includes(searchBar.value.toLowerCase())){
            element.style.display = "block";
            if(element.id.includes("arragemaent")){
                arrangement=true
            }
        }else{
            element.style.display = "none";
        }
    }

    let arragemaentTittle =document.getElementById("Arrangementer");
    if(arrangement&&arragemaentTittle){
        arragemaentTittle.style.display= "block"
    }else if(arragemaentTittle){
        arragemaentTittle.style.display= "none"
    }
}

function openFAQ(e){
    let id=e.target.id.replace("faq-question", "");
    
    let answer=document.getElementById("faq-answer" + id)
    console.log(e.target.id, id, "faq-answer" + id, answer)
    if(answer.style.display=="none"){
        answer.style.display="block";
    }else{
        answer.style.display="none"
    }
}