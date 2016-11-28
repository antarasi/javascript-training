// http://www.bradoncode.com/blog/2015/02/27/karma-tutorial/
// https://github.com/mlex/karma-spec-reporter-example

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'data/polyfills.js',
      'data/data.js',
      'data/api.js',
      'src/*.js',
    ],
    exclude: [
    ],
    // plugins: [], // be default, all karma-* taken
    preprocessors: {
      'data/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: false,
    autoWatch: true,
    concurrency: Infinity,
    browsers: [
      'Chrome',
      'Firefox',
      'IE',
      'PhantomJS'
    ]
  })
}
