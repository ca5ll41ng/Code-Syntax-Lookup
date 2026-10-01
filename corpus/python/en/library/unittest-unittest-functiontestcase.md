---
id: "python-en-function-unittest-functiontestcase"
language: "python"
lang: "en"
category: "function"
name: "FunctionTestCase"
signature: "FunctionTestCase(testFunc, setUp=None, tearDown=None, description=None)"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.FunctionTestCase"
license: "PSF"
updated: "2026-10-01"
---

# FunctionTestCase

This class implements the portion of the `TestCase` interface which
allows the test runner to drive the test, but does not provide the methods
which test code can use to check and report errors.  This is used to create
test cases using legacy test code, allowing it to be integrated into a
`unittest`-based test framework.
