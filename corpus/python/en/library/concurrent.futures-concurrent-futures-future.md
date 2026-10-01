---
id: "python-en-function-concurrent-futures-future"
language: "python"
lang: "en"
category: "function"
name: "Future"
directive: "class"
module: "concurrent.futures"
source_url: "https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.Future"
license: "PSF"
updated: "2026-10-01"
---

# Future

Encapsulates the asynchronous execution of a callable.  `Future`
instances are created by `Executor.submit` and should not be created
directly except for testing.

method:: cancel()

method:: cancelled()

method:: running()

method:: done()

method:: result(timeout=None)

method:: exception(timeout=None)

method:: add_done_callback(fn)

The following `Future` methods are meant for use in unit tests and
`Executor` implementations.

method:: set_running_or_notify_cancel()

method:: set_result(result)

method:: set_exception(exception)
