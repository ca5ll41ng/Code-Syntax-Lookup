---
id: "python-en-function-test-sleeping_retry"
language: "python"
lang: "en"
category: "function"
name: "sleeping_retry"
signature: "sleeping_retry(timeout, err_msg=None, /, *, init_delay=0.010, max_delay=1.0, error=True)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.sleeping_retry"
license: "PSF"
updated: "2026-10-01"
---

# sleeping_retry

Wait strategy that applies exponential backoff.

Run the loop body until `break` stops the loop. Sleep at each loop
iteration, but not at the first iteration. The sleep delay is doubled at
each iteration (up to *max_delay* seconds).

See `busy_retry` documentation for the parameters usage.

Example raising an exception after SHORT_TIMEOUT seconds::

    for _ in support.sleeping_retry(support.SHORT_TIMEOUT):
        if check():
            break

Example of error=False usage::

    for _ in support.sleeping_retry(support.SHORT_TIMEOUT, error=False):
        if check():
            break
    else:
        raise RuntimeError('my custom error')
