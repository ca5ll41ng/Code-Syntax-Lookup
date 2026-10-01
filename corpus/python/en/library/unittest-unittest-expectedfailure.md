---
id: "python-en-function-unittest-expectedfailure"
language: "python"
lang: "en"
category: "function"
name: "expectedFailure"
directive: "decorator"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.expectedFailure"
license: "PSF"
updated: "2026-10-01"
---

# expectedFailure

Mark the test as an expected failure or error.  If the test fails or errors
in the test function itself (rather than in one of the `test fixture`
methods) then it will be considered a success.  If the test passes, it will
be considered a failure.
