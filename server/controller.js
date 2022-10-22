const goals = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['It will be a good day', 'It will be a bad day', 'You will succeed', 'You will not succeed', 'You will eat today'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addGoal: (req, res) => {
        const goal = req.body.goal
        const goalPriority = req.body.goalPriority
        let highestId = 0
        for (let i = 0; i < goals.length; i++) {
            if (goals[i].id > highestId) {
                highestId = goals[i].id
            }
        }
        highestId++

        let newGoal = {
            goal: goal,
            goalPriority: goalPriority,
            id: highestId,
        }
        goals.push(newGoal)
        console.log(goals)
        res.status(200).send(goals)
 
    },

    updateGoal: (req, res) => {
        let id = req.params.id
        id = +id
        for (let i = 0; i < goals.length; i++) {
            if (goals[i].id === id) {
                goals[i].goalsPriority ++
            }
 }
    res.status(200).send(goals)
},

    deleteGoal: (req, res) => {
        let id = +req.params.id
        for (let i = 0; i < goals.length; i++) {
            if (goals[i].id === id) {
                goals.splice(i, 1)
            }
        }
        res.status(200).send(goals)
    },
}