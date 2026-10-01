---
id: "python-zh-function-sys-exit"
language: "python"
lang: "zh"
category: "function"
name: "exit"
signature: "exit([arg])"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys.exit"
license: "PSF"
updated: "2026-10-01"
---

# exit

引发一个 :exc:`SystemExit` 异常，表示打算退出解释器。

The optional argument *arg* can be an integer giving the exit status
(defaulting to zero), or another type of object.  If it is an integer, zero
is considered "successful termination" and any nonzero value is considered
"abnormal termination" by shells and the like.  Most systems require it to be
in the range 0--127, and produce undefined results otherwise.  Some systems
have a convention for assigning specific meanings to specific exit codes, but
these are generally underdeveloped; Unix programs generally use 2 for command
line syntax errors and 1 for all other kinds of errors.  If another type of
object is passed, `None` is equivalent to passing zero, and any other
object is printed to `stderr` and results in an exit code of 1.  In
particular, `sys.exit("some error message")` is a quick way to exit a
program when an error occurs.

Since `exit` ultimately "only" raises an exception, it will only exit
the process when called from the main thread, and the exception is not
intercepted. Cleanup actions specified by `finally` clauses of
`try` statements are honored, and it is possible to intercept the
exit attempt at an outer level.

> *Changed in 3.6*: If an error occurs in the cleanup after the Python interpreter has caught :exc:`SystemExit` (such as an error flushing buffered data in the standard streams), the exit status is changed to 120.
