var express = require( "express" );
var path = require( "path" );
var cookieParser = require( "cookie-parser" );
var logger = require( "morgan" );

var indexRouter = require( "./routes/index" );
var booksRouter = require( "./routes/books" );
var subjectsRouter = require( "./routes/subjects" );

var app = express(  );

app.use( logger( "dev" ) );
app.use( express.json(  ) );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser(  ) );
app.use( express.static( path.join( __dirname, "public" ) ) );

app.use( "/", indexRouter );
app.use( "/books", booksRouter );
app.use( "/subjects", subjectsRouter );

module.exports = app;
