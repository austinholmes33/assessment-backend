const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneButton')
const goalSubmit = document.querySelector('#goalSubmit')
const newGoal = document.querySelector('#newGoal')

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
        .catch(err) 
        }
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
.catch
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