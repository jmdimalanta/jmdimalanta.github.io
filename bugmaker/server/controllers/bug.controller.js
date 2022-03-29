const Bug = require("../models/bug.model");

module.exports = {

    getAllBugs: (req, res) =>{
        Bug.find()
            .then((allBugs)=>{
                console.log(allBugs);
                res.json(allBugs);
            })
            .catch((err)=>{
                console.log('Find all bugs failed!')
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    createNewBug: (req, res)=>{
        Bug.create(req.body)
            .then((newBug)=>{
                console.log(newBug);
                res.json(newBug)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewBug");
                res.status(400).json(err);
            })
    },

    findOneBug: (req, res)=>{
        Bug.findOne({__id: req.params.id})
            .then((oneBug)=>{
                console.log(oneBug);
                res.json(oneBug)
            })
            .catch((err)=>{
                console.log("Find one bug failed.")
                res.json({message: "Something went wrong in findOneBug", error: err})
            })
    },

    deleteBug: (req, res)=>{
        Bug.deleteOne({_id: req.params.id})
            .then((deletedBug)=>{
                console.log(deletedBug);
                res.json(deletedBug)
            })
            .catch((err)=>{
                console.log("Delete one bug failed.")
                res.json({message: "Something went wrong in deleteOne", error: err})
            })
    },

    updateBug: (req, res)=>{
        Bug.findOneAndUpdate({_id: req.params.id}, 
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedBug)=>{
                console.log(updatedBug);
                res.json(updatedBug)
            })
            .catch((err)=>{
                console.log("Something went wrong in updateBug");
                res.status(400).json(err);
            })
    }
}