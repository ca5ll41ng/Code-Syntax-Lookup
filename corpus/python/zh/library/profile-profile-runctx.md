---
id: "python-zh-function-profile-runctx"
language: "python"
lang: "zh"
category: "function"
name: "runctx"
signature: "runctx(command, globals, locals, filename=None, sort=-1)"
directive: "function"
module: "profile"
source_url: "https://docs.python.org/zh-cn/3/library/profile.html#profile.runctx"
license: "PSF"
updated: "2026-10-01"
---

# runctx

This function is similar to `run`, with added arguments to supply the
globals and locals mappings for the *command* string. This routine
executes::

   exec(command, globals, locals)

并像在上述的 :func:`run` 函数中一样收集性能分析数据。
