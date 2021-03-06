// run this line to seed the test database.
// comment it out to seed the development database
// process.env.NODE_ENV = 'test';

const models = require('../db/models/index');
const userData = require('./user_seed');
const classData = require('./class_seed');
const lessonData = require('./lesson_seed');
const discussionData = require('./discussion_seed');
const assignmentData = require('./assignment_seed');
const workData = require('./work_seed');
const voteData = require('./vote_seed');

// add user and work associations
const seedFunction = () => {
  let enrollmentCode;
  models.sequelize.sync({ force: true })
  .then(() => {
    const lastClass = models.class.create(classData[0]);
    models.class.create(classData[1]);
    models.class.create(classData[2]);
    models.class.create(classData[3]);
    return lastClass;
  })
  .then((classOne) => {
    enrollmentCode = classOne.get('enrollmentCode');
  })
  .then(() => models.user.create(Object.assign(userData[0], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3, 4]);
  })
  .then(() => models.user.create(Object.assign(userData[1], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3, 4]);
  })
  .then(() => models.user.create(Object.assign(userData[2], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[3], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[4], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[5], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2]);
  })
  .then(() => models.user.create(Object.assign(userData[6], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1]);
  })
  .then(() => models.user.create(Object.assign(userData[7], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1]);
  })
  .then(() => models.user.create(Object.assign(userData[8], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[9], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[10], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2]);
  })
  .then(() => models.user.create(Object.assign(userData[11], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2]);
  })
  .then(() => models.user.create(Object.assign(userData[12], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1]);
  })
  .then(() => models.user.create(Object.assign(userData[13], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 3]);
  })
    .then(() => models.user.create(Object.assign(userData[14], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[15], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[16], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[17], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  .then(() => models.user.create(Object.assign(userData[18], { lastClassViewed: enrollmentCode })))
  .then((user) => {
    user.addClasses([1, 2, 3]);
  })
  // create lesson assoications
  .then(() => {
    models.lesson.bulkCreate(lessonData);
  })
  .then(() => {
    models.assignment.bulkCreate(assignmentData);
  })
  .then(() => models.work.create(workData[0]))
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[1]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[2]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[3]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[4]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[5]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[6]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[7]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[8]);
  })
  .then((work) => {
    work.addUser(2);
    return models.work.create(workData[9]);
  })
  .then((work) => {
    work.addUser(1);
    return models.work.create(workData[10]);
  })
  .then((work) => {
    work.addUser(1);
    return models.work.create(workData[11]);
  })
  .then((work) => {
    work.addUser(2);
  })
  .then(() => models.vote.bulkCreate(voteData))
  .then(() => models.discussion.bulkCreate(discussionData))
  .then(() => models.vote.findById(2))
  .then(vote => vote.addUser(1));
};

seedFunction();
module.exports = seedFunction;

