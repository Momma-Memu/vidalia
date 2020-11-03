const router = require('express').Router();

const routes = ['session', 'quests'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}



module.exports = router;