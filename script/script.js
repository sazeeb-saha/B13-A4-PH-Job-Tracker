// Blank arrays for push the cards

let interviewListArr = [];
let rejectedListArr = [];

// Dashboard Count Variable

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let jobsCount = document.getElementById("jobs-count");

// all job application cards get by id

const allCards = document.getElementById("all-cards");

// main container get by  query selector for event delegation

const mainContainer = document.querySelector("main");

// filter section get by id

const filterSectionInterview = document.getElementById(
  "filtered-section-interview",
);
const filterSectionRejected = document.getElementById(
  "filtered-section-rejected",
);

// filter button get by id

const allFilterBtn = document.getElementById("all-btn");
const interviewFilterBtn = document.getElementById("interview-btn");
const rejectedFilterBtn = document.getElementById("rejected-btn");

//* function for calculate count job applications

function calculateCount() {
  totalCount.innerText = allCards.children.length;
  jobsCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewListArr.length;
  rejectedCount.innerText = rejectedListArr.length;
}

// function for tab jobs count

function updateJobsCount() {
  if (allFilterBtn.classList.contains("btn-primary")) {
    jobsCount.innerText = allCards.children.length;
  } else if (interviewFilterBtn.classList.contains("btn-primary")) {
    jobsCount.innerText = interviewListArr.length;
  } else if (rejectedFilterBtn.classList.contains("btn-primary")) {
    jobsCount.innerText = rejectedListArr.length;
  }
}

//! call calculate count function

calculateCount();

// *function for toggling button

function toggleButtonStyle(id) {
  // remove classlist

  allFilterBtn.classList.remove("btn-primary");
  interviewFilterBtn.classList.remove("btn-primary");
  rejectedFilterBtn.classList.remove("btn-primary");

  //   add class list on clicked button

  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.add("btn-primary");

  if (id == "interview-btn") {
    allCards.classList.add("hidden");
    filterSectionRejected.classList.add("hidden");
    filterSectionInterview.classList.remove("hidden");
    // jobsCount.innerText = interviewListArr.length;
  } else if (id == "all-btn") {
    allCards.classList.remove("hidden");
    filterSectionInterview.classList.add("hidden");
    filterSectionRejected.classList.add("hidden");
    // jobsCount.innerText = allCards.children.length;
  } else if (id == "rejected-btn") {
    allCards.classList.add("hidden");
    filterSectionInterview.classList.add("hidden");
    filterSectionRejected.classList.remove("hidden");
    // jobsCount.innerText = rejectedListArr.length;
  }
  checkEmptyState();
  updateJobsCount();
}

//* event delegation function

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-call")) {
    const parent = event.target.parentNode;
    const orgName = parent.querySelector(".org-name").innerText;
    const jobCat = parent.querySelector(".job-cat").innerText;
    const addTypeSalary = parent.querySelector(".add-type-salary").innerText;
    const jobStatus = parent.querySelector(".job-status").innerText;
    const jobDetails = parent.querySelector(".job-details").innerText;

    parent.querySelector(".job-status").innerText = "INTERVIEW";
    parent
      .querySelector(".job-status")
      .classList.add("text-green-500", "border-[1px]", "border-green-500");
    parent
      .querySelector(".job-status")
      .classList.remove("text-red-500", "border-[1px]", "border-red-500");

    const cardInfo = {
      orgName,
      jobCat,
      addTypeSalary,
      jobStatus: "INTERVIEW",
      jobDetails,
    };

    const plantExist = interviewListArr.find(
      (item) => item.orgName === cardInfo.orgName,
    );

    if (!plantExist) {
      interviewListArr.push(cardInfo);
    }

    rejectedListArr = rejectedListArr.filter(
      (item) => item.orgName !== cardInfo.orgName,
    );

    calculateCount();
    renderInterview();
    renderRejected();
    checkEmptyState();
    updateJobsCount();
  } else if (event.target.classList.contains("rejected-call")) {
    const parent = event.target.parentNode;
    const orgName = parent.querySelector(".org-name").innerText;
    const jobCat = parent.querySelector(".job-cat").innerText;
    const addTypeSalary = parent.querySelector(".add-type-salary").innerText;
    const jobStatus = parent.querySelector(".job-status").innerText;
    const jobDetails = parent.querySelector(".job-details").innerText;

    parent.querySelector(".job-status").innerText = "REJECTED";
    parent
      .querySelector(".job-status")
      .classList.add("text-red-500", "border-[1px]", "border-red-500");
    parent
      .querySelector(".job-status")
      .classList.remove("text-green-500", "border-[1px]", "border-green-500");

    const cardInfo = {
      orgName,
      jobCat,
      addTypeSalary,
      jobStatus: "REJECTED",
      jobDetails,
    };

    const plantExist = rejectedListArr.find(
      (item) => item.orgName == cardInfo.orgName,
    );

    if (!plantExist) {
      rejectedListArr.push(cardInfo);
    }

    interviewListArr = interviewListArr.filter(
      (item) => item.orgName !== cardInfo.orgName,
    );

    calculateCount();
    renderRejected();
    renderInterview();
    checkEmptyState();
    updateJobsCount();
  }
  const deleteBtn = event.target.closest(".delete-btn");

  if (deleteBtn) {
    const card = deleteBtn.closest(".card-dlt");
    const orgName = card.querySelector(".org-name").innerText;

    interviewListArr = interviewListArr.filter(
      (item) => item.orgName !== orgName,
    );

    rejectedListArr = rejectedListArr.filter(
      (item) => item.orgName !== orgName,
    );

    card.remove();

    calculateCount();
    renderInterview();
    renderRejected();
    checkEmptyState();
    updateJobsCount();
  }
});

function renderInterview() {
  filterSectionInterview.innerHTML = "";

  for (let interview of interviewListArr) {
    let div = document.createElement("div");
    div.className =
      "card-dlt bg-white rounded-xl p-6 flex justify-between hover:border-blue-700 hover:border-l-4 hover:border-r-[1px] hover:border-y-[1px]  mb-4 ";

    div.innerHTML = `
       <div>
            <h2 class="org-name text-xl font-semibold">${interview.orgName}</h2>
            <p class="job-cat text-[18px] text-gray-500">
              ${interview.jobCat}
            </p>
            <p class="add-type-salary text-gray-500 my-5">
             ${interview.addTypeSalary}
            </p>
            <span class="job-status border p-2 text-green-500  border-green-500">${interview.jobStatus}</span>
            <p class="job-details mt-5 mb-5">
              ${interview.jobDetails}
            </p>
            <button class="interview-call btn btn-outline btn-success">
              INTERVIEW
            </button>
            <button class="rejected-call btn btn-outline btn-error">REJECTED</button>
          </div>
          <button class="delete-btn btn btn-soft btn-error"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    filterSectionInterview.appendChild(div);
  }
}
function renderRejected() {
  filterSectionRejected.innerHTML = "";

  for (let rejected of rejectedListArr) {
    let div = document.createElement("div");
    div.className =
      "card-dlt bg-white rounded-xl p-6 flex justify-between hover:border-blue-700 hover:border-l-4 hover:border-r-[1px] hover:border-y-[1px]  mb-4 ";

    div.innerHTML = `
       <div>
            <h2 class="org-name text-xl font-semibold">${rejected.orgName}</h2>
            <p class="job-cat text-[18px] text-gray-500">
              ${rejected.jobCat}
            </p>
            <p class="add-type-salary text-gray-500 my-5">
             ${rejected.addTypeSalary}
            </p>
            <span class="job-status border p-2 text-red-500  border-red-500">${rejected.jobStatus}</span>
            <p class="job-details mt-5 mb-5">
              ${rejected.jobDetails}
            </p>
            <button class="interview-call btn btn-outline btn-success">
              INTERVIEW
            </button>
            <button class="rejected-call btn btn-outline btn-error">REJECTED</button>
          </div>
          <button class="delete-btn btn btn-soft btn-error"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    filterSectionRejected.appendChild(div);
  }
}

function checkEmptyState() {
  const emptyAll = document.getElementById("empty-all");
  const emptyInterview = document.getElementById("empty-interview");
  const emptyRejected = document.getElementById("empty-rejected");

  emptyAll.classList.add("hidden");
  emptyInterview.classList.add("hidden");
  emptyRejected.classList.add("hidden");

  const isAllActive = allFilterBtn.classList.contains("btn-primary");
  const isInterviewActive =
    interviewFilterBtn.classList.contains("btn-primary");
  const isRejectedActive = rejectedFilterBtn.classList.contains("btn-primary");

  if (isAllActive && allCards.children.length === 0) {
    emptyAll.classList.remove("hidden");
  }

  if (isInterviewActive && interviewListArr.length === 0) {
    emptyInterview.classList.remove("hidden");
  }

  if (isRejectedActive && rejectedListArr.length === 0) {
    emptyRejected.classList.remove("hidden");
  }
}

// always select toggle all tab button

window.onload = function () {
  toggleButtonStyle("all-btn");
};
