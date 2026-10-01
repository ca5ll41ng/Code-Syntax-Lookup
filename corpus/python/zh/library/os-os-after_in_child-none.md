---
id: "python-zh-function-os-after_in_child-none"
language: "python"
lang: "zh"
category: "function"
name: "after_in_child=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.after_in_child=None)"
license: "PSF"
updated: "2026-10-01"
---

# after_in_child=None)

Register callables to be executed when a new child process is forked
using `os.fork` or similar process cloning APIs.
The parameters are optional and keyword-only.
Each specifies a different call point.

* *before* is a function called before forking a child process.
* *after_in_parent* is a function called from the parent process
  after forking a child process.
* *after_in_child* is a function called from the child process.

These calls are only made if control is expected to return to the
Python interpreter.  A typical `subprocess` launch will not
trigger them as the child is not going to re-enter the interpreter.

Functions registered for execution before forking are called in
reverse registration order.  Functions registered for execution
after forking (either in the parent or in the child) are called
in registration order.

Note that :c`fork` calls made by third-party C code may not
call those functions, unless it explicitly calls :c`PyOS_BeforeFork`,
:c`PyOS_AfterFork_Parent` and :c`PyOS_AfterFork_Child`.

函数注册后无法注销。

availability:: Unix, not WASI, not Android, not iOS.

> *Added in 3.7*
