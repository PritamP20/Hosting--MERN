const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router
  .post('/', userController.createuser)
  .get('/', userController.getAlluser)
  .get('/:id', userController.getuser)
  .put('/:id', userController.replaceuser)
  .patch('/:id',userController.updateuser) 
  .delete('/:id', userController.deleteuser)

  exports.router = router;