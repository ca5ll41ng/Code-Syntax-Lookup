---
id: "python-en-function-unittest-main-module-__main__-defaulttest-none-argv-none-testrunner-none"
language: "python"
lang: "en"
category: "function"
name: "main(module='__main__', defaultTest=None, argv=None, testRunner=None, \\"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.main(module='__main__', defaultTest=None, argv=None, testRunner=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# main(module='__main__', defaultTest=None, argv=None, testRunner=None, \

A command-line program that loads a set of tests from *module* and runs them;
this is primarily for making test modules conveniently executable.
The simplest use for this function is to include the following line at the
end of a test script::

   if __name__ == '__main__':
       unittest.main()

You can run tests with more detailed information by passing in the verbosity
argument::

   if __name__ == '__main__':
       unittest.main(verbosity=2)

The *defaultTest* argument is either the name of a single test or an
iterable of test names to run if no test names are specified via *argv*.  If
not specified or `None` and no test names are provided via *argv*, all
tests found in *module* are run.

The *argv* argument can be a list of options passed to the program, with the
first element being the program name.  If not specified or `None`,
the values of `sys.argv` are used.

The *testRunner* argument can either be a test runner class or an already
created instance of it. By default `main` calls `sys.exit` with
an exit code indicating success (0) or failure (1) of the tests run.
An exit code of 5 indicates that no tests were run or skipped.

The *testLoader* argument has to be a `TestLoader` instance,
and defaults to `defaultTestLoader`.

`main` supports being used from the interactive interpreter by passing in the
argument `exit=False`. This displays the result on standard output without
calling `sys.exit`::

   >>> from unittest import main
   >>> main(module='test_module', exit=False)

The *failfast*, *catchbreak* and *buffer* parameters have the same
effect as the same-name `command-line options`_.

The *warnings* argument specifies the `warning filter`
that should be used while running the tests.  If it's not specified, it will
remain `None` if a `-W` option is passed to `python`
(see `Warning control`),
otherwise it will be set to `'default'`.

Calling `main` returns an object with the `result` attribute that contains
the result of the tests run as a `unittest.TestResult`.

> *Changed in 3.1*: The *exit* parameter was added.

> *Changed in 3.2*: The *verbosity*, *failfast*, *catchbreak*, *buffer* and *warnings* parameters were added.

> *Changed in 3.4*: The *defaultTest* parameter was changed to also accept an iterable of test names.
