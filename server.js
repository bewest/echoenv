
var http = require('http');

if (!module.parent) {

  var app = require('express')( );
  var configure = require('./');

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
