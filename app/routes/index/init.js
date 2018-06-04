/**
 * @param  {Object} app
 */
function initIndex(app) {


    app.get('/', function (req, res) {

        return res.render('index', {
            title: 'Accueil',
            message: 'Bienvenue',
            image: req.session.img_url,
            username: req.session.username,
            mail: req.session.mail_users
        });
    });

}

module.exports = initIndex;