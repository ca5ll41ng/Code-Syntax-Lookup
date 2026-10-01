---
id: "python-en-function-asyncio-eventloop-loop-close"
language: "python"
lang: "en"
category: "function"
name: "loop.close"
signature: "loop.close()"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.close"
license: "PSF"
updated: "2026-10-01"
---

# loop.close

Close the event loop.

The loop must not be running when this function is called.
Any pending callbacks will be discarded.

This method clears all queues and shuts down the executor, but does
not wait for the executor to finish.

This method is idempotent and irreversible.  No other methods
should be called after the event loop is closed.
