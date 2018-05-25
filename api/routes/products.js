const express = require("express");

const router = express.Router();

router.get('/', (req,res,next) =>{
	res.status(200).json({
		message : "Handling GET method with /products"
	});
});

router.post('/', (req,res,next) =>{
	const product = {
		name : req.body.name,
		price : req.body.price,
	};
	res.status(200).json({
		message : "Handling POST method with /products",
		product : product,
	});
});

router.get('/:productId', (req,res,next)=>{
	const id = req.params.productId;
	if (id === "special")
		res.status(200).json({
			message : "Handling GET method with special id",
			id : id
		});
	else res.status(200).json({
			message : "Handling GET method with an passing id",
			id : id
		});
});
//
router.delete('/:productId', (req,res,next)=>{
	const id = req.params.productId;
	res.status(201).json({
		message : "Handling DELETE method with update /products/id",
		id : id
	});
});


router.patch('/:productId', (req,res,next)=>{
	const id = req.params.productId;
	res.status(201).json({
		message : "Handling PATCH method with update /products/id",
		id : id
	});
});

module.exports = router;