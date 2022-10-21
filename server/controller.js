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
        const fortunes = ['It will be a good day', 'It will be a bad day', 'You will succeed', 'You will not succeed'];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    addGoal: (req, res) => {
        const {} = req.body
        let newMovie = {
            
        }
        goals.push()
        res.status(200).send(goals)
    },

    updateGoal: (req, res) => {

    },

    deleteGoal: (req, res) => {

    }
}