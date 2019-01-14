const connection = require('../../sqlconnection');
exports.analytics_get_all = (req, res, next) => {
    connection.query('SELECT * FROM CASH', function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            console.log(results, fields);
            connection.end();
            res.status(200).json(results);
        }

    });

}

