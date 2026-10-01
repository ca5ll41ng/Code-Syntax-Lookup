---
id: "python-en-function-asyncio-api-index-asyncio-api-index"
language: "python"
lang: "en"
category: "function"
name: "asyncio-api-index"
title: "===================="
directive: "module"
module: "asyncio-api-index"
source_url: "https://docs.python.org/3/library/asyncio-api-index.html#module-asyncio-api-index"
license: "PSF"
updated: "2026-10-01"
---

# ====================

currentmodule:: asyncio

**==================== High-level API Index**

This page lists all high-level async/await enabled asyncio APIs.

**Tasks**

Utilities to run asyncio programs, create Tasks, and
await on multiple things with timeouts.

list-table::

#### Examples

* `Using asyncio.gather() to run things in parallel`.

* `Using asyncio.wait_for() to enforce a timeout`.

* `Cancellation`.

* `Using asyncio.sleep()`.

* See also the main `Tasks documentation page`.

**Queues**

Queues should be used to distribute work amongst multiple asyncio Tasks,
implement connection pools, and pub/sub patterns.

list-table::

#### Examples

* `Using asyncio.Queue to distribute workload between several
  Tasks`.

* See also the `Queues documentation page`.

**Subprocesses**

Utilities to spawn subprocesses and run shell commands.

list-table::

#### Examples

* `Executing a shell command`.

* See also the `subprocess APIs`
  documentation.

**Streams**

High-level APIs to work with network IO.

list-table::

#### Examples

* `Example TCP client`.

* See also the `streams APIs`
  documentation.

**Synchronization**

Threading-like synchronization primitives that can be used in Tasks.

list-table::

#### Examples

* `Using asyncio.Event`.

* `Using asyncio.Barrier`.

* See also the documentation of asyncio
  `synchronization primitives`.

**Exceptions**

list-table::

#### Examples

* `Handling CancelledError to run code on cancellation request`.

* See also the full list of
  `asyncio-specific exceptions`.
