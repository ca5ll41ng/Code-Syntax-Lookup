---
id: "python-en-function-builtins-notimplementederror"
language: "python"
lang: "en"
category: "function"
name: "NotImplementedError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#NotImplementedError"
license: "PSF"
updated: "2026-10-01"
---

# NotImplementedError

This exception is derived from `RuntimeError`.  In user defined base
classes, abstract methods should raise this exception when they require
derived classes to override the method, or while the class is being
developed to indicate that the real implementation still needs to be added.

> **Note**
>
> It should not be used to indicate that an operator or method is not
> meant to be supported at all -- in that case either leave the operator /
> method undefined or, if a subclass, set it to `None`.
>

> **Caution**
>
> `NotImplementedError` and `NotImplemented` are not
> interchangeable. This exception should only be used as described
> above; see `NotImplemented` for details on correct usage of
> the built-in constant.
>
