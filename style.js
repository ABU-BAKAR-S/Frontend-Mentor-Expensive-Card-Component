
import data from "./data.json" assert { type: "json" };

const upBar = document.querySelectorAll(".upBar");
const bar = document.querySelectorAll(".bar");

for (let x = 0; x < data.length; x++) {
    upBar[x].innerHTML = "$" + data[x].amount;
}

for (let x = 0; x < data.length; x++) {

    bar[x].style.height = data[x].amount * 2.5 + "px";

}

for (let x = 0; x < 7; x++) {
    if (data[x].amount >= 50) {
        bar[x].style.background = "hsl(186, 34%, 60%)";
    }
}