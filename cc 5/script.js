let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    students.push({
        name: name,
        attendance: "Not Marked"
    });

    saveStudents();
    displayStudents();

    document.getElementById("studentName").value = "";
}

function markAttendance(index, status) {
    students[index].attendance = status;

    saveStudents();
    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);

    saveStudents();
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentList");

    table.innerHTML = "";

    students.forEach((student, index) => {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        let attendanceCell = document.createElement("td");
        attendanceCell.textContent = student.attendance;

        let actionCell = document.createElement("td");

        let presentButton = document.createElement("button");
        presentButton.textContent = "Present";
        presentButton.onclick = () => markAttendance(index, "Present");

        let absentButton = document.createElement("button");
        absentButton.textContent = "Absent";
        absentButton.onclick = () => markAttendance(index, "Absent");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteStudent(index);

        actionCell.append(presentButton, " ", absentButton, " ", deleteButton);

        row.append(nameCell, attendanceCell, actionCell);
        table.appendChild(row);
    });
}

displayStudents();