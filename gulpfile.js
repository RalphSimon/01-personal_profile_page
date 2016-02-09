"use strict"

var    gulp = require('gulp'),
browserSync = require('browser-sync'),
        del = require('del'),
       sass = require('gulp-sass'),
       csso = require('gulp-csso'),
       maps = require('gulp-sourcemaps'),
     eslint = require('gulp-eslint'),
     uglify = require('gulp-uglify'),
   imagemin = require('gulp-imagemin'),
     useref = require('gulp-useref'),
     gulpIf = require('gulp-if'),
       size = require('gulp-size');

var reload = browserSync.reload;
var paths = {
  src: 'src/',
  dist: 'dist/',
  images: 'public/assets/images',
};
