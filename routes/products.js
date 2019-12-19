const express = require('express');
const router = express.Router();

// const Tasks = require ('../models/Task')

router.get('/', async (req, res) => {
    const task = await Tasks.find()
    res.json(task);
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({
        status: 'Task saved'
    });
})

router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task updated'
    });
})

router.delete('/:id', async (req, res) => {
    await Task.finByIdAndRemove(req.params.id);
    res.json({
        status: 'Task deleted'
    });
})

module.exports = router;