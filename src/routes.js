const { addNoteHandler, getAllNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/',
    handler: getAllNoteHandler,
  },
];

module.exports = routes;
