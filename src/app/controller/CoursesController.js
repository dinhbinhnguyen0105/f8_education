
const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /courses/:slug
    courseDetail(req, res, next) {
        Course.findOne({ slug : req.params.slug})
            .then(course => {
                res.render('courses/courseDetail', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/hqdefault.jpg`;
        Course.create({
            name: formData.name,
            description : formData.description,
            image: formData.image,
            videoId: formData.videoId,
            level: formData.level
        }, (err, small) => {
            if(err) return handleError(err);
        });
        res.redirect('/');
        // res.send('Course create');
    }
}

module.exports = new SiteController;