var express = require( "express" );
var router = express.Router();
var subjectsController = require( "../controllers/subjects.controller" );

/**
 * List subjects
 * @route GET /subjects
 * @group Subjects
 * @returns {object} 200 - An array of user info
 */
router.get( "/", subjectsController.index );

/**
 * Deletes a subject
 * @route DELETE /subjects/:id
 * @group Subjects
 * @param {string} id.query.required - Subject ID
 * @returns {object} 200
 * @returns {Error}  404 - Model not found
 */
router.delete( "/:id", subjectsController.delete );

/**
 * Show a required subject
 * @route GET /subjects/:id
 * @group Subjects
 * @param {string} id.query.required - Subject ID
 * @returns {object} 200 - An object of user info
 * @returns {object} 404 - Model not found
 * @returns {object} 500 - Can not execute the query
 */
router.get( "/:id", subjectsController.show );

/**
 * Update a subject
 * @route PUT /subjects/:id
 * @group Subjects
 * @param {string} id.query.required - Subject ID
 * @param {string} name.body.required - Name of the subject
 * @returns {object} 200
 * @returns {object} 404 - Model not found
 */
router.put( "/:id", subjectsController.update );

/**
 * Creates a subject of a book
 * @route POST /subjects
 * @group Subjects
 * @param {string} name.body.required - name
 * @returns {object} 200 - A subject object
 * @returns {Error}  500 - Can not create the model
 */
router.post( "/", subjectsController.create );

module.exports = router;
