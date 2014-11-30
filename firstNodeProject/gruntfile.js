module.exports = function(grunt) {
       'use strict';
       // Project configuration.
       grunt.initConfig({
               jasmine : {
                       src : 'src/**/*.js',
                       options : {
                               specs : 'specs/**/*.js'
                       }
               },
               watch: {
                  files: '**/*.js',
                  tasks: ['jasmine']
               }
       });
       grunt.loadNpmTasks('grunt-contrib-jasmine');
       grunt.loadNpmTasks('grunt-contrib-watch');
};