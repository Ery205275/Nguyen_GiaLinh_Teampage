var express = require('express');
var router = express.Router();


const team = {
  Bhavya: {
    name: 'Bhavya',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'html, CSS, fIGMA',
    avatar: ''
  },

  Gia: {
    name: 'Gia',
    bio: " Gia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'html, CSS, fIGMA',
    avatar: ''
  },

  Triue: {
    name: 'Triue',
    bio: " Triue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'html,, figma',
    avatar: ''
  },

  Saroj: {
    name: 'Saroj Sharma',
    bio: "Hello I am Saroj Sharma G frontend deveoper from london Ontario with a passion for open source, free software, and emerging technologies.Developing web applications with a focus on user experience, accessibility and performance.As a recent graduate from Interactive media design, I believed that Frontend developers use a range of programming languages and technologies to create web pages and applications that are responsive, dynamic, and intuitive.Growing in era where technologies have gained a lot of importance where website and webpage are the main medium to contact people and attract them to the business. ",
    skills: 'Adobe Suits, HTML, CSS, SASS, Vuejs',
    avatar: 'saroj.png'
  },

  Aman: {
    name: 'Aman',
    bio: " aMAN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, erat eget malesuada vehicula, magna magna tincidunt leo, euismod congue augue est a nulla.",
    skills: 'CSS, fIGMA',
    avatar: ''
  }


}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/team/:member', function (req, res) {
  console.log(req.params.member);
  res.render('team', { person: team[req.params.member] });
})

module.exports = router;
