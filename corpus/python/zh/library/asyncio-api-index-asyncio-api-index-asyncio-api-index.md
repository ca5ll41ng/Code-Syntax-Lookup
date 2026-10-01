---
id: "python-zh-function-asyncio-api-index-asyncio-api-index"
language: "python"
lang: "zh"
category: "function"
name: "asyncio-api-index"
title: "===================="
directive: "module"
module: "asyncio-api-index"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-api-index.html#module-asyncio-api-index"
license: "PSF"
updated: "2026-10-01"
---

# ====================

currentmodule:: asyncio

**==================== High-level API Index**

这个页面列举了所有能用于 async/await 的高层级 asyncio API。

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

用于生成子进程和运行 shell 命令的工具包。

list-table::

#### Examples

* `Executing a shell command`.

* See also the `subprocess APIs`
  documentation.

**Streams**

用于网络 IO 处理的高层级 API。

list-table::

#### Examples

* `Example TCP client`.

* See also the `streams APIs`
  documentation.

**Synchronization**

可在 Task 中使用的类似线程的同步原语。

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
