---
id: "python-en-function-builtins-attributeerror"
language: "python"
lang: "en"
category: "function"
name: "AttributeError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#AttributeError"
license: "PSF"
updated: "2026-10-01"
---

# AttributeError

Raised when an attribute reference (see `attribute-references`) or
assignment fails.  (When an object does not support attribute references or
attribute assignments at all, `TypeError` is raised.)

The optional *name* and *obj* keyword-only arguments
set the corresponding attributes:

attribute:: name

attribute:: obj

When possible, `name` and `obj` are set automatically.

> *Changed in 3.10*: Added the :attr:`name` and :attr:`obj` attributes.
