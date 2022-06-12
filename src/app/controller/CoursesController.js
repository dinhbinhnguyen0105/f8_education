
const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] courses/:slug
    courseDetail(req, res, next) {
        Course.findOne({ slug : req.params.slug})
            .then(course => {
                res.render('courses/courseDetail', { course: mongooseToObject(course) });
            })
            .catch(next);
        
    }
}

module.exports = new SiteController;
