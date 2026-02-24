  
//  Interview Render Fixed no jobs card

function interviewRender() {
    filterSection.innerHTML = '';

    // hide rejected empty
    const rejectedEmpty = document.getElementById('rejected-empty');
    if(rejectedEmpty) rejectedEmpty.classList.add('hidden');

    if(interviewList.length === 0){
        const div = document.createElement('div');
        div.className = "no-jobs w-10/12 mx-auto mt-4";
        div.innerHTML =`
            <div class="text-center bg-white py-20 rounded-md border-gray-200 shadow-md"> 
                <img src="images/jobs.png" alt="" class="mx-auto mb-5">
                <h2 class="mb-1 font-semibold text-2xl text-[#002C5C]">No jobs available</h2>
                <p class="text-lg text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
        `
        filterSection.appendChild(div);
        return;
    }

    for(let interview of interviewList){
        const div = document.createElement('div');
        div.className = 'bg-white border border-gray-200 shadow-sm p-8 rounded-md flex justify-between hover:shadow-lg mb-4';
        div.innerHTML = `<div class="card-top space-y-5">
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
         
        filterSection.appendChild(div);
    }
}

//  Rejected Render Fixed no jobs card 
function rejectRender() {
    filterSection.innerHTML = '';

    // hide interview empty
    const interviewEmpty = document.getElementById('interview-empty');
    if(interviewEmpty) interviewEmpty.classList.add('hidden');

    if(rejectedList.length === 0){
        const div = document.createElement('div');
        div.className = "no-jobs w-10/12 mx-auto mt-4";
        div.innerHTML = `
            <div class="text-center bg-white py-20 rounded-md border-gray-200 shadow-md"> 
                <img src="images/jobs.png" alt="" class="mx-auto mb-5">
                <h2 class="mb-1 font-semibold text-2xl text-[#002C5C]">No jobs available</h2>
                <p class="text-lg text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
        `
        
        filterSection.appendChild(div);
        return;
    }

    for(let interview of rejectedList){
        const div = document.createElement('div');
        div.className = 'bg-white border border-gray-200 shadow-sm p-8 rounded-md flex justify-between hover:shadow-lg mb-4';
        div.innerHTML = `
         <div class="card-top space-y-5">
            <h2 class="job-companies text-xl font-semibold">${interview.jobComapany}</h2>
            <h5 class="job-title text-neutral/50">${interview.jobTittle}</h5>
            <p class="job-info text-neutral/50">${interview.jobInfo}</p>
            <p class="job-status inline-block px-4 py-2 rounded bg-blue-100 text-blue-700 text-xs font-semibold">${interview.jobStatus}</p>
            <p class="job-description">${interview.jobDescription}</p>
            <div class="flex gap-3">
                <button class="interview-btn btn btn-sm btn-outline btn-success">Interview</button>
                <button class="reject-btn btn btn-sm btn-outline btn-error">Rejected</button>
            </div>
        </div>
         <div class="card-right w-8 h-8 flex justify-center cursor-pointer items-center border border-gray-200 rounded-full shrink-0">
            <img src="images/Trash.png" alt="">
        </div>
        `;
        filterSection.appendChild(div);
    }
}



// out of  8 jobs count korar jonno 
const jobProgress = document.getElementById('job-progress');
function updateJobProgress(){
    const totalJobs = allCards.children.length;

    if(currentStatus === 'interview-toggle-btn'){
        jobProgress.innerText = `${interviewList.length} out of ${totalJobs}`;
    }else if(currentStatus === 'rejected-toggle-btn'){
        jobProgress.innerText = `${rejectedList.length} out of ${totalJobs}`;
    }else{
        jobProgress.innerText = totalJobs;
    }
}