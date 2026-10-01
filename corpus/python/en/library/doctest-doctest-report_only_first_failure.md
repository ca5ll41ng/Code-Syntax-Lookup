---
id: "python-en-function-doctest-report_only_first_failure"
language: "python"
lang: "en"
category: "function"
name: "REPORT_ONLY_FIRST_FAILURE"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.REPORT_ONLY_FIRST_FAILURE"
license: "PSF"
updated: "2026-10-01"
---

# REPORT_ONLY_FIRST_FAILURE

When specified, display the first failing example in each doctest, but suppress
output for all remaining examples.  This will prevent doctest from reporting
correct examples that break because of earlier failures; but it might also hide
incorrect examples that fail independently of the first failure.  When
`REPORT_ONLY_FIRST_FAILURE` is specified, the remaining examples are
still run, and still count towards the total number of failures reported; only
the output is suppressed.
