---
id: "python-en-function-test-busy_retry"
language: "python"
lang: "en"
category: "function"
name: "busy_retry"
signature: "busy_retry(timeout, err_msg=None, /, *, error=True)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.busy_retry"
license: "PSF"
updated: "2026-10-01"
---

# busy_retry

Run the loop body until `break` stops the loop.

After *timeout* seconds, raise an `AssertionError` if *error* is true,
or just stop the loop if *error* is false.

Example::

    for _ in support.busy_retry(support.SHORT_TIMEOUT):
        if check():
            break

Example of error=False usage::

    for _ in support.busy_retry(support.SHORT_TIMEOUT, error=False):
        if check():
            break
    else:
        raise RuntimeError('my custom error')
