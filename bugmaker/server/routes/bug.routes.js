const BugController = require("../controllers/bug.controller");

module.exports = (app) => {
    app.get("/api/bugs", BugController.getAllBugs);
    app.post("/api/bugs", BugController.createNewBug);
    app.get("/api/bugs/:id", BugController.findOneBug);
    app.delete("/api/bugs/:id", BugController.deleteBug);
    app.put("/api/bugs/:id", BugController.updateBug);
}