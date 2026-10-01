---
id: "python-en-function-doctest-doctestrunner"
language: "python"
lang: "en"
category: "function"
name: "DocTestRunner"
signature: "DocTestRunner(checker=None, verbose=None, optionflags=0)"
directive: "class"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.DocTestRunner"
license: "PSF"
updated: "2026-10-01"
---

# DocTestRunner

A processing class used to execute and verify the interactive examples in a
`DocTest`.

The comparison between expected outputs and actual outputs is done by an
`OutputChecker`.  This comparison may be customized with a number of
option flags; see section `doctest-options` for more information.  If the
option flags are insufficient, then the comparison may also be customized by
passing a subclass of `OutputChecker` to the constructor.

The test runner's display output can be controlled in two ways. First, an output
function can be passed to `run`; this function will be called
with strings that should be displayed.  It defaults to `sys.stdout.write`.  If
capturing the output is not sufficient, then the display output can be also
customized by subclassing DocTestRunner, and overriding the methods
`report_skip`, `report_start`, `report_success`,
`report_unexpected_exception`, and `report_failure`.

The optional keyword argument *checker* specifies the `OutputChecker`
object (or drop-in replacement) that should be used to compare the expected
outputs to the actual outputs of doctest examples.

The optional keyword argument *verbose* controls the `DocTestRunner`'s
verbosity.  If *verbose* is `True`, then information is printed about each
example, as it is run.  If *verbose* is `False`, then only failures are
printed.  If *verbose* is unspecified, or `None`, then verbose output is used
iff the command-line switch `-v` is used.

The optional keyword argument *optionflags* can be used to control how the test
runner compares expected output to actual output, and how it displays failures.
For more information, see section `doctest-options`.

The test runner accumulates statistics. The aggregated number of attempted,
failed and skipped examples is also available via the `tries`,
`failures` and `skips` attributes. The `run` and
`summarize` methods return a `TestResults` instance.

`DocTestRunner` defines the following methods:

method:: report_skip(out, test, example)

method:: report_start(out, test, example)

method:: report_success(out, test, example, got)

method:: report_failure(out, test, example, got)

method:: report_unexpected_exception(out, test, example, exc_info)

method:: run(test, compileflags=None, out=None, clear_globs=True)

method:: summarize(verbose=None)

`DocTestParser` has the following attributes:

attribute:: tries

attribute:: failures

attribute:: skips
