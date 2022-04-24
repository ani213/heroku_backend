const userController=require("./controller/user");
const userValidation=require("./validationSchemas/user");
const problemController=require("./controller/problems");
const problemValidation=require("./validationSchemas/problem");


module.exports=function(router,auth,validation){
  router.route('/google/auth').post(validation(userValidation.UserLoginWithGoogleSchema),userController.loginWithGoogle)
  router.route('/login').post(validation(userValidation.UserLoginSchema),userController.login)
  router.route('/register').post(validation(userValidation.UserValidationSchema),userController.register)
  router.route('/refresh').get(auth.refresh,userController.refresh)
  router.route('/verifyemail').post(auth.authenticate,validation(userValidation.UserVarificationSchema),userController.verifyEmail)
  router.route('/forgetpassword').post(validation(userValidation.UserForgetPasswordSchema),userController.forgetPassword)
  router.route('/changepassword').post(auth.authenticate,validation(userValidation.UserCangePasswordSchema),userController.changePassword)
  router.route('/usercontext').get(auth.authenticate,userController.userContext)

  /***************** Problems **********************/ 
  router.route('/problem').post(auth.authenticate,validation(problemValidation.AddProblemSchema),problemController.addProblem);
  router.route('/problem').put(auth.authenticate,validation(problemValidation.UpdateProblemSchema),problemController.updateProblem);
  router.route('/problem').get(auth.authenticate,problemController.getProblem);
  router.route('/problem/:_id').get(auth.authenticate,problemController.getProblemById);
  router.route('/problems/all').get(auth.authenticate,problemController.getAllProblem);
  router.route('/problem-types/:_id').get(auth.authenticate,problemController.getProblemsByProblemType);


  /***************** Problem Types **********************/ 
  router.route('/problem-types').post(auth.authenticate,problemController.addProblemTypes);
  router.route('/problem-types').get(auth.authenticate,problemController.getProblemTypes);


  
  router.route('/test').post(userController.test)
}