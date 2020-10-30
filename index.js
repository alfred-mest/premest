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

getProfiles();