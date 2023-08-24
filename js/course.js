// Sample data
const courses = [
    ["1", "UNIX INSTITUTE JAUNPUR", "Diploma Course AC Fridge Repairing, DRA", "10th", "6 Months", "", "Join"],
    ["2", "UNIX INSTITUTE JAUNPUR", "Diploma Course Advance Diploma In Computer Application", "10th", "12 Months", "", "Join"],
    ["3", "UNIX INSTITUTE JAUNPUR", "Diploma Course Android Apps Development", "10th", "6 Months", "", "Join"],
    ["4", "UNIX INSTITUTE JAUNPUR", "Diploma Course C, C Plus Plus", "12th", "6 Months", "", "Join"],
    ["5", "UNIX INSTITUTE JAUNPUR", "Diploma Course Complete Web Designing", "12th", "12 Months", "", "Join"],
    ["6", "UNIX INSTITUTE JAUNPUR", "Diploma Course Computer Hardware Networking", "10th", "6 Months", "", "Join"],
    ["7", "UNIX INSTITUTE JAUNPUR", "Diploma Course CSS", "12th", "3 Months", "", "Join"],
    ["8", "UNIX INSTITUTE JAUNPUR", "Diploma Course Data Structure", "12th", "6 Months", "", "Join"],
    ["9", "UNIX INSTITUTE JAUNPUR", "Diploma Course Diploma in Computer Applications", "10th", "6 Months", "", "Join"],
    ["10", "UNIX INSTITUTE JAUNPUR", "Diploma Course Diploma in Financial Accounting", "10", "6 Months", "", "Join"],
    ["11", "UNIX INSTITUTE JAUNPUR", "Diploma Course Diploma in Financial Applications", "10th", "6 Months", "", "Join"],
    ["12", "UNIX INSTITUTE JAUNPUR", "Diploma Course Domestic Electrician", "10th", "6 Months", "", "Join"],
    ["13", "UNIX INSTITUTE JAUNPUR", "Diploma Course HTML", "12th", "3 Months", "", "Join"],
    ["14", "UNIX INSTITUTE JAUNPUR", "Diploma Course JAVA", "10th", "6 Months", "", "Join"],
    ["15", "UNIX INSTITUTE JAUNPUR", "Diploma Course Java Script", "12th", "6 Months", "", "Join"],
    ["16", "UNIX INSTITUTE JAUNPUR", "Diploma Course Mobile Repairing", "10th", "3 Months", "", "Join"],
    ["17", "UNIX INSTITUTE JAUNPUR", "Diploma Course Moter Binding", "10th", "3 Months", "", "Join"],
    ["18", "UNIX INSTITUTE JAUNPUR", "Diploma Course PHP", "10th", "6 Months", "", "Join"],
    ["19", "UNIX INSTITUTE JAUNPUR", "Diploma Course Phython", "12th", "6 Months", "", "Join"],
    ["20", "UNIX INSTITUTE JAUNPUR", "Diploma Course Washing Machine Repairing", "10th", "3 Months", "", "Join"]
];

function populateTable() {
    const tbody = document.getElementById("table-body");

    courses.forEach(course => {
        const row = document.createElement("tr");
        course.forEach((data, index) => {
            const cell = document.createElement("td");

            // Check if the current column is for the "To Do" field (index 6)
            if (index === 6) {
                const button = document.createElement("button");
                const anchor = document.createElement("a");
                anchor.href = "#"; // Set the href attribute to #
                anchor.textContent = data; // The "Join" text

                button.appendChild(anchor);
                cell.appendChild(button);
            } else {
                cell.textContent = data;
            }

            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

// Populate the table when the page loads
window.addEventListener("load", populateTable);
