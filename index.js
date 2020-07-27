
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

if (!module.parent) {

  var http = require('http');
  var app = require('express')( );

  app.all('*', configure( ), function (req, res) {
    res.header('content-type', 'application/json');
    res.send(JSON.stringify(res.locals, null, '  ') + "\n");
    res.end( );
  });

  var hostname = process.env.HOSTNAME || '0.0.0.0';
  var port = parseInt(process.env.PORT || '3003');
  app.listen(port, hostname, function ( ) {
    console.log("listening on ", this.address( ));
  });

}
