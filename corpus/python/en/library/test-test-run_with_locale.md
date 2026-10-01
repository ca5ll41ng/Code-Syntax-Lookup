---
id: "python-en-function-test-run_with_locale"
language: "python"
lang: "en"
category: "function"
name: "run_with_locale"
signature: "run_with_locale(catstr, *locales)"
directive: "decorator"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.run_with_locale"
license: "PSF"
updated: "2026-10-01"
---

# run_with_locale

A decorator for running a function in a different locale, correctly
resetting it after it has finished.  *catstr* is the locale category as
a string (for example `"LC_ALL"`).  The *locales* passed will be tried
sequentially, and the first valid locale will be used.
