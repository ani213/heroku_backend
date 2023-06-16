/**
 * @swagger
 * components:
 *   schemas:
 *       Register:
 *           type: object
 *           required:
 *              - username
 *              - email
 *              - firstName
 *           properties:
 *               username:
 *                   type: string
 *                   description: username of the user
 *               email:
 *                   type: string
 *                   description: The user email
 *               firstName:
 *                   type: string
 *                   description: The user password
 *               lastName:
 *                   type: string
 *                   description: Role of a user
 *               role:
 *                   type: string
 *                   description: If a user is approved by the admin to become a Trainer or not
 *               password:
 *                   type: string
 *                   description: Trainer expert in types of shots
 *               dateOfBirth:
 *                   type: string
 *                   description: Location where a user wants to do PhotoShoot
 *               status:
 *                   type: string
 *                   description: Location where a user wants to do PhotoShoot
 *               picture:
 *                   type: string
 *                   description: Location where a user wants to do PhotoShoot
 */

/**
 * @swagger
 * /app/register:
 *   post:
 *       summary: To register a user in the database
 *       tags: [Register]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Register'
 *       responses:
 *           200:
 *               description: Register registered successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Register'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * /app/verifyemail:
 *   post:
 *       summary: To register a user in the database
 *       tags: [Register]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Register'
 *       responses:
 *           200:
 *               description: Register registered successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Register'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *       Login:
 *           type: object
 *           required:
 *              - username
 *              - password
 *           properties:
 *               username:
 *                   type: string
 *                   description: username of the user
 *               password:
 *                   type: string
 *                   description: Password of user
 */

/**
 * @swagger
 * /app/login:
 *   post:
 *       summary: To Login user
 *       tags: [Login]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Login'
 *       responses:
 *           200:
 *               description: Login registered successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Login'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *       Problem-Types:
 *           type: object
 *           required:
 *              - title
 *              - value
 *           properties:
 *               title:
 *                   type: string
 *                   description: Title Of Problem
 *               value:
 *                   type: string
 *                   description: Value of Problem
 */

/**
 * @swagger
 * /app/problem-types:
 *   post:
 *       summary: To add Problem type
 *       tags: [Problem-Types]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Problem-Types'
 *       responses:
 *           200:
 *               description: Problem-Types successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problem-Types'
 *           500:
 *               description: Some server error
 */

// /**
//  * @swagger
//  * /app/problem-types/{problemTypeId}:
//  *   put:
//  *       summary: To add Problem type
//  *       tags: [Problem-Types]
//  *       requestBody:
//  *           required: true
//  *           content:
//  *               multipart/form-data:
//  *                   schema:
//  *                       $ref: '#/components/schemas/Problem-Types'
//  *       responses:
//  *           200:
//  *               description: Problem-Types successfully
//  *               content:
//  *                   application/json:
//  *                       schema:
//  *                           $ref: '#/components/schemas/Problem-Types'
//  *           500:
//  *               description: Some server error
//  */


/**
 * @swagger
 * /app/problem-types/{problemTypeId}:
 *   put:
 *       summary: Update Problem Types With Photo
 *       tags: [Problem-Types]
 *       consumes:
 *         - multipart/form-data
 *       parameters:
 *        - in: path
 *          name: problemTypeId
 *          type: file
 *          description: The file to upload.
 *        - in: formData
 *          name: file
 *          type: file
 *          description: The file to upload.
 *        - in: formData
 *          name: title
 *          type: text
 *          description: change title.
 *       responses:
 *           200:
 *               description: Problem-Types successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problem-Types'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * /app/problem-types:
 *   get:
 *       summary: To get details of all the registered user in Database
 *       tags: [Problem-Types]
 *       responses:
 *           200:
 *               description: All Problem Types Data Successfully fetched
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problem-Types'
 *           500:
 *               description: Some server error
 *   definitions:
 *     AllContacts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Problem-Types'
 */


/**
 * @swagger
 * components:
 *   schemas:
 *       Problems:
 *           type: object
 *           required:
 *              - title
 *              - type_id
 *           properties:
 *               title:
 *                   type: string
 *                   description: Title Of Problem
 *               type_id:
 *                   type: string
 *                   description: type_id of Problem Type
 *               question:
 *                   type: string
 *                   description: Question
 *               answer:
 *                   type: string
 *                   description: Answer
 */


/**
 * @swagger
 * /app/problem:
 *   post:
 *       summary: Create a Problem
 *       tags: [Problems]
 *       requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                       $ref: '#/components/schemas/Problems'
 *       responses:
 *           200:
 *               description: Problems registered successfully
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problems'
 *           500:
 *               description: Some server error
 */

/**
 * @swagger
 * /app/problem:
 *   get:
 *       summary: To get all Problems of a User which is logined.
 *       tags: [Problems]
 *       parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by createdAt| updatedAt | title | question
 *       - in: query
 *         name: by
 *         schema:
 *           type: integer
 *         description: For:-   DESC -1 | ASC 1
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search text
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: search by Type  title | all | question | answer
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: The numbers of items to return
 *       responses:
 *           200:
 *               description: All Problem Types Data Successfully fetched
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problems'
 *           500:
 *               description: Some server error
 *   definitions:
 *     AllContacts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Problems'
 */


/**
 * @swagger
 * /app/problems/all:
 *   get:
 *       summary: To get all Problems.
 *       tags: [Problems]
 *       parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by createdAt| updatedAt | title | question
 *       - in: query
 *         name: by
 *         schema:
 *           type: integer
 *         description: For:-   DESC -1 | ASC 1
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search text
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: search by Type  title | all | question | answer
 *       - in: query
 *         name: _id
 *         schema:
 *           type: string
 *         description: The numbers of items to return
 *       responses:
 *           200:
 *               description: All Problem Types Data Successfully fetched
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problems'
 *           500:
 *               description: Some server error
 *   definitions:
 *     AllContacts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Problems'
 */


/**
 * @swagger
 * /app/problem/search:
 *   get:
 *       summary: To get all Problems of a User which is logined.
 *       tags: [Problems]
 *       parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by createdAt| updatedAt | title | question
 *       - in: query
 *         name: by
 *         schema:
 *           type: integer
 *         description: For:-   DESC -1 | ASC 1
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search text
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: search by Type  title | all | question | answer
 *       responses:
 *           200:
 *               description: All Problem Types Data Successfully fetched
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problems'
 *           500:
 *               description: Some server error
 *   definitions:
 *     AllContacts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Problems'
 */


/**
 * @swagger
 * /app/problem/{problemId}:
 *   get:
 *       summary: To get Problems by problem Id.
 *       tags: [Problems]
 *       parameters:
 *       - in: path
 *         name: problemId
 *         schema:
 *           type: string
 *         description: Use Problem id 
 *       responses:
 *           200:
 *               description: All Problem Types Data Successfully fetched
 *               content:
 *                   application/json:
 *                       schema:
 *                           $ref: '#/components/schemas/Problems'
 *           500:
 *               description: Some server error
 *   definitions:
 *     AllContacts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Problems'
 */
