const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const {getFortune} = require('./controller')
const {addGoal} = require('./controller')
const {updateGoal} = require('./controller')
const {deleteGoal} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post('/api/goals/', addGoal);
app.put('/api/goals/:id', updateGoal);
app.delete('/api/goals/:id', deleteGoal);

app.listen(4000, () => console.log("Server running on 4000"));
