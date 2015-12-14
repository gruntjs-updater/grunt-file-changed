# grunt-file-changed

> Run grunt tasks if file has been modified since task last ran

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-file-changed --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-file-changed');
```

## The "file_changed" task

### Overview
In your project's Gruntfile, add a section named `file_changed` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  file_changed: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.hashFile
Type: `String`
Default value: `.grunt/grunt-file-changed/hashes.json`

#### options.tasks
Type: `Array`
Default value: `null`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  file_changed: {
    dist: {
        options: {
            tasks: ['task', 'task:name']
        }
        src: ['**/*.scss', 'file.ext']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

