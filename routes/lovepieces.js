const router = require("express").Router();
const LovePiece = require('../models/LovePiece');


// get all lovepieces
router.get('/', (req, res, next) => {
	LovePiece.find()
		// .populate('owner') // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		.then(lovepieces => {
			res.status(200).json(lovepieces);
		})
		.catch(err => next(err));
});


// get a specific lovepiece
router.get('/:id', (req, res, next) => {
	LovePiece.findById(req.params.id)
		.then(lovepiece => {
			// check if the id is not valid
			// if (!mongoose.Types.ObjectId.isValid(req.params.id))

			if (!lovepiece) {
				res.status(404).json(lovepiece);
			} else {
				res.status(200).json(lovepiece);
			}
		})
		.catch(err => {
			next(err);
		})
});


// create a lovepiece
router.post('/add', (req, res, next) => {
	const { owner, title, type, dateCreated, stillValid, description, coords, category, subCategory, tags } = req.body;
	LovePiece.create({
		owner,
    title,
		type,
    dateCreated,
    stillValid,
    description,
    coords,
    category,
    subCategory,
    tags
	})
		.then(lovepieces => {
			// we return http status code 201 - created
			res.status(201).json(lovepieces);
		})
		.catch(err => {
			next(err);
		})
})


// edit a lovepiece
router.put('/:id', (req, res, next) => {
	const { owner, title, type, dateCreated, stillValid, description, coords, category, subCategory, tags } = req.body;
	LovePiece.findByIdAndUpdate(req.params.id, { 
      owner: owner, 
      title: title,
      type: type,
      dateCreated: dateCreated,
      stillValid: stillValid,
      description: description,
      coords: coords,
      category: category,
      subCategory: subCategory,
      tags: tags
      }, { new: true })
		.then(updatedLovepiece => {
			res.status(200).json(updatedLovepiece);
		})
		.catch(err => next(err));
});


// delete a lovepiece
router.delete('/:id', (req, res, next) => {
	LovePiece.findByIdAndDelete(req.params.id)
		.then(() => {
			res.status(200).json({ message: 'Lovepiece deleted' });
		})
});

module.exports = router;


