function requestHandler(req, res) {
  User.finById(req.userId, function (err, user) {
    if (err) {
      res.send(err);
    } else {
      Tasks.finById(user.tasksId, function (err, tasks) {
        if (err) {
          res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function (err) {
            if (err) {
              res.send(err);
            } else {
              res.send('Task Complite')
            }
          })
        }
      })
    }
  })
}