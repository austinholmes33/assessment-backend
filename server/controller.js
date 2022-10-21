const goals = []
const idCount = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['It will be a good day', 'It will be a bad day', 'You will succeed', 'You will not succeed'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addGoal: (req, res) => {
        const {goal} = req.body
        goals.push(newGoal)
        console.log(goals)
        res.status(200).send(goals)
        idCount++
    },

    updateGoal: (req, res) => {
        const updateId = req.params.id
        let type = req.body.type
        let index = goals.findIndex(element => element.id === +updateId)
        if (goals[i] >= 5) {
            goals
            res.status(200).send(goals)
        } else if (goals[i] <= 4) {
            goals
            res.status(200).send(goals)
        } else {
            res.sendStatus(400)
        }
    },

    deleteGoal: (req, res) => {
        const deleteId = req.params.id
        let index = goals.findIndex(element => element.id === +deleteId)
        goals.splice(index, 1)
        res.status(200).send(goals)
    },
}