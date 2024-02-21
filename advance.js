
function fetchData() {

    const xhr = new XMLHttpRequest();

    xhr.open('get', 'https://65cc5a54dd519126b83e4e51.mockapi.io/Register', true)

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            const data = JSON.parse(xhr.responseText)
            populateTable(data)
        } else {
            console.error('Error fetching data:', xhr.statusText);
        }
    }

    xhr.onerror = function () {
        console.error('Error fetching data:', xhr.statusText);
    }
    xhr.send();
}

const populateTable = (data) => {
    const tableBody = document.getElementById('table-body')
    // tableBody.innerHTML = '';
    let index = 1;

    data.map((list) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${index}</td>
      <td>${list.fName}</td>
      <td>${list.lName}</td>
      <td>${list.email}</td>
      <td>${list.password}</td>
      <td>
        <button class='btn btn-sm btn-outline-primary' ><i class="fa fa-eye" aria-hidden="true"></i></button>
        <button class='btn btn-sm btn-outline-warning fw-bold' onclick="editPage(${list.id})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button class='btn btn-sm btn-outline-danger' onclick="deleteList(${list.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
      </td>`;
        tableBody.appendChild(row)
        // console.log(row)
        index++;
        
    })
}

//edit , delete, view functions

//delete function and logics

const deleteList = (id) => {
    const xhr = new XMLHttpRequest();
    if (!confirm('Are you sure you want to delete this item?')) {
       return;
    }else{
        xhr.open('delete', `https://65cc5a54dd519126b83e4e51.mockapi.io/Register/${id}`,true)
    }

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            location.reload()
        } else {
            console.error('Error deleting item:', xhr.statusText);
        }
    }
    xhr.onerror = function () {
        console.error('Error deleting item:', xhr.statusText);
    }
    xhr.send();
}
// edit page
function editPage(id) {
    console.log(id)
    window.location.href = `editad.html?id=${id}`; // Redirect to edit page
}




fetchData();

