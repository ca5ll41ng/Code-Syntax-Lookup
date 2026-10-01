---
id: "python-zh-function-weakref-ref"
language: "python"
lang: "zh"
category: "function"
name: "ref"
signature: "ref(object[, callback])"
directive: "class"
module: "weakref"
source_url: "https://docs.python.org/zh-cn/3/library/weakref.html#weakref.ref"
license: "PSF"
updated: "2026-10-01"
---

# ref

Return a weak reference to *object*.  The original object can be retrieved by
calling the reference object if the referent is still alive; if the referent is
no longer alive, calling the reference object will cause `None` to be
returned.  If *callback* is provided and not `None`, and the returned
weakref object is still alive, the callback will be called when the object is
about to be finalized; the weak reference object will be passed as the only
parameter to the callback; the referent will no longer be available.

It is allowable for many weak references to be constructed for the same object.
Callbacks registered for each weak reference will be called from the most
recently registered callback to the oldest registered callback.

Exceptions raised by the callback will be noted on the standard error output,
but cannot be propagated; they are handled in exactly the same way as exceptions
raised from an object's `~object.__del__` method.

Weak references are `hashable` if the *object* is hashable.  They will
maintain their hash value even after the *object* was deleted.  If
`hash` is called the first time only after the *object* was deleted,
the call will raise `TypeError`.

Weak references support tests for equality, but not ordering.  If the referents
are still alive, two references have the same equality relationship as their
referents (regardless of the *callback*).  If either referent has been deleted,
the references are equal only if the reference objects are the same object.

这是一个可子类化的类型，而非一个工厂函数。

Weak references are `generic` over the type of the object they
reference.

attribute:: __callback__

> *Changed in 3.4*: Added the :attr:`__callback__` attribute.

> *Changed in next*: Raise :exc:`!TypeError` if *callback* is not callable or ``None``.
