async function fetchUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();
    const modifiedUsersData = usersData.map(obj => {
        const newObj = {};
        newObj["name"] = obj.name;
        newObj["username"] = obj.username;
        newObj["email"] = obj.email;
        newObj["address"] = obj.address.street;
        newObj["phone"] = obj.phone;
        newObj["website"] = obj.website;
        newObj["company"] = obj.company.name;

        return newObj
    });
    //console.log(modifiedUsersData);
    const filteredUsers = modifiedUsersData.filter(usr => usr.email.endsWith('.biz'));
    //console.log(filteredUsers);
    const sortedUsers = filteredUsers.sort((a,b) => (a.name > b.name) ? 1 : -1 );
    console.log(sortedUsers);
}

fetchUserData()
