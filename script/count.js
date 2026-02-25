let interviewList = [];
let rejectedList = [];
let currentStatus = 'all' ;

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allCards = document.getElementById('all-cards')

const mainContainer = document.querySelector('main');

const filterSection = document.getElementById('filtered-section')


function totalCount(){
    total.innerText = allCards.children.length;

    //jokon interview button e click korbo tokon  oi ta interview list e push hobe

    interviewCount.innerText = interviewList.length;

    //jokon reject button e click korbo tokon  oi ta reject  list e push hobe

    rejectedCount.innerText = rejectedList.length;
    
}
totalCount()

mainContainer.addEventListener("click" , function(event){
    // console.log(event.target)
    if(event.target.classList.contains('interview-btn')){
        const parenNode = event.target.parentNode.parentNode;
        
       
    
    const jobComapany = parenNode.querySelector('.job-companies').innerText;
    const jobTittle = parenNode.querySelector('.job-title').innerText;
    const jobInfo = parenNode.querySelector('.job-info').innerText;
    const jobStatus = parenNode.querySelector('.job-status').innerText;
    const jobDescription = parenNode.querySelector('.job-description').innerText;
     parenNode.querySelector('.job-status').innerText= 'Interview'
     updateAllCardStatus(jobComapany, 'Interview');
    const cardInfo = {
        jobComapany,
        jobTittle,
        jobInfo,
        jobStatus : 'Interview',
        jobDescription
    }
    const jobExit = interviewList.find(item => item.jobComapany == cardInfo.jobComapany);
   
    if(!jobExit){
        interviewList.push(cardInfo)
        
    }
    rejectedList = rejectedList.filter(item => item.jobComapany != cardInfo.jobComapany)
    if(currentStatus == 'rejected-toggle-btn'){
        rejectRender()
    }
    totalCount()

    updateJobProgress()
    // interviewRender()
    }else if(event.target.classList.contains('reject-btn')){

        const parenNode = event.target.parentNode.parentNode;
    
    const jobComapany = parenNode.querySelector('.job-companies').innerText;
    const jobTittle = parenNode.querySelector('.job-title').innerText;
    const jobInfo = parenNode.querySelector('.job-info').innerText;
    const jobStatus = parenNode.querySelector('.job-status').innerText;
    const jobDescription = parenNode.querySelector('.job-description').innerText;

     parenNode.querySelector('.job-status').innerText= 'Reject'
    updateAllCardStatus(jobComapany, 'Reject');
    const cardInfo = {
        jobComapany,
        jobTittle,
        jobInfo,
        jobStatus : 'Reject',
        jobDescription
    }
    const jobExit = rejectedList.find(item => item.jobComapany == cardInfo.jobComapany);
   
    if(!jobExit){
        rejectedList.push(cardInfo)
        
    }
   interviewList = interviewList.filter(item => item.jobComapany != cardInfo.jobComapany)
 if(currentStatus == 'interview-toggle-btn'){
    interviewRender();
 }
    totalCount()

    updateJobProgress()
    // rejectRender()
    }else if (event.target.closest('.card-right')) {
    event.stopPropagation();

    const card = event.target.closest('.bg-white');
    const jobCompany = card.querySelector('.job-companies').innerText;

    // remove from interview and rejected list
    interviewList = interviewList.filter(
        item => item.jobComapany !== jobCompany
    );

    rejectedList = rejectedList.filter(
        item => item.jobComapany !== jobCompany
    );

    // remove from All cards 
    const allJobCards = allCards.querySelectorAll('.bg-white');
    allJobCards.forEach(cards => {
        const name = cards.querySelector('.job-companies').innerText;
        if(name === jobCompany){
            cards.remove();
        }
    });

    //  only current card  find
    if(currentStatus === 'interview-toggle-btn'){
        interviewRender();
    }else if(currentStatus === 'rejected-toggle-btn'){
        rejectRender();
    }

    totalCount();
    updateJobProgress();
}
})

function interviewRender(){
    filterSection.innerHTML = "";

    for(let interview of interviewList){
        // console.log(interview)
        let div = document.createElement('div');
    div.className ="bg-white border border-gray-200 shadow-sm p-8 rounded-md flex justify-between hover:shadow-lg mb-4"
        div.innerHTML = `
         <div class="card-top space-y-5">
            <h2 class=" job-companies text-xl font-semibold"> ${interview.jobComapany} </h2>
            <h5 class=" job-title text-neutral/50">${interview.jobTittle}</h5>
            <p class=" job-info text-neutral/50">${interview.jobInfo}</p>
            <p class=" job-status inline-block px-4 py-2 rounded bg-blue-100 text-blue-700 text-xs font-semibold">${interview.jobStatus}</p>
            <p class="job-description">${interview.jobDescription}</p>
            <div class="flex gap-3">
                <button class=" interview-btn  btn btn-sm btn-outline btn-success">Interview</button>
                <button class=" reject-btn btn btn-sm btn-outline btn-error">Rejected</button>
            </div>
        </div>
         <div class=" card-right  w-8 h-8 flex justify-center cursor-pointer items-center border border-gray-200 rounded-full shrink-0">
                <img src="images/Trash.png" alt="">
            </div>
        
        ` 
        filterSection.appendChild(div)
    }
}

//Rejectedrender function 

function rejectRender(){
    filterSection.innerHTML = "";

    for(let reject of rejectedList){
        // console.log(interview)
        let div = document.createElement('div');
    div.className ="bg-white border border-gray-200 shadow-sm p-8 rounded-md flex justify-between hover:shadow-lg mb-4 "
        div.innerHTML = `
         <div class="card-top space-y-5">
            <h2 class=" job-companies text-xl font-semibold"> ${reject.jobComapany} </h2>
            <h5 class=" job-title text-neutral/50">${reject.jobTittle}</h5>
            <p class=" job-info text-neutral/50">${reject.jobInfo}</p>
            <p class=" job-status inline-block px-4 py-2 rounded bg-blue-100 text-blue-700 text-xs font-semibold">${reject.jobStatus}</p>
            <p class="job-description">${reject.jobDescription}</p>
            <div class="flex gap-3">
                <button class=" interview-btn  btn btn-sm btn-outline btn-success">Interview</button>
                <button class=" reject-btn btn btn-sm btn-outline btn-error">Rejected</button>
            </div>
        </div>
         <div class=" card-right  w-8 h-8 flex justify-center cursor-pointer items-center border border-gray-200 rounded-full shrink-0">
                <img src="images/Trash.png" alt="">
            </div>
        
        ` 
        filterSection.appendChild(div)
    }
}



// jobstatus problem fixed korar jonno
function updateAllCardStatus(companyName, status){
    const allJobCards = allCards.querySelectorAll('.bg-white');

    allJobCards.forEach(card => {
        const name = card.querySelector('.job-companies').innerText;
        if(name === companyName){
            card.querySelector('.job-status').innerText = status;
        }
    });
}

