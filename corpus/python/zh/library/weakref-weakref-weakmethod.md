---
id: "python-zh-function-weakref-weakmethod"
language: "python"
lang: "zh"
category: "function"
name: "WeakMethod"
signature: "WeakMethod(method[, callback])"
directive: "class"
module: "weakref"
source_url: "https://docs.python.org/zh-cn/3/library/weakref.html#weakref.WeakMethod"
license: "PSF"
updated: "2026-10-01"
---

# WeakMethod

A custom `ref` subclass which simulates a weak reference to a bound
method (i.e., a method defined on a class and looked up on an instance).
Since a bound method is ephemeral, a standard weak reference cannot keep
hold of it.  `WeakMethod` has special code to recreate the bound
method until either the object or the original function dies::

   >>> class C:
   ...     def method(self):
   ...         print("method called!")
   ...
   >>> c = C()
   >>> r = weakref.ref(c.method)
   >>> r()
   >>> r = weakref.WeakMethod(c.method)
   >>> r()
   <bound method C.method of <__main__.C object at 0x7fc859830220>>
   >>> r()()
   method called!
   >>> del c
   >>> gc.collect()
   0
   >>> r()
   >>>

*callback* 与 :func:`ref` 函数的同名形参含义相同。

> *Added in 3.4*
