// Javascript HW6 - asynchronous events
// Use https://randomuser.me/api/?results=10 to get
// random user profiles including an image, name
// and their registration date.

const getUsersButton = document.getElementById('GetUsers');
getUsersButton.addEventListener('click', getUsers);

const clearUsersButton = document.getElementById('ClearUsers');
clearUsersButton.addEventListener('click', clearUsers);

// Main functionality - get users and display
function getUsers() {
    const url = 'https://randomuser.me/api/?results=10';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 ) {
            if (xhr.status === 200) {
                let userdata_parsed = JSON.parse(xhr.responseText);

                for (i = 0; i < userdata_parsed.results.length; i++) {
                    // Image
                    let pic = userdata_parsed.results[i].picture.large;
                    
                    // Name
                    let name = `${userdata_parsed.results[i].name.first}
                                ${userdata_parsed.results[i].name.last}`;
                    
                    // Registration date
                    let RegisteredDate = new Date(userdata_parsed.results[i].registered.date);
                    let registered_date_array = RegisteredDate.toString().split(' ');
                    let registered_date_display = `
                        ${registered_date_array[1]}
                        ${registered_date_array[2]},
                        ${registered_date_array[3]}
                    `;

                    // Display user profiles
                    document.getElementById('Output').innerHTML += `
                        <div class='profile' id='profile-${i}'>
                            <img src='${pic}'>
                            <p>
                                <b class='name'>${name.toUpperCase()}</b><br>
                                <i>${registered_date_display}</i>
                            </p>
                        </div>`
                    ;

                    // Add clear users option
                    clearUsersButton.style.display = 'block';
                }

            } else {
                document.getElementById('Output').innerHTML = 'There was an error';
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send(null);
}

// Secondary functionality - clear output
function clearUsers() {
    document.getElementById('Output').innerHTML = '';
    clearUsersButton.style.display = 'none';
}
