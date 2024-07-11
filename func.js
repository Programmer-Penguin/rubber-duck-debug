var elements = [];

elements.push(document.querySelector('body'));
elements.push(document.querySelector('h1'));
elements.push(document.querySelectorAll("button"));
elements.push(document.querySelectorAll("a"));




var radio_buttons = [];
radio_buttons.push(document.getElementById("light_radio"));
radio_buttons.push(document.getElementById("dark_radio"));

var radio_result = document.getElementById("radio_result");

var visitCount = localStorage.getItem("page_view") || 1;

// Increment the count on each visit
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);

// Display the coun
if (document.getElementById("counter-value"))
{
    document.getElementById("counter-value").innerHTML = visitCount;
}

// Reset the counter
function resetCounter()
{
    localStorage.removeItem("page_view");
    document.getElementById("counter-value").innerHTML = 1;
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function change_theme()
{
    // if light mode:
    if (radio_buttons[0].checked)
    {
        elements[0].style.backgroundColor = 'white';
        elements[1].style.color = 'black';

        elements[2].forEach(function(button)
        {
            button.style.color = 'black';
            button.style.backgroundColor = 'white';
        });


        elements[3].forEach(function(link)
        {
            link.style.color = "#2a4b8d";
        });
        document.getElementsByClassName("theme_submit_button")[0].style.color = 'grey';
        document.getElementById("welcome_sign").innerHTML = "goodbye";
        document.getElementsByClassName("penguin_pfp")[0].style.border = "5px solid black";
    }
    // elif dark mode:
    else if (radio_buttons[1].checked)
    {
        elements[0].style.backgroundColor = 'black';
        elements[1].style.color = 'blue';

        // for each button, change color to blue and bg to black
        elements[2].forEach(function(button) 
        {
            button.style.color = 'blue';
            button.style.backgroundColor = 'black';
        });
 
        elements[3].forEach(function(link)
        {
            link.style.color = "red";
        });
        document.getElementById("change_theme_button").style.color = "grey";
        document.getElementsByClassName("penguin_pfp").style.border = "5px solid blue";
    }
    // else idk:
    else
    {
        console.log("idk man");
    }
}

const query_box = document.querySelector("textarea");

function handleResize()
{
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
}
query_box.addEventListener("input", handleResize);


query_box.addEventListener("keydown", function(event) {
    if ((event.ctrlKey) && (event.key === "Enter")) {
        if (query_box.value != "") {
            quack();
        }
    }
});

async function quack()
{
    let iterate = Math.floor(Math.random() * 5) + 1;
    for (let i = 1; i <= iterate; i++)
    {
        query_box.value = "";
        let audio = new Audio("quack.mp3");
        audio.volume = 0.3;
        audio.play();
        await sleep(250);
    }
    query_box.value = "";
}
document.addEventListener('DOMContentLoaded', async function()
{
    await sleep(12000);
    document.getElementById("ddb_info").innerHTML = "";
});
