---
id: "python-en-function-test-internet_timeout"
language: "python"
lang: "en"
category: "function"
name: "INTERNET_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.INTERNET_TIMEOUT"
license: "PSF"
updated: "2026-10-01"
---

# INTERNET_TIMEOUT

Timeout in seconds for network requests going to the internet.

The timeout is short enough to prevent a test to wait for too long if the
internet request is blocked for whatever reason.

Usually, a timeout using `INTERNET_TIMEOUT` should not mark a test as
failed, but skip the test instead: see
`~test.support.socket_helper.transient_internet`.

Its default value is 1 minute.

See also `LOOPBACK_TIMEOUT`.
