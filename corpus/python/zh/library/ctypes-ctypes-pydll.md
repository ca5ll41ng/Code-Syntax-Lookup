---
id: "python-zh-function-ctypes-pydll"
language: "python"
lang: "zh"
category: "function"
name: "PyDLL"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/zh-cn/3/library/ctypes.html#ctypes.PyDLL"
license: "PSF"
updated: "2026-10-01"
---

# PyDLL

请参阅超类 :py:class:`~ctypes.CDLL` 获取通用信息。

When functions in this library are called, the
Python GIL is *not* released during the function call, and after the function
execution the Python error flag is checked. If the error flag is set, a Python
exception is raised.

因此，这只在直接调用 Python C API 函数时有用处。
