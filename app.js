const express = require("express");
const app = express();
const routesProduct = require("./api/routes/products");
const routesOrders = require("./api/routes/orders");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/products', routesProduct);
app.use('/orders', routesOrders);


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