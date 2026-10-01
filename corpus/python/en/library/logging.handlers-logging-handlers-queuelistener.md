---
id: "python-en-function-logging-handlers-queuelistener"
language: "python"
lang: "en"
category: "function"
name: "QueueListener"
signature: "QueueListener(queue, *handlers, respect_handler_level=False)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.QueueListener"
license: "PSF"
updated: "2026-10-01"
---

# QueueListener

Returns a new instance of the `QueueListener` class. The instance is
initialized with the queue to send messages to and a list of handlers which
will handle entries placed on the queue. The queue can be any queue-like
object; it's passed as-is to the `dequeue` method, which needs
to know how to get messages from it. The queue is not *required* to have the
task tracking API (though it's used if available), which means that you can
use `~queue.SimpleQueue` instances for *queue*.

> **Note**
>
> `~queue.SimpleQueue` and instead use `multiprocessing.Queue`.
>

If `respect_handler_level` is `True`, a handler's level is respected
(compared with the level for the message) when deciding whether to pass
messages to that handler; otherwise, the behaviour is as in previous Python
versions - to always pass each message to each handler.

> *Changed in 3.5*: The ``respect_handler_level`` argument was added.

> *Changed in 3.14*: :class:`QueueListener` can now be used as a context manager via :keyword:`with`. When entering the context, the listener is started. When exiting the context, the listener is stopped. :meth:`~contextmanager.__enter__` returns the :class:`QueueListener` object.

method:: dequeue(block)

method:: prepare(record)

method:: handle(record)

method:: start()

method:: stop()

method:: enqueue_sentinel()
