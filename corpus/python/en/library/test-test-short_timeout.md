---
id: "python-en-function-test-short_timeout"
language: "python"
lang: "en"
category: "function"
name: "SHORT_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.SHORT_TIMEOUT"
license: "PSF"
updated: "2026-10-01"
---

# SHORT_TIMEOUT

Timeout in seconds to mark a test as failed if the test takes "too long".

The timeout value depends on the regrtest `--timeout` command line option.

If a test using `SHORT_TIMEOUT` starts to fail randomly on slow
buildbots, use `LONG_TIMEOUT` instead.

Its default value is 30 seconds.
