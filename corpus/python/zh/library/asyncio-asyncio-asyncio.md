---
id: "python-zh-function-asyncio-asyncio"
language: "python"
lang: "zh"
category: "function"
name: "asyncio"
title: "`asyncio` --- Asynchronous I/O"
directive: "module"
module: "asyncio"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio.html#module-asyncio"
license: "PSF"
updated: "2026-10-01"
---

# `asyncio` --- Asynchronous I/O

**`asyncio` --- Asynchronous I/O**

sidebar:: Hello World!

asyncio is a library to write **concurrent** code using
the **async/await** syntax.

asyncio is used as a foundation for multiple Python asynchronous
frameworks that provide high-performance network and web-servers,
database connection libraries, distributed task queues, etc.

asyncio is often a perfect fit for IO-bound and high-level
**structured** network code.

> **Seealso**
>
> `a-conceptual-overview-of-asyncio`
>    Explanation of the fundamentals of asyncio.
>

asyncio 提供一组 **高层级** API 用于：

* `run Python coroutines` concurrently and
  have full control over their execution;

* perform `network IO and IPC`;

* control `subprocesses`;

* distribute tasks via `queues`;

* `synchronize` concurrent code;

For **introspection**, asyncio provides APIs and tools for:

* inspecting the `async call graph` of tasks and futures;

* inspecting tasks in another running Python process with
  `command-line tools`;

Additionally, there are **low-level** APIs for
*library and framework developers* to:

* create and manage `event loops`, which
  provide asynchronous APIs for `networking`,
  running `subprocesses`,
  handling `OS signals`, etc;

* implement efficient protocols using
  `transports`;

* `bridge` callback-based libraries and code
  with async/await syntax.

include:: ../includes/wasm-notavail.rst

.. _asyncio-cli:

#### asyncio REPL

你可以在 :term:`REPL` 中尝试使用 ``asyncio`` 并发上下文：

```pycon

$ python -m asyncio
asyncio REPL ...
Use "await" directly instead of "asyncio.run()".
Type "help", "copyright", "credits" or "license" for more information.
>>> import asyncio
>>> await asyncio.sleep(10, result='hello')
'hello'
```

This REPL provides limited compatibility with `PYTHON_BASIC_REPL`.
It is recommended that the default REPL is used
for full functionality and the latest features.

audit-event:: cpython.run_stdin "" ""

> *Changed in 3.12.5 (also 3.11.10, 3.10.15, 3.9.20, and 3.8.20)*: Emits audit events.

> *Changed in 3.13*: Uses PyREPL if possible, in which case :envvar:`PYTHONSTARTUP` is also executed. Emits audit events.

.. We use the "rubric" directive here to avoid creating
   the "Reference" subsection in the TOC.

#### Reference

> **Note**
>
> asyncio 的源代码可以在 :source:`Lib/asyncio/` 中找到。
>
