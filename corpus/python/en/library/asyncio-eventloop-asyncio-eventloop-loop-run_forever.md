---
id: "python-en-function-asyncio-eventloop-loop-run_forever"
language: "python"
lang: "en"
category: "function"
name: "loop.run_forever"
signature: "loop.run_forever()"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.run_forever"
license: "PSF"
updated: "2026-10-01"
---

# loop.run_forever

Run the event loop until `stop` is called.

If `stop` is called before `run_forever` is called,
the loop will poll the I/O selector once with a timeout of zero,
run all callbacks scheduled in response to I/O events (and
those that were already scheduled), and then exit.

If `stop` is called while `run_forever` is running,
the loop will run the current batch of callbacks and then exit.
Note that new callbacks scheduled by callbacks will not run in this
case; instead, they will run the next time `run_forever` or
`run_until_complete` is called.
