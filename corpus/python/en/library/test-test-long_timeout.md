---
id: "python-en-function-test-long_timeout"
language: "python"
lang: "en"
category: "function"
name: "LONG_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.LONG_TIMEOUT"
license: "PSF"
updated: "2026-10-01"
---

# LONG_TIMEOUT

Timeout in seconds to detect when a test hangs.

It is long enough to reduce the risk of test failure on the slowest Python
buildbots. It should not be used to mark a test as failed if the test takes
"too long".  The timeout value depends on the regrtest `--timeout` command
line option.

Its default value is 5 minutes.

See also `LOOPBACK_TIMEOUT`, `INTERNET_TIMEOUT` and
`SHORT_TIMEOUT`.
