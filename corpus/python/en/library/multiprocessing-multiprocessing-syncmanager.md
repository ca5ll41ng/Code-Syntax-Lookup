---
id: "python-en-function-multiprocessing-syncmanager"
language: "python"
lang: "en"
category: "function"
name: "SyncManager"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.SyncManager"
license: "PSF"
updated: "2026-10-01"
---

# SyncManager

A subclass of `BaseManager` which can be used for the synchronization
of processes.  Objects of this type are returned by
`multiprocessing.Manager`.

Its methods create and return `multiprocessing-proxy_objects` for a
number of commonly used data types to be synchronized across processes.
This notably includes shared lists and dictionaries.

method:: Barrier(parties[, action[, timeout]])

method:: BoundedSemaphore([value])

method:: Condition([lock])

method:: Event()

method:: Lock()

method:: Namespace()

method:: Queue([maxsize])

method:: RLock()

method:: Semaphore([value])

method:: Array(typecode, sequence)

method:: Value(typecode, value)

method:: dict()

method:: list()

method:: set()

> *Changed in 3.6*: Shared objects are capable of being nested.  For example, a shared container object such as a shared list can contain other shared objects which will all be managed and synchronized by the :class:`SyncManager`.
