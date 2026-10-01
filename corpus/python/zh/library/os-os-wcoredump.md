---
id: "python-zh-function-os-wcoredump"
language: "python"
lang: "zh"
category: "function"
name: "WCOREDUMP"
signature: "WCOREDUMP(status, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.WCOREDUMP"
license: "PSF"
updated: "2026-10-01"
---

# WCOREDUMP

Return `True` if a core dump was generated for the process, otherwise
return `False`.

此函数应当仅在 :func:`WIFSIGNALED` 为真值时使用。

availability:: Unix, not WASI, not Android, not iOS.
