import { Router } from "express";
import {mockUsers} from "../utils/constants.mts";

const router: Router = Router();

router.get("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

export default router;