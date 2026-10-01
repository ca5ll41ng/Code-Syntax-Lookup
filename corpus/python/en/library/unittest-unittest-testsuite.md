---
id: "python-en-function-unittest-testsuite"
language: "python"
lang: "en"
category: "function"
name: "TestSuite"
signature: "TestSuite(tests=())"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.TestSuite"
license: "PSF"
updated: "2026-10-01"
---

# TestSuite

This class represents an aggregation of individual test cases and test suites.
The class presents the interface needed by the test runner to allow it to be run
as any other test case.  Running a `TestSuite` instance is the same as
iterating over the suite, running each test individually.

If *tests* is given, it must be an iterable of individual test cases or other
test suites that will be used to build the suite initially. Additional methods
are provided to add test cases and suites to the collection later on.

`TestSuite` objects behave much like `TestCase` objects, except
they do not actually implement a test.  Instead, they are used to aggregate
tests into groups of tests that should be run together. Some additional
methods are available to add tests to `TestSuite` instances:

method:: TestSuite.addTest(test)

method:: TestSuite.addTests(tests)

`TestSuite` shares the following methods with `TestCase`:

method:: run(result)

method:: debug()

method:: countTestCases()

method:: __iter__()

In the typical usage of a `TestSuite` object, the `run` method
is invoked by a `TestRunner` rather than by the end-user test harness.
