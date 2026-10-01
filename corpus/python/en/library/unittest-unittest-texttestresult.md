---
id: "python-en-function-unittest-texttestresult"
language: "python"
lang: "en"
category: "function"
name: "TextTestResult"
signature: "TextTestResult(stream, descriptions, verbosity, *, durations=None)"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.TextTestResult"
license: "PSF"
updated: "2026-10-01"
---

# TextTestResult

A concrete implementation of `TestResult` used by the
`TextTestRunner`. Subclasses should accept `**kwargs` to ensure
compatibility as the interface changes.

> *Added in 3.2*

> *Changed in 3.12*: Added the *durations* keyword parameter.
