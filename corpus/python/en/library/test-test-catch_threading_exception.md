---
id: "python-en-function-test-catch_threading_exception"
language: "python"
lang: "en"
category: "function"
name: "catch_threading_exception"
signature: "catch_threading_exception()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.catch_threading_exception"
license: "PSF"
updated: "2026-10-01"
---

# catch_threading_exception

Context manager catching `threading.Thread` exception using
`threading.excepthook`.

Attributes set when an exception is caught:

* `exc_type`
* `exc_value`
* `exc_traceback`
* `thread`

See `threading.excepthook` documentation.

These attributes are deleted at the context manager exit.

Usage::

    with threading_helper.catch_threading_exception() as cm:
        # code spawning a thread which raises an exception
        ...

        # check the thread exception, use cm attributes:
        # exc_type, exc_value, exc_traceback, thread
        ...

    # exc_type, exc_value, exc_traceback, thread attributes of cm no longer
    # exists at this point
    # (to avoid reference cycles)

> *Added in 3.8*
