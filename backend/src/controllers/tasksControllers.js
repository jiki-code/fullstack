import Task from "../models/Task.js"

export const getAllTask = async (req, res) => {
  try {
    const result = await Task.aggregate([
      {
        $facet: {
          tasks: [
            { $sort: { createdAt: -1 } }
          ],
          activeCount: [
            { $match: { status: 'active' } },
            { $count: 'count' }
          ],
          completeCount: [
            { $match: { status: 'complete' } },
            { $count: 'count' }
          ]
        }
      }
    ]);

    // result is an array with 1 element because of $facet
    const { tasks, activeCount, completeCount } = result[0];

    res.status(200).json({
      tasks,
      activeCount: activeCount[0]?.count || 0,
      completeCount: completeCount[0]?.count || 0
    });
  } catch (err) {
    console.error('Lỗi khi call', err);
    res.status(500).json({ message: err.message });
  }
};

export const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task({ title });
        const newTask = await task.save();
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error, 'Lỗi khi call')
    }
}

export const updateTask = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body
        const updatedTask = await Task.findByIdAndUpdate(req.params.id,
            {
                title, status, completedAt
            },
            { new: true }
        )
        if (!updateTask) {
            return res.status(404).json({ message: 'Nhiệm vụ không tồn tại' })
        }
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error, 'Lỗi khi call')

    }
}

export const deleteTask = async (req, res) => {
    try {
        const removeTask = await Task.findByIdAndDelete(req.params.id)
        if (!removeTask) {
            return res.status(404).json({ message: 'Nhiệm vụ không tồn tại' })
        }
        res.status(200).json(removeTask)
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error(error, 'Lỗi khi call')

    }
}