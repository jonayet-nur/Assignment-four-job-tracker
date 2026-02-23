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