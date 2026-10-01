---
id: "python-zh-function-annotationlib-get_annotations"
language: "python"
lang: "zh"
category: "function"
name: "get_annotations"
signature: "get_annotations(obj, *, globals=None, locals=None, eval_str=False, format=Format.VALUE)"
directive: "function"
module: "annotationlib"
source_url: "https://docs.python.org/zh-cn/3/library/annotationlib.html#annotationlib.get_annotations"
license: "PSF"
updated: "2026-10-01"
---

# get_annotations

计算一个对象的注解字典。

*obj* may be a callable, class, module, or other object with
`~object.__annotate__` or `~object.__annotations__` attributes.
Passing any other object raises `TypeError`.

The *format* parameter controls the format in which annotations are returned,
and must be a member of the `Format` enum or its integer equivalent.
The different formats work as follows:

* VALUE: `object.__annotations__` is tried first; if that does not exist,
  the `object.__annotate__` function is called if it exists.

* FORWARDREF: If `object.__annotations__` exists and can be evaluated successfully,
  it is used; otherwise, the `object.__annotate__` function is called. If it
  does not exist either, `object.__annotations__` is tried again and any error
  from accessing it is re-raised.

  * When calling `object.__annotate__` it is first called with `~Format.FORWARDREF`.
    If this is not implemented, it will then check if `~Format.VALUE_WITH_FAKE_GLOBALS`
    is supported and use that in the fake globals environment.
    If neither of these formats are supported, it will fall back to using `~Format.VALUE`.
    If `~Format.VALUE` fails, the error from this call will be raised.

* STRING: If `object.__annotate__` exists, it is called first;
  otherwise, `object.__annotations__` is used and stringified
  using `annotations_to_string`.

  * When calling `object.__annotate__` it is first called with `~Format.STRING`.
    If this is not implemented, it will then check if `~Format.VALUE_WITH_FAKE_GLOBALS`
    is supported and use that in the fake globals environment.
    If neither of these formats are supported, it will fall back to using `~Format.VALUE`
    with the result converted using `annotations_to_string`.
    If `~Format.VALUE` fails, the error from this call will be raised.

Returns a dict. `get_annotations` returns a new dict every time
it's called; calling it twice on the same object will return two
different but equivalent dicts.

该函数帮助你处理若干细节：

* If *eval_str* is true, values of type `str` will
  be un-stringized using `eval`. This is intended
  for use with stringized annotations
  (`from __future__ import annotations`). It is an error
  to set *eval_str* to true with formats other than `Format.VALUE`.
* If *obj* doesn't have an annotations dict, returns an
  empty dict. (Functions and methods always have an
  annotations dict; classes, modules, and other types of
  callables may not.)
* Ignores inherited annotations on classes, as well as annotations
  on metaclasses. If a class
  doesn't have its own annotations dict, returns an empty dict.
* All accesses to object members and dict values are done
  using `getattr()` and `dict.get()` for safety.

*eval_str* controls whether or not values of type `str` are
replaced with the result of calling `eval` on those values:

* If eval_str is true, `eval` is called on values of type
  `str`. (Note that `get_annotations` doesn't catch
  exceptions; if `eval` raises an exception, it will unwind
  the stack past the `get_annotations` call.)
* If *eval_str* is false (the default), values of type `str` are
  unchanged.

*globals* and *locals* are passed in to `eval`; see the documentation
for `eval` for more information. If *globals* or *locals*
is `None`, this function may replace that value with a
context-specific default, contingent on `type(obj)`:

* If *obj* is a module, *globals* defaults to `obj.__dict__`.
* If *obj* is a class, *globals* defaults to
  `sys.modules[obj.__module__].__dict__` and *locals* defaults
  to the *obj* class namespace.
* If *obj* is a callable, *globals* defaults to
  `obj.__globals__`,
  although if *obj* is a wrapped function (using
  `functools.update_wrapper`) or a `functools.partial` object,
  it is unwrapped until a non-wrapped function is found.

Calling `get_annotations` is best practice for accessing the
annotations dict of any object. See `annotations-howto` for
more information on annotations best practices.

```python

>>> def f(a: int, b: str) -> float:
...     pass
>>> get_annotations(f)
{'a': <class 'int'>, 'b': <class 'str'>, 'return': <class 'float'>}
```

> *Added in 3.14*
