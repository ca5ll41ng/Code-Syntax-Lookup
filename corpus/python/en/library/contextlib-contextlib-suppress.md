---
id: "python-en-function-contextlib-suppress"
language: "python"
lang: "en"
category: "function"
name: "suppress"
signature: "suppress(*exceptions)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.suppress"
license: "PSF"
updated: "2026-10-01"
---

# suppress

Return a context manager that suppresses any of the specified exceptions
if they occur in the body of a `with` statement and then
resumes execution with the first statement following the end of the
`with` statement.

As with any other mechanism that completely suppresses exceptions, this
context manager should be used only to cover very specific errors where
silently continuing with program execution is known to be the right
thing to do.

For example::

    from contextlib import suppress

    with suppress(FileNotFoundError):
        os.remove('somefile.tmp')

    with suppress(FileNotFoundError):
        os.remove('someotherfile.tmp')

This code is equivalent to::

    try:
        os.remove('somefile.tmp')
    except FileNotFoundError:
        pass

    try:
        os.remove('someotherfile.tmp')
    except FileNotFoundError:
        pass

This context manager is `reentrant`.

If the code within the `with` block raises a
`BaseExceptionGroup`, suppressed exceptions are removed from the
group.  Any exceptions of the group which are not suppressed are re-raised in
a new group which is created using the original group's `~BaseExceptionGroup.derive`
method.

> *Added in 3.4*

> *Changed in 3.12*: ``suppress`` now supports suppressing exceptions raised as part of a :exc:`BaseExceptionGroup`.
