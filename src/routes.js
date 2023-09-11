const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];

module.exports = routes;
