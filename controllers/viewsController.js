const AppError = require('./../utils/appError');
const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) get tour data from collection
  const tours = await Tour.find();
  // 2) build template

  // 3) render that template using tour data from 1)

  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) get the data, for the requested tour (including reviews and guides)

  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour){
    return next(new AppError('There is no tour with that name.', 404))
  }

  // 2) Build template

  // 3) Render template using data from step 1)

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour: tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};

exports.getSignUp = (req, res) => {
  res.status(200).render('signup', {
    title: 'Create account',
  });
};