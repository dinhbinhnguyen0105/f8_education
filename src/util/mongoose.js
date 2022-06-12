module.exports = {
    mutilpleMongooseToObject : mongoose => mongoose.map(mongoose => mongoose.toObject()),
    mongooseToObject: mongoose =>  mongoose ? mongoose.toObject() : mongoose
};
