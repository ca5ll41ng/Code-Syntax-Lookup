---
id: "python-zh-function-operator-methodcaller"
language: "python"
lang: "zh"
category: "function"
name: "methodcaller"
signature: "methodcaller(name, /, *args, **kwargs)"
directive: "function"
module: "operator"
source_url: "https://docs.python.org/zh-cn/3/library/operator.html#operator.methodcaller"
license: "PSF"
updated: "2026-10-01"
---

# methodcaller

Return a callable object that calls the method *name* on its operand.  If
additional arguments and/or keyword arguments are given, they will be given
to the method as well.  For example:

* After `f = methodcaller('name')`, the call `f(b)` returns `b.name()`.

* After `f = methodcaller('name', 'foo', bar=1)`, the call `f(b)`
  returns `b.name('foo', bar=1)`.

等价于::

   def methodcaller(name, /, *args, **kwargs):
       def caller(obj):
           return getattr(obj, name)(*args, **kwargs)
       return caller
