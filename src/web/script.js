function uploadFile()
{
    document.getElementById("msg").innerHTML =
    "Student CSV Uploaded Successfully";
}

function generateHalls()
{
    let count =
    document.getElementById("hallCount").value;

    let output = "";

    for(let i=1;i<=count;i++)
    {
        output += `
        <h3>Hall ${i}</h3>

        <input
        class="hallName"
        type="text"
        placeholder="Enter Hall Name">

        <input
        class="hallCapacity"
        type="number"
        placeholder="Enter Capacity">

        <br><br>
        `;
    }

    document.getElementById("hallInputs")
    .innerHTML = output;
}

function saveHalls()
{
    let hallNames =
    document.querySelectorAll(".hallName");

    let hallCapacities =
    document.querySelectorAll(".hallCapacity");

    let halls = [];

    for(let i=0;i<hallNames.length;i++)
    {
        halls.push({
            name: hallNames[i].value,
            capacity: hallCapacities[i].value
        });
    }

    localStorage.setItem(
        "halls",
        JSON.stringify(halls)
    );

    document.getElementById("message")
    .innerHTML =
    "Hall Configuration Saved Successfully";
}

function searchStudent()
{
    let usn =
    document.getElementById("usn").value;

    if(usn=="1JB24IS001")
    {
        document.getElementById("result")
        .innerHTML =
        "Hall A - Seat 1";
    }
    else if(usn=="1JB24IS002")
    {
        document.getElementById("result")
        .innerHTML =
        "Hall A - Seat 2";
    }
    else if(usn=="1JB24IS003")
    {
        document.getElementById("result")
        .innerHTML =
        "Hall B - Seat 1";
    }
    else
    {
        document.getElementById("result")
        .innerHTML =
        "Student Not Found";
    }
}

function toggleMenu()
{
    let sidebar =
    document.getElementById("sidebar");

    if(sidebar.style.left=="0px")
    {
        sidebar.style.left="-250px";
    }
    else
    {
        sidebar.style.left="0px";
    }
}

function searchStudent()
{
    let usn =
    document.getElementById("usn").value;

    if(usn=="1JB24IS001")
    {
        document.getElementById("result")
        .innerHTML =
        "📍 Hall A - Seat 1";
    }

    else if(usn=="1JB24IS002")
    {
        document.getElementById("result")
        .innerHTML =
        "📍 Hall A - Seat 2";
    }

    else if(usn=="1JB24IS003")
    {
        document.getElementById("result")
        .innerHTML =
        "📍 Hall B - Seat 1";
    }

    else
    {
        document.getElementById("result")
        .innerHTML =
        "❌ Student Not Found";
    }
}

function toggleSidebar()
{
    let sidebar =
    document.getElementById("sidebar");

    if(sidebar.style.left === "0px")
    {
        sidebar.style.left = "-280px";
    }
    else
    {
        sidebar.style.left = "0px";
    }
}