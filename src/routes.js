const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/',
    handler: addNoteHandler,
  },
];

module.exports = routes;
