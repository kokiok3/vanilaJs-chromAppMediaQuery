const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    // document나 toDoForm 이나 둘다해도 상관없는건가? 
    // body에 또다른 input 이 있기 때문에 부모의 input이라고 정확히 말해줘야함
    toDoList = document.querySelector(".js-toDoList"),
    toDos = "toDos";

    function saveToLc(){
        localStorage.setItem(toDos, JSON.stringify(arrToDo));
    }

    let arrToDo = [];

    function delToDo(event){
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);
        const cleanArr = arrToDo.filter(function(arr){
            return arr.id !== parseInt(li.id);
        });
        arrToDo = cleanArr;
        saveToLc();
    }

    function paintToDo(value){
        const id = arrToDo.length + 1;
        const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        span = document.createElement("span");
        delBtn.innerText = "❌"
        delBtn.addEventListener("click", delToDo);
        span.innerText = value;
        li.id = id;
        li.appendChild(span);
        li.appendChild(delBtn);
        toDoList.appendChild(li);
        const toDoObj = {
            text: value,
            id: id
        };
        arrToDo.push(toDoObj);
        saveToLc();
    }

    function handleSubmit(event){
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }

    function loadToDos(){
        const getToDos = localStorage.getItem(toDos);
        if(getToDos !== null){
            const parsedToDo = JSON.parse(getToDos);
            parsedToDo.forEach(function(todo) {
                paintToDo(todo.text);
            })
        }
    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();