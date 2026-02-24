let interviewList = [];
let rejectedList = [];

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

    rejectedCount = rejectedList.length;
    
}
totalCount()


mainContainer.addEventListener("click" , function(event){
    // console.log(event.target)
    if(event.target.classList.contains('interview-btn')){
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
    const jobExit = interviewList.find(item => item.jobComapany == cardInfo.jobComapany);
    parenNode.querySelector('.job-status').innerText= 'interview'
    if(!jobExit){
        interviewList.push(cardInfo)
        // console.log(interviewList);
    }
    
    interviewRender()
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
            <h2 class=" job-companies text-xl font-semibold">Mobile First Corp</h2>
            <h5 class=" job-title text-neutral/50">React Native Developer</h5>
            <p class=" job-info text-neutral/50">Remote • Full-time • $130,000 - $175,000</p>
            <p class=" job-status inline-block px-4 py-2 rounded bg-blue-100 text-blue-700 text-xs font-semibold">Not Applied</p>
            <p class="job-description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
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