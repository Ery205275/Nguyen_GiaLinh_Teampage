var express = require('express');
var router = express.Router();


const team = {
  Bhavya: {
    name: 'Bhavya',
    bio: "Hi there! I'm a UX/UI designer with a focus on creating user-friendly and visually appealing interfaces. If you're interested in seeing some of my work, be sure to check out my portfolio website. I'd love to chat with you about how I can help bring your vision to life!",
    skills: 'HTML, CSS, JS, ADOBE CREATIVE CLOUD, GPT3',
    avatar: 'bhavya.png'
  },

  Gia: {
    name: 'Gia',
    bio: " As a Web designer/developer, I love to work with software and design companies and sharing the guiding principles and development plans for applications. My goal is to improve user interfaces and experiences, making it simpler for users to use the web, applications, and technology, removing obstacles to communication between end users, designers, and developers",
    skills: 'HTML, CSS, Figma, Adobe, JavaScript, PHP, Vue.js, Node.js',
    avatar: 'Gia.png'
  },

  Trieu: {
    name: 'Trieu (Aaron)',
    bio: "Hello I'm Aaron,I'm currently studying Interactive Media Design at Fanshawe College, enjoy all creative work, brainstorm and build up ideas. Expect to reach to people as well as clients as a professional designer. As a graduated student from IDP3, I Learned many valuable experience in designing as well as creating news features, mockup and every digital content with the dept of necessary information. I also learn many ways to scope with customers and how to treat clients with general requirement.",
    skills: 'Adobe Tools, HTML, JS, CSS, Node, Figma, Vue, C4D',
    avatar: 'trieu.png'
  },

  Saroj: {
    name: 'Saroj Sharma',
    bio: "Hello I am Saroj Sharma G frontend deveoper from london Ontario with a passion for open source, free software, and emerging technologies.Developing web applications with a focus on user experience, accessibility and performance.As a recent graduate from Interactive media design, I believed that Frontend developers use a range of programming languages and technologies to create web pages and applications that are responsive, dynamic, and intuitive.Growing in era where technologies have gained a lot of importance where website and webpage are the main medium to contact people and attract them to the business. ",
    skills: 'Adobe Suits, HTML, CSS, SASS, Vuejs',
    avatar: 'saroj.png'
  },

  Aman: {
    name: 'Aman',
    bio: "HI I am Aman Rabari. I am designer I like do design and creative stuff. I always try make things more different tha usual. I can also use different adobe softwares.",
    skills: 'CSS, fIGMA',
    avatar: 'Aman.png'
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
