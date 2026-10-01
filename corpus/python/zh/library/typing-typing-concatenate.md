---
id: "python-zh-function-typing-concatenate"
language: "python"
lang: "zh"
category: "function"
name: "Concatenate"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.Concatenate"
license: "PSF"
updated: "2026-10-01"
---

# Concatenate

特殊形式，用于注解高阶函数。

`Concatenate` can be used in conjunction with `Callable` and
`ParamSpec` to annotate a higher-order callable which adds, removes,
or transforms parameters of another
callable.  Usage is in the form
`Concatenate[Arg1Type, Arg2Type, ..., ParamSpecVariable]`. `Concatenate`
is valid when used in `Callable` type hints
and when instantiating user-defined generic classes with `ParamSpec` parameters.
The last parameter to `Concatenate` must be a `ParamSpec` or
ellipsis (`...`).

For example, to annotate a decorator `with_lock` which provides a
`threading.Lock` to the decorated function,  `Concatenate` can be
used to indicate that `with_lock` expects a callable which takes in a
`Lock` as the first argument, and returns a callable with a different type
signature.  In this case, the `ParamSpec` indicates that the returned
callable's parameter types are dependent on the parameter types of the
callable being passed in::

   from collections.abc import Callable
   from threading import Lock
   from typing import Concatenate

   # Use this lock to ensure that only one thread is executing a function
   # at any time.
   my_lock = Lock()

   def with_lock[**P, R](f: Callable[Concatenate[Lock, P], R]) -> Callable[P, R]:
       '''A type-safe decorator which provides a lock.'''
       def inner(*args: P.args, **kwargs: P.kwargs) -> R:
           # Provide the lock as the first argument.
           return f(my_lock, *args, **kwargs)
       return inner

   @with_lock
   def sum_threadsafe(lock: Lock, numbers: list[float]) -> float:
       '''Add a list of numbers together in a thread-safe manner.'''
       with lock:
           return sum(numbers)

   # We don't need to pass in the lock ourselves thanks to the decorator.
   sum_threadsafe([1.1, 2.2, 3.3])

> *Added in 3.10*

> **Seealso**
>
> * PEP 612 -- Parameter Specification Variables (the PEP which introduced
>   `ParamSpec` and `Concatenate`)
> * `ParamSpec`
> * `annotating-callables`
>
