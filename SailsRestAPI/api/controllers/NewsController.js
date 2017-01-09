/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    // a CREATE action  
    create: function(req, res, next) {

        var params = req.params.all();

        News.create(params, function(err, news) {

            if (err) return next(err);

            res.status(201);

            res.json(news);

        });

    },

    // a FIND action
    find: function(req, res, next) {

        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {

            News.findOne(id, function(err, news) {

                if (news === undefined) return res.notFound();

                if (err) return next(err);

                res.json(news);

            });

        } else {

            var where = req.param('where');

            if (_.isString(where)) {
                where = JSON.parse(where);
            }

            var options = {
                limit: req.param('limit') || undefined,
                skip: req.param('skip') || undefined,
                sort: req.param('sort') || undefined,
                where: where || undefined
            };

            News.find(options, function(err, news) {

                if (news === undefined) return res.notFound();

                if (err) return next(err);

                res.json(news);

            });

        }

        function isShortcut(id) {
            if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
                return true;
            }
        }

    },

    // an UPDATE action
    update: function(req, res, next) {

        var criteria = {};

        criteria = _.merge({}, req.params.all(), req.body);

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
        }

        News.update(id, criteria, function(err, news) {

            if (news.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(news);

        });

    },

    // a DESTROY action
    destroy: function(req, res, next) {

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
        }

        News.findOne(id).done(function(err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            News.destroy(id, function(err) {

                if (err) return next(err);

                return res.json(result);
            });

        });
    },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to NewsController)
     */
    _config: {}


};