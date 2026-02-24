function toggleBtn(id){
const allBtn = document.getElementById('all-toggle-btn');
const interviewBtn =document.getElementById('interview-toggle-btn');
const rejectwBtn =document.getElementById('rejected-toggle-btn');

allBtn.classList.remove("btn-primary");
interviewBtn.classList.remove("btn-primary");
rejectwBtn.classList.remove("btn-primary");

const selected = document.getElementById(id);
currentStatus = id
selected.classList.add('btn-primary');

if(id == 'interview-toggle-btn' ){
    allCards.classList.add('hidden');
    filterSection.classList.remove('hidden');
    interviewRender();
}else if(id == 'all-toggle-btn'){
    allCards.classList.remove('hidden');
    filterSection.classList.add('hidden')
}else if(id == 'rejected-toggle-btn'){
 allCards.classList.add('hidden');
 filterSection.classList.remove('hidden');
 rejectRender()
}
updateJobProgress()
}

