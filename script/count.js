let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allCards = document.getElementById('all-cards')

const mainContainer = document.querySelector('main');


function totalCount(){
    total.innerText = allCards.children.length;

    //jokon interview button e click korbo tokon  oi ta interview list e push hobe

    interviewCount.innerText = interviewList.length;

    //jokon reject button e click korbo tokon  oi ta reject  list e push hobe

    rejectedCount = rejectedList.length;
    
}
totalCount()


mainContainer.addEventListener("click" , function(event){
    const parenNode = event.target.parentNode.parentNode
    
    // job: job-companies,job-title,job-info,job-status, job-description,interview-btn,reject-btn, card-right,
    const jobComapany = parenNode.querySelector('.job-companies').innerText;
    const jobTittle = parenNode.querySelector('.job-title').innerText;
    const jobInfo = parenNode.querySelector('.job-info').innerText;
    const jobStatus = parenNode.querySelector('.job-status').innerText;
    const jobDescription = parenNode.querySelector('.job-description').innerText;

    const cardInfo = {
        jobComapany,
        jobTittle,
        jobInfo,
        jobStatus,
        jobDescription
    }
    
    

})