// This is the main Backbone Boilerplate build configuration file.
//
// This is a JavaScript file, you can define any functions you would like in
// here.
config.init({

  lint: {
    files: ["build/config.js", "app/**/*.js"]
  },

  concat: {

    // The core library files
    "dist/debug/js/libs.js": [
      "assets/js/libs/jquery.js",
      "assets/js/libs/underscore.js",
      "assets/js/libs/backbone.js"
    ],

    // Application files
    "dist/debug/js/app.js": ["app/namespace.js", "app/modules/**/*.js", "app/index.js"],

    // Your CSS
    "dist/debug/css/style.css": ["assets/css/**/*.css"]
  },

  jst: {
    "dist/debug/js/templates.js": ["app/templates/**/*.html"]
  },

  min: {
    "dist/release/js/libs.js": ["dist/debug/js/libs.js"],
    "dist/release/js/app.js": ["dist/debug/js/app.js"],
    "dist/release/js/templates.js": ["dist/debug/js/templates.js"]
  },

  mincss: {
    "dist/release/css/style.css": ["dist/debug/css/style.css"]
  },

  coffee: {
      files: ["app/**/*.coffee", "test/unit/**/*.coffee"]
  },

  watch: {
    files: ["assets/**/*", "app/**/*", "test/unit/**/*.coffee"],
    tasks: "coffee concat jst",

    min: {
      files: ["assets/**/*", "app/**/*"],
      tasks: "default"
    }
  },

  clean: {
    folder: "dist/"
  },

  qunit: {
    files: ["test/**/*.html"]
  }

});

// Run the following tasks...
task.registerTask("default", "clean coffee concat jst min mincss");
