---
id: "python-zh-function-contextlib-contextdecorator"
language: "python"
lang: "zh"
category: "function"
name: "ContextDecorator"
signature: "ContextDecorator()"
directive: "class"
module: "contextlib"
source_url: "https://docs.python.org/zh-cn/3/library/contextlib.html#contextlib.ContextDecorator"
license: "PSF"
updated: "2026-10-01"
---

# ContextDecorator

一个使上下文管理器能用作装饰器的基类。

Context managers inheriting from `ContextDecorator` have to implement
`~object.__enter__` and `~object.__exit__` as normal.
`__exit__` retains its optional
exception handling even when used as a decorator.

`ContextDecorator` is used by `contextmanager`, so you get this
functionality automatically.

``ContextDecorator`` 的示例::

   from contextlib import ContextDecorator

   class mycontext(ContextDecorator):
       def __enter__(self):
           print('Starting')
           return self

       def __exit__(self, *exc):
           print('Finishing')
           return False

随后可以这样使用该类::

   >>> @mycontext()
   ... def function():
   ...     print('The bit in the middle')
   ...
   >>> function()
   Starting
   The bit in the middle
   Finishing

   >>> with mycontext():
   ...     print('The bit in the middle')
   ...
   Starting
   The bit in the middle
   Finishing

这个改动只是针对如下形式的一个语法糖::

   def f():
       with cm():
           # Do stuff

``ContextDecorator`` 使得你可以这样改写::

   @cm()
   def f():
       # Do stuff

It makes it clear that the `cm` applies to the whole function, rather than
just a piece of it (and saving an indentation level is nice, too).

Existing context managers that already have a base class can be extended by
using `ContextDecorator` as a mixin class::

   from contextlib import ContextDecorator

   class mycontext(ContextBaseClass, ContextDecorator):
       def __enter__(self):
           return self

       def __exit__(self, *exc):
           return False

> **Note**
>
> As the decorated function must be able to be called multiple times, the
> underlying context manager must support use in multiple `with`
> statements. If this is not the case, then the original construct with the
> explicit `with` statement inside the function should be used.
>

When the decorated callable is a generator function, coroutine function, or
asynchronous generator function, the returned wrapper is of the same kind
and keeps the context manager open for the lifetime of the iteration or
await rather than only for the call that creates the generator or coroutine
object.  Wrapped generators and asynchronous generators are explicitly
closed when iteration ends, as if by `closing` or `aclosing`.

> **Note**
>
> For asynchronous generators the wrapper re-yields each value with
> `async for`; values sent with `~agen.asend` and exceptions
> thrown with `~agen.athrow` are not forwarded to the wrapped
> generator.
>

> *Added in 3.2*

> *Changed in 3.15*: Decorating a generator function, coroutine function, or asynchronous generator function now keeps the context manager open across iteration or await.  Previously the context manager exited as soon as the generator or coroutine object was created.
