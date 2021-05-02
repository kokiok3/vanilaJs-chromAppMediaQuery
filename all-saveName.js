const userLc = "currentuser",
form = document.querySelector(".form"),
hfour = document.querySelector(".hfour"),
input = document.querySelector(".input"),
showing = "showing";

function save(name){
    localStorage.setItem(userLc,name);
}

function paintGreeting(name){
form.classList.remove(showing);
hfour.classList.add(showing);
hfour.innerText=`Hello ${name}`;
}

function handleSubmit(event){
event.preventDefault();
const currentValue = input.value;
paintGreeting(currentValue);
save(currentValue);

}

function askForName(){
form.classList.add(showing);
form.addEventListener("submit", handleSubmit);
}

    function loadName(){
        const currentUser = localStorage.getItem(userLc);
        if(currentUser === null){
            askForName();
        } else{
            paintGreeting(currentUser);
        }
    }

    loadName();