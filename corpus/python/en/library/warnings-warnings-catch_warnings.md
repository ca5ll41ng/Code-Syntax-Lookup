---
id: "python-en-function-warnings-catch_warnings"
language: "python"
lang: "en"
category: "function"
name: "catch_warnings"
signature: "catch_warnings(*, record=False, module=None, action=None, category=Warning, lineno=0, append=False)"
directive: "class"
module: "warnings"
source_url: "https://docs.python.org/3/library/warnings.html#warnings.catch_warnings"
license: "PSF"
updated: "2026-10-01"
---

# catch_warnings

A context manager that copies and, upon exit, restores the warnings filter
and the `showwarning` function.
If the *record* argument is `False` (the default) the context manager
returns `None` on entry. If *record* is `True`, a list is
returned that is progressively populated with objects as seen by a custom
`showwarning` function (which also suppresses output to `sys.stderr`).
Each object in the list is guaranteed to have the following attributes:

  - `message`: the warning message (an instance of `Warning`)
  - `category`: the warning category (a subclass of `Warning`)
  - `filename`: the file name where the warning occurred (`str`)
  - `lineno`: the line number in the file (`int`)
  - `file`: the file object used for output (if any), or `None`
  - `line`: the line of source code (if available), or `None`
  - `source`: the original object that generated the warning (if
    available), or `None`
  - `module`: the module name where the warning occurred
    (`str`), or `None`

> *Changed in 3.6*: The ``source`` attribute was added.

> *Changed in 3.15*: The ``module`` attribute was added.

The type of these objects is not specified and may change; only the
presence of these attributes is guaranteed.

The *module* argument takes a module that will be used instead of the
module returned when you import `warnings` whose filter will be
protected. This argument exists primarily for testing the `warnings`
module itself.

If the *action* argument is not `None`, the remaining arguments are
passed to `simplefilter` as if it were called immediately on
entering the context.

See `warning-filter` for the meaning of the *category* and *lineno*
parameters.

> **Note**
>
> See `warning-concurrent-safe` for details on the
> concurrency-safety of the `catch_warnings` context manager when
> used in programs using multiple threads or async functions.
>

> *Changed in 3.11*: Added the *action*, *category*, *lineno*, and *append* parameters.
