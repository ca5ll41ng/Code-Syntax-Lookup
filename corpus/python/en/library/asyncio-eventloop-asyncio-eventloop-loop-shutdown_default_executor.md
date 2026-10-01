---
id: "python-en-function-asyncio-eventloop-loop-shutdown_default_executor"
language: "python"
lang: "en"
category: "function"
name: "loop.shutdown_default_executor"
signature: "loop.shutdown_default_executor(timeout=None)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.shutdown_default_executor"
license: "PSF"
updated: "2026-10-01"
---

# loop.shutdown_default_executor

Schedule the closure of the default executor and wait for it to join all of
the threads in the `~concurrent.futures.ThreadPoolExecutor`.
Once this method has been called,
using the default executor with `loop.run_in_executor`
will raise a `RuntimeError`.

The *timeout* parameter specifies the amount of time
(in `float` seconds) the executor will be given to finish joining.
With the default, `None`,
the executor is allowed an unlimited amount of time.

If the *timeout* is reached, a `RuntimeWarning` is emitted
and the default executor is terminated
without waiting for its threads to finish joining.

> **Note**
>
> Do not call this method when using `asyncio.run`,
> as the latter handles default executor shutdown automatically.
>

> *Added in 3.9*

> *Changed in 3.12*: Added the *timeout* parameter.
