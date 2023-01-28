var express = require('express');
var router = express.Router();


const team={
  Bhavya: {
    name: 'Bhavya',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'html, CSS, fIGMA'
  },

  Gia: {
    name: 'Gia',
    bio: " Gia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'html, CSS, fIGMA'
  },

  Triue: {
    name: 'Triue',
    bio: " Triue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'html,, fIGMA'
  },

  Saroj: {
    name: 'Saroj',
    bio: " Saroj Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'html, CSS,'
  },

  Aman: {
    name: 'Aman',
    bio: " aMAN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'CSS, fIGMA'
  }


}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/team/:member', function(req,res){
console.log (req.params.member); 
  res.render('team', {person: team[req.params.member]});
})

module.exports = router;
