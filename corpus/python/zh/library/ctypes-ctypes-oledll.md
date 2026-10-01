---
id: "python-zh-function-ctypes-oledll"
language: "python"
lang: "zh"
category: "function"
name: "OleDLL"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/zh-cn/3/library/ctypes.html#ctypes.OleDLL"
license: "PSF"
updated: "2026-10-01"
---

# OleDLL

请参阅超类 :py:class:`~ctypes.CDLL` 获取通用信息。

Functions in this library use the `stdcall` calling convention, and are
assumed to return the windows specific `HRESULT` code.  `HRESULT`
values contain information specifying whether the function call failed or
succeeded, together with additional error code.  If the return value signals a
failure, an `OSError` is automatically raised.

availability:: Windows

> *Changed in 3.3*: :exc:`WindowsError` used to be raised, which is now an alias of :exc:`OSError`.
