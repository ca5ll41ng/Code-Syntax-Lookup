---
id: "python-en-function-asyncio-eventloop-loop-run_until_complete"
language: "python"
lang: "en"
category: "function"
name: "loop.run_until_complete"
signature: "loop.run_until_complete(future)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.run_until_complete"
license: "PSF"
updated: "2026-10-01"
---

# loop.run_until_complete

Run until the *future* (an instance of `Future`) has
completed.

If the argument is a `coroutine object` it
is implicitly scheduled to run as a `asyncio.Task`.

Return the Future's result or raise its exception.
