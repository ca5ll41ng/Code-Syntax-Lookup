---
id: "python-en-function-concurrent-futures-executor"
language: "python"
lang: "en"
category: "function"
name: "Executor"
directive: "class"
module: "concurrent.futures"
source_url: "https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.Executor"
license: "PSF"
updated: "2026-10-01"
---

# Executor

An abstract class that provides methods to execute calls asynchronously.  It
should not be used directly, but through its concrete subclasses.

method:: submit(fn, /, *args, **kwargs)

method:: map(fn, *iterables, timeout=None, chunksize=1, buffersize=None)

method:: shutdown(wait=True, *, cancel_futures=False)
