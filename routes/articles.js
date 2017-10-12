const express = require('express');
const router = express.Router();

const Articles = require('../db/articles');

const articleStubs = [
  {
    title: 'First issue',
    urlTitle: 'First%20issue',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repudiandae architecto autem libero quo porro nulla, quas, totam inventore at modi adipisci delectus hic corporis quam vero, fugit et quis.',
    author: 'Starter'
  },
  {
    title: 'Second issue',
    urlTitle: 'Second%20issue',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quisquam sequi iusto soluta libero doloremque nisi repellendus ex asperiores quos, nesciunt. Officiis nobis dignissimos impedit tempore voluptatibus dicta, excepturi laboriosam!',
    author: 'Dopey'
  },
  {
    title: 'Third issue',
    urlTitle: 'Third%20issue',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos aut blanditiis, aperiam praesentium cum, suscipit harum molestiae hic, recusandae expedita, veniam. Delectus eos facilis odit aspernatur, nisi sunt molestiae vero?',
    author: 'Tre'
  },
  {
    title: 'Fourth issue',
    urlTitle: 'Fourth%20issue',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut in impedit voluptatum maxime nulla sed sunt fugiat tenetur, at dolorem perspiciatis ipsa, quia omnis amet, eaque ex. Quia, eligendi nulla.',
    author: 'Fiver'
  }
];

const articles = new Articles(articleStubs);

router.get('/', (req, res) => {
  const locals = {};
  locals.articles = articles.findAll();
  return res.render('articles/list', locals);
});

router.get('/new', (req, res) => {
  return res.render('articles/new');
});

router.get('/:title', (req, res) => {
  const locals = articles.find(req.params.title);
  return res.render('articles/detail', locals);
});

router.delete('/:title', (req, res) => {
  articles.delete(req.params.title);
  return res.redirect('/articles');
});

router.get('/:title/edit', (req, res) => {
  const locals = articles.find(req.params.title);
  return res.render('articles/edit', locals);
})

router.post('/', (req, res) => {
  const newArticleCreated = articles.create(req.body);

  if (newArticleCreated) {
    return res.redirect('/articles');
  }
});

module.exports = router;

