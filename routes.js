const userController=require("./controller/user");
const userValidation=require("./validationSchemas/user")
module.exports=function(router,auth,validation){
  router.route('/login').post(validation(userValidation.UserLoginSchema),userController.login)
  router.route('/register').post(validation(userValidation.UserValidationSchema),userController.register)
  router.route('/refresh').get(auth.refresh,userController.refresh)
  router.route('/verifyemail').post(auth.authenticate,validation(userValidation.UserVarificationSchema),userController.verifyEmail)
  router.route('/forgetpassword').post(validation(userValidation.UserForgetPasswordSchema),userController.forgetPassword)
  router.route('/changepassword').post(auth.authenticate,validation(userValidation.UserCangePasswordSchema),userController.changePassword)
  router.route('/usercontext').get(auth.authenticate,userController.userContext)



  router.route('/test').post(userController.test)
}