---
id: "python-zh-function-typing-runtime_checkable"
language: "python"
lang: "zh"
category: "function"
name: "runtime_checkable"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.runtime_checkable"
license: "PSF"
updated: "2026-10-01"
---

# runtime_checkable

用于把 Protocol 类标记为运行时协议。

Such a protocol can be used with `isinstance` and `issubclass`.
This allows a simple-minded structural check, very similar to "one-trick ponies"
in `collections.abc` such as `~collections.abc.Iterable`.  For example::

   @runtime_checkable
   class Closable(Protocol):
       def close(self): ...

   assert isinstance(open('/some/file'), Closable)

   @runtime_checkable
   class Named(Protocol):
       name: str

   import threading
   assert isinstance(threading.Thread(name='Bob'), Named)

Runtime checkability of protocols is not inherited. A subclass of a runtime-checkable protocol
is only runtime-checkable if it is explicitly marked as such, regardless of class hierarchy::

   @runtime_checkable
   class Iterable(Protocol):
       def __iter__(self): ...

   # Without @runtime_checkable, Reversible would no longer be runtime-checkable.
   @runtime_checkable
   class Reversible(Iterable, Protocol):
       def __reversed__(self): ...

当应用于非协议类时此装饰器将引发 :exc:`TypeError`。

> **Note**
>
> `runtime_checkable` will check only the presence of the required
> methods or attributes, not their type signatures or types.
> For example, `ssl.SSLObject`
> is a class, therefore it passes an `issubclass`
> check against `Callable`. However, the
> `ssl.SSLObject.__init__` method exists only to raise a
> `TypeError` with a more informative message, therefore making
> it impossible to call (instantiate) `ssl.SSLObject`.
>

> **Note**
>
> An `isinstance` check against a runtime-checkable protocol can be
> surprisingly slow compared to an `isinstance()` check against
> a non-protocol class. Consider using alternative idioms such as
> `hasattr` calls for structural checks in performance-sensitive
> code.
>

> *Added in 3.8*

> *Changed in 3.12*: The internal implementation of :func:`isinstance` checks against runtime-checkable protocols now uses :func:`inspect.getattr_static` to look up attributes (previously, :func:`hasattr` was used). As a result, some objects which used to be considered instances of a runtime-checkable protocol may no longer be considered instances of that protocol on Python 3.12+, and vice versa. Most users are unlikely to be affected by this change.

> *Changed in 3.12*: The members of a runtime-checkable protocol are now considered "frozen" at runtime as soon as the class has been created. Monkey-patching attributes onto a runtime-checkable protocol will still work, but will have no impact on :func:`isinstance` checks comparing objects to the protocol. See :ref:`What's new in Python 3.12 <whatsnew-typing-py312>` for more details.

deprecated-removed:: 3.15 3.20
