---
id: "python-en-function-doctest-dont_accept_true_for_1"
language: "python"
lang: "en"
category: "function"
name: "DONT_ACCEPT_TRUE_FOR_1"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.DONT_ACCEPT_TRUE_FOR_1"
license: "PSF"
updated: "2026-10-01"
---

# DONT_ACCEPT_TRUE_FOR_1

By default, if an expected output block contains just `1`, an actual output
block containing just `1` or just `True` is considered to be a match, and
similarly for `0` versus `False`.  When `DONT_ACCEPT_TRUE_FOR_1` is
specified, neither substitution is allowed.  The default behavior caters to that
Python changed the return type of many functions from integer to boolean;
doctests expecting "little integer" output still work in these cases.  This
option will probably go away, but not for several years.
