import express from "express"
import morgan from "morgan";
import cors from "cors"
import TasksRoutes from "./routes/tasks_routes"


//Settings
const app = express();
app.set('port', process.env.PORT || 3000);

//Middleware
//const corsOptions = {origin}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.get('/', (req, res) => {
    res.json(
        { message: 'Welcome to my application' }


    )

})

app.use("/api/tasks", TasksRoutes)

export default app;