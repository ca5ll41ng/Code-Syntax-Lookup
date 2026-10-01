---
id: "python-en-function-unittest-registerresult"
language: "python"
lang: "en"
category: "function"
name: "registerResult"
signature: "registerResult(result)"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.registerResult"
license: "PSF"
updated: "2026-10-01"
---

# registerResult

Register a `TestResult` object for control-c handling. Registering a
result stores a weak reference to it, so it doesn't prevent the result from
being garbage collected.

Registering a `TestResult` object has no side-effects if control-c
handling is not enabled, so test frameworks can unconditionally register
all results they create independently of whether or not handling is enabled.
