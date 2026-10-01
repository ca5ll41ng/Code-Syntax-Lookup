---
id: "python-en-function-logging-handlers-queuehandler"
language: "python"
lang: "en"
category: "function"
name: "QueueHandler"
signature: "QueueHandler(queue)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.QueueHandler"
license: "PSF"
updated: "2026-10-01"
---

# QueueHandler

Returns a new instance of the `QueueHandler` class. The instance is
initialized with the queue to send messages to. The *queue* can be any
queue-like object; it's used as-is by the `enqueue` method, which
needs to know how to send messages to it. The queue is not *required* to
have the task tracking API, which means that you can use
`~queue.SimpleQueue` instances for *queue*.

> **Note**
>
> `~queue.SimpleQueue` and instead use `multiprocessing.Queue`.
>

> **Warning**
>
> The `multiprocessing` module uses an internal logger created and
> accessed via `~multiprocessing.get_logger`.
> `multiprocessing.Queue` will log `DEBUG` level messages upon
> items being queued. If those log messages are processed by a
> `QueueHandler` using the same `multiprocessing.Queue` instance,
> it will cause a deadlock or infinite recursion.
>

method:: emit(record)

method:: prepare(record)

method:: enqueue(record)

attribute:: listener
