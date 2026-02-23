function toggleBtn(id){
const allBtn = document.getElementById('all-toggle-btn');
const interviewBtn =document.getElementById('interview-toggle-btn');
const rejectwBtn =document.getElementById('rejected-toggle-btn');

allBtn.classList.remove("btn-primary");
interviewBtn.classList.remove("btn-primary");
rejectwBtn.classList.remove("btn-primary");

const selected = document.getElementById(id);
selected.classList.add('btn-primary');
}