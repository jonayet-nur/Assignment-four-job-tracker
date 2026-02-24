  //no jobs interview function
  function interviewRender(){
    filterSection.innerHTML = '';

    const emptySection = document.getElementById('interview-empty');

    if(interviewList.length === 0){
        emptySection.classList.remove('hidden');
        return;
    }else{
        emptySection.classList.add('hidden');
    }

    for(let interview of interviewList){
        const div = document.createElement('div');
        div.className = 'bg-white border border-gray-200 shadow-sm p-8 rounded-md flex justify-between hover:shadow-lg mb-4'
          
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

        filterSection.appendChild(div);
    }

}




//no jobs rejected function
function rejectRender(){
    filterSection.innerHTML = '';

    const emptySection = document.getElementById('interview-empty');

    if(rejectedList.length === 0){
        emptySection.classList.remove('hidden');
        return;
    }else{
        emptySection.classList.add('hidden');
    }

    for(let interview of rejectedList){
        const div = document.createElement('div');
        div.className = 'bg-white border border-gray-200 shadow-sm p-8 rounded-md flex justify-between hover:shadow-lg mb-4'
          
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