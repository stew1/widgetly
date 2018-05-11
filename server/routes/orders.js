var express = require('express');
var async = require('async');
var router = express.Router();

/* Create Order */
router.post('/create', function(req, res, next) {
  var values = [[req.body.productID, req.body.quantity]];
  var query1 = 'INSERT INTO `Widgetly`.`Order` () VALUES ();';
  var query2 =
    'INSERT INTO `Widgetly`.`OrderProduct` (`productID`,`quanity`) VALUES ?;';

  var return_data = {};

  async.parallel(
    [
      function(parallel_done) {
        res.locals.connection.query(query1, function(err, results) {
          if (err) return parallel_done(err);
          return_data.table1 = results;
          parallel_done();
        });
      },
      function(parallel_done) {
        res.locals.connection.query(query2, [values], function(err, results) {
          if (err) return parallel_done(err);
          return_data.table2 = results;
          parallel_done();
        });
      },
    ],
    function(err) {
      if (err) console.log(err);
      res.locals.connection.end();
      res.send(return_data);
    }
  );
});

module.exports = router;
