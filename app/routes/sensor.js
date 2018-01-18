module.exports = function(app, db) {
    app.post('/sensor', (req, res) => {
        var data = JSON.stringify( req.body );
        console.log(data);
        res.send('Hello');
    });
};