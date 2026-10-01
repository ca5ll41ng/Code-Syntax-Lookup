---
id: "python-en-function-importlib-_incompatible_extension_module_restrictions"
language: "python"
lang: "en"
category: "function"
name: "_incompatible_extension_module_restrictions"
signature: "_incompatible_extension_module_restrictions(*, disable_check)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib._incompatible_extension_module_restrictions"
license: "PSF"
updated: "2026-10-01"
---

# _incompatible_extension_module_restrictions

A context manager that can temporarily skip the compatibility check
for extension modules.  By default the check is enabled and will fail
when a single-phase init module is imported in a subinterpreter.
It will also fail for a multi-phase init module that doesn't
explicitly support a per-interpreter GIL, when imported
in an interpreter with its own GIL.

Note that this function is meant to accommodate an unusual case;
one which is likely to eventually go away.  There's is a pretty good
chance this is not what you were looking for.

You can get the same effect as this function by implementing the
basic interface of multi-phase init (PEP 489) and lying about
support for multiple interpreters (or per-interpreter GIL).

> **Warning**
>
> Using this function to disable the check can lead to
> unexpected behavior and even crashes.  It should only be used during
> extension module development.
>

> *Added in 3.12*
