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

    goalInput.value = ''
    goalPriorityInput.value = ''

    axios.post('http://localhost:4000/create/', body)
    .then((res) => {
	let db = res.data
    for(let i = 0; i < db.length; i++) {
        displayUseronDOM(db[i])
    }
})
    .catch((err) => {
        console.log(err)
        console.error(err.response.data); 
        console.error(err.response.status);
    })
}

const updateGoalPriority = (event) => {
    event.preventDefault()
    incId = incIdInput.value

    axios.put('http://localhost:4000/goals/priority/?id=' + incId)
    .then((res) => {
        let db = res.data
        for (let i = 0; i < db.length; i++) {
            displayUserOnDOM(db[i])
        }
    })
    .catch((err) => {
        console.log(err)
        console.error(err.response.data); 
        console.error(err.response.status);
    })
}


const deleteGoal = (event) => {
    event.preventDefault()
    deleteId = deleteIdInput.value

    axios.delete('http://localhost:4000/delete/' + deleteId)
    .then((res) => {
        let db = response.data
        for (let i = 0; i < db.length; i++) {
            displayUserOnDOM(db[i])
        }
    })
    .catch((err) => {
        console.log(err)
        console.error(err.response.data); 
        console.error(err.response.status);
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
newGoal.addEventListener('submit', addGoal)
incForm.addEventListener('submit', updateGoalPriority)
deleteForm.addEventListener('submit', deleteGoal)