---
id: "python-zh-function-sys-unraisablehook"
language: "python"
lang: "zh"
category: "function"
name: "unraisablehook"
signature: "unraisablehook(unraisable, /)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys.unraisablehook"
license: "PSF"
updated: "2026-10-01"
---

# unraisablehook

处理一个无法抛出的异常。

Called when an exception has occurred but there is no way for Python to
handle it. For example, when a destructor raises an exception or during
garbage collection (`gc.collect`).

*unraisable* 参数具有以下属性：

* `exc_type`: Exception type.
* `exc_value`: Exception value, can be `None`.
* `exc_traceback`: Exception traceback, can be `None`.
* `err_msg`: Error message, can be `None`.
* `object`: Object causing the exception, can be `None`.

The default hook formats `err_msg` and `object` as:
`f'{err_msg}: {object!r}'`; use "Exception ignored in" error message
if `err_msg` is `None`. Similar to the `traceback` module,
this adds color to exceptions by default. This can be disabled using
`environment variables`.

`sys.unraisablehook` can be overridden to control how unraisable
exceptions are handled.

> *Changed in 3.15*: Exceptions are now printed with colorful text.

> **Seealso**
>
> :func:`excepthook` 处理未捕获的异常。
>

> **Warning**
>
> Storing `exc_value` using a custom hook can create a reference cycle.
> It should be cleared explicitly to break the reference cycle when the
> exception is no longer needed.
>
> Storing `object` using a custom hook can resurrect it if it is set to an
> object which is being finalized. Avoid storing `object` after the custom
> hook completes to avoid resurrecting objects.
>

audit-event:: sys.unraisablehook hook,unraisable sys.unraisablehook

> *Added in 3.8*
