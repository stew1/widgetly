var express = require('express');
var router = express.Router();

/* GET widgets listing. */
router.get('/', function(req, res, next) {
  res.locals.connection.query(
    'SELECT p.*, c.categoryName FROM Product AS p JOIN Category AS c ON p.categoryID = c.categoryID',
    function(error, results, fields) {
      if (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
        //If there is error, we send the error in the error section with 500 status
      } else {
        res.locals.connection.end();
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
        //If there is no error, all is good and response is 200OK.
      }
    }
  );
});

/* GET widget by category. */
router.get('/category/:id', function(req, res, next) {
  res.locals.connection.query(
    'SELECT p.*, c.categoryName FROM Product AS p JOIN Category AS c ON p.categoryID = c.categoryID WHERE p.categoryID = ?',
    [req.params.id],
    function(error, results, fields) {
      if (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
        //If there is error, we send the error in the error section with 500 status
      } else {
        res.locals.connection.end();
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
        //If there is no error, all is good and response is 200OK.
      }
    }
  );
});

/* GET widget by finish. */
router.get('/finish/:finish', function(req, res, next) {
  res.locals.connection.query(
    'SELECT p.*, c.categoryName FROM Product AS p JOIN Category AS c ON p.categoryID = c.categoryID WHERE p.finish = ?',
    [req.params.finish],
    function(error, results, fields) {
      if (error) {
        res.send(JSON.stringify({ status: 500, error: error, response: null }));
        //If there is error, we send the error in the error section with 500 status
      } else {
        res.locals.connection.end();
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
        //If there is no error, all is good and response is 200OK.
      }
    }
  );
});

/* Update widget quantity. */
router.put('/quantity', function(req, res, next) {
  var sql =
    'UPDATE `Widgetly`.`Product` SET `quantity` =' +
    res.locals.connection.escape(req.body.quantity) +
    ' WHERE `productID`= ' +
    res.locals.connection.escape(req.body.product);
  res.locals.connection.query(sql, function(error, results, fields) {
    if (error) {
      res.send(JSON.stringify({ status: 500, error: error, response: null }));
      //If there is error, we send the error in the error section with 500 status
    } else {
      res.locals.connection.end();
      res.send(JSON.stringify({ status: 200, error: null, response: results }));
      //If there is no error, all is good and response is 200OK.
    }
  });
});

module.exports = router;
