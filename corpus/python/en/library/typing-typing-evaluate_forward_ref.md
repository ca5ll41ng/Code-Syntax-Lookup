---
id: "python-en-function-typing-evaluate_forward_ref"
language: "python"
lang: "en"
category: "function"
name: "evaluate_forward_ref"
signature: "evaluate_forward_ref(forward_ref, *, owner=None, globals=None, locals=None, type_params=None, format=annotationlib.Format.VALUE)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.evaluate_forward_ref"
license: "PSF"
updated: "2026-10-01"
---

# evaluate_forward_ref

Evaluate an `annotationlib.ForwardRef` as a `type hint`.

This is similar to calling `annotationlib.ForwardRef.evaluate`,
but unlike that method, `evaluate_forward_ref` also
recursively evaluates forward references nested within the type hint.

See the documentation for `annotationlib.ForwardRef.evaluate` for
the meaning of the *owner*, *globals*, *locals*, *type_params*, and *format* parameters.

> **Caution**
>
> This function may execute arbitrary code contained in annotations.
> See `annotationlib-security` for more information.
>

> *Added in 3.14*
