const connection = require('../../sqlconnection');
exports.analytics_get_all = (req, res, next) => {
    connection.query('SELECT * FROM CASH', function (error, results, fields) {
        if (error) throw error;
        console.log(results, fields);
        res.status(200).json(results);
    });
    

}

