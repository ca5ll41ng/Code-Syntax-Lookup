---
id: "python-en-function-builtins-importerror"
language: "python"
lang: "en"
category: "function"
name: "ImportError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#ImportError"
license: "PSF"
updated: "2026-10-01"
---

# ImportError

Raised when the `import` statement has troubles trying to
load a module.  Also raised when the "from list" in `from ... import`
has a name that cannot be found.

The optional *name* and *path* keyword-only arguments
set the corresponding attributes:

attribute:: name

attribute:: path

> *Changed in 3.3*: Added the :attr:`name` and :attr:`path` attributes.
