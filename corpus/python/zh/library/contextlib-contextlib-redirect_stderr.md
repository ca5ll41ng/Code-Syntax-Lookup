---
id: "python-zh-function-contextlib-redirect_stderr"
language: "python"
lang: "zh"
category: "function"
name: "redirect_stderr"
signature: "redirect_stderr(new_target)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/zh-cn/3/library/contextlib.html#contextlib.redirect_stderr"
license: "PSF"
updated: "2026-10-01"
---

# redirect_stderr

Similar to `~contextlib.redirect_stdout` but redirecting the global
`sys.stderr` to another `file object`.

该上下文管理器是 :ref:`reentrant <reentrant-cms>` 。

> *Added in 3.5*
