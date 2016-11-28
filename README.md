# javascript-training

# install

    npm install

# execute

    npm test

## running single tests

You can temporarily adapt jasmine tests to run *only few specific tests* (one
or more) to save time, not to execute all the tests you have. In order to do
that, use [focused specs](http://jasmine.github.io/2.1/focused_specs.html):

 * replace `it()` with `fit()` **and/or**
 * replace `describe()` tiwh `fdescribe()`

## progress

In the beginning, most of the tests are failing:

      Something
        important
          ×can be used
          ×is useful
          ×works like a charm

Your task is to learn ES5 and make tests pass. Eventually, tests should look more or less like the following:

      Something
        important
          √can be used
          √is useful
          √works like a charm
