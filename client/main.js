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
    }
    axios.post('http://localhost:4000/goals', body)
.then((res) => {
	const data = res.data
    alert(data)
})
}

const updateGoal = (event) => {
    event.preventDefault()
}

const deleteGoal = (event) => {
    event.preventDefault()
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
movieSubmit.addEventListener('click', addMovie)