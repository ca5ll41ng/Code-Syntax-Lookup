---
id: "python-zh-function-annotationlib-call_evaluate_function"
language: "python"
lang: "zh"
category: "function"
name: "call_evaluate_function"
signature: "call_evaluate_function(evaluate, format, *, owner=None)"
directive: "function"
module: "annotationlib"
source_url: "https://docs.python.org/zh-cn/3/library/annotationlib.html#annotationlib.call_evaluate_function"
license: "PSF"
updated: "2026-10-01"
---

# call_evaluate_function

Call the `evaluate function` *evaluate* with the given *format*,
a member of the `Format` enum, and return the value produced by
the function. This is similar to `call_annotate_function`,
but the latter always returns a dictionary mapping strings to annotations,
while this function returns a single value.

This is intended for use with the evaluate functions generated for lazily
evaluated elements related to type aliases and type parameters:

* `typing.TypeAliasType.evaluate_value`, the value of type aliases
* `typing.TypeVar.evaluate_bound`, the bound of type variables
* `typing.TypeVar.evaluate_constraints`, the constraints of
  type variables
* `typing.TypeVar.evaluate_default`, the default value of
  type variables
* `typing.ParamSpec.evaluate_default`, the default value of
  parameter specifications
* `typing.TypeVarTuple.evaluate_default`, the default value of
  type variable tuples

*owner* is the object that owns the evaluate function, such as the type
alias or type variable object.

*format* 可用于控制返回值的格式：

```python

>>> type Alias = undefined
>>> call_evaluate_function(Alias.evaluate_value, Format.VALUE)
Traceback (most recent call last):
...
NameError: name 'undefined' is not defined
>>> call_evaluate_function(Alias.evaluate_value, Format.FORWARDREF)
ForwardRef('undefined')
>>> call_evaluate_function(Alias.evaluate_value, Format.STRING)
'undefined'
```

> *Added in 3.14*
