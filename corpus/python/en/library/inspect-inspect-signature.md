---
id: "python-en-function-inspect-signature"
language: "python"
lang: "en"
category: "function"
name: "signature"
signature: "signature(callable, *, follow_wrapped=True, globals=None, locals=None, eval_str=False, annotation_format=Format.VALUE)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.signature"
license: "PSF"
updated: "2026-10-01"
---

# signature

Return a `Signature` object for the given *callable*:

```python

>>> from inspect import signature
>>> def foo(a, *, b:int, **kwargs):
...     pass

>>> sig = signature(foo)

>>> str(sig)
'(a, *, b: int, **kwargs)'

>>> str(sig.parameters['b'])
'b: int'

>>> sig.parameters['b'].annotation
<class 'int'>
```

Accepts a wide range of Python callables, from plain functions and classes to
`functools.partial` objects.

If some of the annotations are strings (e.g., because
`from __future__ import annotations` was used), `signature` will
attempt to automatically un-stringize the annotations using
`annotationlib.get_annotations`.  The
*globals*, *locals*, and *eval_str* parameters are passed
into `annotationlib.get_annotations` when resolving the
annotations; see the documentation for `annotationlib.get_annotations`
for instructions on how to use these parameters. A member of the
`annotationlib.Format` enum can be passed to the
*annotation_format* parameter to control the format of the returned
annotations. For example, use
`annotation_format=annotationlib.Format.STRING` to return annotations in string
format.

Raises `ValueError` if no signature can be provided, and
`TypeError` if that type of object is not supported.  Also,
if the annotations are stringized, and *eval_str* is not false,
the `eval()` call(s) to un-stringize the annotations in `annotationlib.get_annotations`
could potentially raise any kind of exception.

A slash (/) in the signature of a function denotes that the parameters prior
to it are positional-only. For more info, see
`the FAQ entry on positional-only parameters`.

> *Changed in 3.5*: The *follow_wrapped* parameter was added. Pass ``False`` to get a signature of *callable* specifically (``callable.__wrapped__`` will not be used to unwrap decorated callables.)

> *Changed in 3.10*: The *globals*, *locals*, and *eval_str* parameters were added.

> *Changed in 3.14*: The *annotation_format* parameter was added.

> **Note**
>
> Some callables may not be introspectable in certain implementations of
> Python.  For example, in CPython, some built-in functions defined in
> C provide no metadata about their arguments.
>

impl-detail::
