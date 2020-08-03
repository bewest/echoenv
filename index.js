
function configure (opts) {
  function ware (req, res, next) {
    res.locals = {
      query: req.query
    , headers: req.headers
    , params: req.params
    , method: req.method
    , url: req.url
    , body: req.body
    , environment: process.env
    };

    next( );

  }

  return ware;
}

module.exports = exports = configure;
