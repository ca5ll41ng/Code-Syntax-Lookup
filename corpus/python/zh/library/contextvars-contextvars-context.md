---
id: "python-zh-function-contextvars-context"
language: "python"
lang: "zh"
category: "function"
name: "Context"
signature: "Context()"
directive: "class"
module: "contextvars"
source_url: "https://docs.python.org/zh-cn/3/library/contextvars.html#contextvars.Context"
license: "PSF"
updated: "2026-10-01"
---

# Context

:class:`ContextVars <ContextVar>` 与其值的映射。

`Context()` creates an empty context with no values in it.
To get a copy of the current context use the
`~contextvars.copy_context` function.

Each thread has its own effective stack of `Context` objects.  The
`current context` is the `Context` object at the top of the
current thread's stack.  All `Context` objects in the stacks are
considered to be *entered*.

*Entering* a context, which can be done by calling its `~Context.run`
method, makes the context the current context by pushing it onto the top of
the current thread's context stack.

*Exiting* from the current context, which can be done by returning from the
callback passed to the `~Context.run` method, restores the current
context to what it was before the context was entered by popping the context
off the top of the context stack.

Since each thread has its own context stack, `ContextVar` objects
behave in a similar fashion to `threading.local` when values are
assigned in different threads.

Attempting to enter an already entered context, including contexts entered in
other threads, raises a `RuntimeError`.

在退出一个上下文之后，它可以在稍后被重新进入（从任何线程）。

Any changes to `ContextVar` values via the `ContextVar.set`
method are recorded in the current context.  The `ContextVar.get`
method returns the value associated with the current context.  Exiting a
context effectively reverts any changes made to context variables while the
context was entered (if needed, the values can be restored by re-entering the
context).

Context 实现了 :class:`collections.abc.Mapping` 接口。

method:: run(callable, *args, **kwargs)

method:: copy()

describe:: var in context

describe:: context[var]

method:: get(var, [default])

describe:: iter(context)

describe:: len(proxy)

method:: keys()

method:: values()

method:: items()
