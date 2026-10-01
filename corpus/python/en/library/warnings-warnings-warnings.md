---
id: "python-en-function-warnings-warnings"
language: "python"
lang: "en"
category: "function"
name: "warnings"
title: "Concurrent safety of Context Managers"
directive: "module"
module: "warnings"
source_url: "https://docs.python.org/3/library/warnings.html#module-warnings"
license: "PSF"
updated: "2026-10-01"
---

# Concurrent safety of Context Managers

.. _warning-concurrent-safe:

**Concurrent safety of Context Managers**

The behavior of `catch_warnings` context manager depends on the
`sys.flags.context_aware_warnings` flag.  If the flag is true, the
context manager behaves in a concurrent-safe fashion and otherwise not.
Concurrent-safe means that it is both thread-safe and safe to use within
`asyncio coroutines` and tasks.  Being thread-safe means
that behavior is predictable in a multi-threaded program.  The flag defaults
to true for free-threaded builds and false otherwise.

If the `~sys.flags.context_aware_warnings` flag is false, then
`catch_warnings` will modify the global attributes of the
`warnings` module.  This is not safe if used within a concurrent program
(using multiple threads or using asyncio coroutines).  For example, if two
or more threads use the `catch_warnings` class at the same time, the
behavior is undefined.

If the flag is true, `catch_warnings` will not modify global
attributes and will instead use a `~contextvars.ContextVar` to
store the newly established warning filtering state.  A context variable
provides thread-local storage and it makes the use of `catch_warnings`
thread-safe.

The *record* parameter of the context handler also behaves differently
depending on the value of the flag.  When *record* is true and the flag is
false, the context manager works by replacing and then later restoring the
module's `showwarning` function.  That is not concurrent-safe.

When *record* is true and the flag is true, the `showwarning` function
is not replaced.  Instead, the recording status is indicated by an internal
property in the context variable.  In this case, the `showwarning`
function will not be restored when exiting the context handler.

The `~sys.flags.context_aware_warnings` flag can be set the `-X
context_aware_warnings` command-line option or by the
`PYTHON_CONTEXT_AWARE_WARNINGS` environment variable.

> **Note**
>
> It is likely that most programs that desire thread-safe
> behaviour of the warnings module will also want to set the
> `~sys.flags.thread_inherit_context` flag to true.  That flag
> causes threads created by `threading.Thread` to start
> with a copy of the context variables from the thread starting
> it.  When true, the context established by `catch_warnings`
> in one thread will also apply to new threads started by it.  If false,
> new threads will start with an empty warnings context variable,
> meaning that any filtering that was established by a
> `catch_warnings` context manager will no longer be active.
>

> *Changed in 3.14*: Added the :data:`sys.flags.context_aware_warnings` flag and the use of a context variable for :class:`catch_warnings` if the flag is true.  Previous versions of Python acted as if the flag was always set to false.
