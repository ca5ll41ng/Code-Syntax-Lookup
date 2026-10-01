---
id: "python-en-function-asyncio-eventloop-loop-shutdown_asyncgens"
language: "python"
lang: "en"
category: "function"
name: "loop.shutdown_asyncgens"
signature: "loop.shutdown_asyncgens()"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.shutdown_asyncgens"
license: "PSF"
updated: "2026-10-01"
---

# loop.shutdown_asyncgens

Schedule all currently open `asynchronous generator` objects to
close with an `~agen.aclose` call.  After calling this method,
the event loop will issue a warning if a new asynchronous generator
is iterated. This should be used to reliably finalize all scheduled
asynchronous generators.

Note that there is no need to call this function when
`asyncio.run` is used.

Example::

 try:
     loop.run_forever()
 finally:
     loop.run_until_complete(loop.shutdown_asyncgens())
     loop.close()

> *Added in 3.6*
