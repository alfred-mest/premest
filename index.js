function getProfiles() {
  const menteeList = []
  fetch('https://intense-retreat-48313.herokuapp.com/cohort1')
    .then(res => res.json())
    .then(mentees => {
      menteeList.push(mentees)
      console.log(menteeList)
    })
    .catch(err => console.error(err));

  const jobList = []
  fetch('https://sheetdb.io/api/v1/j5h08ez2yjeqi')
    .then(res => res.json())
    .then(jobs => {
      jobList.push(jobs)
      console.log(jobList)
    })
    .catch(err => console.error(err));
}

function addListenerToApplyButton() {
  const buttons = document.querySelectorAll(".apply-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", applyButtonClick);
  }
}
function handleSmScreenApplyClick() {

}

function handleMobileScreenApplyClick() {
  const sideFilter = document.querySelector(".side-filter");
  sideFilter.classList.add("hidden");

  const jobsRow = document.querySelector(".job-row");
  const jobCards = document.querySelectorAll(".job-card");

  for (let i = 0; i < jobCards.length; i++) {
    jobCards[i].classList.remove("md:w-1/3");
    //jobCards[i].classList.add("md:w-1/3");
  }
  jobsRow.classList.add('w-1/3');
  jobsRow.classList.add('overflow-y-scroll');
  jobsRow.classList.add('h-screen');
}

function applyButtonClick() {
  //event.preventDefault();
  console.log('Button clicked');

}

addListenerToApplyButton();