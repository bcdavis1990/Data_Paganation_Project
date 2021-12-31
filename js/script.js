/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");

//Declaring the number of items per page and how many pages we need
const itemsPerPage = parseInt(9);
const numberOfPages = Math.ceil(data.length / itemsPerPage);

//Function to display student data
function showPage(list, page) {
  studentList.innerHTML = "";
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;
  // loops over student data for the list item being created
  for (let i = 0; i < list.length; i++) {
    const student = list[i];
    // condidtional statement that displays that determines the appropriate items to create
    if (i >= startIndex && i < endIndex) {
      const studentListItem = `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src=${student.picture.large} alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
            <span class="date">${student.registered.date}</span>
         </div>
      </li>`;
      studentList.insertAdjacentHTML("beforeend", studentListItem);
    }
  }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  const numberOfButtons = numberOfPages;
  linkList.innerHTML = "";
  //loop creating buttons as needed
  for (i = 1; i <= numberOfButtons; i++) {
    const button = `<li>
        <button type="button">${[i]}</button>
      </li>`;
    linkList.insertAdjacentHTML("beforeend", button);
  }

  document.querySelector(".link-list button").className = "active";

  linkList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      linkList.querySelector("button[class = active]").className = "";
      e.target.className = "active";
      showPage(list, event.target.textContent);
    }
  });
}

// Call functions
showPage(data, 1);
addPagination(data);
