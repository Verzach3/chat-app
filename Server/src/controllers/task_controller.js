import Task from "../models/Task"

export const findAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo fue mal"
        })

    }
};

export const createTasks = async (req, res) => {

    if (!req.body.user) {
        return res.status(400).send({ message: "El Mensaje Tiene Que Tener Un Autor" });
    }

    try {
        const newTask = new Task({
            user: req.body.user,
            message: req.body.message,
            number: req.body.number
        })
        console.log(newTask);
        const taskSaved = await newTask.save();
        res.json(taskSaved);
    } catch (error) {
        console.log(error)
    } 

    
};

export const findAllDoneTasks = async (req, res) => {
    const tasks = await Task.find({ done: true });
    res.json(tasks);


};

export const findOneTask = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) return res.status(404).json({ message: "la tarea no existe" })

    res.json(task);

};

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id) //revisar el find tiene cosas interesantes

    res.json("Tarea Eliminada");


}

export const updateTasks = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Tarea Actualizada" })


}