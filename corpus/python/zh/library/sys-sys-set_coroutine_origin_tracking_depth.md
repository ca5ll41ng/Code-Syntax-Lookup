---
id: "python-zh-function-sys-set_coroutine_origin_tracking_depth"
language: "python"
lang: "zh"
category: "function"
name: "set_coroutine_origin_tracking_depth"
signature: "set_coroutine_origin_tracking_depth(depth)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys.set_coroutine_origin_tracking_depth"
license: "PSF"
updated: "2026-10-01"
---

# set_coroutine_origin_tracking_depth

Allows enabling or disabling coroutine origin tracking. When
enabled, the `cr_origin` attribute on coroutine objects will
contain a tuple of (filename, line number, function name) tuples
describing the traceback where the coroutine object was created,
with the most recent call first. When disabled, `cr_origin` will
be `None`.

To enable, pass a *depth* value greater than zero; this sets the
number of frames whose information will be captured. To disable,
set *depth* to zero.

该设置是特定于单个线程的。

> *Added in 3.7*

> **Note**
>
> This function has been added on a provisional basis (see PEP 411
> for details.)  Use it only for debugging purposes.
>
