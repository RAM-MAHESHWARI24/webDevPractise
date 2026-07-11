var fixed = 2;
var canChange;
var email = "hello@gmail.com";
var apiKey = "39kassdwa";
var x;
var arrayofstring = ["abc", "qwert", "yuiop"];
var error_code = [2132];
var map_coordinates = [343, 985];
var UserA = {
    id: "2",
    username: "Ram",
    password: "123",
    isActive: true,
    lastLoginDate: new Date("22/03/2002")
};
function checkName(current_user) {
    if (current_user.username == "good")
        return true;
    else
        return false;
}
var checkName1 = function (current_user) {
    return true;
};
console.log(checkName(UserA));
var dashboardState;
dashboardState = "loading";
var dynamicID = 0;
dynamicID = 4;
dynamicID = "FSD";
var loginButton = document.querySelector("#loginBTN");
if (loginButton) {
    loginButton.addEventListener("click", function () {
        console.log("Login Button Pressed");
    });
}
