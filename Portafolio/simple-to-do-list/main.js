document.querySelector('#push').onclick = addTask;

document.querySelector('#newtask input').addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        addTask();

    }
})


    function addTask(){
        if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a Task")
    }else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id= "taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <span id= "taskname">
                <i class="fa-solid fa-trash"></i>
            </span>
            </button>
        </div>
        `;
    } 
   
    var current_tasks = document.querySelectorAll('.delete');
    for (var i=0; i<current_tasks.length; i++) {
        current_tasks[i].onclick = function (){
            this.parentNode.remove();
        }
    }
    var tasks = document.querySelectorAll('#taskname');
    for (var i = 0; i < tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    document.querySelector('#newtask input').value="";
}
