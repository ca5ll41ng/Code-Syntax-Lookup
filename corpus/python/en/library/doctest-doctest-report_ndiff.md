---
id: "python-en-function-doctest-report_ndiff"
language: "python"
lang: "en"
category: "function"
name: "REPORT_NDIFF"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.REPORT_NDIFF"
license: "PSF"
updated: "2026-10-01"
---

# REPORT_NDIFF

When specified, differences are computed by `difflib.Differ`, using the same
algorithm as the popular `ndiff.py` utility. This is the only method that
marks differences within lines as well as across lines.  For example, if a line
of expected output contains digit `1` where actual output contains letter
`l`, a line is inserted with a caret marking the mismatching column positions.
