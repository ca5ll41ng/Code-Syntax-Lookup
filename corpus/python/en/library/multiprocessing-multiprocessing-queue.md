---
id: "python-en-function-multiprocessing-queue"
language: "python"
lang: "en"
category: "function"
name: "Queue"
signature: "Queue([maxsize])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Queue"
license: "PSF"
updated: "2026-10-01"
---

# Queue

Returns a process shared queue implemented using a pipe and a few
locks/semaphores.  When a process first puts an item on the queue a feeder
thread is started which transfers objects from a buffer into the pipe.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

The usual `queue.Empty` and `queue.Full` exceptions from the
standard library's `queue` module are raised to signal timeouts.

`Queue` implements all the methods of `queue.Queue` except for
`~queue.Queue.task_done`, `~queue.Queue.join`, and
`~queue.Queue.shutdown`.

method:: qsize()

method:: empty()

method:: full()

method:: put(obj[, block[, timeout]])

method:: put_nowait(obj)

method:: get([block[, timeout]])

method:: get_nowait()

`multiprocessing.Queue` has a few additional methods not found in
`queue.Queue`.  These methods are usually unnecessary for most
code:

method:: close()

method:: join_thread()

method:: cancel_join_thread()

> **Note**
>
> This class's functionality requires a functioning shared semaphore
> implementation on the host operating system. Without one, the
> functionality in this class will be disabled, and attempts to
> instantiate a `Queue` will result in an `ImportError`. See
> `3770` for additional information.  The same holds true for any
> of the specialized queue types listed below.
>
