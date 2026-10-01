---
id: "python-zh-function-contextlib-suppress"
language: "python"
lang: "zh"
category: "function"
name: "suppress"
signature: "suppress(*exceptions)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/zh-cn/3/library/contextlib.html#contextlib.suppress"
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

例如::

    from contextlib import suppress

    with suppress(FileNotFoundError):
        os.remove('somefile.tmp')

    with suppress(FileNotFoundError):
        os.remove('someotherfile.tmp')

这段代码等价于::

    try:
        os.remove('somefile.tmp')
    except FileNotFoundError:
        pass

    try:
        os.remove('someotherfile.tmp')
    except FileNotFoundError:
        pass

该上下文管理器是 :ref:`reentrant <reentrant-cms>` 。

If the code within the `with` block raises a
`BaseExceptionGroup`, suppressed exceptions are removed from the
group.  Any exceptions of the group which are not suppressed are re-raised in
a new group which is created using the original group's `~BaseExceptionGroup.derive`
method.

> *Added in 3.4*

> *Changed in 3.12*: ``suppress`` now supports suppressing exceptions raised as part of a :exc:`BaseExceptionGroup`.
