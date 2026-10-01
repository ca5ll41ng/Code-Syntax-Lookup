---
id: "python-zh-function-annotationlib-annotationlib"
language: "python"
lang: "zh"
category: "function"
name: "annotationlib"
title: "Recipes"
directive: "module"
module: "annotationlib"
source_url: "https://docs.python.org/zh-cn/3/library/annotationlib.html#module-annotationlib"
license: "PSF"
updated: "2026-10-01"
---

# Recipes

**Recipes**

.. _annotationlib-metaclass:

**Using annotations in a metaclass**

A `metaclass` may want to inspect or even modify the annotations
in a class body during class creation. Doing so requires retrieving annotations
from the class namespace dictionary. For classes created with
`from __future__ import annotations`, the annotations will be in the `__annotations__`
key of the dictionary. For other classes with annotations,
`get_annotate_from_class_namespace` can be used to get the
annotate function, and `call_annotate_function` can be used to call it and
retrieve the annotations. Using the `~Format.FORWARDREF` format will usually
be best, because this allows the annotations to refer to names that cannot yet be
resolved when the class is created.

To modify the annotations, it is best to create a wrapper annotate function
that calls the original annotate function, makes any necessary adjustments, and
returns the result.

Below is an example of a metaclass that filters out all `typing.ClassVar`
annotations from the class and puts them in a separate attribute:

```python

import annotationlib
import typing

class ClassVarSeparator(type):
   def __new__(mcls, name, bases, ns):
      if "__annotations__" in ns:  # from __future__ import annotations
         annotations = ns["__annotations__"]
         classvar_keys = {
            key for key, value in annotations.items()
            # Use string comparison for simplicity; a more robust solution
            # could use annotationlib.ForwardRef.evaluate
            if value.startswith("ClassVar")
         }
         classvars = {key: annotations[key] for key in classvar_keys}
         ns["__annotations__"] = {
            key: value for key, value in annotations.items()
            if key not in classvar_keys
         }
         wrapped_annotate = None
      elif annotate := annotationlib.get_annotate_from_class_namespace(ns):
         annotations = annotationlib.call_annotate_function(
            annotate, format=annotationlib.Format.FORWARDREF
         )
         classvar_keys = {
            key for key, value in annotations.items()
            if typing.get_origin(value) is typing.ClassVar
         }
         classvars = {key: annotations[key] for key in classvar_keys}

         def wrapped_annotate(format):
            annos = annotationlib.call_annotate_function(annotate, format, owner=typ)
            return {key: value for key, value in annos.items() if key not in classvar_keys}

      else:  # no annotations
         classvars = {}
         wrapped_annotate = None
      typ = super().__new__(mcls, name, bases, ns)

      if wrapped_annotate is not None:
         # Wrap the original __annotate__ with a wrapper that removes ClassVars
         typ.__annotate__ = wrapped_annotate
      typ.classvars = classvars  # Store the ClassVars in a separate attribute
      return typ
```

**Creating a custom callable annotate function**

Custom `annotate functions` may be literal functions like those
automatically generated for functions, classes, and modules. Or, they may wish to utilise
the encapsulation provided by classes, in which case any `callable` can be used as
an `annotate function`.

To provide the `~Format.VALUE`, `~Format.STRING`, or
`~Format.FORWARDREF` formats directly, an `annotate function` must provide
the following attribute:

* A callable `__call__` with signature `__call__(format, /) -> dict`, that does not
  raise a `NotImplementedError` when called with a supported format.

To provide the `~Format.VALUE_WITH_FAKE_GLOBALS` format, which is used to
automatically generate `~Format.STRING` or `~Format.FORWARDREF` if they are
not supported directly, `annotate functions` must provide the
following attributes:

* A callable `__call__` with signature `__call__(format, /) -> dict`, that does not
  raise a `NotImplementedError` when called with
  `~Format.VALUE_WITH_FAKE_GLOBALS`.
* A `code object` `__code__` containing the compiled code for the
  annotate function.
* Optional: A tuple of the function's positional defaults `__defaults__`, if the
  function represented by `__code__` uses any positional defaults.
* Optional: A dict of the function's keyword defaults `__kwdefaults__`, if the function
  represented by `__code__` uses any keyword defaults.
* Optional: All other `function attributes`.

```python

class Annotate:
    called_formats = []

    def __call__(self, format=None, /, *, _self=None):
        # When called with fake globals, `_self` will be the
        # actual self value, and `self` will be the format.
        if _self is not None:
            self, format = _self, self

        self.called_formats.append(format)
        if format <= 2:  # VALUE or VALUE_WITH_FAKE_GLOBALS
            return {"x": MyType}
        raise NotImplementedError

    __code__ = __call__.__code__
    __defaults__ = (None,)
    __kwdefaults__ = property(lambda self: dict(_self=self))

    __globals__ = {}
    __builtins__ = {}
    __closure__ = None
```

随后可以这样调用：

```pycon

>>> from annotationlib import call_annotate_function, Format
>>> call_annotate_function(Annotate(), format=Format.STRING)
{'x': 'MyType'}
```

或是用作一个对象的标注函数：

```pycon

>>> from annotationlib import get_annotations, Format
>>> class C:
...   pass
>>> C.__annotate__ = Annotate()
>>> get_annotations(Annotate(), format=Format.STRING)
{'x': 'MyType'}
```

**Limitations of the `STRING` format**

The `~Format.STRING` format is meant to approximate the source code
of the annotation, but the implementation strategy used means that it is not
always possible to recover the exact source code.

First, the stringifier of course cannot recover any information that is not present in
the compiled code, including comments, whitespace, parenthesization, and operations that
get simplified by the compiler.

Second, the stringifier can intercept almost all operations that involve names looked
up in some scope, but it cannot intercept operations that operate fully on constants.
As a corollary, this also means it is not safe to request the `STRING` format on
untrusted code: Python is powerful enough that it is possible to achieve arbitrary
code execution even with no access to any globals or builtins. For example:

```pycon

>>> def f(x: (1).__class__.__base__.__subclasses__()[-1].__init__.__builtins__["print"]("Hello world")): pass
...
>>> annotationlib.get_annotations(f, format=annotationlib.Format.STRING)
Hello world
{'x': 'None'}
```

> **Note**
>
> This particular example works as of the time of writing, but it relies on
> implementation details and is not guaranteed to work in the future.
>

Among the different kinds of expressions that exist in Python,
as represented by the `ast` module, some expressions are supported,
meaning that the `STRING` format can generally recover the original source code;
others are unsupported, meaning that they may result in incorrect output or an error.

以下类型是受支持的（有些带有额外说明）：

* `ast.BinOp`
* `ast.UnaryOp`

  * `ast.Invert` (`~`), `ast.UAdd` (`+`), and `ast.USub` (`-`) are supported
  * `ast.Not` (`not`) is not supported

* `ast.Dict` (except when using `**` unpacking)
* `ast.Set`
* `ast.Compare`

  * `ast.Eq` and `ast.NotEq` are supported
  * `ast.Lt`, `ast.LtE`, `ast.Gt`, and `ast.GtE` are supported, but the operand may be flipped
  * `ast.Is`, `ast.IsNot`, `ast.In`, and `ast.NotIn` are not supported

* `ast.Call` (except when using `**` unpacking)
* `ast.Constant` (though not the exact representation of the constant; for example, escape
  sequences in strings are lost; hexadecimal numbers are converted to decimal)
* `ast.Attribute` (assuming the value is not a constant)
* `ast.Subscript` (assuming the value is not a constant)
* `ast.Starred` (`*` unpacking)
* `ast.Name`
* `ast.List`
* `ast.Tuple`
* `ast.Slice`

The following are unsupported, but throw an informative error when encountered by the
stringifier:

* `ast.FormattedValue` (f-strings; error is not detected if conversion specifiers like `!r`
  are used)
* `ast.JoinedStr` (f-strings)

以下表达式不被支持，且会导致输出不正确：

* `ast.BoolOp` (`and` and `or`)
* `ast.IfExp`
* `ast.Lambda`
* `ast.ListComp`
* `ast.SetComp`
* `ast.DictComp`
* `ast.GeneratorExp`

以下内容在注解作用域中不被允许，因此不予考虑：

* `ast.NamedExpr` (`:=`)
* `ast.Await`
* `ast.Yield`
* `ast.YieldFrom`

**Limitations of the `FORWARDREF` format**

The `~Format.FORWARDREF` format aims to produce real values as much
as possible, with anything that cannot be resolved replaced with
`ForwardRef` objects. It is affected by broadly the same Limitations
as the `~Format.STRING` format: annotations that perform operations on
literals or that use unsupported expression types may raise exceptions when
evaluated using the `~Format.FORWARDREF` format.

以下是使用不支持的表达式时的行为示例：

```pycon

>>> from annotationlib import get_annotations, Format
>>> def zerodiv(x: 1 / 0): ...
>>> get_annotations(zerodiv, format=Format.STRING)
Traceback (most recent call last):
  ...
ZeroDivisionError: division by zero
>>> get_annotations(zerodiv, format=Format.FORWARDREF)
Traceback (most recent call last):
  ...
ZeroDivisionError: division by zero
>>> def ifexp(x: 1 if y else 0): ...
>>> get_annotations(ifexp, format=Format.STRING)
{'x': '1'}
```

.. _annotationlib-security:

**Security implications of introspecting annotations**

Much of the functionality in this module involves executing code related to annotations,
which can then do arbitrary things. For example,
`get_annotations` may call an arbitrary `annotate function`, and
`ForwardRef.evaluate` may call `eval` on an arbitrary string. Code contained
in an annotation might make arbitrary system calls, enter an infinite loop, or perform any
other operation. This is also true for any access of the `~object.__annotations__` attribute,
and for various functions in the `typing` module that work with annotations, such as
`typing.get_type_hints`.

Any security issue arising from this also applies immediately after importing
code that may contain untrusted annotations: importing code can always cause arbitrary operations
to be performed. However, it is unsafe to accept strings or other input from an untrusted source and
pass them to any of the APIs for introspecting annotations, for example by editing an
`__annotations__` dictionary or directly creating a `ForwardRef` object.
