---
id: "python-zh-function-test-spawn_python"
language: "python"
lang: "zh"
category: "function"
name: "spawn_python"
signature: "spawn_python(*args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, **kw)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.spawn_python"
license: "PSF"
updated: "2026-10-01"
---

# spawn_python

使用给定的参数运行一个 Python 子进程。

*kw* is extra keyword args to pass to `subprocess.Popen`. Returns a
`subprocess.Popen` object.
