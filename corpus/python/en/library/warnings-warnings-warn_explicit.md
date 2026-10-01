---
id: "python-en-function-warnings-warn_explicit"
language: "python"
lang: "en"
category: "function"
name: "warn_explicit"
signature: "warn_explicit(message, category, filename, lineno, module=None, registry=None, module_globals=None, source=None)"
directive: "function"
module: "warnings"
source_url: "https://docs.python.org/3/library/warnings.html#warnings.warn_explicit"
license: "PSF"
updated: "2026-10-01"
---

# warn_explicit

This is a low-level interface to the functionality of `warn`, passing in
explicitly the message, category, filename and line number, and optionally
other arguments.
*message* must be a string and *category* a subclass of `Warning` or
*message* may be a `Warning` instance, in which case *category* will be
ignored.

*module*, if supplied, should be the module name.
If no module is passed, the module regular expression in
`warnings filter` will be tested against the module
names constructed from the path components starting from all parent
directories (with `/__init__.py`, `.py` and, on Windows, `.pyw`
stripped) and against the filename with `.py` stripped.
For example, when the filename is `'/path/to/package/module.py'`, it will
be tested against  `'path.to.package.module'`, `'to.package.module'`
`'package.module'`, `'module'`, and `'/path/to/package/module'`.

*registry*, if supplied, should be the `__warningregistry__` dictionary
of the module.
If no registry is passed, each warning is treated as the first occurrence,
that is, filter actions `"default"`, `"module"` and `"once"` are
handled as `"always"`.

*module_globals*, if supplied, should be the global namespace in use by the code
for which the warning is issued.  (This argument is used to support displaying
source for modules found in zipfiles or other non-filesystem import
sources).

*source*, if supplied, is the destroyed object which emitted a
`ResourceWarning`.

> *Changed in 3.6*: Add the *source* parameter.

> *Changed in 3.15*: If no module is passed, test the filter regular expression against module names created from the path, not only the path itself.
