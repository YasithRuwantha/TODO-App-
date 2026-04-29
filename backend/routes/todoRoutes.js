const router = require("express").Router();
const controller = require("../controllers/todoController");

router.get("/", controller.getTodos);
router.post("/", controller.createTodo);
router.put("/:id", controller.updateTodo);
router.patch("/:id/toggle", controller.toggleDone);
router.delete("/:id", controller.deleteTodo);

module.exports = router;