import { Schema, model } from "mongoose"

const taskSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true //quita los espacios
    },
    message: {
        type: String,
        trim: false

    },
    number: {
        type: Number,
        

    }

}, {
    versionKey: false, //quita cosas opcionales en la database
    timestamps: true //Crea timestamops
});




export default model("Task", taskSchema)