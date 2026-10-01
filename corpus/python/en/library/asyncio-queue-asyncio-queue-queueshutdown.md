---
id: "python-en-function-asyncio-queue-queueshutdown"
language: "python"
lang: "en"
category: "function"
name: "QueueShutDown"
directive: "exception"
module: "asyncio-queue"
source_url: "https://docs.python.org/3/library/asyncio-queue.html#asyncio-queue.QueueShutDown"
license: "PSF"
updated: "2026-10-01"
---

# QueueShutDown

Exception raised when `~Queue.put`, `~Queue.put_nowait`,
`~Queue.get` or `~Queue.get_nowait` is called
on a queue which has been shut down.

> *Added in 3.13*
