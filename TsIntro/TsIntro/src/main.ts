export {};
const fixed: number = 2
let canChange: number;
const email: string = "hello@gmail.com";

const apiKey = "39kassdwa";
let x;

let arrayofstring: string[] = ["abc", "qwert", "yuiop"];

let error_code: number[] = [2132];

let map_coordinates: [number, number] = [343, 985];

interface userProfile {
    id: string;
    username: string;
    password: string;
    isActive: boolean;
    lastLoginDate?: Date;
}

const UserA: userProfile = {
    id: "2",
    username: "Ram",
    password: "123",
    isActive: true,
    lastLoginDate:new Date("22/03/2002")
}

function checkName(current_user: userProfile): boolean {
    if (current_user.username == "good") return true;
    else return false;
}

const checkName1 = (current_user: userProfile) => {
    return true;
}

console.log(checkName(UserA));

let dashboardState: "inactive" | "active" | "loading";
dashboardState = "loading";

let dynamicID: string | number = 0;
dynamicID = 4;
dynamicID = "FSD";


const loginButton = document.querySelector("#loginBTN");
if (loginButton) {
    loginButton.addEventListener("click", () => {
        console.log("Login Button Pressed");
    })
}