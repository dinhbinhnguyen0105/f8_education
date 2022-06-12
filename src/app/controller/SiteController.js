
const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] localhost:3000 /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', { courses : mutilpleMongooseToObject(courses) });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res, next) {
        return res.render('search');
    }

}

module.exports = new SiteController;
