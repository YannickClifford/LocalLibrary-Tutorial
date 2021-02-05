const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.get('/cool', function (req, res) {
  res.render('users', {textContent: 'You\'re so cool'});
})

module.exports = router;
