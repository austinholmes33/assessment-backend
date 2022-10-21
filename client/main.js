const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');
const goalSubmit = document.querySelector('#goalSubmit');
const updateSubmit = document.querySelector('#updateSubmit');
const deleteSubmit = document.querySelector('#deleteSubmit');
const newGoal = document.querySelector('#newGoal');
const updatedGoal = document.querySelector('#updatedGoal');
const completedGoal = document.querySelector('#completedGoal');

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
        goal: goal.value
    }
    axios.post('http://localhost:4000/goals', body)
.then((res) => {
	const data = res.data
    alert(data)
})
}

const updateGoal = (event) => {
    event.preventDefault()
    let body = {
        goal: goal.value
    }
    axios.put('http://localhost:4000/goals/')
}

const deleteGoal = (event) => {
    event.preventDefault()
    axios.delete('http://localhost:4000/goals/')
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalSubmit.addEventListener('submit', addGoal)
updateSubmit.addEventListener('submit', updateGoal)
deleteSubmit.addEventListener('submit', deleteGoal)