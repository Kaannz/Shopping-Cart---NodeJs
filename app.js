const express = require("express");
const app = express();
const routesProduct = require("./api/routes/products");
const routesOrders = require("./api/routes/orders");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// morgan is a static plugin on command 
app.use(morgan('dev'));
// body-parser help to parse data from POST method, extended means using lot of data or not
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
// allow Cors : Cross Origin Resource Sharing
app.use((req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
	if (req.method === "OPTIONS")
	{
		res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
		return res.status(200).json();
	}
	next();
});

app.use('/products', routesProduct);
app.use('/orders', routesOrders);

// if these method won't use route above, then it will come here to identify error
// next means forward error object to next function
// next function help to display error.message
app.use((req,res,next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

app.use((error,req,res,next) => {
	res.status(error.status || 500);
	res.json({
		error : {
			message : error.message
		}
	})
});

module.exports = app;