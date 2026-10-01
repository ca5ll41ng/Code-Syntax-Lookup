---
id: "python-zh-function-doctest-debug"
language: "python"
lang: "zh"
category: "function"
name: "debug"
signature: "debug(module, name, pm=False)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.debug"
license: "PSF"
updated: "2026-10-01"
---

# debug

对一个对象的 doctest 进行调试。

The *module* and *name* arguments are the same as for function
`testsource` above.  The synthesized Python script for the named object's
docstring is written to a temporary file, and then that file is run under the
control of the Python debugger, `pdb`.

A shallow copy of `module.__dict__` is used for both local and global
execution context.

Optional argument *pm* controls whether post-mortem debugging is used.  If *pm*
has a true value, the script file is run directly, and the debugger gets
involved only if the script terminates via raising an unhandled exception.  If
it does, then post-mortem debugging is invoked, via `pdb.post_mortem`,
passing the traceback object from the unhandled exception.  If *pm* is not
specified, or is false, the script is run under the debugger from the start, via
passing an appropriate `exec` call to `pdb.run`.
