---
id: "python-zh-function-typing-override"
language: "python"
lang: "zh"
category: "function"
name: "override"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.override"
license: "PSF"
updated: "2026-10-01"
---

# override

Decorator to indicate that a method in a subclass is intended to override a
method or attribute in a superclass.

Type checkers should emit an error if a method decorated with `@override`
does not, in fact, override anything.
This helps prevent bugs that may occur when a base class is changed without
an equivalent change to a child class.

例如:

```python

class Base:
    def log_status(self) -> None:
        ...

class Sub(Base):
    @override
    def log_status(self) -> None:  # Okay: overrides Base.log_status
        ...

    @override
    def done(self) -> None:  # Error reported by type checker
        ...
```

没有对此特征属性的运行时检查。

The decorator will attempt to set an `__override__` attribute to `True` on
the decorated object. Thus, a check like
`if getattr(obj, "__override__", False)` can be used at runtime to determine
whether an object `obj` has been marked as an override.  If the decorated object
does not support setting attributes, the decorator returns the object unchanged
without raising an exception.

更多细节参见 :pep:`698`。

> *Added in 3.12*
