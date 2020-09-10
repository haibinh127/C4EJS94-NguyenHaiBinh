let timeSheetData = [
    act1 = {
        Project: "Learn front-end",
        Task: "Learn HTML",
        TimeSpent: "6"
    },
    act2 = {
        Project: "Learn front-end",
        Task: "Learn CSS",
        TimeSpent: "8"
    },
    act3 = {
        Project: "Learn JS Variables and Data Types",
        Task: "Learn HTML",
        TimeSpent: "6"
    },
    act4 = {
        Project: "Learn git",
        Task: "Learn HTML",
        TimeSpent: "2"
    }
];
let addBtn = document.getElementById("btn");
let body = document.getElementById("ts_tbody");
console.log(timeSheetData);
function reloadtimeSheetData() {
    body.innerHTML = '';
    for (let i = 0; i < timeSheetData.length; i++) {
        body.innerHTML += `<tr>
        <td>${timeSheetData[i].Project}</td>
        <td>${timeSheetData[i].Task}</td>
        <td>${timeSheetData[i].TimeSpent}</td>
        <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
    </tr>`
    };
};
addBtn.addEventListener('click', function () {
    let h1 = document.getElementById("ip1").value;
    let h2 = document.getElementById("ip2").value;
    let h3 = document.getElementById("ip3").value;
    let x = { Project: `${h1}`, Task: `${h2}`, TimeSpent: `${h3}` };
    timeSheetData.push(x);
    console.log(timeSheetData);
    body.innerHTML += `<tr>
        <td>${x.Project}</td>
        <td>${x.Task}</td>
        <td>${x.TimeSpent}</td>
        <td><input type="button" value="Delete" onclick="deleteRow(this)"> <input type="button" value="Update" onclick="updateRow"></td>
    </tr>`;
});
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
};
function updateRow(){
    let h1 = document.getElementById("ip1").value;
    let h2 = document.getElementById("ip2").value;
    let h3 = document.getElementById("ip3").value;
    
};