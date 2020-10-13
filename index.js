function getProfiles() {
  const menteeList = []
  fetch('http://localhost:3000/cohort1')
    .then(res => res.json())
    .then(mentees => {
      menteeList.push(mentees)
      console.log(menteeList)
    })
    .catch(err => console.error(err));
}

getProfiles();