const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');
const goalInput = document.querySelector('#goal-input');
const goalPriorityInput = document.querySelector('#goal-priority-input');
const deleteIdInput = document.querySelector('#delete-id-input');
const newGoal = document.querySelector('#newGoal');
const deleteForm = document.querySelector('#delete-form');
const incForm = document.querySelector('#inc-form');
const incIdInput = document.querySelector('#inc-id-input');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const addGoal = (event) => {
    event.preventDefault()

    let body = {
        goal: goalInput.value,
        goalPriority: goalPriorityInput.value,
    }


    axios.post("http://localhost:4000/api/create/", body)
    .then((res) => {
	let goals = res.data
    console.log(goals)
})
    .catch((err) => {
        console.log(err)
    })
    
    goalInput.value = ''
    goalPriorityInput.value = ''
}

const updateGoalPriority = (event) => {
    event.preventDefault()
    incId = incIdInput.value

    axios.put("http://localhost:4000/api/priority/?id=" + incId)
    .then((res) => {
        let goals = res.data
        console.log(goals)
    })
    .catch((err) => {
        console.log(err)
    })
}


const deleteGoal = (event) => {
    event.preventDefault()
    deleteId = deleteIdInput.value

    axios.delete("http://localhost:4000/api/delete/" + deleteId)
    .then((res) => {
        let goals = response.data
        console.log(goals)
    })
    .catch((err) => {
        console.log(err)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
newGoal.addEventListener('submit', addGoal)
incForm.addEventListener('submit', updateGoalPriority)
deleteForm.addEventListener('submit', deleteGoal)