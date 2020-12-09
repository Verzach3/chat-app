import { Router } from "express"

import * as taskCtrl from "../controllers/task_controller"
const router = Router()

router.get("/", taskCtrl.findAllTasks);

router.post("/", taskCtrl.createTasks);

router.get("/done", taskCtrl.findAllDoneTasks);

//ID
router.get("/:id", taskCtrl.findOneTask);

router.delete("/:id", taskCtrl.deleteTask);

router.put("/:id", taskCtrl.updateTasks);


export default router;