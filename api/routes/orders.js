const express = require("express");

const router = express.Router();

router.get('/', (req,res,next) => {
	res.status(200).json({
		message : "Handling GET method with /orders"
	});
});

router.post('/', (req,res,next) => {
	const order = {
		productId : req.body.productId,
		quantity :  req.body.quantity
	};
	res.status(200).json({
		message : "Handling POST method with /orders",
		order : order,
	})
});

router.get('/:orderId', (req,res,next) => {
	res.status(200).json({
		message : "Handling GET method with /orders",
		id : req.params.orderId
	});
});

router.delete('/:orderId', (req,res,next) => {
	res.status(200).json({
		message : "Handling POST method with /orders",
		id : req.params.orderId
	})
});

router.patch('/:orderId', (req,res,next) => {
	res.status(200).json({
		message : "Handling POST method with /orders",
		id : req.params.orderId
	})
});

module.exports = router;