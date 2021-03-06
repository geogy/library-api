var express = require( "express" );
var path = require( "path" );
var cookieParser = require( "cookie-parser" );
var logger = require( "morgan" );

var indexRouter = require( "./routes/index" );
var booksRouter = require( "./routes/books" );
var subjectsRouter = require( "./routes/subjects" );
var authorsRouter = require( "./routes/authors" );
var usersRouter = require( "./routes/users" );
var loansRouter = require( "./routes/loans" );

var app = express(  );

const expressSwagger = require( "express-swagger-generator" )( app );

app.use( logger( "dev" ) );
app.use( express.json(  ) );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser(  ) );
app.use( express.static( path.join( __dirname, "public" ) ) );

var v1 = express.Router();
app.use( "/v1", v1 );

var user = express.Router();
v1.use( "/admin", user );

app.use( "/", indexRouter );
v1.use( "/books", booksRouter );
v1.use( "/authors", authorsRouter );
v1.use( "/subjects", subjectsRouter );
v1.use( "/users", usersRouter );
v1.use( "/loans", loansRouter );


let options = {
	swaggerDefinition: {
		info: {
			description: "This is an API for library apps",
			title: "Library",
			version: "1.0.0",
		},
		host: "localhost:3000",
		basePath: "/v1",
		produces: [
			"application/json",
			"application/xml"
		],
		schemes: [ "http", "https" ],
		securityDefinitions: {
			JWT: {
				type: "apiKey",
				in: "header",
				name: "Authorization",
				description: "",
			}
		}
	},
	basedir: __dirname, //app absolute path
	files: [ "./routes/**/*.js" ] //Path to the API handle folder
};

expressSwagger( options );

module.exports = app;
