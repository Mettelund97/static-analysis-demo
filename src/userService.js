function getUser(id) {
    var user = undefined;
    if (id == null) return;

    if (id == 1) {
        user = { name: "John", age: "25" };
    } else if (id == 2) {
        user = { name: "Jane", age: "24" };
    }

    return user;
}
function saveUser(userData) {
    const user_data = userData;
    var success = true;

    try {
        console.log("Saving user:", user_data);
    } catch (error) {
        success = false;
    }

    return success;
}
module.exports = { getUser, saveUser };